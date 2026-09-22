import { useState } from 'react';
import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ============================================================
// 📸 GENERAL IMAGE IMPORTS
// ============================================================
import profilePhoto from './assets/images/myprofile/myimg.png'; // ✅ Profile photo
import cvFile from './assets/cv.pdf';
// ============================================================

// ============================================================
// 🖼️  PROJECT COVER IMAGES  (shown on the card & detail hero)
//     → Drop the cover image INSIDE the project folder
//     → Rename it exactly as shown below (e.g. p1cover.png)
//     → Uncomment the line, then set  image: p1cover  below
// ============================================================
import p1cover from './assets/images/project1/p1cover.jpeg'; // ✅ Project 1 cover
import p2cover from './assets/images/project2/p2cover.jpeg';  // ✅ Project 2 cover
import p3cover from './assets/images/project3/p3cover.jpeg'; // ✅ Project 3 cover
// (p4cover is now imported in the Project 4 section below)
// ============================================================

// ============================================================
// 🖼️  PROJECT 1 SCREENSHOTS  (Movie & TV Series Streaming Platform)
//     → Put images in: src/assets/images/project1/
//     → Rename them exactly: p1img1.png, p1img2.png ... p1img10.png
//     → Uncomment each line once you add the file
// ============================================================
import p1img1 from './assets/images/project1/p1img1.png';  // ✅
import p1img2 from './assets/images/project1/p1img2.png';  // ✅
import p1img3 from './assets/images/project1/p1img3.png';  // ✅
import p1img4 from './assets/images/project1/p1img4.png';  // ✅
import p1img5 from './assets/images/project1/p1img5.png';  // ✅
import p1img6 from './assets/images/project1/p1img6.png';  // ✅
import p1img7 from './assets/images/project1/p1img7.png';  // ✅
import p1img8 from './assets/images/project1/p1img8.png';  // ✅
import p1img9 from './assets/images/project1/p1img9.png';   // ✅
// import p1img10 from './assets/images/project1/p1img10.png'; // ← add file to unlock

// ============================================================
// 🖼️  PROJECT 2 SCREENSHOTS  (E-Commerce Web Application)
//     → Put images in: src/assets/images/project2/
//     → Rename them exactly: p2img1.png, p2img2.png ... p2img10.png
// ============================================================
import p2img1 from './assets/images/project2/p2img1.png';  // ✅
import p2img2 from './assets/images/project2/p2img2.png';  // ✅
import p2img3 from './assets/images/project2/p2img3.png';  // ✅
import p2img4 from './assets/images/project2/p2img4.png';  // ✅
import p2img5 from './assets/images/project2/p2img5.png';  // ✅
import p2img6 from './assets/images/project2/p2img6.png';  // ✅
import p2img7 from './assets/images/project2/p2img7.png';  // ✅
import p2img8 from './assets/images/project2/p2img8.png';  // ✅
import p2img9 from './assets/images/project2/p2img9.png';  // ✅
import p2img10 from './assets/images/project2/p2img10.png'; // ✅

// ============================================================
// 🖼️  PROJECT 3 SCREENSHOTS  (HabitBuddy – Android App)
//     → Files are in: src/assets/images/project3/
// ============================================================
import p3img1 from './assets/images/project3/p3img1.jpg';  // ✅
import p3img2 from './assets/images/project3/p3img2.jpg';  // ✅
import p3img3 from './assets/images/project3/p3img3.jpg';  // ✅
import p3img4 from './assets/images/project3/p3img4.jpg';  // ✅
import p3img5 from './assets/images/project3/p3img5.jpg';  // ✅
import p3img6 from './assets/images/project3/p3img6.jpg';  // ✅
import p3img7 from './assets/images/project3/p3img7.jpg';  // ✅
import p3img8 from './assets/images/project3/p3img8.jpg';  // ✅
import p3img9 from './assets/images/project3/p3img9.jpg';  // ✅
import p3img10 from './assets/images/project3/p3img10.jpg'; // ✅

// ============================================================
// 🖼️  PROJECT 4 SCREENSHOTS  (UI/UX Design – Money Nest)
//     → Files are in: src/assets/images/project4/
// ============================================================
import p4cover from './assets/images/project4/p4cover.jpg';   // ✅ Project 4 cover
import p4img1 from './assets/images/project4/p4img1.jpg';    // ✅
import p4img2 from './assets/images/project4/p4img2.jpg';    // ✅
import p4img3 from './assets/images/project4/p4img3.jpg';    // ✅
import p4img4 from './assets/images/project4/p4img4.jpg';    // ✅
import p4img5 from './assets/images/project4/p4img5.jpg';    // ✅
import p4img6 from './assets/images/project4/p4img6.jpg';    // ✅
import p4img7 from './assets/images/project4/p4img7.jpg';    // ✅
import p4img8 from './assets/images/project4/p4img8.jpg';    // ✅
import p4img9 from './assets/images/project4/p4img9.jpg';    // ✅
import p4img10 from './assets/images/project4/p4img10.jpg';   // ✅
import p4img11 from './assets/images/project4/p4img11.jpg';   // ✅
import p4img12 from './assets/images/project4/p4img12.jpg';   // ✅
import p4img13 from './assets/images/project4/p4img13.jpg';   // ✅
import p4img14 from './assets/images/project4/p4img14.jpg';   // ✅
import p4img15 from './assets/images/project4/p4img15.jpg';   // ✅
import p4img16 from './assets/images/project4/p4img16.jpg';   // ✅
import p4img17 from './assets/images/project4/p4img17.jpg';   // ✅

