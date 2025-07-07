export const projects = [
  {
    slug: "amIunique",
    title: "AmIUnique – Refonte plateforme de fingerprinting (Inria)",
    period: "2018-2020",
    context:
      "Projet de recherche international (Inria, doctorants, chercheurs titulaires) visant à étudier le fingerprinting des navigateurs via la collecte massive d’empreintes. Équipe multilingue (FR/EN), interactions avec des directeurs de thèse, chercheurs et doctorants.",
    objectives:
      "Remplacer un back-end Java/MySQL instable par une plateforme moderne, fiable et scalable, simplifier l’ajout de nouvelles mesures de fingerprinting, automatiser la gestion des données et accélérer la production de résultats scientifiques.",
    missions: [
      "Refonte complète du back-end et du front-end : migration vers Node.js, Express.js, MongoDB et Bootstrap.",
      "Conception d’une architecture permettant d’ajouter/supprimer dynamiquement des tests de fingerprinting sans redémarrer le serveur.",
      "Optimisation du stockage et des calculs statistiques : mise en place d’un pré-calcul nocturne (fenêtre glissante), cache applicatif et gestion de la montée en charge (200 000 à plus de 4 millions d’empreintes).",
      "Développement et déploiement progressif en mode agile, ajout de tests unitaires (TDD), CI/CD, amélioration continue.",
      "Conception et implémentation d’une fonctionnalité innovante de suivi d’empreinte dans le temps (extensions navigateur, timeline des variations).",
      "Accompagnement d’un stagiaire dans la création et l’intégration d’un module de sondage utilisateur.",
      "Accès aux données scientifique et technique aux chercheurs (valorisation, publications, collecte sur IE8+, gestion bot, adaptation continue des besoins).",
    ],
    mainStack: ["Node.js", "Express", "MongoDB", "Bootstrap"],
    stack: [
      "Node.js",
      "Express",
      "JavaScript",
      "Bootstrap",
      "MongoDB",
      "Docker",
      "Git",
      "CI/CD",
      "NGINX",
      "Jest",
      "Linux",
    ],
    highlights: [
      "Migration réussie d’un système instable vers une plateforme robuste et évolutive.",
      "Architecture modulaire facilitant la recherche scientifique (ajout/retrait de critères sans interruption de service).",
      "Traitement de très gros volumes (de 200 000 à >4 millions d’empreintes), gestion de pics (150 000/jour).",
      "Ouverture d’une nouvelle voie de recherche (suivi des empreintes dans le temps, impact sécurité MFA).",
    ],
    results:
      "Plateforme aujourd’hui utilisée et citée dans la communauté scientifique, montée en charge sans rupture, accélération du rythme des publications et simplification du quotidien des chercheurs.",
    link: "https://amiunique.org",
  },

  {
    slug: "doxtreem",
    title: "Doxtreem chez Numen – Développeur applicatif",
    period: "2020–2024",
    context:
      "Plateforme de gestion électronique de documents (GED) destinée à de grands comptes : workflows complexes, gestion des droits, archivage, collaboration et intégration SI. Équipe pluridisciplinaire de 10+ personnes, méthode agile Kanban.",
    objectives:
      "Contribuer activement à la maintenance, à l’évolution continue et à la fiabilité d’une solution critique en environnement exigeant, dans une démarche collective et structurée.",
    missions: [
      "Développement, correction de bugs et refactoring sur une large base de code (Angular, Nest.js, PostgreSQL, Docker).",
      "Traitement de centaines de tickets (maintenance corrective, évolutive et support utilisateur) : rigueur et qualité du code.",
      "Participation aux routines agiles (sprints, recettes, ateliers métier) et à la documentation fonctionnelle et technique.",
      "Collaboration étroite avec l’équipe : revues de code croisées, transmission à la QA, partage des bonnes pratiques.",
      "Contributions ciblées sur de nouvelles fonctionnalités : gestion de licences, premières versions de modules d’injection de données et du serveur de services.",
      "Participation à la mise en place et à l'amélioration des outils d’automatisation et de test de charge (JMeter).",
    ],
    mainStack: ["Angular", "TypeScript", "PostgreSQL"],
    stack: [
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Git",
      "Jira",
      "Docker",
      "JMeter",
      "Material UI",
      "Nest.js",
      "Portainer",
      "Linux",
    ],
    highlights: [
      "Progression majeure dans la collaboration en équipe et l’industrialisation logicielle.",
      "Apprentissage approfondi de la gestion de projets à grande échelle, du cycle de vie produit et de l’amélioration continue.",
      "Contribution significative à la stabilité, à la qualité et à la satisfaction client sur le long terme.",
    ],
    results:
      "Amélioration cumulative de la solution (maintenabilité, robustesse, qualité du service), montée en compétences sur la collaboration et l’outillage professionnel.",
    link: "https://www.numen.fr/ged",
  },
];
