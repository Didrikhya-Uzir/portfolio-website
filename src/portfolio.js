// Home Page
const greeting = {
  title: "Didrikhya Uzir",
  logo_name: "Didrikhya Uzir",
  subTitle:
    "A passionate web developer and a data science enthusiast with a keen interest in deep learning, computer vision and natural language processing 🚀 having an experience of building web applications with Flask / FastAPI and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1RLtLwflTTlJiuXvIav6GfgEaQHF56_PK/view",
  portfolio_repository: "https://github.com/Didrikhya-Uzir/portfolio",
  githubProfile: "https://github.com/Didrikhya-Uzir",
};

// Your Social Media Link
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Didrikhya-Uzir",
    icon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    color: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/didrikhya-uzir-2b9916235",
    icon: "fa-linkedin",
    color: "#0077B5",
  },
  // {
  //   name: "Gmail",
  //   link: "didrikhyauziriiitu@gmail.com",
  //   icon: "fa-google",
  //   color: "#D14836",
  // },
  {
    name: "Medium",
    link: "https://medium.com/@uzirdidrikhya",
    icon: "fa-medium",
    color: "#000000",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceLottie",
      skills: [
        "⚡ Proficient in data science and AI, skilled in extracting valuable insights from numeric, text, and image data, contributing to informed and data-driven decision-making processes.",
        "⚡ Skilled in the application of computer vision techniques and transfer learning, utilizing these capabilities to develop disease prediction models for crops, aimed at assisting farmers in crop management.",
        "⚡ Showcased proficiency in natural language processing by implementing a food-delivery chatbot through platforms like Dialogflow, and subsequently storing the data in a MySQL database.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          icon: "logos:tensorflow",
          style: {
            color: " #FF6F00",
          },
        },
        {
          skillName: "Keras",
          icon: "cib:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit Learn",
          icon: "simple-icons:scikit-learn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          icon: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          icon: "logos:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Power BI",
          icon: "logos:microsoft-power-bi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Python",
          icon: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Front-end Development",
      fileName: "FrontendLottie",
      skills: [
        "⚡ Skilled in EJS and React, developing dynamic web applications with engaging UI/UX and smooth interactions.",
        "⚡ Experienced in crafting visually appealing dashboards, user-friendly CRUD interfaces, and progressive forms, using a user-centric approach to enhance data management and optimize user engagement.",
        "⚡ Proficient in constructing applications compatible with both web and mobile platforms, ensuring optimal user experiences across diverse devices and screen sizes through responsive and adaptive design techniques.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          icon: "vscode-icons:file-type-html",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          icon: "vscode-icons:file-type-css",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          icon: "logos:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          icon: "logos:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          icon: "logos:npm-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          icon: "logos:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Back-end Development",
      fileName: "BackendLottie",
      skills: [
        "⚡ Demonstrated expertise in optimizing backend performance and ensuring data security while harnessing the power of Flask, FastAPI and Streamlit to create seamless and efficient AI solutions for real-world challenges.",
        "⚡ Skilled in deploying Identity and Access Management (IAM) solutions, incorporating authentication, authorization, and user management features to guarantee secure and seamless user interactions.",
        "⚡ Seasoned in developing websites backed by NodeJS/Express, integrating online database services such as MongoDB Atlas to execute CRUD operations seamlessly.",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          icon: "logos:nodejs",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Python",
          icon: "logos:python",
          style: {
            color: "#3776AB",
          },
        },

        {
          skillName: "MySQL",
          icon: "logos:mysql-icon",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Flask",
          icon: "logos:flask",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "Postgresql",
          icon: "logos:postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "Mongo DB",
          icon: "vscode-icons:file-type-mongo",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coding Ninjas",
      icon: "simple-icons:codingninjas",
      style: {
        color: "#FFA500",
      },
      profileLink: "https://www.codingninjas.com/studio/profile/b61c0811-b4a2-473e-a695-cbdbe18d1c1a",
    },
    {
      siteName: "LeetCode",
      icon: "simple-icons:leetcode",
      style: {
        color: "#ffffff",
      },
      profileLink: "https://leetcode.com/Didrikhya_Uzir/",
    },
    {
      siteName: "Kaggle",
      icon: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/didrikhyauzir/code",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Una",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "iiitLogo.png",
      alt_name: "Indian Institute of Information Technology Una",
      duration: "2021 - 2025",
      descriptions: [
        " CGPA: 8.44",
        "⚡ Firmly grounded in fundamental software engineering concepts, encompassing Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture, and Artificial Intelligence. This knowledge equips me to adeptly navigate diverse technical challenges.",
        "⚡ Additionally, I have pursued comprehensive courses in cutting-edge fields such as Deep Learning, Data Science, and Full Stack Development, augmenting my skill set to harness the latest technologies and frameworks for building innovative and data-driven solutions.",
      ],
      website_link: "https://iiitu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      link: "https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning",
      alt_name: "Neural Networks and Deep Learning",
      color_code: "#808080",
    },
    {
      title: "Data Science",
      subtitle: "- Career 365",
      logo_path: "data_science.png",
      link: "https://www.udemy.com/share/101WeA3@InbjkKGxDk_rsusjOSyZp_PdF45AVpfrLIcAw98OXJtVbYdTONTLN-5CgHao-PsCVw==/",
      alt_name: "Data Science",
      color_code: "#F5F5F5",
    },
    {
      title: "Web Development",
      subtitle: "- Angela Yu",
      logo_path: "web_development.svg",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      alt_name: "Web Development",
      color_code: "#00d9c0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "Experienced ML/DL Developer. Strong problem-solving and communication skills, delivering innovative solutions.",
  sections: [
    {
      title: "Work",
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "",
          location: "",
          description:
            "",
        },
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "",
          location: "",
          description:
            "",
        },
      ],
    },
  ],
};

