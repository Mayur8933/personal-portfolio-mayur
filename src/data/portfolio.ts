export const portfolioData = {
  personal: {
    name: "Mayur Patil",
    title: "Software Engineer",
    subtitle: "Frontend & Visualization Systems",
    email: "mayurpatil1902@gmail.com",
    phone: "+91 7767969076",
    location: "Dhule, Maharashtra, India",
    linkedin: "https://www.linkedin.com/in/patil-mayur15/",
    github: "https://github.com/Mayur8933",
    summary:
      "Product-focused Software Engineer with 3+ years of experience building complex, scalable web applications with a strong emphasis on visualization systems and platform engineering. Led the end-to-end design and implementation of advanced 360° diagnostic tooling for wind inspection platforms, including custom 3D coordinate transformations and annotation rendering systems. Known for resolving high-impact production issues, driving architectural improvements, and leveraging AI-augmented development workflows to significantly improve delivery velocity and technical predictability. Actively operating at senior-level ownership with a focus on system design, performance, and long-term maintainability.",
  },

  skills: {
    languages: ["JavaScript", "TypeScript", "Python"],
    frontend: ["React.js", "Next.js", "deck.gl", "Redux", "TanStack Query", "Mantine"],
    visualization: [
      "Deck.gl layer customization",
      "2D–3D coordinate transformations",
      "Interactive annotation systems",
    ],
    testing: ["Jest", "React Testing Library", "Playwright"],
    backend: ["REST APIs", "Flask"],
    platforms: ["Firebase", "Netlify", "Render", "GitHub", "GitLab"],
    practices: [
      "System Design",
      "Performance Optimization",
      "AI-Augmented Development",
      "Agile Methodologies",
    ],
  },

  experience: [
    {
      title: "Software Engineer II",
      company: "Zeitview",
      location: "Bengaluru, Karnataka, India",
      period: "Apr 2025 – Present",
      current: true,
      highlights: [
        "Led the end-to-end design and implementation of an Internal Chamber Diagnostic Module, enabling analysts to annotate internal anomalies for the first time within the Wind Platform.",
        "Architected and implemented a 360° panoramic visualization system with interactive annotation capabilities, requiring custom 2D-to-3D coordinate transformations and deck.gl layer adaptations to support a 3D coordinate system.",
        "Researched and resolved rendering precision issues in annotation quality by deep-diving into deck.gl layer architecture and projection mechanics, significantly improving visual accuracy and usability.",
        "Designed scalable annotation state management and coordinate normalization strategies to ensure consistent rendering across varying image projections and resolutions.",
        "Delivered a high-impact panoramic feature that strengthened product differentiation and enhanced client perception of technical capabilities.",
        "Investigated and resolved a critical, non-reproducible production issue affecting selected users by tracing the root cause to a third-party dependency inconsistency.",
        "Leverage AI-augmented development workflows for code prototyping, refactoring, edge-case discovery, and test generation.",
      ],
    },
    {
      title: "Software Engineer I",
      company: "Zeitview",
      location: "Bengaluru, Karnataka, India",
      period: "Aug 2024 – Mar 2025",
      current: false,
      highlights: [
        "Delivered high-impact platform features for wind inspection workflows, focusing on performance optimization and reusable component architecture.",
        "Contributed to the shared UI component library, improving consistency, reusability, and development efficiency across multiple applications.",
        "Improved platform performance through pagination strategies and optimized data-loading patterns, enhancing user interaction speed.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Zeitview",
      location: "Bengaluru, Karnataka, India",
      period: "Aug 2022 – Jul 2024",
      current: false,
      highlights: [
        "Enhanced thermography web application performance, increasing anomaly detection map efficiency by 20% through optimized rendering and data handling.",
        "Developed comprehensive unit and functional testing suites using Jest and React Testing Library to improve feature reliability.",
        "Mentored interns and contributed to code review standards, maintaining high code quality and engineering discipline.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "AirProbe (now Zeitview)",
      location: "Bengaluru, Karnataka, India",
      period: "Oct 2021 – Jul 2022",
      current: false,
      highlights: [
        "Built user-centric, responsive, and scalable interfaces for multiple web applications.",
        "Enhanced user experience and interface design efficiency, creating reusable React components and independent functions for future integration.",
        "Integrated RESTful APIs into web applications, bolstering user experience and functionality.",
      ],
    },
  ],

  awards: [
    {
      title: "Rising Star Award",
      description:
        "Recognized for consistently stepping up to tackle complex software development challenges and demonstrating a strong ability to learn and adapt quickly.",
    },
    {
      title: "Great Progress Adaptation Award",
      description:
        "Awarded for showing exceptional growth and acquiring autonomy in a short span, contributing effectively with minimal guidance.",
    },
  ],

  education: {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Dr. Babasaheb Ambedkar Technological University",
    location: "Lonere, Maharashtra, India",
  },

  projects: [
    {
      title: "360° Chamber Diagnostic Module",
      description:
        "End-to-end design and implementation of a 360° panoramic visualization system with interactive annotation for wind turbine internal diagnostics. Custom 2D-to-3D coordinate transformations, deck.gl layer adaptations.",
      tags: ["deck.gl", "React", "TypeScript", "3D Coordinates", "WebGL"],
      highlight: true,
    },
    {
      title: "Wind Platform – Annotation Engine",
      description:
        "Scalable annotation state management and coordinate normalization supporting consistent rendering across varying image projections and resolutions. Resolved critical rendering precision issues.",
      tags: ["React", "Redux", "TypeScript", "Performance"],
      highlight: false,
    },
    {
      title: "Thermography Performance Engine",
      description:
        "Optimized the anomaly detection map rendering pipeline for the thermography web application, achieving a 20% boost in efficiency through smarter data handling and rendering strategies.",
      tags: ["React", "JavaScript", "Performance", "Data Visualization"],
      highlight: false,
    },
    {
      title: "MayToons",
      description:
        "A personal creative web app featuring original animated stick figure characters that respond dynamically to mood selections. Built with React + TypeScript + Vite.",
      tags: ["React", "TypeScript", "Vite", "Animation", "Creative"],
      highlight: false,
    },
  ],
};
