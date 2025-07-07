import React from "react";
import SkillBadge from "./SkillBadge";
import { techSkills } from "../data/techs";
import { Link } from "react-router-dom";

type ProjectProps = {
  slug: string;
  title: string;
  context: string;
  mainStack: string[];
  period: string;
};

const ProjectCard: React.FC<ProjectProps> = ({
  slug,
  title,
  context,
  mainStack = [],
  period,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{period}</p>
      <p className="text-gray-600 mt-2">{context}</p>
      <div className="flex flex-wrap gap-3 items-center mt-4">
        {mainStack.map((tech) => {
          const key = tech.toLowerCase();
          const skill = techSkills[key];
          return skill ? (
            <SkillBadge
              key={key}
              name={skill.name}
              logo={skill.logo}
              link={skill.url}
            />
          ) : (
            <span key={tech}>{tech}</span>
          );
        })}
      </div>
      <div className="flex-grow" />
      <Link
        to={`/projects/${slug}`}
        className="mt-4 inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
      >
        Voir plus
      </Link>
    </div>
  );
};

export default ProjectCard;
