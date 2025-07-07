import React from "react";

export default function Hero() {
  return (
    <section className="h-[70vh] min-h-[400px] flex items-center justify-center bg-[#f8f9fa] text-gray-800 pt-16">
      <div className="text-center max-w-2xl px-4 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 flex flex-col items-center">
          <span>
            🚀 Développeur Full Stack
          </span>
          <span className="text-lg font-light text-gray-600 mt-2">
            {`(JavaScript, TypeScript, React, Node.js & co)`}
          </span>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          J’aide les entreprises et porteurs de projets à réaliser des applications web
          modernes, fiables, bien pensées et évolutives, avec une vraie culture produit.
        </p>
        <a
          href="#contact"
          className="inline-block bg-sky-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-sky-700 transition text-lg font-semibold"
        >
          Me contacter facilement
        </a>
      </div>
    </section>
  );
}
