export const defaultResume = {
  personalInfo: {
    fullName: 'Alex Morgan',
    title: 'Frontend Developer',
    email: 'alex.morgan@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    website: 'alexmorgan.dev',
    linkedin: 'linkedin.com/in/alexmorgan',
    photo: ''
  },
  summary: 'Passionate and detail-oriented Frontend Developer with 5+ years of experience building responsive, user-friendly web applications. Skilled in React, JavaScript, and modern CSS frameworks. Committed to creating seamless user experiences and writing clean, maintainable code.',
  experience: [
    {
      id: 'exp-1',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      startDate: '2021-03',
      endDate: '',
      current: true,
      description: 'Led a team of 5 developers in building a React-based e-commerce platform. Implemented responsive design patterns and improved page load times by 40%. Collaborated with UX designers to create intuitive user interfaces.'
    },
    {
      id: 'exp-2',
      title: 'Frontend Developer',
      company: 'Digital Solutions LLC',
      location: 'Oakland, CA',
      startDate: '2019-01',
      endDate: '2021-02',
      current: false,
      description: 'Developed and maintained multiple client-facing web applications using React and Bootstrap. Integrated RESTful APIs and implemented state management solutions. Participated in code reviews and mentored junior developers.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startDate: '2015-09',
      endDate: '2019-05',
      description: 'Graduated with honors. Focus on web development and human-computer interaction.'
    }
  ],
  skills: [
    { id: 'skill-1', name: 'JavaScript', level: 'Advanced' },
    { id: 'skill-2', name: 'React', level: 'Advanced' },
    { id: 'skill-3', name: 'Bootstrap', level: 'Advanced' },
    { id: 'skill-4', name: 'CSS3', level: 'Advanced' },
    { id: 'skill-5', name: 'HTML5', level: 'Advanced' },
    { id: 'skill-6', name: 'Git', level: 'Intermediate' },
    { id: 'skill-7', name: 'TypeScript', level: 'Intermediate' }
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing products, orders, and customer data. Features real-time analytics and inventory management.',
      technologies: 'React, Bootstrap, Chart.js',
      url: 'https://demo-dashboard.example.com',
      github: 'https://github.com/alexmorgan/dashboard'
    },
    {
      id: 'proj-2',
      name: 'Task Management App',
      description: 'A collaborative task management application with drag-and-drop functionality, team assignments, and progress tracking.',
      technologies: 'React, React DnD, Firebase',
      url: 'https://taskapp.example.com',
      github: 'https://github.com/alexmorgan/taskapp'
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'Meta Front-End Developer Professional Certificate',
      organization: 'Meta',
      issueDate: '2022-06',
      url: 'https://coursera.org/verify/meta-frontend'
    },
    {
      id: 'cert-2',
      name: 'AWS Certified Developer',
      organization: 'Amazon Web Services',
      issueDate: '2021-11',
      url: 'https://aws.amazon.com/certification/'
    }
  ],
  languages: [
    { id: 'lang-1', language: 'English', proficiency: 'Native' },
    { id: 'lang-2', language: 'Spanish', proficiency: 'Intermediate' }
  ]
};
