type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Gourav Sharma | Portfolio",
    fullName: "Gourav Sharma",
    email: "gsharmafp@gmail.com",
  },
  hero: {
    name: "Gourav Sharma",
    p: [
      "Full-stack developer with 1.5+ years of experience in building scalable applications.",
      "Expertise in React Native, Java, Spring Boot, and cloud technologies.",
      "Passionate about system design, clean code, and solving real-world problems."
    ],
  },
  contact: {
    p: "Contact",
    h2: "Get in Touch",
    form: {
      name: {
        span: "Your Name",
        placeholder: "Enter your name",
      },
      email: {
        span: "Your Email",
        placeholder: "Enter your email",
      },
      message: {
        span: "Your Message",
        placeholder: "Write your message here",
      },
    },
    content: `Email: gsharmafp@gmail.com\nPhone: +91-9643063309\nGitHub: https://github.com/gshrmafp\nLinkedIn: https://linkedin.com/in/gourav-sharma-3662b1185`,
  },
  sections: {
    about: {
      p: "Professional Summary",
      h2: "About Me",
      content: `React Native CLI Developer with 2.5+ years of experience building scalable applications using React, Java, Spring Boot. Proven ability to design robust architectures, implement complex business flows, and optimize performance in high-traffic systems. Passionate about solving real-world problems through clean code, system design thinking, and data-driven development.`,
    },
    experience: {
      p: "Work Experience",
      h2: "Experience",
      content: `
Software Developer – Apeejay Education Society (Feb 2024 – Present)  
- Launched the Apeejay Parent App using React Native for 10,000+ parents  
- Integrated push notifications and real-time updates via Firebase  
- Built CRC DR App for doctors and med reps  
- Developed a React.js Admin Panel and Regional Manager App

Associate Software Developer Intern – Bharti Airtel (Feb 2023 – Sep 2023)  
- Built business dashboards and optimized UI flows  
- Implemented CSV upload and enhanced Airtel internal apps
      `.trim(),
    },
    feedbacks: {
      p: "Feedback",
      h2: "What Others Say",
      content: "Client and peer testimonials will be added soon.",
    },
    works: {
      p: "Projects",
      h2: "My Projects",
      content: `
Apeejay Parent App (React Native, Firebase)  
- Enables parents to track attendance, leave, and fees with real-time push notifications.

CRC DR App (React Native, Firebase)  
- For doctor engagement and interaction tracking.

Regional Manager App (React Native, Firebase)  
- Track doctor interactions and regional sales activities.

Smart Workflow (React.js, Node.js, MySQL)  
- Full-stack task manager to reduce paperwork and automate workflows.
      `.trim(),
    },
  },
};
