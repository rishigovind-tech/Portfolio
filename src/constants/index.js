export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Project',
      href: '#project',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  
  export const myProjects = [
    {
      title: 'Messager - Real-time Chat App',
      desc: 'Messager is a real-time web application that enables seamless communication through instant messaging. It features a user-friendly interface and supports dynamic, interactive conversations with real-time updates using Socket.io.',
      subdesc:
        'Built using the MERN stack — React.js, Node.js, Express.js, and MongoDB — along with Tailwind CSS and Socket.io, Messager is designed to be fast, responsive, and scalable for modern communication.',
      href: 'https://github.com/rishigovind-tech/Messager', 
      texture: '/textures/project/Messager.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Node.js',
          path: '/assets/nodejs.png',
        },
        {
          id: 4,
          name: 'Express.js',
          path: '/assets/expressjs.png',
        },
        {
          id: 5,
          name: 'Socket.io',
          path: '/assets/socket-io.png',
        },
        {
          id: 6,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
      ],
    },
    
    {
      title: 'Living Crafts - Online Dress Shopping Site',
      desc: 'Living Crafts is a modern e-commerce platform that allows users to browse and purchase a wide range of stylish clothing. With a sleek UI and smooth user experience, it simplifies online fashion shopping for everyone.',
      subdesc:
        'Built using React.js, Node.js, Express.js, MongoDB, and styled with Tailwind CSS, Living Crafts delivers dynamic product pages, secure checkout, and responsive design for all devices.',
      href: 'https://github.com/rishigovind-tech/E-commerce', 
      texture: '/textures/project/e-comm.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Node.js',
          path: '/assets/nodejs.png',
        },
        {
          id: 4,
          name: 'Express.js',
          path: '/assets/expressjs.png',
        },
        {
          id: 5,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
      ],
    },
    
    {
      title: 'Estate - Real Estate Web Application',
      desc: 'Estate is a modern real estate platform where users can explore, wishlist, and inquire about property listings with ease. Designed with user-centric functionality, it offers an intuitive experience for both buyers and sellers.',
      subdesc:
        'Built using React.js, Tailwind CSS, and Framer Motion, this application features property wishlists, dynamic listing pages, and smooth UI animations to enhance user engagement and navigation.',
      href: 'https://github.com/rishigovind-tech/Real-Estate', 
      texture: '/textures/project/realestate.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    
    {
      title: 'QuantumAI - Landing Page for a GPT Company',
      desc: 'QuantumAI is a sleek, modern landing page designed for a generative AI company. It highlights cutting-edge GPT-powered services, product features, and company mission—all crafted to capture user attention and build trust.',
      subdesc:
        'Developed using React.js and Tailwind CSS, the page combines responsive layouts, smooth animations, and a professional design to create a compelling first impression for AI-focused startups.',
      href: 'https://github.com/rishigovind-tech/QuantumAI',
      texture: '/textures/project/landing.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
      ],
    },
    
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];