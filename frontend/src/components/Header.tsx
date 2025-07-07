import React from "react";

const menuLinks = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <a href="/" className="text-xl font-bold text-gray-800 focus:outline-sky-600">
        Antoine Canda
      </a>
      <nav className="space-x-4">
        {menuLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-600 hover:text-sky-700 px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
