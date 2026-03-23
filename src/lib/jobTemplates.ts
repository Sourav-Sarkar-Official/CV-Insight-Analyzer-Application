import { JobDescriptionTemplate } from '@/types';

export const jobDescriptionTemplates: JobDescriptionTemplate[] = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Seeking a skilled Frontend Developer to build responsive user interfaces using modern frameworks. You will collaborate with design teams, implement interactive features, and optimize web performance. Strong focus on React/Vue/Angular development with mobile-first approach.',
    skills: ['React', 'Vue.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Responsive Design', 'State Management', 'Webpack', 'Git'],
    responsibilities: [
      'Develop responsive web applications using React/Vue/Angular',
      'Collaborate with UX/UI designers to implement pixel-perfect designs',
      'Optimize applications for maximum speed and scalability',
      'Ensure cross-browser compatibility and mobile responsiveness',
      'Write clean, maintainable, and well-documented code'
    ]
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    description: 'Join our team as a Full Stack Developer to build end-to-end web solutions. You will handle both frontend and backend development, manage databases, and deploy applications. Experience with modern JavaScript frameworks and server-side technologies required.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JavaScript', 'TypeScript', 'REST APIs', 'GraphQL', 'Docker', 'AWS'],
    responsibilities: [
      'Develop full-stack web applications from concept to deployment',
      'Design and implement RESTful APIs and database schemas',
      'Build responsive frontend interfaces with modern frameworks',
      'Manage cloud infrastructure and deployment pipelines',
      'Collaborate with cross-functional teams on product development'
    ]
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    description: 'We need a Backend Developer to architect robust server-side solutions and APIs. You will design scalable systems, manage databases, and ensure high performance. Focus on API development, database optimization, and system architecture.',
    skills: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'Microservices'],
    responsibilities: [
      'Design and develop scalable backend systems and APIs',
      'Optimize database performance and implement caching strategies',
      'Build and maintain microservices architecture',
      'Ensure system security and implement authentication mechanisms',
      'Monitor application performance and troubleshoot issues'
    ]
  },
  {
    id: 'uiux-developer',
    title: 'UI/UX Developer',
    description: 'Looking for a UI/UX Developer to bridge design and development. You will translate design mockups into functional interfaces, create interactive prototypes, and ensure exceptional user experiences. Strong design sense with technical implementation skills.',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'React', 'Vue.js', 'CSS/SASS', 'JavaScript', 'Prototyping', 'User Testing', 'Design Systems', 'Accessibility'],
    responsibilities: [
      'Transform design mockups into pixel-perfect web interfaces',
      'Create interactive prototypes and conduct user testing',
      'Develop and maintain design systems and component libraries',
      'Ensure accessibility compliance and responsive design',
      'Collaborate closely with designers and product managers'
    ]
  },
  {
    id: 'junior-web-developer',
    title: 'Junior Web Developer',
    description: 'Perfect entry-level opportunity for aspiring web developers. You will work on real projects, learn modern technologies, and grow your skills. Great learning environment with mentorship and hands-on experience in web development fundamentals.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design', 'Web APIs', 'Bootstrap', 'Node.js', 'SQL'],
    responsibilities: [
      'Build and maintain web applications using HTML, CSS, and JavaScript',
      'Learn and apply modern frontend frameworks like React',
      'Collaborate with senior developers on project features',
      'Participate in code reviews and follow best practices',
      'Contribute to documentation and testing efforts'
    ]
  }
];

export const getTemplateById = (id: string): JobDescriptionTemplate | undefined => {
  return jobDescriptionTemplates.find(template => template.id === id);
};

