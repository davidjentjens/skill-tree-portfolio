// src/data/tree.ts
import { categoryColors } from "../utils/colorMap";
import { TreeNode } from "../utils/nodes-edges";

export const tree: TreeNode = {
  id: "root",
  data: {
    label: "Skills",
    subLabel: "Professional Skills Overview",
  },
  children: [
    {
      id: "education",
      data: {
        label: "Education",
        subLabel: "Academic background and certifications",
        color: categoryColors.education.main,
        category: "education",
        icon: "FaGraduationCap",
        details:
          "Formal education in Computer Science with additional specialized training in AI and machine learning",
      },
      children: [
        {
          id: "university",
          data: {
            label: "University",
            subLabel: "Formal academic education (2017-2021)",
            color: categoryColors.education.darker,
            icon: "FaUniversity",
            details: "Computer Science education at top Brazilian universities",
          },
          children: [
            {
              id: "puc-rio",
              data: {
                label: "PUC-Rio",
                subLabel: "Bachelor's degree, Computer Science (2018-2021)",
                color: categoryColors.education.lighter,
                details:
                  "Completed Bachelor's degree in Computer Science with an excellent grade of 8.5",
                year: 2021,
              },
            },
            {
              id: "ufrj",
              data: {
                label: "UFRJ",
                subLabel: "Computer Science (2017-2018)",
                color: categoryColors.education.lighter,
                details:
                  "Started Computer Science studies before transferring to PUC-Rio via academic scholarship",
                year: 2018,
              },
            },
          ],
        },
        {
          id: "certifications",
          data: {
            label: "Certifications",
            subLabel: "Professional certifications (2021)",
            color: categoryColors.education.darker,
            icon: "FaCertificate",
            details: "Specialized training in advanced technologies",
          },
          children: [
            {
              id: "udacity",
              data: {
                label: "Udacity",
                subLabel: "Machine Learning Engineer Nanodegree (2021)",
                color: categoryColors.education.lighter,
                details:
                  "Created machine learning models to solve industry problems and deployed them as APIs in AWS SageMaker",
                year: 2021,
              },
            },
          ],
        },
      ],
    },

    {
      id: "experience",
      data: {
        label: "Experience",
        subLabel: "Professional work history (2018-Present)",
        color: categoryColors.experience.main,
        category: "experience",
        icon: "FaBriefcase",
        details:
          "Over 6 years of professional experience in software development and team leadership",
      },
      children: [
        {
          id: "intelltech",
          data: {
            label: "Intelltech",
            subLabel: "2022-Present",
            color: categoryColors.experience.darker,
            icon: "FaBuilding",
            details:
              "Worked on front-end libraries and managed QA processes for the mining industry",
          },
          children: [
            {
              id: "intelltech-qa-manager",
              data: {
                label: "Tech Manager (QA)",
                subLabel: "Apr 2024-Present",
                color: categoryColors.experience.lighter,
                details:
                  "Coordinated a team of developers and quality analysts, implemented testing strategies including unit, integration, e2e and stress testing, and managed design system centralization",
                year: 2024,
              },
            },
            {
              id: "intelltech-sr-dev",
              data: {
                label: "Sr. Full Stack Developer",
                subLabel: "Apr 2023-Apr 2024",
                color: categoryColors.experience.lighter,
                details:
                  "Created and maintained front-end libraries for mining industry clients, managed CI/CD pipeline, and handled documentation",
                year: 2023,
              },
            },
          ],
        },
        {
          id: "portal-solar",
          data: {
            label: "Portal Solar",
            subLabel: "Jan 2023-Apr 2023",
            color: categoryColors.experience.lighter,
            details:
              "Developed SEO for institutional websites with Next.js and backend with Ruby on Rails. Created and maintained 'Solaris' design system for React and React Native applications",
            year: 2023,
          },
        },
        {
          id: "tmov",
          data: {
            label: "Tmov",
            subLabel: "Mar 2022-Jan 2023",
            color: categoryColors.experience.lighter,
            details:
              "Developed and improved a transportation logistics platform using React, Node, .NET Core and SQL Server",
            year: 2022,
          },
        },
        {
          id: "ica-puc-rio",
          data: {
            label: "ICA PUC-Rio",
            subLabel: "2018-2022",
            color: categoryColors.experience.darker,
            icon: "FaBuilding",
            details:
              "Worked on AI projects for major companies including Petrobras and Intel",
          },
          children: [
            {
              id: "ica-fullstack",
              data: {
                label: "Full Stack Developer",
                subLabel: "Aug 2020-Mar 2022",
                color: categoryColors.experience.lighter,
                details:
                  "Developed React web interfaces for Petrobras and Intel, and collaborated on back-end development with Node.js and C#",
                year: 2020,
              },
            },
            {
              id: "ica-intern",
              data: {
                label: "Software Engineer Intern",
                subLabel: "Aug 2018-Jul 2020",
                color: categoryColors.experience.lighter,
                details:
                  "Collaborated on AI projects for Petrobras and Intel using React.js, Node.js, Python and C#",
                year: 2018,
              },
            },
          ],
        },
        {
          id: "unicainstancia",
          data: {
            label: "UnicaInstancia",
            subLabel: "Sep 2020-Apr 2021",
            color: categoryColors.experience.lighter,
            details:
              "Coordinated the product team, set goals for different areas, and managed development infrastructure while working part-time",
            year: 2020,
          },
        },
      ],
    },

    {
      id: "technical-skills",
      data: {
        label: "Technical Skills",
        subLabel: "Programming languages and technologies",
        color: categoryColors.neutral.main,
        category: "neutral",
        icon: "FaCode",
        details:
          "Extensive experience with multiple programming languages and frameworks",
      },
      children: [
        {
          id: "frontend",
          data: {
            label: "Frontend",
            subLabel: "6+ years experience",
            color: categoryColors.frontend.darker,
            icon: "FaDesktop",
            category: "frontend",
            details: "Deep expertise in frontend technologies and frameworks",
          },
          children: [
            {
              id: "react",
              data: {
                label: "React.js",
                subLabel: "Modern UI framework",
                color: categoryColors.frontend.lighter,
                proficiencyLevel: 90,
                yearsExperience: 6,
                category: "frontend",
                icon: "FaReact",
                details:
                  "Developed multiple React applications for various clients including Petrobras and Intel",
              },
            },
            {
              id: "web-fundamentals",
              data: {
                label: "HTML, CSS, JS, TS",
                subLabel: "Web fundamentals",
                color: categoryColors.frontend.lighter,
                proficiencyLevel: 90,
                yearsExperience: 6,
                category: "frontend",
                icon: "SiTypescript",
                details:
                  "Applied core web technologies across numerous projects for over 6 years",
              },
            },
            {
              id: "nextjs",
              data: {
                label: "Next.js",
                subLabel: "React framework",
                color: categoryColors.frontend.lighter,
                proficiencyLevel: 80,
                yearsExperience: 2,
                category: "frontend",
                icon: "SiNextdotjs",
                details:
                  "Used Next.js for SEO optimization of institutional websites at Portal Solar",
              },
            },
            {
              id: "design-systems",
              data: {
                label: "Design Systems",
                subLabel: "Component libraries",
                color: categoryColors.frontend.lighter,
                proficiencyLevel: 80,
                yearsExperience: 3,
                category: "frontend",
                icon: "FaPalette",
                details:
                  "Created and maintained the 'Solaris' design system at Portal Solar and centralized design components at Intelltech",
              },
            },
          ],
        },

        {
          id: "backend",
          data: {
            label: "Backend",
            subLabel: "6+ years experience",
            color: categoryColors.backend.darker,
            icon: "FaServer",
            category: "backend",
            details:
              "Built robust server-side applications with various technologies",
          },
          children: [
            {
              id: "nodejs",
              data: {
                label: "Node.js",
                subLabel: "JavaScript runtime",
                color: categoryColors.backend.lighter,
                proficiencyLevel: 90,
                yearsExperience: 6,
                category: "backend",
                icon: "FaNodeJs",
                details:
                  "Developed backend services for multiple companies including ICA PUC-Rio and Tmov",
              },
            },
            {
              id: "csharp",
              data: {
                label: "C#/.NET",
                subLabel: "Backend development",
                color: categoryColors.backend.lighter,
                proficiencyLevel: 80,
                yearsExperience: 6,
                category: "backend",
                icon: "SiCsharp",
                details:
                  "Used C# for backend development at ICA PUC-Rio and for the logistics platform at Tmov",
              },
            },
            {
              id: "python",
              data: {
                label: "Python/Django",
                subLabel: "Web framework",
                color: categoryColors.backend.lighter,
                proficiencyLevel: 70,
                yearsExperience: 2,
                category: "backend",
                icon: "FaPython",
                details:
                  "Applied Python for AI projects at ICA PUC-Rio and in machine learning models for the Udacity nanodegree",
              },
            },
            {
              id: "ruby-rails",
              data: {
                label: "Ruby on Rails",
                subLabel: "Web framework",
                color: categoryColors.backend.lighter,
                proficiencyLevel: 70,
                yearsExperience: 1,
                category: "backend",
                icon: "SiRubyonrails",
                details:
                  "Developed backend applications at Portal Solar using Ruby on Rails",
              },
            },
          ],
        },

        {
          id: "devops",
          data: {
            label: "DevOps",
            subLabel: "4+ years experience",
            color: categoryColors.devops.darker,
            icon: "FaCloudUploadAlt",
            category: "devops",
            details: "Implemented deployment and infrastructure solutions",
          },
          children: [
            {
              id: "docker",
              data: {
                label: "Docker",
                subLabel: "Containerization",
                color: categoryColors.devops.lighter,
                proficiencyLevel: 80,
                yearsExperience: 4,
                category: "devops",
                icon: "FaDocker",
                details:
                  "Used Docker for containerization across multiple projects",
              },
            },
            {
              id: "cicd",
              data: {
                label: "CI/CD",
                subLabel: "Continuous integration/deployment",
                color: categoryColors.devops.lighter,
                proficiencyLevel: 80,
                yearsExperience: 4,
                category: "devops",
                icon: "FaCodeBranch",
                details:
                  "Created and maintained CI/CD pipelines at Intelltech and other companies",
              },
            },
            {
              id: "aws",
              data: {
                label: "AWS",
                subLabel: "Cloud services",
                color: categoryColors.devops.lighter,
                proficiencyLevel: 70,
                yearsExperience: 2,
                category: "devops",
                icon: "FaAws",
                details:
                  "Deployed machine learning models to AWS SageMaker during Udacity nanodegree program",
              },
            },
          ],
        },

        {
          id: "databases",
          data: {
            label: "Databases",
            subLabel: "SQL and NoSQL databases",
            color: categoryColors.database.darker,
            icon: "FaDatabase",
            category: "database",
            details: "Worked with various database technologies",
          },
          children: [
            {
              id: "postgresql",
              data: {
                label: "PostgreSQL",
                subLabel: "Relational database",
                color: categoryColors.database.lighter,
                proficiencyLevel: 80,
                yearsExperience: 4,
                category: "database",
                icon: "SiPostgresql",
                details:
                  "Used PostgreSQL as the primary database for several projects",
              },
            },
            {
              id: "sqlserver",
              data: {
                label: "SQL Server",
                subLabel: "Microsoft database",
                color: categoryColors.database.lighter,
                proficiencyLevel: 75,
                yearsExperience: 2,
                category: "database",
                icon: "SiMicrosoftsqlserver",
                details:
                  "Worked with SQL Server for the logistics platform at Tmov",
              },
            },
          ],
        },
      ],
    },
    {
      id: "soft-skills",
      data: {
        label: "Soft Skills",
        subLabel: "Leadership, Communication & Methodologies",
        color: categoryColors.management.main,
        category: "management",
        icon: "FaUsers",
        details:
          "Professional skills beyond technical expertise, including leadership, communication, and project management",
      },
      children: [
        {
          id: "team-leadership",
          data: {
            label: "Team Leadership",
            subLabel: "Developer coordination & Quality Assurance",
            color: categoryColors.management.lighter,
            proficiencyLevel: 88,
            yearsExperience: 2,
            category: "management",
            icon: "FaUsers",
            details:
              "Coordinated teams of developers and quality analysts, implementing comprehensive testing strategies including unit, integration, e2e, and stress testing across multiple projects",
          },
        },
        {
          id: "agile",
          data: {
            label: "Agile Methodologies",
            subLabel: "Scrum and Kanban",
            color: categoryColors.management.lighter,
            proficiencyLevel: 95, // Increased from 85 to 95
            yearsExperience: 4,
            category: "management",
            icon: "FaRegStickyNote",
            details:
              "Applied agile methodologies across multiple projects and companies, leading teams with strong focus on delivery efficiency and iterative development",
          },
        },
        {
          id: "product-management",
          data: {
            label: "Product Management",
            subLabel: "Sep 2020-Apr 2021",
            color: categoryColors.management.lighter,
            proficiencyLevel: 75,
            yearsExperience: 1,
            category: "management",
            icon: "FaRocket",
            details:
              "Coordinated product team and set long and short-term goals at UnicaInstancia",
          },
        },
      ],
    },
    {
      id: "languages",
      data: {
        label: "Languages",
        subLabel: "Natural language proficiency",
        color: categoryColors.language.main,
        category: "language",
        icon: "FaLanguage",
        details: "Multi-lingual communication skills",
      },
      children: [
        {
          id: "portuguese",
          data: {
            label: "Portuguese",
            subLabel: "Mother tongue",
            color: categoryColors.language.lighter,
            proficiencyLevel: 100,
            category: "language",
            icon: "FaFlag",
            details: "Native fluency in Portuguese",
          },
        },
        {
          id: "german",
          data: {
            label: "German",
            subLabel: "Fluent",
            color: categoryColors.language.lighter,
            proficiencyLevel: 95,
            category: "language",
            icon: "FaFlag",
            details: "Near-native fluency in German",
          },
        },
        {
          id: "english",
          data: {
            label: "English",
            subLabel: "Fluent",
            color: categoryColors.language.lighter,
            proficiencyLevel: 90,
            category: "language",
            icon: "FaFlag",
            details: "Professional working proficiency in English",
          },
        },
        {
          id: "french",
          data: {
            label: "French",
            subLabel: "Basic",
            color: categoryColors.language.lighter,
            proficiencyLevel: 40,
            category: "language",
            icon: "FaFlag",
            details: "Basic communication skills in French",
          },
        },
      ],
    },
  ],
};
