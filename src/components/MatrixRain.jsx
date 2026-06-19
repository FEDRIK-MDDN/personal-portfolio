import { useEffect, useRef } from 'react';

// ─── Character set: binary + hex + symbols for a hacker-tech aesthetic ───────
const CHARS = '01アイウエオカキクケコサシスセソタチツテト10₀₁∆∑Ω∞†‡░▒▓█▄▌▐▀';

// ─── Theme palette (crimson / red / rose) ────────────────────────────────────
const PALETTE = {
  head: [255, 235, 235],   // near-white rose — glowing tip
  bright: [248, 113, 113],   // rose #f87171
  mid: [239, 68, 68],   // red  #ef4444
  deep: [185, 28, 28],   // crimson #b91c1c
  fade: [120, 15, 15],   // very dark crimson
};

// ─── Per-column stream descriptor ────────────────────────────────────────────
const makeStream = (canvasHeight, fontSize) => ({
  y: Math.random() * -canvasHeight,          // start above viewport
  speed: fontSize * (0.18 + Math.random() * 0.44), // px per frame
  length: Math.floor(10 + Math.random() * 28),    // trail length in chars
  fontSize: Math.random() < 0.2 ? fontSize - 3 : fontSize, // rare smaller streams
  opacity: 0.55 + Math.random() * 0.45,            // column brightness
  chars: [],                                      // cached character per row
});

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use willReadFrequently: false — we never read pixels, pure write
    const ctx = canvas.getContext('2d', { alpha: true });

    // ── Resize handler ──────────────────────────────────────────────────────
    let streams = [];
    const BASE_FONT = 14;
    let columns = 0;
    let animId;

    const rebuild = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / BASE_FONT);
      streams = Array.from({ length: columns }, () =>
        makeStream(canvas.height, BASE_FONT)
      );
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    rebuild();

    const onResize = () => {
      cancelAnimationFrame(animId);
      rebuild();
      loop();
    };

    window.addEventListener('resize', onResize);

    // ── Helpers ─────────────────────────────────────────────────────────────
    const rgb = ([r, g, b], a) => `rgba(${r},${g},${b},${a.toFixed(3)})`;

    // Pick a character, re-randomise occasionally for flickering effect
    const getChar = (stream, row) => {
      if (!stream.chars[row] || Math.random() < 0.04) {
        stream.chars[row] = CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      return stream.chars[row];
    };

    // ── Main draw loop (requestAnimationFrame) ──────────────────────────────
    let lastTime = 0;
    const TARGET_FPS = 40;
    const FRAME_MS = 1000 / TARGET_FPS;

    const draw = (timestamp) => {
      animId = requestAnimationFrame(draw);

      const dt = timestamp - lastTime;
      if (dt < FRAME_MS) return;
      lastTime = timestamp - (dt % FRAME_MS);

      // ── 1. Fade previous frame (warm dark red — not pure black) ──────────
      ctx.fillStyle = 'rgba(8, 3, 3, 0.14)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ── 2. Draw each stream ───────────────────────────────────────────────
      for (let col = 0; col < streams.length; col++) {
        const s = streams[col];
        const x = col * BASE_FONT;
        const fs = s.fontSize;

        ctx.font = `${fs}px 'Courier New', monospace`;

        // How many rows exist so far
        const headRow = Math.floor(s.y / fs);

        for (let row = 0; row < s.length; row++) {
          const targetRow = headRow - row;
          if (targetRow < 0) continue;

          const cy = targetRow * fs;
          if (cy > canvas.height) continue;

          // Distance from head: 0 = head, s.length-1 = tail tip
          const t = row / s.length;     // 0..1 (0 = head, 1 = tail end)

          let color, alpha;

          if (row === 0) {
            // ── Glowing HEAD: bright white-rose + additive bloom ─────────
            alpha = s.opacity * 1.0;
            color = rgb(PALETTE.head, alpha);
            ctx.fillStyle = color;
            ctx.shadowColor = `rgba(255, 80, 80, 0.9)`;
            ctx.shadowBlur = 18;
            ctx.fillText(getChar(s, targetRow), x, cy);
            ctx.shadowBlur = 0;
            ctx.shadowColor = 'transparent';
            continue;
          }

          // ── Body gradient: bright → mid → deep → fade ──────────────────
          if (t < 0.15) {
            // Near-head: still bright rose
            alpha = s.opacity * (1 - t / 0.15 * 0.3);
            color = rgb(PALETTE.bright, alpha);
          } else if (t < 0.40) {
            // Upper mid: primary red
            const local = (t - 0.15) / 0.25;
            alpha = s.opacity * (0.7 - local * 0.25);
            color = rgb(PALETTE.mid, alpha);
          } else if (t < 0.70) {
            // Lower mid: deep crimson
            const local = (t - 0.40) / 0.30;
            alpha = s.opacity * (0.45 - local * 0.2);
            color = rgb(PALETTE.deep, alpha);
          } else {
            // Tail: near-invisible dark crimson
            const local = (t - 0.70) / 0.30;
            alpha = s.opacity * (0.25 - local * 0.25);
            if (alpha <= 0.01) continue;
            color = rgb(PALETTE.fade, alpha);
          }

          // Occasional random flicker for a living, breathing look
          if (Math.random() < 0.015) {
            ctx.fillStyle = rgb(PALETTE.bright, s.opacity * 0.85);
            ctx.shadowColor = 'rgba(239,68,68,0.6)';
            ctx.shadowBlur = 8;
            ctx.fillText(getChar(s, targetRow), x, cy);
            ctx.shadowBlur = 0;
            ctx.shadowColor = 'transparent';
            continue;
          }

          ctx.fillStyle = color;
          ctx.fillText(getChar(s, targetRow), x, cy);
        }

        // ── 3. Advance stream ─────────────────────────────────────────────
        s.y += s.speed;

        // Reset once the entire tail has scrolled off-screen
        const tailY = (headRow - s.length) * fs;
        if (tailY > canvas.height) {
          Object.assign(s, makeStream(canvas.height, BASE_FONT));
          s.y = Math.random() * -canvas.height * 0.5; // stagger restarts
        }
      }
    };

    const loop = () => { animId = requestAnimationFrame(draw); };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
};

export default MatrixRain;
