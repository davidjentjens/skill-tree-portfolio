import { Node, Edge } from 'reactflow';
import { NodeType } from '../components/flow/DagreTree';
import { Skill } from '../types';

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export interface TreeData {
  label: string;
  subLabel?: string;
  color?: string;
}

export interface TreeViewData extends TreeData {
  showingChildren: boolean;
  setShowingChildren?(showingChildren: boolean): void;
}

export interface TreeNode {
  id: string;
  data: Skill;
  children?: TreeNode[];
}

export const tree: TreeNode = {
  id: 'root',
  data: { 
    label: 'Skills', 
    subLabel: 'Professional Skills Overview'
  },
  children: [
    // Frontend Category
    {
      id: 'react',
      data: { 
        label: 'React.js', 
        subLabel: 'Building modern, responsive user interfaces with React and its ecosystem.',
        color: '#61DAFB', // React color
        proficiencyLevel: 5,
        yearsExperience: 6,
        category: 'frontend',
        icon: 'FaReact',
        projects: [
          {
            id: 'p1',
            title: 'Web Application Development',
            description: 'Developed full-stack applications with React frontend',
            thumbnail: '/images/project1.jpg',
            technologies: ['React', 'TypeScript', 'Node.js'],
            company: 'INTELLTECH',
            year: 2022,
          }
        ],
      },
      children: [
        {
          id: 'typescript',
          data: { 
            label: 'TypeScript', 
            subLabel: 'Using TypeScript for building type-safe JavaScript applications',
            color: '#3178C6', // TypeScript color
            proficiencyLevel: 4,
            yearsExperience: 6,
            category: 'frontend',
            icon: 'SiTypescript',
            projects: [
              {
                id: 'p2',
                title: 'Type-Safe Applications',
                description: 'Implemented TypeScript in large-scale applications',
                thumbnail: '/images/project2.jpg',
                technologies: ['TypeScript', 'React', 'Node.js'],
                company: 'TMOV',
                year: 2021,
              }
            ],
          },
          children: [
            { 
              id: 'html-css', 
              data: { 
                label: 'HTML/CSS', 
                subLabel: 'Frontend fundamentals',
                color: '#E34F26', // HTML color
              } 
            }
          ]
        }
      ],
    },
    
    // Backend Category
    {
      id: 'nodejs',
      data: { 
        label: 'Node.js', 
        subLabel: 'Building scalable backend services and APIs with Node.js',
        color: '#339933', // Node.js color
        proficiencyLevel: 5,
        yearsExperience: 6,
        category: 'backend',
        icon: 'FaNodeJs',
        projects: [
          {
            id: 'p3',
            title: 'REST API Development',
            description: 'Designed and implemented RESTful APIs for various applications',
            thumbnail: '/images/project3.jpg',
            technologies: ['Node.js', 'Express', 'PostgreSQL'],
            company: 'PORTAL SOLAR',
            year: 2022,
          }
        ],
      },
      children: [
        {
          id: 'express',
          data: { 
            label: 'Express.js', 
            subLabel: 'Creating RESTful APIs and web applications using Express.js',
            color: '#000000', // Express.js color
            proficiencyLevel: 5,
            yearsExperience: 5,
            category: 'backend',
            icon: 'SiExpress',
            projects: [
              {
                id: 'p4',
                title: 'API Development',
                description: 'Built RESTful APIs using Express.js for various projects',
                thumbnail: '/images/project4.jpg',
                technologies: ['Node.js', 'Express', 'MongoDB'],
                company: 'INTELLTECH',
                year: 2023,
              }
            ],
          }
        },
        {
          id: 'c-sharp',
          data: { 
            label: 'C#', 
            subLabel: 'Backend development with C#',
            color: '#512BD4' // C# color
          }
        }
      ],
    },
    
    // Database & Infrastructure
    {
      id: 'postgresql',
      data: { 
        label: 'PostgreSQL', 
        subLabel: 'Designing and optimizing database schemas and queries',
        color: '#336791', // PostgreSQL color
        proficiencyLevel: 4,
        yearsExperience: 4,
        category: 'database',
        icon: 'SiPostgresql',
        projects: [
          {
            id: 'p4',
            title: 'Database Architecture',
            description: 'Designed efficient database structures for enterprise applications',
            thumbnail: '/images/project4.jpg',
            technologies: ['PostgreSQL', 'Node.js'],
            company: 'ICA - PETROBRAS',
            year: 2020,
          }
        ],
      },
      children: [
        {
          id: 'docker',
          data: { 
            label: 'Docker', 
            subLabel: 'Containerization and deployment',
            color: '#2496ED' // Docker color
          }
        }
      ]
    },
    
    // Project Management
    {
      id: 'qa-management',
      data: { 
        label: 'QA Management', 
        subLabel: 'Leading QA processes and ensuring software quality',
        color: '#4CAF50', // QA color (green)
        proficiencyLevel: 5,
        yearsExperience: 2,
        category: 'project-management',
        icon: 'FaCheckCircle',
        projects: [
          {
            id: 'p5',
            title: 'QA Process Implementation',
            description: 'Established QA procedures that improved product quality metrics',
            thumbnail: '/images/project5.jpg',
            technologies: ['Testing Frameworks', 'CI/CD'],
            company: 'INTELLTECH',
            year: 2023,
          }
        ],
      },
      children: [
        {
          id: 'agile',
          data: { 
            label: 'Agile', 
            subLabel: 'Agile methodologies and project management',
            color: '#FF9800' // Agile color (orange)
          }
        }
      ]
    }
  ],
};

export function convertTreeNodeToNodesAndEdges(
  treeNode: TreeNode,
  changeShowingChildren: (nodeId: string, showChildren: boolean) => void,
): {
  nodes: Node<TreeViewData>[];
  edges: Edge[];
} {
  const nodes: Node<TreeViewData>[] = [];
  const edges: Edge[] = [];

  function traverse(node: TreeNode, parent?: TreeNode) {
    nodes.push({
      id: node.id,
      data: {
        showingChildren: true,
        setShowingChildren: (showingChildren: boolean) => {
          changeShowingChildren(node.id, showingChildren);
        },
        ...node.data,
      },
      position,
      draggable: false,
      deletable: false,
      type: NodeType.TreeNode,
    });

    if (parent) {
      edges.push({
        id: `e${parent.id}${node.id}`,
        source: parent.id,
        target: node.id,
        type: edgeType,
        animated: false,
        // markerEnd: {
        //   type: MarkerType.ArrowClosed,
        // },
      });
    }

    if (node.children) {
      node.children.forEach((child) => traverse(child, node));
    }
  }

  traverse(treeNode);

  return { nodes, edges };
}
