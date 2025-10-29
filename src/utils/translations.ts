export interface Translations {
  nav: {
    about: string;
    projects: string;
    clients: string;
    contact: string;
    downloadCV: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    viewProjects: string;
    contact: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    mainTechnologies: string;
    contact: string;
    viewProjects: string;
  };
  projects: {
    title: string;
    subtitle: string;
    featured: string;
    viewProject: string;
    code: string;
    viewAllProjects: string;
  };
  clients: {
    title: string;
    subtitle: string;
    whatClientsSay: string;
    availableForProjects: string;
    responseTime: string;
    projectsCompleted: string;
    yearsExperience: string;
    successRate: string;
  };
  contact: {
    title: string;
    subtitle: string;
    sendMessage: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    otherWays: string;
    availableForProjects: string;
    responseTime: string;
    projectsCompleted: string;
    successRate: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    frontendDevelopment: string;
    technicalConsulting: string;
    webOptimization: string;
    mentoring: string;
    backToTop: string;
  };
}

export const translations: Record<string, Translations> = {
  es: {
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      clients: "Clientes",
      contact: "Contacto",
      downloadCV: "Descargar CV"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Gerardo",
      title: "Fullstack Developer",
      subtitle: "Creando experiencias digitales excepcionales con las tecnologías más avanzadas. Especializado en React, Nest.js, Astro y arquitecturas modernas.",
      viewProjects: "Ver Proyectos",
      contact: "Contactar"
    },
    about: {
      title: "Sobre Mí",
      greeting: "Saludos",
      nickname: "Mis amigos me llaman Gera!",
      description1: "Soy un Desarrollador Fullstack apasionado por crear experiencias digitales excepcionales que combinan diseño innovador con tecnología de vanguardia.",
      description2: "Con experiencia en el desarrollo web fullstack, he trabajado en proyectos para empresas privadas y gubernamentales, contribuyendo con soluciones tecnológicas innovadoras.",
      description3: "Mi enfoque se centra en escribir código limpio, escalable y mantenible, utilizando las últimas tecnologías como React, Nest.js, TypeScript y Astro para crear aplicaciones web modernas y de alto rendimiento.",
      mainTechnologies: "Tecnologías Principales",
      contact: "Contactar",
      viewProjects: "Ver Proyectos"
    },
    projects: {
      title: "Proyectos",
      subtitle: "Algunos proyectos más relevantes en los que aporté y desarrollé activamente",
      featured: "Destacado",
      viewProject: "Ver Proyecto",
      code: "Código",
      viewAllProjects: "Ver Todos los Proyectos"
    },
    clients: {
      title: "Clientes",
      subtitle: "He tenido el privilegio de trabajar con empresas innovadoras y equipos talentosos en proyectos que marcan la diferencia.",
      whatClientsSay: "Lo que dicen mis clientes",
      availableForProjects: "Disponible para nuevos proyectos",
      responseTime: "Tiempo de respuesta",
      projectsCompleted: "Proyectos Completados",
      yearsExperience: "Años de Experiencia",
      successRate: "Tasa de Éxito"
    },
    contact: {
      title: "Contacto",
      subtitle: "Conectemos y trabajemos juntos en tu próximo proyecto digital.",
      sendMessage: "Envíame un mensaje",
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      availableForProjects: "Disponible para nuevos proyectos",
      responseTime: "Tiempo de respuesta",
      projectsCompleted: "Proyectos completados",
      successRate: "Tasa de éxito"
    },
    footer: {
      description: "Desarrollador Fullstack especializado en crear experiencias digitales excepcionales con las tecnologías más avanzadas.",
      quickLinks: "Enlaces Rápidos",
      services: "Servicios",
      frontendDevelopment: "Desarrollo Frontend",
      technicalConsulting: "Consultoría Técnica",
      webOptimization: "Optimización Web",
      mentoring: "Mentoría",
      backToTop: "Volver arriba"
    }
  },
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      clients: "Clients",
      contact: "Contact",
      downloadCV: "Download CV"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Gerardo",
      title: "Fullstack Developer",
      subtitle: "Creating exceptional digital experiences with the most advanced technologies. Specialized in React, Nest.js, Astro and modern architectures.",
      viewProjects: "View Projects",
      contact: "Contact"
    },
    about: {
      title: "About Me",
      greeting: "Greetings",
      nickname: "My friends call me Gera!",
      description1: "I'm a Fullstack Developer passionate about creating exceptional digital experiences that combine innovative design with cutting-edge technology.",
      description2: "With experience in fullstack web development, I've worked on projects for private companies and government organizations, contributing with innovative technological solutions.",
      description3: "My approach focuses on writing clean, scalable and maintainable code, using the latest technologies like React, Nest.js, TypeScript and Astro to create modern and high-performance web applications.",
      mainTechnologies: "Main Technologies",
      contact: "Contact",
      viewProjects: "View Projects"
    },
    projects: {
      title: "Projects",
      subtitle: "Some of the most relevant projects where I actively contributed and developed",
      featured: "Featured",
      viewProject: "View Project",
      code: "Code",
      viewAllProjects: "View All Projects"
    },
    clients: {
      title: "Clients",
      subtitle: "I've had the privilege of working with innovative companies and talented teams on projects that make a difference.",
      whatClientsSay: "What my clients say",
      availableForProjects: "Available for new projects",
      responseTime: "Response time",
      projectsCompleted: "Projects Completed",
      yearsExperience: "Years of Experience",
      successRate: "Success Rate"
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect and work together on your next digital project.",
      sendMessage: "Send me a message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      otherWays: "Other ways to contact me",
      availableForProjects: "Available for new projects",
      responseTime: "Response time",
      projectsCompleted: "Projects completed",
      successRate: "Success rate"
    },
    footer: {
      description: "Fullstack Developer specialized in creating exceptional digital experiences with the most advanced technologies.",
      quickLinks: "Quick Links",
      services: "Services",
      frontendDevelopment: "Frontend Development",
      technicalConsulting: "Technical Consulting",
      webOptimization: "Web Optimization",
      mentoring: "Mentoring",
      backToTop: "Back to top"
    }
  }
};

export function getTranslations(lang: string): Translations {
  return translations[lang] || translations.es;
}