// ============================================================
// 🖼️  PROJECT 5 SCREENSHOTS  (Smart Campus Resource Management System)
//     → Files are in: src/assets/images/project5/
// ============================================================
import p5cover from './assets/images/project5/p5cover.jpeg';   // ✅ Project 5 cover
import p5img1 from './assets/images/project5/p5img1.png';     // ✅
import p5img2 from './assets/images/project5/p5img2.png';     // ✅
import p5img3 from './assets/images/project5/p5img3.png';     // ✅
import p5img4 from './assets/images/project5/p5img4.png';     // ✅
import p5img5 from './assets/images/project5/p5img5.png';     // ✅
import p5img6 from './assets/images/project5/p5img6.png';     // ✅
import p5img7 from './assets/images/project5/p5img7.png';     // ✅
import p5img8 from './assets/images/project5/p5img8.png';     // ✅
import p5img9 from './assets/images/project5/p5img9.png';     // ✅
import p5img10 from './assets/images/project5/p5img10.png';    // ✅

// ============================================================
// 🖼️  PROJECT 6 SCREENSHOTS  (Peer to Peer Study Support Platform)
//     → Files are in: src/assets/images/project6/
// ============================================================
import p6cover from './assets/images/project6/p6cover.jpeg'; // ✅ Project 6 cover
import p6img1 from './assets/images/project6/p6img1.png';   // ✅
import p6img2 from './assets/images/project6/p1img2.png';   // ✅
import p6img3 from './assets/images/project6/p1img3.png';   // ✅
import p6img4 from './assets/images/project6/p1img4.png';   // ✅
import p6img5 from './assets/images/project6/p1img5.png';   // ✅
import p6img6 from './assets/images/project6/p1img6.png';   // ✅
import p6img7 from './assets/images/project6/p1img7.png';   // ✅
import p6img8 from './assets/images/project6/p1img8.png';   // ✅
import p6img9 from './assets/images/project6/p1img9.png';   // ✅
import p6img10 from './assets/images/project6/p1img10.png';  // ✅

// ============================================================
// 🖼️  PROJECT 7 SCREENSHOTS  (HomeChef Connect – Food Delivery Android App)
//     → Put images in: src/assets/images/project7/
//     → Rename them exactly: p7cover.jpeg, p7img1.png ... p7img10.png
//     → Uncomment each line once you add the file
// ============================================================
import p7cover from './assets/images/project7/p7cover.jpeg'; // ✅ Cover
import p7img1 from './assets/images/project7/p7img1.jpg';   // ✅ Splash / Landing Screen
import p7img2 from './assets/images/project7/p7img2.jpg';   // ✅ Auth / Login Screen
import p7img3 from './assets/images/project7/p7img3.jpg';   // ✅ Customer Home Screen
import p7img4 from './assets/images/project7/p7img4.jpg';   // ✅ Food Details Screen
import p7img5 from './assets/images/project7/p7img5.jpg';   // ✅ Cart & Checkout Screen
import p7img6 from './assets/images/project7/p7img6.jpg';   // ✅ Chef AI Chat Screen
import p7img7 from './assets/images/project7/p7img7.jpg';   // ✅ Order Tracking Screen
import p7img8 from './assets/images/project7/p7img8.jpg';   // ✅ Cook Dashboard
import p7img9 from './assets/images/project7/p7img9.jpg';   // ✅ Delivery Map Screen
import p7img10 from './assets/images/project7/p7img10.jpg'; // ✅ Admin Dashboard / Profile

// ============================================================
// 🖼️  PROJECT 8 SCREENSHOTS  (BloodLife – Emergency Blood Donation Network App)
//     → Files are in: src/assets/images/project8/
// ============================================================
import p8cover from './assets/images/project8/p8cover.jpeg'; // ✅ Cover
import p8img1 from './assets/images/project8/p8img1.jpg';   // ✅ Onboarding screen
import p8img2 from './assets/images/project8/p8img2.jpg';   // ✅ Login / Registration screen
import p8img3 from './assets/images/project8/p8img3.jpg';   // ✅ Home Dashboard – Emergency Requests feed
import p8img4 from './assets/images/project8/p8img4.jpg';   // ✅ Home Dashboard – Nearby Donors section
import p8img5 from './assets/images/project8/p8img5.jpg';   // ✅ Donor Search screen with blood group filters
import p8img6 from './assets/images/project8/p8img6.jpg';   // ✅ Interactive Map screen (OSM) with emergency markers
import p8img7 from './assets/images/project8/p8img7.jpg';   // ✅ Create Emergency Request bottom sheet
import p8img8 from './assets/images/project8/p8img8.jpg';   // ✅ Profile screen with donor stats & reward points
import p8img9 from './assets/images/project8/p8img9.jpg';   // ✅ Donation History screen with certificates
import p8img10 from './assets/images/project8/p8img10.jpg'; // ✅ Notifications screen

