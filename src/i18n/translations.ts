export type Lang = 'fr' | 'en'

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      equipment: 'Équipements',
      why: 'Pourquoi nous',
      contact: 'Contact',
      cta: 'Demander un devis',
    },
    hero: {
      eyebrow: 'Protection privée · Conakry, Guinée',
      title: 'Votre sécurité,',
      titleAccent: 'notre priorité.',
      subtitle:
        "MAGIC SECURITY INTER vous accompagne avec des agents de sécurité professionnels et des solutions adaptées à la protection de vos personnes, biens et activités.",
      ctaPrimary: 'Demander un devis',
      ctaSecondary: 'Nous contacter',
      stat1: 'Agents',
      stat1v: 'Jour & nuit',
      stat2: 'Couverture',
      stat2v: 'Rotation continue',
      stat3: 'Équipement',
      stat3v: 'Fourni & pro',
      scroll: 'Découvrir',
    },
    coverage: {
      eyebrow: 'Zone de couverture',
      title: 'Présents là où vous êtes, à Conakry',
      subtitle: "Notre zone d'intervention actuelle couvre Conakry, avec une base à Coleah Domino, dans la commune de Matam.",
      city: 'Conakry, Guinée',
      district: 'Coleah Domino · Matam',
    },
    trust: {
      eyebrow: 'Pourquoi nous choisir',
      title: 'Une équipe fiable, une protection sérieuse',
      subtitle:
        "Chaque mission est menée avec rigueur, discipline et un engagement constant envers la sécurité de nos clients.",
      cards: [
        {
          title: 'Agents professionnels',
          text: 'Des agents formés, disciplinés et engagés pour assurer la sécurité de vos installations.',
        },
        {
          title: 'Disponibilité jour & nuit',
          text: 'Des solutions adaptées à vos besoins de surveillance pendant la journée, la nuit ou en rotation.',
        },
        {
          title: 'Équipement professionnel',
          text: 'Des agents équipés avec le matériel nécessaire pour assurer efficacement leurs missions.',
        },
        {
          title: 'Engagement & fiabilité',
          text: 'Une approche professionnelle basée sur la vigilance, la responsabilité et la confiance.',
        },
      ],
    },
    services: {
      eyebrow: 'Ce que nous offrons',
      title: 'Nos services de sécurité',
      subtitle: 'Des solutions de protection adaptées aux entreprises, institutions et particuliers.',
      items: [
        { title: 'Sécurité de jour', text: 'Surveillance et contrôle pendant les heures de journée.' },
        { title: 'Sécurité de nuit', text: 'Protection et surveillance nocturne de vos installations.' },
        { title: 'Service en rotation', text: "Organisation des équipes pour assurer une présence continue." },
        {
          title: 'Sécurité des entreprises',
          text: 'Solutions de surveillance adaptées aux entreprises et locaux professionnels.',
        },
        {
          title: 'Protection des biens et installations',
          text: 'Surveillance des bâtiments, propriétés et espaces professionnels.',
        },
        {
          title: "Fourniture d'équipements de sécurité",
          text: 'Tenues, chaussures de sécurité, casquettes, torches, talkies-walkies, matraques et autres équipements.',
        },
      ],
      cta: 'Demander ce service',
    },
    personnel: {
      eyebrow: 'Nos agents',
      title: 'Des agents prêts à protéger ce qui compte pour vous.',
      subtitle:
        "Discipline, vigilance et professionnalisme sur le terrain — à Conakry et partout où votre activité l'exige.",
      points: [
        'Présence professionnelle sur tous types de sites',
        'Rotation organisée pour une couverture continue',
        'Coordination et supervision des équipes sur le terrain',
      ],
    },
    equipment: {
      eyebrow: 'Équipements',
      title: 'Équipements professionnels',
      subtitle: "Nous fournissons à nos agents le matériel nécessaire pour mener à bien leurs missions.",
      items: [
        { title: 'Uniformes', text: 'Tenues professionnelles pour une présence disciplinée.' },
        { title: 'Casquettes', text: 'Accessoire réglementaire de la tenue de service.' },
        { title: 'Chaussures de sécurité', text: 'Adaptées aux missions de terrain prolongées.' },
        { title: 'Matraques', text: 'Équipement de dissuasion standard.' },
        { title: 'Torches', text: 'Éclairage pour les rondes et missions de nuit.' },
        { title: 'Talkies-walkies', text: 'Communication en temps réel entre agents.' },
      ],
    },
    quote: {
      eyebrow: 'Devis gratuit',
      title: 'Besoin d’une solution de sécurité ?',
      subtitle: 'Parlez-nous de vos besoins et notre équipe pourra vous orienter vers une solution adaptée.',
      form: {
        name: 'Nom complet',
        namePh: 'Votre nom et prénom',
        company: "Nom de l'entreprise",
        companyPh: "Nom de votre entreprise (optionnel)",
        phone: 'Téléphone',
        phonePh: '+224 6XX XX XX XX',
        email: 'Email',
        emailPh: 'vous@exemple.com',
        serviceType: 'Type de service recherché',
        serviceTypePh: 'Sélectionnez un service',
        agents: "Nombre d'agents souhaité",
        agentsPh: 'Ex : 2',
        coverage: 'Type de couverture',
        coverageDay: 'Jour',
        coverageNight: 'Nuit',
        coverageRotation: 'Rotation',
        message: 'Message',
        messagePh: 'Décrivez votre besoin en quelques lignes…',
        submit: 'Demander un devis',
        success: 'Merci ! Votre demande a été préparée. Elle s’ouvrira dans votre application e-mail.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre sécurité',
      subtitle: 'Notre équipe est disponible pour répondre à vos questions et étudier vos besoins.',
      address: 'Adresse',
      addressValue: 'Coleah Domino, c/ Matam, Conakry, Guinée',
      phone: 'Téléphone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      whatsappCta: 'Discuter sur WhatsApp',
      mapNote: 'Coleah Domino — Commune de Matam, Conakry',
    },
    footer: {
      bio: 'Une société qui s’engage pour vous pour la sécurité des personnes, des biens et services.',
      quickLinks: 'Liens rapides',
      services: 'Services',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
    },
    stickyCta: 'Devis gratuit',
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      equipment: 'Equipment',
      why: 'Why us',
      contact: 'Contact',
      cta: 'Get a quote',
    },
    hero: {
      eyebrow: 'Private Protection · Conakry, Guinea',
      title: 'Your safety,',
      titleAccent: 'our priority.',
      subtitle:
        'MAGIC SECURITY INTER supports you with professional security agents and tailored solutions to protect your people, property and operations.',
      ctaPrimary: 'Get a quote',
      ctaSecondary: 'Contact us',
      stat1: 'Agents',
      stat1v: 'Day & night',
      stat2: 'Coverage',
      stat2v: 'Continuous rotation',
      stat3: 'Equipment',
      stat3v: 'Provided & pro',
      scroll: 'Discover',
    },
    coverage: {
      eyebrow: 'Coverage area',
      title: 'Present where you are, in Conakry',
      subtitle: 'Our current service area covers Conakry, based out of Coleah Domino in the Matam district.',
      city: 'Conakry, Guinea',
      district: 'Coleah Domino · Matam',
    },
    trust: {
      eyebrow: 'Why choose us',
      title: 'A reliable team, serious protection',
      subtitle: 'Every mission is carried out with rigor, discipline and an ongoing commitment to our clients’ safety.',
      cards: [
        {
          title: 'Professional agents',
          text: 'Trained, disciplined and committed agents to secure your premises.',
        },
        {
          title: 'Day & night availability',
          text: 'Solutions tailored to your monitoring needs — daytime, nighttime, or in rotation.',
        },
        {
          title: 'Professional equipment',
          text: 'Agents equipped with the necessary gear to carry out their missions effectively.',
        },
        {
          title: 'Commitment & reliability',
          text: 'A professional approach built on vigilance, responsibility and trust.',
        },
      ],
    },
    services: {
      eyebrow: 'What we offer',
      title: 'Our security services',
      subtitle: 'Protection solutions tailored to businesses, institutions and individuals.',
      items: [
        { title: 'Daytime security', text: 'Monitoring and access control during daytime hours.' },
        { title: 'Nighttime security', text: 'Night-time protection and surveillance of your premises.' },
        { title: 'Rotation service', text: 'Team scheduling to ensure continuous presence.' },
        {
          title: 'Business security',
          text: 'Surveillance solutions tailored to companies and professional premises.',
        },
        {
          title: 'Property & premises protection',
          text: 'Monitoring of buildings, properties and professional spaces.',
        },
        {
          title: 'Security equipment supply',
          text: 'Uniforms, safety shoes, caps, flashlights, walkie-talkies, batons and other equipment.',
        },
      ],
      cta: 'Request this service',
    },
    personnel: {
      eyebrow: 'Our agents',
      title: 'Agents ready to protect what matters to you.',
      subtitle: 'Discipline, vigilance and professionalism on the ground — in Conakry and wherever your business needs it.',
      points: [
        'Professional presence across all site types',
        'Organized rotation for continuous coverage',
        'Coordination and supervision of field teams',
      ],
    },
    equipment: {
      eyebrow: 'Equipment',
      title: 'Professional equipment',
      subtitle: 'We provide our agents with the gear they need to carry out their missions.',
      items: [
        { title: 'Uniforms', text: 'Professional attire for a disciplined presence.' },
        { title: 'Caps', text: 'Standard accessory of the service uniform.' },
        { title: 'Safety shoes', text: 'Suited for extended field duty.' },
        { title: 'Batons', text: 'Standard deterrence equipment.' },
        { title: 'Flashlights', text: 'Lighting for patrols and night missions.' },
        { title: 'Walkie-talkies', text: 'Real-time communication between agents.' },
      ],
    },
    quote: {
      eyebrow: 'Free quote',
      title: 'Need a security solution?',
      subtitle: 'Tell us about your needs and our team will guide you toward the right solution.',
      form: {
        name: 'Full name',
        namePh: 'Your full name',
        company: 'Company name',
        companyPh: 'Your company name (optional)',
        phone: 'Phone',
        phonePh: '+224 6XX XX XX XX',
        email: 'Email',
        emailPh: 'you@example.com',
        serviceType: 'Service type needed',
        serviceTypePh: 'Select a service',
        agents: 'Number of agents needed',
        agentsPh: 'E.g. 2',
        coverage: 'Coverage type',
        coverageDay: 'Day',
        coverageNight: 'Night',
        coverageRotation: 'Rotation',
        message: 'Message',
        messagePh: 'Describe your needs in a few lines…',
        submit: 'Request a quote',
        success: 'Thank you! Your request is ready and will open in your email app.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your security',
      subtitle: 'Our team is available to answer your questions and review your needs.',
      address: 'Address',
      addressValue: 'Coleah Domino, c/ Matam, Conakry, Guinea',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      whatsappCta: 'Chat on WhatsApp',
      mapNote: 'Coleah Domino — Matam district, Conakry',
    },
    footer: {
      bio: 'A company committed to the security of people, property and services.',
      quickLinks: 'Quick links',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    stickyCta: 'Free quote',
  },
} as const

type Widen<T> = T extends readonly (infer U)[]
  ? readonly Widen<U>[]
  : T extends object
    ? { readonly [K in keyof T]: Widen<T[K]> }
    : T extends string
      ? string
      : T

export type Translations = Widen<typeof translations.fr>