// Projects Page
const projects = {
  title: "Projects",
  description:
    "My projects revolve around crafting inventive Data Science solutions seamlessly integrated into frontend applications, providing comprehensive end-to-end solutions. Emphasizing the integration of data insights and user experiences.",
  projectDetails: {
    data: [
      {
        id: "1",
        name: "GrowSync",
        createdAt: "15-10-23",
        url: "https://github.com/Didrikhya-Uzir/GrowSync",
        description:
          "A website leveraging machine learning to provide recommendations for optimal crop selection, suitable fertilizers, and identification of diseases affecting crops.",
        languages: [
          { name: "Pytorch", icon: "logos:pytorch" },
          { name: "CSS", icon: "logos:flask" },
          { name: "JavaScript", icon: "logos:python" },
        ],
      },
      {
        id: "2",
        name: "AnimeSphere",
        createdAt: "25-10-2023",
        url: "https://github.com/Didrikhya-Uzir/AnimeSphere",
        description:
          "A website dedicated to anime facts, is constructed with ReactJS, and it retrieves data from the Jikan API.",
        languages: [
          { name: "HTML", icon: "vscode-icons:file-type-html" },
          { name: "CSS", icon: "vscode-icons:file-type-css" },
          { name: "JavaScript", icon: "logos:react" },
        ],
      },
      {
        id: "3",
        name: "Food Delivery Chatbot",
        createdAt: "05-08-2023",
        url: "https://github.com/Didrikhya-Uzir/Food-Delivery-Chatbot",
        description:
          "FastAPI app utilizing Dialogflow for an open-ended chatbot that can place orders and track orders.",
        languages: [
          { name: "FastAPI", icon: "logos:fastapi" },
          { name: "Dialogflow", icon: "logos:dialogflow" },
          { name: "MySQL", icon: "logos:mysql" },
        ],
      },
      {
        id: "4",
        name: "Daily Blog",
        createdAt: "07-03-2023",
        url: "https://github.com/Didrikhya-Uzir/Daily-Blog",
        description:
          "Built a blog website using EJS and performing CRUD operations on MongoDB atlas.",
        languages: [
          { name: "Node.js", icon: "logos:nodejs" },
          { name: "MongoDB Atlas", icon: "logos:mongodb" },
        ],
      },
    ],
  },
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "Feel free to get in touch to discuss projects or collaborations. I offer expertise in ML, AI, Data Science, and Full Stack development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Hojai, Assam, India",
    location_map_link: "https://maps.app.goo.gl/5USSxkh4qm8w49Zh7",
  },
  phoneSection: {
    hidden: true,
    title: "Phone Number",
    subtitle: "1234567890",
  },
};

export {
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projects,
  contactPageData,
};
