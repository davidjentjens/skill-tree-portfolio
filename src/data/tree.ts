import { TreeNode } from "../utils/nodes-edges";

export const tree: TreeNode = {
  id: "root",
  data: {
    label: "Skills",
    subLabel: "Professional Skills Overview",
  },
  children: [
    // Education (No proficiency level)
    {
      id: "education",
      data: {
        label: "Education",
        subLabel: "Academic background and certifications",
        color: "#8E44AD", // Purple
        category: "education",
        icon: "FaGraduationCap",
      },
      children: [
        {
          id: "university",
          data: {
            label: "University",
            subLabel: "Formal academic education",
            color: "#9B59B6",
            icon: "FaUniversity",
          },
          children: [
            {
              id: "puc-rio",
              data: {
                label: "PUC-Rio",
                subLabel: "Bachelor's degree, Computer Science (2018-2021)",
                color: "#8E44AD",
                details: "Grade: 8.5",
                year: 2021,
              },
            },
            {
              id: "ufrj",
              data: {
                label: "UFRJ",
                subLabel: "Computer Science (2017-2018)",
                color: "#8E44AD",
                details: "Transferred to PUC-Rio via scholarship",
                year: 2018,
              },
            },
          ],
        },
        {
          id: "certifications",
          data: {
            label: "Certifications",
            subLabel: "Professional certifications and courses",
            color: "#9B59B6",
            icon: "FaCertificate",
          },
          children: [
            {
              id: "udacity",
              data: {
                label: "Udacity",
                subLabel: "Machine Learning Engineer Nanodegree (2021)",
                color: "#8E44AD",
                details: "Creating and deploying ML models via AWS SageMaker",
                year: 2021,
              },
            },
            {
              id: "fullcycle-rabbitmq",
              data: {
                label: "RabbitMQ Certification",
                subLabel: "Full Cycle",
                color: "#8E44AD",
                details: "Credential ID c716be69-add7-43c1-aa99-5d0dbeb02b9c",
                year: 2024,
              },
            },
            {
              id: "fullcycle-docker",
              data: {
                label: "Docker Certification",
                subLabel: "Full Cycle",
                color: "#8E44AD",
                details: "Credential ID 6d96fd13-dfe6-49d8-ac75-ce8851d17e58",
                year: 2023,
              },
            },
          ],
        },
      ],
    },

    // Experience (No proficiency level)
    {
      id: "experience",
      data: {
        label: "Experience",
        subLabel: "Professional work history",
        color: "#2980B9", // Blue
        category: "experience",
        icon: "FaBriefcase",
      },
      children: [
        {
          id: "intelltech",
          data: {
            label: "Intelltech",
            subLabel: "2022-Present",
            color: "#3498DB",
            icon: "FaBuilding",
          },
          children: [
            {
              id: "intelltech-qa-manager",
              data: {
                label: "Tech Manager (QA)",
                subLabel: "Apr 2024-Present",
                color: "#2980B9",
                details:
                  "Coordinating developers and QA team, implementing testing strategies, managing design system centralization",
                year: 2024,
              },
            },
            {
              id: "intelltech-sr-dev",
              data: {
                label: "Sr. Full Stack Developer",
                subLabel: "Apr 2023-Apr 2024",
                color: "#2980B9",
                details:
                  "Created/maintained front-end libraries for mining industry clients, managed CI/CD pipeline, documentation",
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
            color: "#3498DB",
            details:
              'Full Stack Developer: Next.js, Ruby on Rails, Created "Solaris" design system',
            year: 2023,
          },
        },
        {
          id: "tmov",
          data: {
            label: "Tmov",
            subLabel: "Mar 2022-Jan 2023",
            color: "#3498DB",
            details:
              "Full Stack Developer: Transportation logistics platform with React, Node, .NET Core, SQL Server",
            year: 2022,
          },
        },
        {
          id: "ica-puc-rio",
          data: {
            label: "ICA PUC-Rio",
            subLabel: "2018-2022",
            color: "#3498DB",
            icon: "FaBuilding",
          },
          children: [
            {
              id: "ica-fullstack",
              data: {
                label: "Full Stack Developer",
                subLabel: "Aug 2020-Mar 2022",
                color: "#2980B9",
                details:
                  "React web interfaces for Petrobras and Intel, back-end with Node.js and C#",
                year: 2020,
              },
            },
            {
              id: "ica-intern",
              data: {
                label: "Software Engineer Intern",
                subLabel: "Aug 2018-Jul 2020",
                color: "#2980B9",
                details:
                  "AI projects for Petrobras and Intel using React.js, Node.js, Python, C#",
                year: 2018,
              },
            },
          ],
        },
        {
          id: "unicainstancia",
          data: {
            label: "UnicaInstancia",
            subLabel: "Sep 2020-Apr 2021 (Part-time)",
            color: "#3498DB",
            details:
              "Junior Product Manager: Product team coordination, development infrastructure management",
            year: 2020,
          },
        },
      ],
    },

    // Technical Skills (With proficiency levels)
    {
      id: "technical-skills",
      data: {
        label: "Technical Skills",
        subLabel: "Programming languages, frameworks, and technologies",
        color: "#27AE60", // Green
        category: "skills",
        icon: "FaCode",
      },
      children: [
        // Frontend Category
        {
          id: "frontend",
          data: {
            label: "Frontend",
            subLabel: "6+ years experience",
            color: "#2ECC71",
            icon: "FaDesktop",
          },
          children: [
            {
              id: "react",
              data: {
                label: "React.js",
                subLabel: "Building modern, responsive user interfaces",
                color: "#61DAFB", // React color
                proficiencyLevel: 90,
                yearsExperience: 6,
                category: "frontend",
                icon: "FaReact",
                projects: [
                  {
                    id: "p1",
                    title: "Web Application Development",
                    description:
                      "Developed full-stack applications with React frontend",
                    technologies: ["React", "TypeScript", "Node.js"],
                    company: "INTELLTECH",
                    year: 2022,
                  },
                ],
              },
            },
            {
              id: "typescript",
              data: {
                label: "HTML/CSS/JS/TS",
                subLabel: "Frontend fundamentals",
                color: "#3178C6", // TypeScript color
                proficiencyLevel: 90,
                yearsExperience: 6,
                category: "frontend",
                icon: "SiTypescript",
              },
            },
            {
              id: "nextjs",
              data: {
                label: "Next.js",
                subLabel: "SEO-optimized React applications",
                color: "#000000",
                proficiencyLevel: 80,
                yearsExperience: 2,
                category: "frontend",
                icon: "SiNextdotjs",
              },
            },
            {
              id: "design-systems",
              data: {
                label: "Design Systems",
                subLabel: "Component libraries and UI standardization",
                color: "#F1C40F",
                proficiencyLevel: 80,
                yearsExperience: 3,
                category: "frontend",
                icon: "FaPalette",
              },
            },
          ],
        },

        // Backend Category
        {
          id: "backend",
          data: {
            label: "Backend",
            subLabel: "6+ years experience",
            color: "#2ECC71",
            icon: "FaServer",
          },
          children: [
            {
              id: "nodejs",
              data: {
                label: "Node.js",
                subLabel: "Building scalable backend services and APIs",
                color: "#339933", // Node.js color
                proficiencyLevel: 90,
                yearsExperience: 6,
                category: "backend",
                icon: "FaNodeJs",
                projects: [
                  {
                    id: "p3",
                    title: "REST API Development",
                    description: "Designed and implemented RESTful APIs",
                    technologies: ["Node.js", "Express", "PostgreSQL"],
                    company: "PORTAL SOLAR",
                    year: 2022,
                  },
                ],
              },
            },
            {
              id: "csharp",
              data: {
                label: "C#/.NET Core",
                subLabel: "Enterprise backend development",
                color: "#512BD4", // C# color
                proficiencyLevel: 80,
                yearsExperience: 6,
                category: "backend",
                icon: "SiCsharp",
              },
            },
            {
              id: "python",
              data: {
                label: "Python/Django",
                subLabel: "Web development and data analysis",
                color: "#3776AB", // Python color
                proficiencyLevel: 70,
                yearsExperience: 2,
                category: "backend",
                icon: "FaPython",
              },
            },
            {
              id: "rails",
              data: {
                label: "Ruby on Rails",
                subLabel: "Web application framework",
                color: "#CC0000", // Rails color
                proficiencyLevel: 70,
                yearsExperience: 1,
                category: "backend",
                icon: "SiRubyonrails",
              },
            },
          ],
        },

        // Databases Category
        {
          id: "databases",
          data: {
            label: "Databases",
            subLabel: "Data storage and management",
            color: "#2ECC71",
            icon: "FaDatabase",
          },
          children: [
            {
              id: "postgresql",
              data: {
                label: "PostgreSQL",
                subLabel: "Designing and optimizing database schemas",
                color: "#336791", // PostgreSQL color
                proficiencyLevel: 80,
                yearsExperience: 4,
                category: "database",
                icon: "SiPostgresql",
              },
            },
            {
              id: "sqlserver",
              data: {
                label: "SQL Server",
                subLabel: "Enterprise database management",
                color: "#CC2927", // SQL Server color
                proficiencyLevel: 80,
                yearsExperience: 3,
                category: "database",
                icon: "SiMicrosoftsqlserver",
              },
            },
            {
              id: "mongodb",
              data: {
                label: "MongoDB",
                subLabel: "NoSQL document database",
                color: "#47A248", // MongoDB color
                proficiencyLevel: 60,
                yearsExperience: 1,
                category: "database",
                icon: "SiMongodb",
              },
            },
            {
              id: "redis",
              data: {
                label: "Redis",
                subLabel: "In-memory data structure store",
                color: "#DC382D", // Redis color
                proficiencyLevel: 60,
                yearsExperience: 1,
                category: "database",
                icon: "SiRedis",
              },
            },
          ],
        },

        // DevOps Category
        {
          id: "devops",
          data: {
            label: "DevOps",
            subLabel: "4+ years experience",
            color: "#2ECC71",
            icon: "FaCloudUploadAlt",
          },
          children: [
            {
              id: "docker",
              data: {
                label: "Docker",
                subLabel: "Containerization and deployment",
                color: "#2496ED", // Docker color
                proficiencyLevel: 80,
                yearsExperience: 4,
                category: "devops",
                icon: "FaDocker",
              },
            },
            {
              id: "cicd",
              data: {
                label: "CI/CD",
                subLabel: "Continuous integration and deployment",
                color: "#4CAF50",
                proficiencyLevel: 80,
                yearsExperience: 4,
                category: "devops",
                icon: "FaCodeBranch",
              },
            },
            {
              id: "rabbitmq",
              data: {
                label: "RabbitMQ",
                subLabel: "Message broker and queue management",
                color: "#FF6600", // RabbitMQ color
                proficiencyLevel: 70,
                yearsExperience: 2,
                category: "devops",
                icon: "SiRabbitmq",
              },
            },
            {
              id: "aws",
              data: {
                label: "AWS",
                subLabel: "Cloud services and infrastructure",
                color: "#FF9900", // AWS color
                proficiencyLevel: 70,
                yearsExperience: 2,
                category: "devops",
                icon: "FaAws",
              },
            },
          ],
        },

        // Machine Learning
        {
          id: "ml",
          data: {
            label: "Machine Learning",
            subLabel: "AI and data analysis",
            color: "#2ECC71",
            icon: "FaBrain",
          },
          children: [
            {
              id: "tensorflow",
              data: {
                label: "TensorFlow",
                subLabel: "Machine learning framework",
                color: "#FF6F00", // TensorFlow color
                proficiencyLevel: 70,
                yearsExperience: 2,
                category: "ml",
                icon: "SiTensorflow",
              },
            },
            {
              id: "sagemaker",
              data: {
                label: "AWS SageMaker",
                subLabel: "ML model deployment",
                color: "#FF9900",
                proficiencyLevel: 70,
                yearsExperience: 1,
                category: "ml",
                icon: "FaAws",
              },
            },
          ],
        },
      ],
    },

    // Soft Skills (With proficiency levels)
    {
      id: "soft-skills",
      data: {
        label: "Soft Skills",
        subLabel: "Management and communication",
        color: "#E74C3C", // Red
        category: "skills",
        icon: "FaUsers",
      },
      children: [
        // Management
        {
          id: "management",
          data: {
            label: "Management",
            subLabel: "Team and process leadership",
            color: "#F39C12",
            icon: "FaUserTie",
          },
          children: [
            {
              id: "leadership",
              data: {
                label: "Team Leadership",
                subLabel: "QA team coordination",
                color: "#E67E22",
                proficiencyLevel: 85,
                yearsExperience: 2,
                category: "management",
                icon: "FaUsers",
              },
            },
            {
              id: "qa-management",
              data: {
                label: "Quality Management",
                subLabel: "Leading QA processes and ensuring software quality",
                color: "#4CAF50", // QA color
                proficiencyLevel: 85,
                yearsExperience: 2,
                category: "management",
                icon: "FaCheckCircle",
                projects: [
                  {
                    id: "p5",
                    title: "QA Process Implementation",
                    description:
                      "Established QA procedures that improved product quality metrics",
                    technologies: ["Testing Frameworks", "CI/CD"],
                    company: "INTELLTECH",
                    year: 2023,
                  },
                ],
              },
            },
            {
              id: "process-implementation",
              data: {
                label: "Process Implementation",
                subLabel: "Establishing and optimizing workflows",
                color: "#E67E22",
                proficiencyLevel: 80,
                yearsExperience: 2,
                category: "management",
                icon: "FaSitemap",
              },
            },
          ],
        },

        // Project Management
        {
          id: "project-management",
          data: {
            label: "Project Management",
            subLabel: "Agile and development methodologies",
            color: "#F39C12",
            icon: "FaTasks",
          },
          children: [
            {
              id: "agile",
              data: {
                label: "Agile Methodologies",
                subLabel: "Scrum, Kanban, and agile practices",
                color: "#FF9800", // Agile color
                proficiencyLevel: 85,
                yearsExperience: 4,
                category: "project-management",
                icon: "FaRegStickyNote",
              },
            },
            {
              id: "documentation",
              data: {
                label: "Documentation",
                subLabel: "Technical writing and knowledge management",
                color: "#FF9800",
                proficiencyLevel: 80,
                yearsExperience: 4,
                category: "project-management",
                icon: "FaFileAlt",
              },
            },
            {
              id: "product-development",
              data: {
                label: "Product Development",
                subLabel: "Feature planning and roadmap management",
                color: "#FF9800",
                proficiencyLevel: 75,
                yearsExperience: 2,
                category: "project-management",
                icon: "FaRocket",
              },
            },
          ],
        },

        // Communication
        {
          id: "communication",
          data: {
            label: "Communication",
            subLabel: "Technical and interpersonal communication",
            color: "#F39C12",
            icon: "FaComments",
          },
          children: [
            {
              id: "technical-communication",
              data: {
                label: "Technical Communication",
                subLabel: "Explaining complex concepts clearly",
                color: "#E67E22",
                proficiencyLevel: 85,
                yearsExperience: 4,
                category: "communication",
                icon: "FaChalkboardTeacher",
              },
            },
            {
              id: "collaboration",
              data: {
                label: "Cross-team Collaboration",
                subLabel: "Working effectively across departments",
                color: "#E67E22",
                proficiencyLevel: 85,
                yearsExperience: 4,
                category: "communication",
                icon: "FaHandshake",
              },
            },
            {
              id: "teaching",
              data: {
                label: "Teaching",
                subLabel: "Knowledge sharing and mentoring",
                color: "#E67E22",
                proficiencyLevel: 75,
                yearsExperience: 1,
                category: "communication",
                icon: "FaGraduationCap",
              },
            },
          ],
        },
      ],
    },

    // Languages (With proficiency levels)
    {
      id: "languages",
      data: {
        label: "Languages",
        subLabel: "Natural language proficiency",
        color: "#9B59B6", // Purple
        category: "skills",
        icon: "FaLanguage",
      },
      children: [
        {
          id: "portuguese",
          data: {
            label: "Portuguese",
            subLabel: "Native proficiency",
            color: "#8E44AD",
            proficiencyLevel: 100,
            category: "language",
            icon: "FaFlag",
          },
        },
        {
          id: "german",
          data: {
            label: "German",
            subLabel: "Fluent/Native proficiency",
            color: "#8E44AD",
            proficiencyLevel: 95,
            category: "language",
            icon: "FaFlag",
          },
        },
        {
          id: "english",
          data: {
            label: "English",
            subLabel: "Professional working proficiency/Fluent",
            color: "#8E44AD",
            proficiencyLevel: 90,
            category: "language",
            icon: "FaFlag",
          },
        },
        {
          id: "french",
          data: {
            label: "French",
            subLabel: "Basic proficiency",
            color: "#8E44AD",
            proficiencyLevel: 40,
            category: "language",
            icon: "FaFlag",
          },
        },
      ],
    },
  ],
};
