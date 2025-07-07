import React from "react";

type ProjectDetailsProps = {
  title: string;
  period: string;
  context: string;
  objectives: string;
  missions: string[];
  stack: string[];
  highlights: string[];
  results?: string;
  link?: string;
};

export default function ProjectDetails({
  title,
  period,
  context,
  objectives,
  missions = [],
  stack = [],
  highlights = [],
  results,
  link,
}: ProjectDetailsProps) {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-4">{period}</p>
      <h2 className="text-lg font-semibold mb-2">Contexte</h2>
      <p className="mb-3">{context}</p>
      <h2 className="text-lg font-semibold mb-2">Objectifs</h2>
      <p className="mb-3">{objectives}</p>
      <h2 className="text-lg font-semibold mb-2">Missions</h2>
      <ul className="list-disc ml-5 mb-3">
        {missions.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mb-2">Stack technique</h2>
      <ul className="flex flex-wrap gap-3 mb-3">
        {stack.map((tech, i) => (
          <li
            key={i}
            className="bg-gray-100 px-2 py-1 rounded text-sm font-medium"
          >
            {tech}
          </li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mb-2">Points marquants</h2>
      <ul className="list-disc ml-5 mb-3">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      {results && (
        <>
          <h2 className="text-lg font-semibold mb-2">Résultats / Impact</h2>
          <p className="mb-3">{results}</p>
        </>
      )}
      {link && (
        <a
          href={link}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le projet
        </a>
      )}
    </div>
  );
}
