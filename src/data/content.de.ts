import type { SiteContent } from "@/types/content";

export const contentDe: SiteContent = {
  nav: {
    home: "Startseite",
    services: "Dienstleistungen",
    industries: "Branchen",
    jobs: "Karriere",
    faqs: "Häufige Fragen",
    contact: "Kontakt",
    callToAction: "Rufen Sie uns an",
    whatsappShort: "WhatsApp",
    whatsappFull: "Kontaktieren Sie uns über WhatsApp",
  },

  hero: {
    title: "Zuverlässige Reinigung, auf die Sie vertrauen können",
    subtitle:
      "Von Büros über Treppenhäuser bis hin zu Endreinigungen – AS Gebäudereinigung bietet gründliche, professionelle Reinigung für Privathaushalte und Unternehmen in Freiburg – zuverlässig und fachgerecht, jedes Mal.",
    primaryCta: "Kostenloses Angebot erhalten",
    secondaryCta: "Unsere Dienstleistungen",
  },

  about: {
    heading: "Über AS Gebäudereinigung",
    intro:
      "AS Gebäudereinigung ist ein Freiburger Reinigungsunternehmen, das auf Zuverlässigkeit und Liebe zum Detail setzt. Wir arbeiten für Privathaushalte, Büros und Wohngebäude – und bringen bei jedem Auftrag, ob groß oder klein, denselben hohen Anspruch an Sorgfalt mit.",
    mission:
      "Unsere Mission ist einfach: Wir bieten zuverlässige Reinigung ohne Kompromisse – damit unsere Kunden darauf vertrauen können, dass ihre Räumlichkeiten wirklich bestens gepflegt sind.",
    features: {
      trusted: {
        title: "Vertrauenswürdig & zuverlässig",
        description: "Konstanter, zuverlässiger Service, auf den Sie sich jederzeit verlassen können.",
      },
      thorough: {
        title: "Gründliche Reinigung",
        description: "Detailorientierte Arbeit, die jeden Raum wirklich sauber hinterlässt.",
      },
      punctual: {
        title: "Pünktlicher Service",
        description: "Wir erscheinen termingerecht und respektieren Ihre Zeit.",
      },
    },
  },

  homeSections: {
    featuredServices: {
      heading: "Unsere Dienstleistungen",
      subtitle:
        "Von der regelmäßigen Unterhaltsreinigung bis hin zu speziellen Reinigungen bieten wir ein umfassendes Leistungsspektrum für Privathaushalte und Unternehmen.",
    },
    industries: {
      heading: "Branchen, die wir bedienen",
      subtitle:
        "Wir unterstützen eine Vielzahl von Unternehmen und Immobilien mit Reinigungsleistungen, die auf ihre individuellen Bedürfnisse abgestimmt sind.",
    },
    testimonials: {
      heading: "Was unsere Kunden sagen",
      subtitle: "Echtes Feedback von den Menschen und Unternehmen, mit denen wir zusammenarbeiten.",
      emptyStateTitle: "Bewertungen folgen bald",
      emptyStateMessage:
        "Wir sind ein neues Unternehmen und bauen unseren guten Ruf mit jedem Auftrag weiter auf. Kundenbewertungen werden hier veröffentlicht, sobald sie eingehen.",
    },
  },

  cta: {
    requestQuote: "Angebot anfordern",
  },

  services: {
    "maintenance-cleaning": {
      title: "Unterhaltsreinigung",
      description: "Regelmäßige, planmäßige Reinigung, die Ihre Räumlichkeiten dauerhaft frisch hält.",
      longDescription:
        "Regelmäßige Reinigung nach einem Zeitplan, der zu Ihrer Immobilie passt – wöchentlich, zweiwöchentlich oder monatlich. Wir sorgen dafür, dass Ihre Räumlichkeiten stets gepflegt und präsentabel bleiben, ohne dass Sie sich darum kümmern müssen.",
      benefits: [
        "Flexible Terminplanung passend zu Ihren Bedürfnissen",
        "Konstante Qualitätsstandards bei jedem Besuch",
        "Ein zuverlässiges Team, das Sie kennen und dem Sie vertrauen können",
      ],
    },
    "office-cleaning": {
      title: "Büroreinigung",
      description: "Professionelle Reinigung für Büros, die Ihren Arbeitsplatz gepflegt und repräsentativ hält.",
      longDescription:
        "Schreibtische, Gemeinschaftsbereiche, Küchen und Sanitäranlagen werden professionell gereinigt – auf Wunsch außerhalb Ihrer Arbeitszeiten, damit Ihr Team ungestört arbeiten kann.",
      benefits: [
        "Auf Wunsch außerhalb der Geschäftszeiten",
        "Reinigung von Schreibtischen, Küchen und Gemeinschaftsbereichen",
        "Ein gesünderer und gepflegterer Arbeitsplatz",
      ],
    },
    "stairwell-cleaning": {
      title: "Treppenhausreinigung",
      description: "Gründliche Reinigung von Treppenhäusern und gemeinschaftlich genutzten Gebäudebereichen.",
      longDescription:
        "Regelmäßige Reinigung von Treppenhäusern, Eingangsbereichen und gemeinschaftlich genutzten Verkehrsflächen – damit der erste Eindruck Ihres Gebäudes für Bewohner und Besucher gleichermaßen gepflegt ist.",
      benefits: [
        "Regelmäßige Reinigungsintervalle für Gemeinschaftsbereiche",
        "Verbessert den ersten Eindruck bei Besuchern",
        "Geeignet für Wohn- und Geschäftsgebäude",
      ],
    },
    "window-cleaning": {
      title: "Fensterreinigung",
      description: "Streifenfreie Fensterreinigung für Privathaushalte und Gewerbeimmobilien.",
      longDescription:
        "Innen- und Außenreinigung von Fenstern für wirklich streifenfreie Scheiben – für Wohnungen, Büros und Schaufenster, bei denen klare und gepflegte Fenster einen Unterschied machen.",
      benefits: [
        "Innen- und Außenreinigung verfügbar",
        "Streifenfreies Ergebnis",
        "Geeignet für Privathaushalte und gewerbliche Schaufenster",
      ],
    },
    "final-cleaning": {
      title: "Endreinigung",
      description: "Gründliche Umzugs- und Übergabereinigung, die Räumlichkeiten makellos hinterlässt.",
      longDescription:
        "Gründliche Endreinigung vor der Übergabe einer Immobilie – damit die Räumlichkeiten den Ansprüchen von Vermietern und Hausverwaltungen bei einem Auszug entsprechen.",
      benefits: [
        "Übergabefertige Ergebnisse",
        "Reinigung von Küchen, Badezimmern und allen Räumen",
        "Flexible Terminplanung rund um den Auszugstermin",
      ],
    },
    "special-cleaning": {
      title: "Sonderreinigung",
      description: "Einmalige Grund- und Spezialreinigungen, abgestimmt auf besondere Anforderungen und Anlässe.",
      longDescription:
        "Einmalige gründliche Reinigungen für besondere Situationen – beispielsweise nach Renovierungsarbeiten, saisonale Grundreinigungen oder die Vorbereitung von Räumlichkeiten für einen bestimmten Anlass.",
      benefits: [
        "Individuell auf Ihre Situation abgestimmt",
        "Einmaliger Auftrag ohne laufende Verpflichtung",
        "Gründliche Reinigung über die routinemäßige Pflege hinaus",
      ],
    },
    "household-cleaning": {
      title: "Haushaltsreinigung / Putzhilfe",
      description: "Zuverlässige Unterstützung bei der Reinigung privater Haushalte.",
      longDescription:
        "Zuverlässige, regelmäßige Unterstützung bei der Reinigung privater Haushalte – mit demselben vertrauten Team, damit Sie immer wissen, wer sich in Ihren Räumlichkeiten um die Reinigung kümmert.",
      benefits: [
        "Konstantes, vertrautes Reinigungsteam",
        "Flexible Häufigkeit passend zu Ihrem Haushalt",
        "Sorgfältige und respektvolle Arbeit in Ihrem Zuhause",
      ],
    },
  },

  servicesPage: {
    heading: "Unsere Dienstleistungen",
    subtitle:
      "Gründliche, professionelle Reinigung für jede Art von Räumlichkeit – von der regelmäßigen Pflege bis hin zu speziellen, einmaligen Reinigungen.",
  },

  industries: {
    offices: {
      name: "Büros",
      description: "Saubere, gepflegte Arbeitsplätze für Teams und Kunden.",
      longDescription:
        "Büros benötigen eine regelmäßige Pflege, ohne den Arbeitsalltag zu beeinträchtigen. Wir planen die Reinigung rund um Ihre Arbeitszeiten und sorgen dafür, dass Schreibtische, Küchen und Besprechungsräume stets gepflegt und präsentabel sind.",
      highlights: [
        "Flexible Terminplanung rund um Ihre Geschäftszeiten",
        "Reinigung von Schreibtischen, Küchen und Besprechungsräumen",
        "Ein stets gepflegtes Umfeld für Kunden und Besucher",
      ],
    },
    "residential-buildings": {
      name: "Wohngebäude",
      description: "Zuverlässige Pflege gemeinschaftlich genutzter Wohnbereiche.",
      longDescription:
        "Gemeinschaftliche Eingangsbereiche, Flure und andere Bereiche prägen den Eindruck bei Bewohnern und Besuchern. Wir halten diese Bereiche nach einem regelmäßigen Zeitplan dauerhaft sauber.",
      highlights: [
        "Regelmäßige Reinigung von Eingangsbereichen und Fluren",
        "Zuverlässiger, wiederkehrender Reinigungsplan",
        "Verbessert das tägliche Wohngefühl der Bewohner",
      ],
    },
    "apartment-complexes": {
      name: "Wohnanlagen",
      description: "Konstante Reinigung für Mehrfamilien- und Wohnanlagen.",
      longDescription:
        "Mehrfamilienhäuser und Wohnanlagen benötigen eine skalierbare Reinigung – von gemeinschaftlichen Treppenhäusern und Eingangsbereichen bis hin zu weiteren Gemeinschaftseinrichtungen, die im gesamten Gebäude nach denselben Standards gepflegt werden.",
      highlights: [
        "Koordinierte Reinigung gemeinschaftlicher Einrichtungen",
        "Einheitliche Qualitätsstandards in der gesamten Immobilie",
        "Geeignet für Hausverwaltungen und Vermieter",
      ],
    },
    "retail-stores": {
      name: "Einzelhandelsgeschäfte",
      description: "Makellose Verkaufsflächen, die jeden Kunden willkommen heißen.",
      longDescription:
        "Ein sauberer Verkaufsraum beeinflusst unmittelbar, wie Kunden ein Unternehmen wahrnehmen. Wir arbeiten rund um Ihre Öffnungszeiten, damit Ihre Verkaufsflächen bereits vor der Öffnung makellos sind.",
      highlights: [
        "Terminplanung rund um die Öffnungszeiten",
        "Fokus auf kundenorientierte Bereiche",
        "Ein einladender erster Eindruck für Ihre Kunden",
      ],
    },
    "medical-facilities": {
      name: "Medizinische Einrichtungen",
      description: "Hygieneorientierte Reinigung für medizinische und gesundheitliche Einrichtungen.",
      longDescription:
        "Medizinische Einrichtungen erfordern eine sorgfältige und hygienebewusste Reinigung. Wir setzen auf gründliche Reinigungsverfahren für Bereiche, in denen Sauberkeit besonders wichtig ist.",
      highlights: [
        "Hygieneorientierter Reinigungsansatz",
        "Sorgfältige Liebe zum Detail",
        "Zuverlässige und regelmäßige Reinigung",
      ],
    },
    restaurants: {
      name: "Restaurants",
      description: "Gründliche Reinigung zur Unterstützung von Lebensmittelhygiene und Sauberkeitsstandards.",
      longDescription:
        "Restaurants benötigen eine Reinigung, die die täglichen Anforderungen an Lebensmittelhygiene und Sauberkeit unterstützt. Die Reinigung wird rund um die Servicezeiten geplant, damit der Küchenbetrieb nicht beeinträchtigt wird.",
      highlights: [
        "Terminplanung rund um die Servicezeiten",
        "Unterstützt Lebensmittelhygiene und Sauberkeitsstandards",
        "Gründliche und zuverlässige Reinigung",
      ],
    },
    schools: {
      name: "Schulen",
      description: "Sichere und gepflegte Räumlichkeiten für Schüler und Mitarbeiter.",
      longDescription:
        "Schulen benötigen dauerhaft saubere und gepflegte Räumlichkeiten für Schüler und Mitarbeiter. Wir richten unsere Reinigung nach Schul- und Ferienzeiten und sorgen das ganze Jahr über für gepflegte Einrichtungen.",
      highlights: [
        "Terminplanung rund um Schul- und Ferienzeiten",
        "Konstante Pflege von Klassenräumen und Fluren",
        "Sichere und gepflegte Lernumgebungen",
      ],
    },
    "commercial-properties": {
      name: "Gewerbeimmobilien",
      description: "Zuverlässige Reinigung für unterschiedlichste gewerbliche Immobilien.",
      longDescription:
        "Gewerbeimmobilien sind vielfältig – wir passen unseren Reinigungsansatz an die individuellen Gegebenheiten und Anforderungen jeder Immobilie an und bieten zuverlässige, regelmäßige Reinigungsleistungen.",
      highlights: [
        "Reinigung passend zur jeweiligen Immobilienart",
        "Zuverlässiger, regelmäßiger Service",
        "Flexibel für unterschiedlichste gewerbliche Anforderungen",
      ],
    },
  },

  industriesPage: {
    heading: "Branchen, die wir bedienen",
    subtitle: "Wir passen unseren Reinigungsansatz an die spezifischen Anforderungen jeder Branche an, für die wir tätig sind.",
  },

  faqs: {
    "services-offered": {
      question: "Welche Dienstleistungen bieten Sie an?",
      answer:
        "Wir bieten ein breites Spektrum an Reinigungsdienstleistungen an, darunter Büroreinigung, Treppenhausreinigung, Fensterreinigung, Fassadenreinigung, Bauendreinigung, Unterhaltsreinigung und vieles mehr. Kontaktieren Sie uns gerne für ein individuelles Angebot.",
    },
    "areas-covered": {
      question: "Für welche Bereiche bieten Sie Gebäudereinigung an?",
      answer:
        "Wir arbeiten sowohl für gewerbliche als auch für private Kunden. Unsere Leistungen umfassen die Reinigung von Büros, Wohngebäuden, Geschäften, öffentlichen Einrichtungen und Baustellen nach Abschluss der Bauarbeiten.",
    },
    "how-quickly": {
      question: "Wie schnell können Sie eine Reinigung anbieten?",
      answer:
        "In den meisten Fällen können wir je nach Verfügbarkeit auch kurzfristige Termine anbieten. Rufen Sie uns an oder nutzen Sie unser Kontaktformular, um einen Termin zu vereinbaren.",
    },
    cost: {
      question: "Wie viel kostet eine Gebäudereinigung?",
      answer:
        "Die Kosten hängen von der Art der Dienstleistung, der Größe der Fläche und der Reinigungshäufigkeit ab. Gerne erstellen wir Ihnen nach einer Besichtigung der zu reinigenden Räumlichkeiten ein maßgeschneidertes Angebot.",
    },
    "eco-friendly": {
      question: "Arbeiten Sie mit umweltfreundlichen Reinigungsmitteln?",
      answer:
        "Ja, wir verwenden umweltfreundliche Reinigungsprodukte, um die Umweltbelastung zu reduzieren und gleichzeitig eine saubere und gesunde Umgebung zu schaffen.",
    },
    "maintenance-cleaning": {
      question: "Bieten Sie auch regelmäßige Unterhaltsreinigung an?",
      answer:
        "Ja, wir bieten sowohl einmalige Reinigungen als auch regelmäßige Unterhaltsreinigungen an. Diese können wöchentlich, monatlich oder nach Ihrem individuellen Bedarf geplant werden.",
    },
    advantages: {
      question: "Welche Vorteile bietet eine professionelle Gebäudereinigung?",
      answer:
        "Professionelle Reinigung sorgt nicht nur für Sauberkeit und Hygiene, sondern trägt auch zum Werterhalt Ihrer Immobilie bei. Saubere Räumlichkeiten schaffen zudem eine angenehme Arbeitsatmosphäre und einen guten ersten Eindruck.",
    },
    commissioning: {
      question: "Wie läuft die Beauftragung ab?",
      answer:
        "Der Ablauf ist einfach: Sie kontaktieren uns telefonisch oder über unser Kontaktformular. Wir vereinbaren einen Besichtigungstermin, erstellen Ihnen ein Angebot und nach Ihrer Zustimmung beginnt unser Team zum vereinbarten Termin mit der Reinigung.",
    },
    "staff-trained-insured": {
      question: "Sind Ihre Mitarbeiter geschult und versichert?",
      answer:
        "Ja, unsere Reinigungskräfte sind gut geschult und wir legen großen Wert auf Qualität und Zuverlässigkeit. Alle unsere Mitarbeiter sind außerdem vollständig versichert, um im Schadensfall abgesichert zu sein.",
    },
    "emergency-cleaning": {
      question: "Bieten Sie auch Notfallreinigungen an?",
      answer:
        "Ja, wir bieten Notfallreinigungen an, beispielsweise nach Wasserschäden, Bauarbeiten oder anderen unvorhergesehenen Ereignissen. Rufen Sie uns einfach an und wir kümmern uns umgehend um Ihr Anliegen.",
    },
    "cleaning-methods": {
      question: "Welche Reinigungsmethoden verwenden Sie?",
      answer:
        "Wir setzen auf moderne Reinigungstechniken und -geräte, um die bestmöglichen Ergebnisse zu erzielen. Unsere Methoden passen wir an die jeweiligen Anforderungen der Reinigung an, beispielsweise bei der Fenster-, Fassaden- oder Teppichreinigung.",
    },
    "outside-hours": {
      question: "Arbeiten Sie auch außerhalb der regulären Geschäftszeiten?",
      answer:
        "Ja, wir bieten flexible Reinigungszeiten an und können auch außerhalb der üblichen Geschäftszeiten arbeiten, damit der Betrieb in Ihrem Unternehmen nicht gestört wird.",
    },
    "get-offer": {
      question: "Wie kann ich ein Angebot erhalten?",
      answer:
        "Sie können uns ganz einfach über unser Kontaktformular auf der Website oder telefonisch erreichen. Wir vereinbaren einen Besichtigungstermin und erstellen anschließend ein individuelles Angebot für Sie.",
    },
    "not-satisfied": {
      question: "Was passiert, wenn ich mit der Reinigung nicht zufrieden bin?",
      answer:
        "Die Zufriedenheit unserer Kunden hat für uns oberste Priorität. Sollten Sie mit einer Reinigung nicht zufrieden sein, zögern Sie bitte nicht, uns zu kontaktieren. Wir kümmern uns umgehend um Ihr Anliegen.",
    },
    "special-requirements": {
      question: "Bieten Sie spezielle Reinigungen für besondere Anforderungen an?",
      answer:
        "Ja, wir bieten auch spezielle Reinigungsleistungen wie Bauendreinigung, Grundreinigung oder Reinigungen nach einem Wasserschaden an. Teilen Sie uns einfach Ihre individuellen Anforderungen mit und wir erstellen ein passendes Angebot für Sie.",
    },
  },

  faqsPage: {
    heading: "Häufig gestellte Fragen",
    subtitle:
      "Antworten auf die Fragen, die uns am häufigsten gestellt werden. Sie finden nicht, wonach Sie suchen? Kontaktieren Sie uns direkt.",
    ctaHeading: "Weitere Fragen? Kontaktieren Sie uns",
    ctaButton: "Kontakt aufnehmen",
  },

  contact: {
    heading: "Kontaktieren Sie uns",
    subtitle: "Sie haben eine Frage oder benötigen ein Angebot? Kontaktieren Sie uns direkt oder senden Sie uns eine Nachricht über das Formular.",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    hoursLabel: "Geschäftszeiten",
    weekdaysLabel: "Mo. – Fr.",
    saturdayLabel: "Samstag",
    sundayLabel: "Sonntag",
    form: {
      nameLabel: "Name",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      phoneOptional: "(optional)",
      serviceLabel: "Dienstleistung",
      serviceSelectPlaceholder: "Dienstleistung auswählen",
      otherOption: "Sonstiges",
      messageLabel: "Nachricht",
      submitLabel: "Nachricht senden",
      submittingLabel: "Wird gesendet...",
      successMessage: "Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.",
      errorMessage: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    },
  },

  footer: {
    description:
      "Zuverlässige, gründliche und professionelle Reinigungsdienstleistungen für private und gewerbliche Kunden in Freiburg.",
    quickLinksHeading: "Schnellzugriff",
    servicesHeading: "Dienstleistungen",
    contactHeading: "Kontakt",
    rightsReserved: "Alle Rechte vorbehalten.",
    impressumLabel: "Impressum",
    datenschutzLabel: "Datenschutz",
  },

  jobs: {
    heading: "Karriere",
    notHiringTitle: "Derzeit keine offenen Stellen",
    notHiringMessage: "Gerne können Sie uns Ihren Lebenslauf für zukünftige Möglichkeiten senden an:",
  },
};

