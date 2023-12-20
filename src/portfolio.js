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
  username: "Linus Huynh",
  title: "Hi I'm Linus",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 experienced in building web applications with JavaScript / Python / React.js and other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FqnnfYw1lh6LRLG-u6JqBOLtQ7xdz3kT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/linushuynh",
  linkedin: "https://www.linkedin.com/in/linus-huynh/",
  gmail: "linusmhuynh@gmail.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER EXPLORING FUN FRAMEWORKS AND LIBRARIES",
  skills: [
    emoji(
      "⚡ Develop highly engaging Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Write QA tests to maintain proper functionality on any website"),
    emoji(
      "⚡ Integrate third party services (ex. Google Cloud Platform)"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "App Academy",
      logo: require("./assets/images/Appacademylogo.png"),
      subHeader: "Full-Stack Software Engineering Bootcamp",
      duration: "August 2022 - January 2023",
      desc: "A comprehensive, full-stack web development course totalling over 1000 hours of immersion.",
      descBullets: [
        "Python, JavaScript",
        "React, Redux, Flask, SQLAlchemy, and PostgreSQL",
        "Data Structures & Algorithms, Object Oriented Programming, Agile development, Scrum & Kanban, Test driven development, and more"
      ]
    },
    {
      schoolName: "University of California, Riverside",
      logo: require("./assets/images/ucrlogo.jpg"),
      subHeader: "Bachelor of Science in Psychology",
      duration: "September 2018 - June 2022",
      // desc: "",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "UCR Adversity and Adaptation Lab",
      companylogo: require("./assets/images/ucrlogo.jpg"),
      date: "June 2021 – June 2022",
      desc: "The AD Lab is a scholarly research lab committed to the study of how children are affected by, and in many cases successfully negotiate, different kinds of adverse life experiences.",
      descBullets: [
        "Conducted mock interviews with 50 children and young adults to examine behavioral adaptations to stress",
        "Manually cleaned qualitative data from students’ daily journals for analysis to support professor’s hypothesis"
      ]
    },
    {
      role: "Research Assistant",
      company: "Brain Game Center",
      companylogo: require("./assets/images/bgclogo.png"),
      date: "June 2021 – June 2022",
      desc: "The Brain Game Center researches, tests, and disseminates scientifically optimized brain fitness games that assist people in real-life activities.",
      descBullets: [
        "Administered gamified psychological tests and managed high stakes data that measured memory and perceptual abilities from the research participants",
        "Maintained quality assurance of gaming applications through beta testing and debugging"
      ]
    },
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
  title: "Cool Projects",
  subtitle: "MY COOL PROJECTS THAT HELPED ME LEARN NEW FRAMEWORKS AND LIBRARIES",
  projects: [
    {
      image: require("./assets/images/limontrello.png"),
      projectName: "Limontrello",
      projectDesc: "A project management tool inspired by Trello that helps organize your tasks for any project.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://limontrello.onrender.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/linushuynh/Limontrello"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hangersacademyLogo.png"),
      projectName: "Hangers Academy",
      projectDesc: "A Discord-like web application developed across one week in collaboration with three other peers .",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hangersacademy.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/WhirlyFan/Hangers-Academy"
        }
      ]
    },
    {
      image: require("./assets/images/overnightsns.png"),
      projectName: "Overnight S&S",
      projectDesc: "A 2-week JavaScript project at App Academy based on AirBnB.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://overnightsns.onrender.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/linushuynh/Overnight-Sofa-N-Supper"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? My Inbox is open for anything.",
  // number: "+1-0000000000",
  email_address: "linusmhuynh@gmail.com"
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
