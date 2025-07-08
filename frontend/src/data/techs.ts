export interface TechSkill {
  name: string;
  logo: string;
  url: string;
}

export const techSkills: Record<string, TechSkill> = {
  javascript: {
    name: "JavaScript",
    logo: "logos/JavaScript.svg",
    url: "https://www.javascript.com/",
  },
  typescript: {
    name: "TypeScript",
    logo: "logos/TypeScript.svg",
    url: "https://www.typescriptlang.org/",
  },
  react: {
    name: "React",
    logo: "logos/React.svg",
    url: "https://react.dev/",
  },
  angular: {
    name: "Angular",
    logo: "logos/angular.svg",
    url: "https://angular.io/",
  },
  bootstrap: {
    name: "Bootstrap",
    logo: "logos/Bootstrap.svg",
    url: "https://getbootstrap.com/",
  },
  "material ui": {
    name: "Material UI",
    logo: "logos/Material UI.svg",
    url: "https://mui.com/",
  },
  "tailwind css": {
    name: "Tailwind CSS",
    logo: "logos/Tailwind CSS.svg",
    url: "https://tailwindcss.com/",
  },
  nestjs: {
    name: "NestJS",
    logo: "logos/Nest.js.svg",
    url: "https://nestjs.com/",
  },
  "node.js": {
    name: "Node.js",
    logo: "logos/Node.js.svg",
    url: "https://nodejs.org/",
  },
  express: {
    name: "Express",
    logo: "logos/Express.svg",
    url: "https://expressjs.com/",
  },
  mongodb: {
    name: "MongoDB",
    logo: "logos/MongoDB.svg",
    url: "https://www.mongodb.com/",
  },
  postgresql: {
    name: "PostgreSQL",
    logo: "logos/PostgreSQL.svg",
    url: "https://www.postgresql.org/",
  },
  mysql: {
    name: "MySQL",
    logo: "logos/MySQL.svg",
    url: "https://www.mysql.com/",
  },
  jest: {
    name: "Jest",
    logo: "logos/Jest.svg",
    url: "https://jestjs.io/",
  },
  jmeter: {
    name: "JMeter",
    logo: "logos/JMeter.svg",
    url: "https://jmeter.apache.org/",
  },
  docker: {
    name: "Docker",
    logo: "logos/Docker.svg",
    url: "https://www.docker.com/",
  },
  nginx: {
    name: "NGINX",
    logo: "logos/NGINX.svg",
    url: "https://www.nginx.com/",
  },
  portainer: {
    name: "Portainer",
    logo: "logos/Portainer.svg",
    url: "https://www.portainer.io/",
  },
  linux: {
    name: "Linux",
    logo: "logos/Linux.svg",
    url: "https://www.linux.org/",
  },
  git: {
    name: "Git",
    logo: "logos/Git.svg",
    url: "https://git-scm.com/",
  },
  jira: {
    name: "Jira",
    logo: "logos/Jira.svg",
    url: "https://www.atlassian.com/software/jira",
  },
  // Ajoute d'autres si besoin !
};
