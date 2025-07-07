import React from "react";

type SkillBadgeProps = {
  name: string;
  logo: string;
  link: string;
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, logo, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      className="flex flex-col items-center space-y-1 w-20 hover:scale-105 transition-transform"
    >
      <img src={logo} alt={name} className="w-10 h-10" />
      <span className="text-xs text-center text-gray-700">{name}</span>
    </a>
  );
};

export default SkillBadge;
