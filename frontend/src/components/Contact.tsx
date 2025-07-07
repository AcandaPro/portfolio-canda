import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f8f9fa] py-20 px-4 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Me contacter</h2>
        <p className="text-gray-600 mb-3">
          Je réponds rapidement (généralement sous 24h) et je suis toujours ouvert à un échange exploratoire, même sans projet défini.
        </p>
        <div className="space-y-3 text-gray-700 text-base flex flex-col items-center">
          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-sky-600 text-xl" />
            <a
              href="mailto:candaantoine@gmail.com"
              className="text-sky-600 hover:underline"
            >
              candaantoine@gmail.com
            </a>
            <button
              onClick={() =>
                window.open(
                  "mailto:candaantoine@gmail.com?subject=Contact%20depuis%20votre%20portfolio",
                  "_blank"
                )
              }
              className="ml-2 px-3 py-1 bg-sky-600 text-white rounded hover:bg-sky-700 transition text-xs"
              aria-label="Envoyer un mail"
            >
              Envoyer un mail
            </button>
          </div>
          {/* Téléphone */}
          <div className="flex items-center gap-3">
            <FaPhone className="text-sky-600 text-xl" />
            <a
              href="tel:+33677835490"
              className="text-sky-600 hover:underline"
            >
              06 77 83 54 90
            </a>
          </div>
          {/* LinkedIn */}
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-sky-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/antoine-canda-ba8056114/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline"
            >
              LinkedIn / Antoine Canda
            </a>
          </div>
          {/* GitHub */}
          <div className="flex items-center gap-3">
            <FaGithub className="text-sky-600 text-xl" />
            <a
              href="https://github.com/AcandaPro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline"
            >
              github.com/AcandaPro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
