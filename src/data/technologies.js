import { SiLaravel, SiSymfony, SiCodeigniter, SiMysql, SiPostgresql, SiPhp, SiPython, SiRedis, SiTypescript, SiJavascript, SiTailwindcss, SiGithubactions, SiInertia, SiDaisyui } from "react-icons/si"
import { FaReact, FaDocker, FaGitAlt, FaAws, FaVial } from "react-icons/fa"

export const technologies = [
    // Backend
    { name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'Backend', description: 'Primary language for backend development' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', category: 'Backend', description: 'Modern PHP framework for building scalable web applications and APIs' },
    { name: 'Codeigniter', icon: SiCodeigniter, color: '#EF4223', category: 'Backend', description: 'Maintaining and evolving legacy platforms' },
    { name: 'Symfony', icon: SiSymfony, color: '#ffffff', category: 'Backend', description: 'Enterprise architecture and reusable components' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend', description: 'Scripting & AI integrations' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Backend', description: 'Relational database management' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'Backend', description: 'Advanced open-source RDBMS' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Backend', description: 'In-memory data structure store' },
    // Frontend
    { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend', description: 'Component-based UI library for building modern web interfaces' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend', description: 'Typed JavaScript superset' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend', description: 'Core language for interactive web applications' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend', description: 'Utility-first CSS framework for rapid UI development' },
    { name: 'Inertia.js', icon: SiInertia, color: '#FFFFFF', category: 'Frontend', description: 'Modern monolith approach connecting Laravel with React' },
    { name: 'Daisy UI', icon: SiDaisyui, color: '#19CAA0', category: 'Frontend', description: 'Tailwind CSS component library for rapid UI prototyping' },
    // Testing
    { name: 'PHPUnit', icon: FaVial, color: '#A8B1FF', category: 'Testing', description: 'Unit testing framework for PHP' },
    // DevOps
    { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'DevOps', description: 'Container platform' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'DevOps', description: 'Version control system' },
    { name: 'Github Actions', icon: SiGithubactions, color: '#2088FF', category: 'DevOps', description: 'CI/CD automation for build, test and deployment workflows' },
    // Cloud
    { name: 'AWS', icon: FaAws, color: '#FF9900', category: 'Cloud', description: 'EC2, S3, RDS, Lambda, SQS, SNS' },
]