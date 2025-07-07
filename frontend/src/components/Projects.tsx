import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projets</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
