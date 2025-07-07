import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectDetails from "./ProjectDetails";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-8 text-center">Projet non trouvé.</div>;

  return (
    <section className="py-12 px-4 bg-white text-gray-800 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="inline-block text-blue-600 hover:underline mb-6">
          ← Retour à l’accueil
        </Link>
        <ProjectDetails {...project} />
      </div>
    </section>
  );
}
