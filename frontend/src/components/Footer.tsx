import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500 flex flex-col md:flex-row md:justify-between items-center px-4">
      <div>
        &copy; {new Date().getFullYear()} Antoine Canda – Tous droits réservés.
      </div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="/mentions-legales" className="hover:underline">
          Mentions légales
        </a>
        <a href="https://www.linkedin.com/in/antoine-canda-ba8056114/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/AcandaPro" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        {/* Ajoute une page /confidentialite si tu veux */}
      </div>
    </footer>
  );
}
