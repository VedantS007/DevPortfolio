/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vedant Soni",
  title: "Hi all, I'm Vedant",
  subTitle: emoji(
    "Combining 2 years of expertise in Program Management and Business analytics, I navigate complex projects with precision. Specializing in orchestrating seamless operations and extracting insights, I drive actionable strategies for transformative results and organizational success."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fGKC9GUJ_hLgrZ1e5HjEDOWjYuRZeAXx/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VedantS007",
  linkedin: "www.linkedin.com/in/vedant-soni-230b551a8",
  gmail: "s.vedant5219@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "BALANCING STRATEGY AND SEAMLESS EXECUTION AS A DUAL-ROLE PROJECT MANAGER AND BUSINESS ANALYST",
  skills: [
    emoji(
      "⚡ Manage end-to-end projects, ensuring alignment with quality standards and customer requirements"
    ),
    emoji(
      "⚡ Fostering strong collaboration with professionals, providing transparent project reporting and nurturing client relationships for satisfaction-driven outcomes"
    ),
    emoji(
      "⚡ Lead cross-funcitonal team with people management, training, and transformative initiatives, resulting in consistent delivery of exceptional project results"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Program Management",
      fontAwesomeClassname: "fas fa-list"
    },
    {
      skillName: "People Management",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "SQL + Mongo DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Numpy + Pandas",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Matplotlib + Seaborn",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Power BI + MS Excel",
      fontAwesomeClassname: "fas fa-chart-area"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Shri Shankaracharya Institute of Professional Management & Technology, Raipur(C.G)",
      logo: require("./assets/images/SSIPMT.png"),
      subHeader: "Bachelor of Engineering with Computer Science",
      duration: "July 2018 - July 2022",
      desc: "Secured 73%",
      descBullets: [
        "Volunteer in Smart India Hackathon - 2020",
        "Participated in many sports events like Baminton, Table Tennis, Tug of War, etc."
      ]
    },
    {
      schoolName: "Vardhaman The School",
      logo: require("./assets/images/V.png"),
      subHeader: "12th standard",
      duration: "April 2017 - April 2018",
      desc: "Secured 70%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Program Management", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Business Analytics", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "60%"
    },
    {
      Stack: "Front-End / Design",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Deployment Program Manger",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/Microsoft.png"),
      date: "July 2022 – Present",
      desc: "Working as Program Manager + Business Analyst in Microsoft Account. Specializing in orchestrating seamless operations and extracting insights, I drive actionable strategies for transformative results and organizational success.",
      descBullets: [
        "Orchestrated end-to-end infrastructure projects for Microsoft Data Centers, ensuring alignment with customer requirements and quality standards.",
        "Fostered strong collaboration with Microsoft technical program managers, providing transparent project reporting.",
        "Business Transformation : Researched, identified loopholes, and implemented system improvements leveraging technology and analytical skills. Led initiatives resulting in significant cost savings of $3-5M/Qtr approved by Microsoft",
        "Led people management and transformative initiatives within the NID Team, ensuring consistent quality of work.",
        "Received appreciation for exceptional project delivery, maintaining high levels of customer satisfaction by consistently exceeding expectations"
      ]
    },
    {
      role: "Web Development Intern",
      company: "BigOHealth",
      companylogo: require("./assets/images/BigOHealth.png"),
      date: "Feb 2022 - March 2022",
      desc: "Front-end Developer at Noida-based Health-Tech Startup supported by IITK & US Embassy",
      descBullets: [
        "Contributed to the development of a dynamic social networking platform, focusing on user engagement and functionality",
        "Designed and implemented the UI/UX for a mobile application, ensuring seamless navigation and intuitive interactions",
        "Collaborated with cross-functional teams to troubleshoot technical issues and optimize performance",
        "Demonstrated adaptability and a strong work ethic while gaining valuable hands-on experience in software development"
      ]
    },
    {
      role: "Web Development Intern",
      company: "FineOps",
      companylogo: require("./assets/images/FineOps.png"),
      date: "April 2021 – July 2021",
      desc: "Worked as a React JS developer in Noida based Consultancy Services Startup.",
      descBullets: [
        "Developed a fully responsive static E-learning website for a US-based startup.",
        "Designed the UI for a Dating application, focusing on modern aesthetics and intuitive user experiences",
        "Engineered the front-end of a Dating web-app using React JS, emphasizing interactivity and visual appeal",
        "Demonstrated commitment to delivering high-quality solutions tailored to diverse client needs and continuous skill enhancement in front-end development."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "PL-300 Microsoft Certified : Power BI Analyst",
      subtitle: "",
      image: require("./assets/images/Microsoft.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },
    {
      title: "DP-100 Microsoft Certified : Azure Data Scientist Associate",
      subtitle: "",
      image: require("./assets/images/Microsoft.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },

    {
      title: "Udemy : Certified Data Analyst",
      subtitle: "",
      image: require("./assets/images/Udemy.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project / have some new opportunity for me ? My Inbox is open for all.",
  number: "+91-8817815911",
  email_address: "s.vedant5219@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
