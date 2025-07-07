import React from "react";
import SkillBadge from "./SkillBadge";
import { techSkills } from "../data/techs";

const techCategories: { title: string; items: string[] }[] = [
  {
    title: "Langages standard du web",
    items: ["JavaScript", "TypeScript"],
  },
  {
    title: "Langages & frameworks côté interface (Front-end)",
    items: ["React", "Angular", "Bootstrap", "Material UI", "Tailwind CSS"],
  },
  {
    title: "Langages & frameworks côté serveur (Back-end)",
    items: ["NestJS", "Node.js", "Express"],
  },
  {
    title: "Technologies de gestion de données",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Outils & frameworks de test",
    items: ["Jest", "JMeter"],
  },
  {
    title: "Outils DevOps, serveurs & conteneurs",
    items: ["Docker", "NGINX", "Portainer", "Linux"],
  },
  {
    title: "Collaboration & gestion de code / projet",
    items: ["Git", "Jira"],
  },
];

const softSkills = [
  "Esprit d’analyse et de synthèse",
  "Bonne communication orale et écrite",
  "Adaptabilité et autonomie",
  "Travail en équipe et intelligence collective",
  "Gestion des priorités et respect des délais",
  "Curiosité technique et envie d’apprendre",
  "Sens des responsabilités",
  "Capacité à vulgariser des sujets complexes",
  "Esprit critique et constructif",
  "Fiabilité et rigueur professionnelle",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Compétences techniques */}
          <div>
            {techCategories.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {category.items.map((skillName, idx) => {
                    const key = skillName.toLowerCase();
                    const skill = techSkills[key];
                    return skill ? (
                      <SkillBadge
                        key={idx}
                        name={skill.name}
                        logo={skill.logo}
                        link={skill.url}
                      />
                    ) : (
                      <span key={idx}>{skillName}</span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          {/* Soft skills - centrage vertical amélioré */}
          <div className="flex flex-col justify-center items-center h-full">
            <h3 className="text-xl font-semibold mb-4">Compétences humaines</h3>
            <ul className="list-disc list-inside space-y-2 text-left">
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