// ============================================================
// 🔧 PORTFOLIO CONFIGURATION – Update these with your details!
// ============================================================
const CONFIG = {
  name: 'Dunith Nimnath',      // 👈 Replace with your full name
  email: 'mailtonimnath@gmail.com', // 👈 Replace with your email
  github: 'https://github.com/FEDRIK-MDDN',   // 👈 GitHub
  linkedin: 'https://www.linkedin.com/in/dunith-nimnath-920772367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', // 👈 LinkedIn
  profilePhoto: profilePhoto,  // ✅ Profile photo active
  cvFile: cvFile,              // ✅ CV linked
  phone: '+94776208984',        // 👈 Your phone number

  // Skills – update percentages to match your level
  skills: [
    { name: 'React', percent: 85 },
    { name: 'JavaScript', percent: 80 },
    { name: 'Node.js', percent: 70 },
    { name: 'Java (Spring Boot)', percent: 90 },
    { name: 'Python', percent: 65 },
    { name: 'MySQL/MongoDB', percent: 75 },
    { name: 'Figma', percent: 80 },
    { name: 'HTML & CSS', percent: 95 },
  ],

  // Tools – update with tools you use
  tools: ['Git', 'VS Code', 'Figma', 'Postman', 'Android Studio', 'GitHub', 'IntelliJ IDEA'],

  // ================================================================
  // 📁 PROJECTS CONFIGURATION
  //
  // HOW TO ADD SCREENSHOTS (up to 10 per project):
  //
  //   STEP 1: Create folder  →  src/assets/images/project1/
  //   STEP 2: Drop images    →  img1.png, img2.png ... img10.png
  //   STEP 3: Uncomment the  →  import p1img1 ... lines at the top
  //   STEP 4: Add to array   →  images: [p1img1, p1img2, ..., p1img10]
  //
  //   Repeat for project2, project3, project4 etc.
  // ================================================================
  projects: [
    {
      id: 1,
      title: 'Supermarket POS System (React.js(Vite), Spring Boot, MySQL)',
      description: 'Built a full stack Supermarket POS System with React.js, Spring Boot, and MySQL, featuring secure authentication, inventory management, billing, order processing, and sales analytics dashboards.',
      longDescription:
        'Designed and developed a full stack supermarket POS system featuring secure user authentication, product and inventory management, supplier management, billing, and order processing. Built the frontend using React.js and the backend using Spring Boot with MySQL database integration. Implemented JWT authentication, role based authorization, stock tracking, low stock alerts, and dashboard reports for sales and inventory analysis. Followed layered architecture, REST API design principles, validation, and exception handling best practices.',
      tags: ['React.js', 'Spring Boot', 'MySQL', 'JWT'],
      emoji: '💰',
      // ──────────────────────────────────────────────────────────────
      // 🖼️  MAIN COVER IMAGE for Project 1 (shows on card + detail hero)
      //    STEP 1: Drop your cover image into → src/assets/images/project1/
      //    STEP 2: Rename it exactly to       → p1cover.png
      //    STEP 3: Uncomment this line at the top of the file:
      //            // import p1cover from './assets/images/project1/p1cover.png';
      //    STEP 4: Change  image: null  →  image: p1cover
      // ──────────────────────────────────────────────────────────────
      image: p1cover,       // ✅ Cover image active
      // ──────────────────────────────────────────────────────────────
      // 📸 ADD UP TO 10 SCREENSHOTS FOR PROJECT 1:
      //    1. Drop images into src/assets/images/project1/
      //    2. Uncomment the p1img1...p1img10 imports at the top of this file
      //    3. Remove the // from each line in the images: [ ] array below
      // ──────────────────────────────────────────────────────────────
      images: [
        p1img1,   // ✅
        p1img2,   // ✅
        p1img3,   // ✅
        p1img4,   // ✅
        p1img5,   // ✅
        p1img6,   // ✅
        p1img7,   // ✅
        p1img8,   // ✅
        p1img9,   // ✅
        // p1img10, // ← add p1img10.png to unlock
      ],
      link: '#',         // 👈 Replace with live URL
      github: 'https://github.com/FEDRIK-MDDN/supermart-pos-system',  // ✅
      year: '2026',
      status: 'Completed',
      role: 'Full Stack Developer (Personal Project)',
      howItWorks: [
        {
          title: 'User Authentication',
          description: 'Implemented secure JWT-based authentication and role-based authorization for admin and staff users.',
        },
        {
          title: 'Product & Inventory Management',
          description: 'Manage products, categories, stock levels, and inventory updates with real-time stock tracking and low-stock alerts.',
        },
        {
          title: 'Billing & Order Processing',
          description: 'Created a billing system to process customer orders, generate invoices, and manage sales transactions efficiently.',
        },
        {
          title: 'Supplier Management & Reporting',
          description: 'Developed supplier management features and dashboard reports for sales performance and inventory analysis.',
        },
      ],
      features: [
        'JWT authentication and role-based access control',
        'Product and category management',
        'Inventory tracking with low-stock alerts',
        'Supplier management system',
        'Billing and order processing',
        'Sales and inventory analytics dashboard',
        'RESTful API architecture with Spring Boot',
        'MySQL database integration',
        'Input validation and exception handling',
        'Responsive React.js user interface',
      ],
    },
    {
      id: 2,
      title: 'BOOKS – Online Book Store',
      description:
        'A modern online bookstore built with Spring Boot, React.js, and MySQL, enabling users to browse, search, and purchase books online.',

      longDescription:
        'BOOKS is a full-stack online book store web application developed as a team project using Spring Boot (Java), React.js, and MySQL. The platform allows users to browse, search, and purchase books through a modern and responsive user interface. The system includes secure user authentication, role-based access control, book management, shopping cart functionality, and secure payment-related workflows. Spring Security was implemented to ensure data protection, reliability, and a secure user experience.',

      tags: [
        'Spring Boot',
        'Java',
        'React.js',
        'MySQL',
        'JWT',
        'Spring Security',
      ],

      emoji: '📚',

      image: p2cover,

      images: [
        p2img1,
        p2img2,
        p2img3,
        p2img4,
        p2img5,
        p2img6,
        p2img7,
        p2img8,
        p2img9,
        p2img10,
      ],

      link: '#',
      github: 'https://github.com/FEDRIK-MDDN/online-book-store-application',

      year: '2024',
      status: 'Completed',

      role: 'Full Stack Developer (Personal Project)',

      howItWorks: [
        {
          title: 'User Authentication',
          description:
            'Users can register and log in securely using Spring Security. Authentication and authorization mechanisms protect sensitive resources and user data.',
        },
        {
          title: 'Book Browsing & Search',
          description:
            'Customers can browse available books, search by title or category, and view detailed book information through an intuitive React-based interface.',
        },
        {
          title: 'Shopping Cart & Ordering',
          description:
            'Users can add books to a shopping cart, manage quantities, and proceed through a secure checkout process.',
        },
        {
          title: 'Role-Based Management',
          description:
            'Administrators manage books, inventory, and user-related operations through role-based access control and dedicated management features.',
        },
      ],

      features: [
        'User registration and login with JWT authentication',
        'Role-based access control using Spring Security',
        'Browse and search books by category or title',
        'Book detail pages with complete information',
        'Shopping cart management',
        'Order and purchase workflow',
        'Responsive React.js user interface',
        'MySQL database integration',
        'Secure backend APIs with Spring Boot',
        'Modern and user-friendly design',
      ],
    },
    {
      id: 3,
      title: 'HabitBuddy – Habit Tracker Android App',

      description:
        'A modern Android habit tracker application that helps users build positive habits, track progress, and stay consistent with daily goals.',

      longDescription:
        'HabitBuddy is a habit tracker Android application developed using Kotlin and Android Studio. The app enables users to register, log in, create and manage daily habits, track progress, and stay consistent with personal goals through a clean and intuitive user interface. The application includes habit scheduling, reminder notifications, progress monitoring, and local data storage for reliable data management. Built following Android development best practices, HabitBuddy utilizes activities, fragments, and efficient state management to deliver a smooth, responsive, and user-friendly experience.',

      tags: [
        'Kotlin',
        'Java',
        'Android Studio',
        'Android',
        'SQLite',
        'Material Design',
      ],

      emoji: '📱',

      image: p3cover,       // ✅ Cover image active

      images: [
        p3img1,   // ✅
        p3img2,   // ✅
        p3img3,   // ✅
        p3img4,   // ✅
        p3img5,   // ✅
        p3img6,   // ✅
        p3img7,   // ✅
        p3img8,   // ✅
        p3img9,   // ✅
        p3img10,  // ✅
      ],

      link: '#',
      github: 'https://github.com/FEDRIK-MDDN/habit-buddy-android-app.git',

      year: '2025',
      status: 'Completed',

      role: 'Android Developer (Personal Project)',

      howItWorks: [
        {
          title: 'User Registration & Login',
          description:
            'Users can create accounts, securely log in, and access their personalized habit tracking data through an intuitive authentication system.',
        },
        {
          title: 'Habit Creation & Management',
          description:
            'Users can create custom habits, set goals, update existing habits, and organize their daily routines efficiently.',
        },
        {
          title: 'Progress Tracking',
          description:
            'The application records habit completion data and displays progress statistics, helping users stay motivated and maintain consistency.',
        },
        {
          title: 'Reminders & Notifications',
          description:
            'Scheduled reminders notify users about pending habits and encourage regular habit completion throughout the day.',
        },
      ],

      features: [
        'User registration and login system',
        'Habit creation and management',
        'Daily habit tracking',
        'Progress monitoring and statistics',
        'Reminder notifications',
        'Local data storage using SQLite',
        'Activity and Fragment-based navigation',
        'Material Design user interface',
        'Offline functionality',
        'Responsive and user-friendly experience',
      ],
    },

    {
      id: 4,
      title: 'UI/UX Design – Digital Money Tracker (Money Nest)',

      description:
        'A complete UI/UX design for a personal finance mobile application focused on budgeting, expense tracking, and improving financial awareness.',

      longDescription:
        'Money Nest is a personal finance mobile application designed in Figma to help users manage their income, expenses, and savings through a simple and intuitive mobile experience. The project includes a complete UI/UX design covering onboarding, user authentication, dashboard, transaction management, budgeting, and financial reporting screens. A consistent visual design language was created using green and red color schemes to clearly differentiate income and expense activities. Data visualization elements such as donut charts, line graphs, and progress indicators were incorporated to present financial insights effectively. The home dashboard features a monthly balance summary, spending analytics, recent transaction history, and a floating action button for quick transaction entry. The design follows modern mobile UI/UX principles with a strong focus on usability, accessibility, and user engagement.',

      tags: [
        'Figma',
        'UI/UX Design',
        'Mobile Design',
        'Wireframing',
        'Prototyping',
        'Design System',
      ],

      emoji: '💰',

      image: p4cover,       // ✅ Cover image active

      // ──────────────────────────────────────────────────────────────
      // 📸 17 SCREENSHOTS ACTIVE FOR PROJECT 4
      // ──────────────────────────────────────────────────────────────
      images: [
        p4img1,   // ✅
        p4img2,   // ✅
        p4img3,   // ✅
        p4img4,   // ✅
        p4img5,   // ✅
        p4img6,   // ✅
        p4img7,   // ✅
        p4img8,   // ✅
        p4img9,   // ✅
        p4img10,  // ✅
        p4img11,  // ✅
        p4img12,  // ✅
        p4img13,  // ✅
        p4img14,  // ✅
        p4img15,  // ✅
        p4img16,  // ✅
        p4img17,  // ✅
      ],

      link: '#',
      github: '#',

      year: '2025',
      status: 'Completed',

      role: 'UI/UX Designer (Personal Project)',

      howItWorks: [
        {
          title: 'User Research & Planning',
          description:
            'Researched common budgeting challenges and personal finance management workflows to identify user needs, pain points, and design requirements.',
        },
        {
          title: 'Wireframing & User Flows',
          description:
            'Created wireframes and user journeys for onboarding, authentication, dashboard navigation, transaction management, budgeting, and financial reporting features.',
        },
        {
          title: 'Visual Design System',
          description:
            'Designed a consistent design system with reusable components, typography, icons, and a color palette using green and red to represent income and expense activities.',
        },
        {
          title: 'Interactive Prototype',
          description:
            'Built a high-fidelity interactive Figma prototype featuring financial dashboards, transaction tracking, budgeting tools, and data visualization components.',
        },
      ],

      features: [
        'User onboarding experience',
        'Login and registration screen designs',
        'Personal finance dashboard UI',
        'Income and expense tracking interfaces',
        'Transaction management screens',
        'Monthly balance summary',
        'Budget planning and savings tracking',
        'Donut charts and line graph visualizations',
        'Recent transaction history section',
        'Floating action button for quick transaction entry',
        'Reusable design system and UI components',
        'Interactive Figma prototype',
      ],
    },

    {
      id: 5,
      title: 'Smart Campus Resource Management System',

      description:
        'A smart campus web application for managing university resources such as lecture halls, laboratories, and equipment with role-based administration features.',

      longDescription:
        'The Smart Campus Resource Management System is a web-based application developed as part of a team project to streamline the management of university resources, including lecture halls, laboratories, and equipment. My primary responsibility was the Resource & Category Management module. The backend was built using Spring Boot with RESTful APIs to support creating, updating, viewing, and deleting resources and categories efficiently. The frontend was developed using React.js to provide an intuitive and user-friendly interface for administrators. A multi-image upload functionality was implemented to allow administrators to attach multiple images to each resource. Advanced filtering options were added to help users search resources based on type, capacity, and location. Role-based access control was integrated to ensure that only authorized administrators could manage resources while maintaining system security and data integrity.',

      tags: [
        'Spring Boot',
        'React.js',
        'MySQL',
        'REST API',
        'Resource Management',
        'Role-Based Access Control',
      ],

      emoji: '🏫',

      image: p5cover,       // ✅ Cover image active

      // ──────────────────────────────────────────────────────────────
      // 📸 10 SCREENSHOTS ACTIVE FOR PROJECT 5
      // ──────────────────────────────────────────────────────────────
      images: [
        p5img1,
        p5img2,
        p5img3,
        p5img4,
        p5img5,
        p5img6,
        p5img7,
        p5img8,
        p5img9,
        p5img10,
      ],

      link: '#',
      github: 'https://github.com/MalithSamarakoon/it3030-paf-2026-smart-campus-Y3S1-WE-01.git',

      year: '2026',
      status: 'Completed',

      role: 'Full Stack Developer – Resource & Category Management Module (Team Project)',

      howItWorks: [
        {
          title: 'Resource & Category Management',
          description:
            'Designed and implemented CRUD operations for resources and categories using Spring Boot RESTful APIs, enabling administrators to manage campus facilities efficiently.',
        },
        {
          title: 'Multi-Image Upload Feature',
          description:
            'Developed a multi-image upload system that allows administrators to attach multiple images to each resource, improving resource visibility and management.',
        },
        {
          title: 'Advanced Search & Filtering',
          description:
            'Implemented filtering and search functionalities based on resource type, capacity, and location, enabling users to quickly find suitable resources.',
        },
        {
          title: 'Role-Based Access Control',
          description:
            'Applied role-based authorization to ensure that only administrators can create, update, or delete resources and categories while maintaining system security.',
        },
      ],

      features: [
        'Resource management dashboard',
        'Category management system',
        'Create, update, view, and delete resources',
        'Create, update, view, and delete categories',
        'RESTful API integration',
        'Multi-image upload functionality',
        'Resource image gallery support',
        'Filter resources by type',
        'Filter resources by capacity',
        'Filter resources by location',
        'Search resources efficiently',
        'Role-based access control (Admin only)',
        'Responsive React.js interface',
        'Secure Spring Boot backend',
        'MySQL database integration',
        'User-friendly resource management workflow',
      ],
    },

    {
      id: 6,

      title: 'Peer to Peer Study Support Platform',

      description:
        'A collaborative study support web platform that enables students to upload, share, and access learning materials with an admin approval workflow.',

      longDescription:
        'The Peer to Peer Study Support Platform is a web-based application developed as a team project to facilitate knowledge sharing among university students. My primary responsibility was the Module & Resource Management component. The backend was developed using Spring Boot with RESTful APIs to manage modules and study resources efficiently. The frontend was built using React.js to provide an intuitive and user-friendly experience for students and administrators. Students can upload video and PDF learning resources, which are sent to an admin approval queue before publication. Administrators can review uploaded materials, approve or reject resources, and publish approved content for all students to access. Advanced browsing and filtering functionalities were implemented to allow users to search resources by module, academic year, and semester. Students can also manage their own uploads through update and delete functionalities while maintaining secure access control and data integrity.',

      tags: [
        'Spring Boot',
        'React.js',
        'MySQL',
        'REST API',
        'Module Management',
        'Resource Management',
      ],

      emoji: '📚',

      image: p6cover,       // ✅ Cover image active

      // ──────────────────────────────────────────────────────────────
      // 📸 10 SCREENSHOTS ACTIVE FOR PROJECT 6
      // ──────────────────────────────────────────────────────────────
      images: [
        p6img1,   // ✅
        p6img2,   // ✅
        p6img3,   // ✅
        p6img4,   // ✅
        p6img5,   // ✅
        p6img6,   // ✅
        p6img7,   // ✅
        p6img8,   // ✅
        p6img9,   // ✅
        p6img10,  // ✅
      ],

      link: '#',
      github: 'https://github.com/MalithSamarakoon/Study-Node-ITPM.git',

      year: '2026',
      status: 'Completed',

      role:
        'Full Stack Developer – Module & Resource Management Component (Team Project)',

      howItWorks: [
        {
          title: 'Module Management',
          description:
            'Developed CRUD operations for academic modules using Spring Boot RESTful APIs, allowing administrators to create, update, view, and delete modules efficiently.',
        },
        {
          title: 'Student Resource Uploads',
          description:
            'Implemented functionality for students to upload video and PDF study resources, which are automatically placed into an admin approval queue.',
        },
        {
          title: 'Admin Approval Workflow',
          description:
            'Designed an approval process where administrators review uploaded resources, approve or reject submissions, and publish approved materials for all students.',
        },
        {
          title: 'Resource Browsing & Management',
          description:
            'Implemented resource browsing by module, year, and semester, while enabling students to update and delete their own uploaded materials.',
        },
      ],

      features: [
        'Module management dashboard',
        'Create, update, view, and delete modules',
        'Student video upload functionality',
        'Student PDF upload functionality',
        'Admin approval queue',
        'Approve or reject uploaded resources',
        'Publish approved resources',
        'Browse resources by module',
        'Browse resources by academic year',
        'Browse resources by semester',
        'Search study materials efficiently',
        'Student My Uploads section',
        'Update uploaded resources',
        'Delete uploaded resources',
        'RESTful API integration',
        'Responsive React.js interface',
        'Secure Spring Boot backend',
        'MySQL database integration',
        'Role-based access control',
        'User-friendly study resource sharing workflow',
      ],
    },

    {
      id: 7,
      title: 'HomeChef Connect – Food Delivery Android App',

      description:
        'A full-stack Android food delivery platform that connects home cooks, customers, and delivery partners through an AI-powered, multi-role experience.',

      longDescription:
        'HomeChef Connect is a feature rich Android food delivery application built with Kotlin and Jetpack Compose, powered by the Gemini AI API. The app supports four distinct user roles — Customer, Home Cook, Delivery Partner, and Admin — each with a dedicated dashboard and tailored workflow. Customers can browse home-cooked meals, filter by category, manage a cart with promo code support, track orders in real time, and get AI-powered meal recommendations via the Chef AI chatbot. Home Cooks can manage their menu, accept or reject incoming orders, and update dish availability. Delivery Partners can claim deliveries and navigate via an integrated delivery map screen. Admins oversee all users, approve cook registrations, and manage platform operations. The app uses Room (SQLite) for local persistence of cart items, favorites, and user profiles, and follows the MVVM architecture pattern with StateFlow and Jetpack Compose for a reactive, modern UI.',

      tags: [
        'Kotlin',
        'Jetpack Compose',
        'Android Studio',
        'Android',
        'Room (SQLite)',
        'MVVM',
        'Gemini AI API',
        'Firebase',
        'Retrofit',
        'Coroutines',
        'Material Design 3',
        'Coil',
      ],

      emoji: '🍽️',

      image: p7cover,       // ✅ Cover image active

      // ──────────────────────────────────────────────────────────────
      // 📸 10 SCREENSHOTS ACTIVE FOR PROJECT 7
      // ──────────────────────────────────────────────────────────────
      images: [
        p7img1,   // ✅ Splash / Landing Screen
        p7img2,   // ✅ Auth / Login Screen
        p7img3,   // ✅ Customer Home Screen
        p7img4,   // ✅ Food Details Screen
        p7img5,   // ✅ Cart & Checkout Screen
        p7img6,   // ✅ Chef AI Chat Screen
        p7img7,   // ✅ Order Tracking Screen
        p7img8,   // ✅ Cook Dashboard
        p7img9,   // ✅ Delivery Map Screen
        p7img10,  // ✅ Admin Dashboard / Profile
      ],

      link: '#',
      github: 'https://github.com/FEDRIK-MDDN/homechef-connect-android-app.git',

      year: '2025',
      status: 'Completed',

      role: 'Android Developer (Personal Project)',

      howItWorks: [
        {
          title: 'Multi-Role Authentication',
          description:
            'Users select their role (Customer, Cook, Delivery, Admin) at login. The app validates account status — including suspension checks — before granting access and routing each role to its dedicated dashboard.',
        },
        {
          title: 'Smart Food Discovery & AI Recommendations',
          description:
            'Customers browse a curated feed of home-cooked meals with category filters, search, and featured dishes. The integrated Chef AI chatbot — powered by Gemini AI — understands natural language preferences and recommends personalized meals from the live menu.',
        },
        {
          title: 'Cart, Promo Codes & Multi-Cook Checkout',
          description:
            'Items from multiple cooks can be added to a single cart. Customers apply promo codes for discounts, review order summaries, choose payment methods, add delivery notes, and confirm orders — which are then split per-cook automatically.',
        },
        {
          title: 'Real-Time Order Lifecycle Management',
          description:
            'Orders flow through a defined status pipeline (Pending → Accepted → Preparing → Ready → Picked Up → Out for Delivery → Delivered). Cooks update kitchen status, delivery partners claim and navigate orders via a map screen, and customers track progress live.',
        },
        {
          title: 'Cook Menu & Inventory Management',
          description:
            'Home Cooks manage their own dish listings through a dedicated dashboard — adding new items with images, descriptions, pricing, categories, ingredients, and allergen information, and toggling availability in real time.',
        },
        {
          title: 'Admin Control Panel',
          description:
            'The Admin dashboard provides full platform oversight: approving new cook registrations, suspending or reinstating user accounts, and monitoring all active orders across all roles.',
        },
      ],

      features: [
        'Four-role system: Customer, Home Cook, Delivery Partner, Admin',
        'Gemini AI-powered Chef AI chatbot for meal recommendations',
        'Home-cooked meal browsing with categories and search',
        'Favorites system with persistent local storage',
        'Cart management with quantity control and item removal',
        'Promo code support with automatic discount calculation',
        'Multi-cook order splitting at checkout',
        'Full order lifecycle tracking (9 status stages)',
        'Real-time delivery map and navigation screen',
        'Cook dashboard: accept/reject orders, manage menu',
        'Cook menu management: add, edit, toggle availability, delete dishes',
        'Delivery partner dashboard: claim deliveries, update status',
        'Admin dashboard: approve cooks, suspend/reinstate users',
        'User profile management with photo upload support',
        'Room (SQLite) local persistence for cart, favorites, and profile',
        'MVVM architecture with StateFlow and Jetpack Compose',
        'Firebase App Check & Google Services integration',
        'Material Design 3 UI with edge-to-edge support',
        'Offline-resilient local data with Room database',
        'Smooth Compose animations and responsive layouts',
      ],
    },

    {
      id: 8,
      title: 'BloodLife – Emergency Blood Donation Network App',

      description:
        'A premium emergency blood donation Android application that connects donors with hospitals in real time, broadcasts urgent blood requests, and tracks donation history with a gamified reward system.',

      longDescription:
        'BloodLife is an emergency blood donation network Android application built with Kotlin, Jetpack Compose, and the Gemini AI API. The app enables users to onboard, register as active blood donors, discover nearby donors on an interactive OpenStreetMap, respond to live emergency blood requests, and track their full donation history with certificates. It features a real-time emergency broadcast system that alerts nearby compatible donors, a gamified reward and achievements system (lives saved, reward points), and a fully offline-capable local database powered by Room. The architecture follows MVVM clean architecture principles with a Repository layer, StateFlow-driven UI state, and animated Compose navigation. BloodLife was built and deployed via Google AI Studio, integrating the Firebase App Check and Gemini AI for intelligent emergency response capabilities.',

      tags: [
        'Kotlin',
        'Jetpack Compose',
        'Android Studio',
        'Android',
        'Room / SQLite',
        'MVVM',
        'Firebase',
        'Gemini AI',
        'OpenStreetMap',
        'Material Design 3',
        'Google AI Studio',
      ],

      emoji: '🩸',

      image: p8cover,       // ✅ Cover image active

      // ──────────────────────────────────────────────────────────────
      // 📸 10 SCREENSHOTS ACTIVE FOR PROJECT 8
      // ──────────────────────────────────────────────────────────────
      images: [
        p8img1,   // ✅ Onboarding screen
        p8img2,   // ✅ Login / Registration screen
        p8img3,   // ✅ Home Dashboard – Emergency Requests feed
        p8img4,   // ✅ Home Dashboard – Nearby Donors section
        p8img5,   // ✅ Donor Search screen with blood group filters
        p8img6,   // ✅ Interactive Map screen (OSM) with emergency markers
        p8img7,   // ✅ Create Emergency Request bottom sheet
        p8img8,   // ✅ Profile screen with donor stats & reward points
        p8img9,   // ✅ Donation History screen with certificates
        p8img10,  // ✅ Notifications screen
      ],

      link: '#',
      github: 'https://github.com/FEDRIK-MDDN/blooddonateapp.git',

      year: '2025',
      status: 'Completed',

      role: 'Android Developer (Personal Project)',

      howItWorks: [
        {
          title: 'Onboarding & Authentication',
          description:
            "New users are guided through a beautiful multi-step onboarding flow introducing the app's mission. They then log in or register to access their personalized donor dashboard and profile.",
        },
        {
          title: 'Emergency Blood Request Broadcast',
          description:
            'Users can create an emergency blood request by specifying the patient name, blood group, hospital, units needed, and urgency level. The request is instantly broadcast to all nearby compatible donors via real-time notifications.',
        },
        {
          title: 'Donor Discovery & Search',
          description:
            'The Search screen lets users find nearby donors by name, location, or blood group using advanced filters including blood group chips and an “Available Only” toggle, backed by a reactive Room database query.',
        },
        {
          title: 'Interactive Map & Location Awareness',
          description:
            'An OpenStreetMap-powered map screen visualises donor locations and active emergency zones. Users can search any location, view emergency markers, get directions, and call donors directly from the map.',
        },
        {
          title: 'Donation Tracking & Gamified Rewards',
          description:
            'Every confirmed donation is recorded with the hospital name, date, volume (ml), blood group, and a unique certificate number. Donors earn reward points and “lives saved” stats, unlocking achievement badges displayed on their profile.',
        },
        {
          title: 'Smart Notifications',
          description:
            'The notifications centre delivers emergency alerts, stock warnings, and achievement unlocks. Notifications are categorised by type (EMERGENCY, ACCEPTED, STOCK_ALERT) and can be individually marked as read.',
        },
      ],

      features: [
        'Multi-step onboarding and login flow',
        'Real-time emergency blood request broadcasting',
        'Create & respond to emergency requests with urgency levels (CRITICAL / URGENT / STANDARD)',
        'Nearby donor discovery with real-time Room database queries',
        'Advanced donor search with blood group filter chips and availability toggle',
        'Interactive map powered by OpenStreetMap (osmdroid) with live location',
        'Emergency request markers and hospital navigation on map',
        'Gamified donor profile: lives saved, reward points, achievement badges',
        'Full donation history with certificate numbers and volume tracking',
        'Smart categorised notification centre',
        'Donor availability toggle with instant status broadcast',
        'Offline-first architecture using Room (SQLite) database',
        'MVVM architecture with Repository pattern and StateFlow',
        'Animated Compose navigation with screen transition effects',
        'Floating bottom navigation bar with emergency FAB',
        'Material Design 3 with custom Blood-Red theme palette',
        'Gemini AI integration for intelligent emergency response',
        'Firebase App Check (reCAPTCHA) for security',
        'Edge-to-edge display with status bar and navigation bar handling',
      ],
    },

  ],
};
// ============================================================

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (selectedProject) {
    return (
      <div className="app">
        <Navbar />
        <ProjectDetail project={selectedProject} onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <Hero
        name={CONFIG.name}
        profilePhoto={CONFIG.profilePhoto}
      />
      <About
        photo={CONFIG.profilePhoto}
        cvFile={CONFIG.cvFile}
        github={CONFIG.github}
        linkedin={CONFIG.linkedin}
      />
      <Skills
        skills={CONFIG.skills}
        tools={CONFIG.tools}
      />
      <Projects
        projects={CONFIG.projects}
        onViewDetails={handleViewDetails}
      />
      <Contact
        email={CONFIG.email}
        github={CONFIG.github}
        linkedin={CONFIG.linkedin}
        phone={CONFIG.phone}
      />
      <Footer
        name={CONFIG.name}
        github={CONFIG.github}
        linkedin={CONFIG.linkedin}
        email={CONFIG.email}
        phone={CONFIG.phone}
      />
    </div>
  );
}

export default App;
