import React from "react";

// Met ta photo dans public/photo.jpg ou ajuste le path !
const photoPath = "/photo.jpg";

export default function About() {
  // On testera l'existence de la photo côté front, 
  // mais React ne permet pas try/catch l'import directement si fichier manquant dans public.
  // On fait donc un fallback simple :
  const [photoExists, setPhotoExists] = React.useState(true);

  React.useEffect(() => {
    const img = new window.Image();
    img.src = photoPath;
    img.onload = () => setPhotoExists(true);
    img.onerror = () => setPhotoExists(false);
  }, []);

  return (
    <section id="about" className="bg-white py-20 px-4 text-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {photoExists && (
          <img
            src={photoPath}
            alt="Antoine Canda portrait"
            className="w-40 h-40 object-cover rounded-full shadow-md mb-6 md:mb-0 md:mr-10"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold mb-6">À propos</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-2">
            Développeur full stack passionné, j’aide les entreprises et les équipes à transformer leurs idées en applications robustes, évolutives et performantes. 
            Avec une forte culture de la rigueur, de la lisibilité du code et de l’expérience utilisateur, 
            j’interviens aussi bien sur des missions de prototypage, de recherche (ex : fingerprinting web) que sur l’industrialisation de produits numériques.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mb-2">
            J’ai une solide expérience sur toute la stack JavaScript/TypeScript (front et back), sur la donnée, le DevOps, et je travaille aussi bien en autonomie qu’en équipe.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 font-semibold mb-2">
            Basé dans les Hauts-de-France, disponible à distance ou en présentiel.
          </p>
          <p className="text-green-700 font-semibold mt-4">
            Actuellement disponible pour missions freelance, CDD ou CDI&nbsp;—&nbsp;<span className="underline">n’hésitez pas à me contacter !</span>
          </p>
        </div>
      </div>
    </section>
  );
}
