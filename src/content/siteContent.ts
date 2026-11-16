export type Locale = 'es' | 'en' | 'fr';

export interface TestimonialItem {
  id: string;
  published: boolean; // Mantener en false hasta contar con textos y autorizaciones definitivas
  name: string;
  roleOrContext: string;
  country: string;
  photoUrl?: string;
  photoPlaceholderLabel: string;
  quote: string;
  concreteLearning: string;
}

export interface ExperienceItem {
  id: 'sesion-individual' | 'programa-eres-singular';
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  sessionsCount: string;
  priceUSD: string;
  shortDescription: string;
  purpose: string;
  ctaLabel: string;
  detailTriggerLabel: string;
  formTabId: 'sesion' | 'programa';
  expandedView: {
    eyebrow: string;
    headline: string;
    intro: string;
    whatWeExplore: string[];
    whoIsItFor: string[];
    formatAndDuration: {
      label: string;
      value: string;
    }[];
    nextSteps: string[];
    primaryActionLabel: string;
  };
}

export interface MirrorQuestion {
  id: string;
  number: string;
  question: string;
  reflectionPrompt: string;
  pillarTag: string;
}

export interface JourneyStep {
  id: string;
  number: string;
  verb: string;
  title: string;
  description: string;
}

export interface SiteContent {
  locale: Locale;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    canonicalUrl: string;
  };
  brand: {
    name: string;
    authorFullName: string;
    authorSignature: string;
    authorRole: string;
    phrases: string[];
    contactWhatsapp: string;
    contactEmail: string;
  };
  nav: {
    items: { label: string; href: string }[];
    quickAccess: {
      sessionLabel: string;
      programLabel: string;
    };
  };
  hero: {
    eyebrow: string;
    headline: string;
    featuredQuestion: string;
    supportingText: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    portraitImage: {
      src: string;
      alt: string;
      caption: string;
    };
    videoPlaceholder: {
      badge: string;
      title: string;
      durationHint: string;
      description: string;
      statusNote: string;
    };
  };
  mirror: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    intro: string;
    interactionHint: string;
    questions: MirrorQuestion[];
    closingQuote: string;
    ctaLabel: string;
  };
  methodology: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    intro: string;
    philosophyStatement: string;
    journeyTitle: string;
    journeySubtitle: string;
    journeySteps: JourneyStep[];
    proprietaryMethods: {
      rda: {
        category: string;
        acronym: string;
        fullName: string;
        tagline: string;
        description: string;
        pillars: { letter: string; word: string; meaning: string }[];
      };
      mapa: {
        category: string;
        acronym: string;
        fullName: string;
        tagline: string;
        description: string;
        dimensions: string[];
      };
    };
    integrationAreas: string[];
    audiencesTitle: string;
    audiences: {
      title: string;
      description: string;
    }[];
  };
  experiences: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    intro: string;
    equalValueNote: string;
    items: {
      session: ExperienceItem;
      program: ExperienceItem;
    };
  };
  stories: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    intro: string;
    unpublishedNotice: {
      badge: string;
      title: string;
      description: string;
    };
    items: TestimonialItem[];
  };
  aboutFer: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    leadParagraph: string;
    storyParagraphs: string[];
    highlights: {
      figure: string;
      label: string;
      detail: string;
    }[];
    mainPortrait: {
      src: string;
      alt: string;
      caption: string;
    };
    mediaPlaceholders: {
      id: string;
      label: string;
      aspectRatio: string;
      description: string;
    }[];
    closingQuote: string;
    signatureName: string;
    signatureTitle: string;
  };
  nextStep: {
    sectionNumber: string;
    eyebrow: string;
    title: string;
    intro: string;
    transparencyNote: string;
    forms: {
      session: {
        tabLabel: string;
        badge: string;
        title: string;
        priceTag: string;
        description: string;
        submitLabel: string;
        confirmationTitle: string;
        confirmationMessage: string;
        confirmationNextSteps: string[];
      };
      program: {
        tabLabel: string;
        badge: string;
        title: string;
        priceTag: string;
        description: string;
        submitLabel: string;
        confirmationTitle: string;
        confirmationMessage: string;
        confirmationNextSteps: string[];
      };
    };
  };
  footer: {
    manifesto: string;
    socialLinks: Array<{
      id: string;
      label: string;
      href: string;
    }>;
    contactEmail: string;
    journey: {
      label: string;
      brands: Array<{
        id: string;
        name: string;
        logoSrc: string;
        alt: string;
        height: number;
      }>;
    };
    copyright: string;
    futureLanguagesNote: string;
  };
}

export const siteContentEs: SiteContent = {
  locale: 'es',
  seo: {
    title: 'Eres Singular | Fer — Ma. Fernanda Cortés Espinosa · Tejedora de Huella Personal',
    description:
      'Mentoría de autoconocimiento y desarrollo de marca personal auténtica con Fer (Ma. Fernanda Cortés Espinosa). Sesión individual de 80 minutos (US$ 150) y Programa Eres Singular de 3 meses (US$ 1.490).',
    keywords: [
      'mentoría de marca personal',
      'autoconocimiento y marca personal',
      'descubrir fortalezas personales',
      'reinventarse profesionalmente',
      'propósito profesional',
      'construcción de identidad personal',
      'mentoría individual',
      'desarrollo de marca personal auténtica',
      'Ma. Fernanda Cortés Espinosa',
      'Fer',
      'Eres Singular',
      'Tejedora de Huella Personal',
    ],
    ogTitle: 'Eres Singular — Antes de mostrarte al mundo, comienza por mirarte tú',
    ogDescription:
      '¿Qué sabes, que aún no sabes que sabes? Acompañamiento de autoconocimiento, identidad y marca personal auténtica con Fer (Ma. Fernanda Cortés Espinosa).',
    canonicalUrl: 'https://eressingular.vercel.app',
  },
  brand: {
    name: 'Eres Singular',
    authorFullName: 'Ma. Fernanda Cortés Espinosa',
    authorSignature: 'Ma. Fernanda Cortés Espinosa ツ',
    authorRole: 'Tejedora de Huella Personal',
    phrases: [
      'Antes de mostrarte al mundo, comienza por mirarte tú.',
      '¿Qué sabes, que aún no sabes que sabes?',
      'Tu experiencia tiene valor. Vamos a darle forma y ponerla en movimiento.',
      'No se trata de ser visible, sino inolvidable.',
      'Mi singularidad es ayudar a otros a reconocer la suya.',
    ],
    contactWhatsapp: '+56 9 5708 1096',
    contactEmail: 'lafer.mentora@gmail.com',
  },
  nav: {
    items: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Mi enfoque', href: '#mi-enfoque' },
      { label: 'Experiencias', href: '#experiencias' },
      { label: 'Sobre mí', href: '#sobre-mi' },
      { label: 'Contacto', href: '#contacto' },
    ],
    quickAccess: {
      sessionLabel: 'Sesión 1 a 1',
      programLabel: 'Programa',
    },
  },
  hero: {
    eyebrow: 'Fer · Tejedora de Huella Personal',
    headline: 'Antes de mostrarte al mundo, comienza por mirarte tú.',
    featuredQuestion: '¿Qué sabes, que aún no sabes que sabes?',
    supportingText:
      'Tu historia, tus conocimientos y tu manera de hacer las cosas contienen algo singular. Te acompaño a reconocerlo, darle forma y convertirlo en una expresión auténtica de quién eres.',
    primaryCta: {
      label: 'Descubrir mi singularidad',
      href: '#el-espejo',
    },
    secondaryCta: {
      label: 'Conocer el programa',
      href: '#experiencias',
    },
    portraitImage: {
      src: '/images/fer-mirarte.png',
      alt: 'Fer (Ma. Fernanda Cortés Espinosa) — Antes de mostrarte al mundo, comienza por mirarte tú',
      caption: 'Ma. Fernanda Cortés Espinosa ツ — Tejedora de Huella Personal',
    },
    videoPlaceholder: {
      badge: 'ESPACIO RESERVADO · VIDEO DE PRESENTACIÓN',
      title: 'Conoce a Fer y el sentido de Eres Singular',
      durationHint: 'Cápsula de bienvenida con Fer (próximamente)',
      description:
        'Marcador preparado para el video auténtico de presentación de Fer.',
      statusNote: 'Marcador de video identificado para carga de pieza audiovisual definitiva.',
    },
  },
  mirror: {
    sectionNumber: '02',
    eyebrow: 'Sección 02 — El espejo',
    title: 'Una pausa para observar tu propio recorrido',
    intro:
      'Muchas de tus capacidades son tan naturales para ti que pasan inadvertidas. Otras han quedado guardadas entre expectativas ajenas, etapas intensas o formas aprendidas de mirar la vida. Detente un instante en cada pregunta:',
    interactionHint:
      'Haz clic en cualquier pregunta para detenerte en ella y desplegar su espacio de reflexión personal.',
    questions: [
      {
        id: 'q1',
        number: '01',
        question: '¿Qué haces tan naturalmente que nunca lo has considerado una capacidad?',
        reflectionPrompt:
          'Aquello que resuelves sin esfuerzo aparente suele ser el centro de tu singularidad. Como para ti es cotidiano, es fácil asumir que todos lo ven o lo hacen igual.',
        pillarTag: 'Capacidades naturalizadas',
      },
      {
        id: 'q2',
        number: '02',
        question: '¿Qué situaciones se repiten en tu vida?',
        reflectionPrompt:
          'Observar los escenarios, conversaciones o decisiones que vuelven a aparecer permite reconocer patrones y creencias que hoy condicionan tu siguiente etapa.',
        pillarTag: 'Reconocimiento de patrones',
      },
      {
        id: 'q3',
        number: '03',
        question: '¿Qué has aprendido de aquello que has vivido?',
        reflectionPrompt:
          'Tu trayectoria profesional y vital no es una lista de cargos ni de episodios aislados: es experiencia decantada que sostiene tu criterio y tu voz propia.',
        pillarTag: 'Historia y sabiduría vivida',
      },
      {
        id: 'q4',
        number: '04',
        question: '¿Qué proyecto llevas tiempo queriendo comenzar?',
        reflectionPrompt:
          'Las ideas que permanecen contigo a lo largo del tiempo suelen señalar una dirección genuina que solo necesita claridad, estructura y decisión para ponerse en movimiento.',
        pillarTag: 'Propósito y dirección',
      },
      {
        id: 'q5',
        number: '05',
        question: '¿Qué parte de ti todavía espera encontrar su expresión?',
        reflectionPrompt:
          'Construir una marca personal auténtica no consiste en fabricar un personaje, sino en darle forma, lenguaje y presencia a quien realmente eres hoy.',
        pillarTag: 'Expresión auténtica',
      },
    ],
    closingQuote: '«Tu experiencia tiene valor. Vamos a darle forma y ponerla en movimiento».',
    ctaLabel: 'Conocer cómo trabajamos ese recorrido',
  },
  methodology: {
    sectionNumber: '03',
    eyebrow: 'Sección 03 — La metodología',
    title: 'La marca personal como consecuencia de reconocerte',
    intro:
      'No se trata únicamente de aprender a mostrarse, conseguir seguidores o construir una imagen profesional. Se trata de comprender quién eres, qué sabes, qué has vivido, qué quieres aportar y cómo deseas expresarlo en el mundo.',
    philosophyStatement:
      'Cada persona tiene una historia, conocimientos, experiencias y capacidades que merecen ser reconocidos.',
    journeyTitle: 'El recorrido Eres Singular',
    journeySubtitle: 'Cinco movimientos conscientes desde la mirada interior hasta tu expresión en el mundo:',
    journeySteps: [
      {
        id: 'mirar',
        number: '01',
        verb: 'Mirar',
        title: 'Observar tu recorrido sin juicio',
        description:
          'Hacer una pausa consciente para contemplar tu historia personal y profesional, reconociendo el camino transitado y el momento vital en el que te encuentras.',
      },
      {
        id: 'reconocer',
        number: '02',
        verb: 'Reconocer',
        title: 'Identificar patrones, creencias y talentos naturales',
        description:
          'Distinguir aquellas capacidades tan integradas en ti que dabas por sentadas, así como las creencias o expectativas aprendidas que han limitado tu expresión.',
      },
      {
        id: 'comprender',
        number: '03',
        verb: 'Comprender',
        title: 'Conectar tu experiencia con tu valor real',
        description:
          'Integrar lo vivido, lo aprendido y lo que sabes hacer para entender cuál es tu aporte singular y desde qué lugar genuino te relacionas con los demás.',
      },
      {
        id: 'elegir',
        number: '04',
        verb: 'Elegir',
        title: 'Definir propósito, dirección y propuesta',
        description:
          'Tomar decisiones con libertad y sentido sobre la etapa que quieres abrir, qué deseas ofrecer y cómo quieres habitar tu actividad profesional o tu proyecto.',
      },
      {
        id: 'expresar',
        number: '05',
        verb: 'Expresar',
        title: 'Dar forma y voz a tu huella personal',
        description:
          'Traducir tu identidad en una narrativa clara, una propuesta de valor coherente y una comunicación auténtica que te permita ser inolvidable sin dejar de ser tú.',
      },
    ],
    proprietaryMethods: {
      rda: {
        category: 'Metodología de Fer',
        acronym: 'RDA',
        fullName: 'Rompe, Domina, Activa',
        tagline: 'Dinámica de movimiento personal y claridad',
        description:
          'Un enfoque práctico para dejar atrás moldes prestados, apropiarte con serenidad de tu historia y poner en marcha tu propuesta en el mundo real.',
        pillars: [
          {
            letter: 'R',
            word: 'Rompe',
            meaning:
              'Cuestiona inercias, etiquetas automáticas y expectativas ajenas que ya no representan quién eres hoy.',
          },
          {
            letter: 'D',
            word: 'Domina',
            meaning:
              'Reconoce y ordena tus capacidades, tus aprendizajes vitales y tu maestría profesional para sostener tu voz con certeza.',
          },
          {
            letter: 'A',
            word: 'Activa',
            meaning:
              'Lleva tu singularidad a la acción mediante decisiones concretas, presencia coherente y una propuesta con dirección.',
          },
        ],
      },
      mapa: {
        category: 'Herramienta de Fer',
        acronym: 'M.A.P.A.',
        fullName: 'Matriz de Arquitectura Personal Auténtica',
        tagline: 'Estructura viva de identidad y expresión',
        description:
          'La brújula donde convergen tu biografía, tu conocimiento y tu propósito para construir una marca personal con fundamento humano y claridad comercial.',
        dimensions: [
          'Autoconocimiento e historia personal y profesional',
          'Reconocimiento de patrones, creencias y capacidades naturalizadas',
          'Propósito, dirección y construcción de identidad personal',
          'Comunicación auténtica y desarrollo de propuesta de valor',
        ],
      },
    },
    integrationAreas: [
      'Autoconocimiento',
      'Reconocimiento de patrones y creencias',
      'Historia personal y profesional',
      'Identificación de capacidades naturalizadas',
      'Propósito y dirección',
      'Identidad y marca personal',
      'Comunicación auténtica',
      'Desarrollo de una propuesta de valor',
    ],
    audiencesTitle: '¿Para quién es Eres Singular?',
    audiences: [
      {
        title: 'Profesionales experimentados en nueva etapa',
        description:
          'Personas con una trayectoria sólida que desean abrir un nuevo capítulo profesional alineado con quienes son hoy.',
      },
      {
        title: 'Emprendedores en busca de una propuesta auténtica',
        description:
          'Quienes quieren construir o renovar su marca desde su verdad e identidad, lejos de fórmulas impersonales.',
      },
      {
        title: 'Personas con proyectos postergados',
        description:
          'Quienes llevan tiempo gestando una idea o iniciativa propia y necesitan claridad y estructura para darle vida.',
      },
      {
        title: 'Procesos de reinvención personal y laboral',
        description:
          'Personas que atraviesan un cambio de rumbo y buscan reordenar su historia para elegir su próximo paso con sentido.',
      },
      {
        title: 'Portadores de conocimiento por expresar',
        description:
          'Profesionales que sienten que tienen mucho valor y experiencia por compartir, pero aún no encuentran cómo articularlo y comunicarlo.',
      },
    ],
  },
  experiences: {
    sectionNumber: '04',
    eyebrow: 'Sección 04 — Dos maneras de trabajar conmigo',
    title: 'Dos puertas de entrada. Un mismo compromiso con tu singularidad.',
    intro:
      'Cada persona se encuentra en un momento distinto de su camino. Puedes comenzar con una sesión individual de claridad y reconocimiento, o adentrarte en el proceso completo de acompañamiento durante tres meses.',
    equalValueNote:
      'Ambas experiencias son 1 a 1 en vivo con Fer y tienen valor propio desde el primer encuentro.',
    items: {
      session: {
        id: 'sesion-individual',
        badge: 'Experiencia 01 · Punto de partida y nueva mirada',
        title: 'Sesión individual',
        subtitle: 'Reconocimiento de patrones, capacidades y punto de partida concreto',
        duration: '80 minutos',
        sessionsCount: '1 sesión individual profunda',
        priceUSD: 'US$ 150',
        shortDescription:
          'Una experiencia individual de reconocimiento de patrones, capacidades, aprendizajes y posibilidades.',
        purpose:
          'El objetivo es ofrecer una nueva mirada sobre la propia historia y un punto de partida concreto.',
        ctaLabel: 'Reservar mi sesión',
        detailTriggerLabel: 'Ver vista ampliada de la sesión',
        formTabId: 'sesion',
        expandedView: {
          eyebrow: 'Experiencia 01 · Vista ampliada',
          headline: 'Sesión individual de 80 minutos',
          intro:
            'Una conversación profunda y estructurada uno a uno con Fer, concebida como una experiencia completa en sí misma para mirar tu momento actual con claridad, destrabar nudos y reconocer el valor de tu recorrido.',
          whatWeExplore: [
            'Lectura conjunta de tu momento presente, tu recorrido y las preguntas que hoy te mueven.',
            'Reconocimiento de patrones, creencias y capacidades naturalizadas que pasan desapercibidas.',
            'Claridad sobre las posibilidades reales que tienes frente a ti y cuál es tu punto de partida concreto.',
            'Orientación directa para ordenar tus ideas, tu narrativa o el enfoque de tu próximo paso.',
          ],
          whoIsItFor: [
            'Quienes desean una primera mirada profunda y accionable sobre su historia y su momento profesional.',
            'Profesionales que necesitan destrabar una decisión, ordenar un proyecto o clarificar su dirección actual.',
            'Personas que prefieren vivir un encuentro puntual de alto valor antes de decidir un proceso más extenso.',
          ],
          formatAndDuration: [
            { label: 'Duración', value: '80 minutos en vivo (online 1 a 1)' },
            { label: 'Inversión', value: 'US$ 150' },
            { label: 'Modalidad', value: 'Encuentro individual personalizado con Fer' },
          ],
          nextSteps: [
            '1. Completa el formulario de reserva indicando tu nombre, correo, país y el motivo principal de tu sesión.',
            '2. Recibirás la respuesta personal para coordinar horario según tu zona horaria y los datos de pago.',
            '3. Realizamos nuestra sesión de 80 minutos enfocada 100% en tu historia y tu punto de partida.',
          ],
          primaryActionLabel: 'Ir a reservar mi sesión (US$ 150)',
        },
      },
      program: {
        id: 'programa-eres-singular',
        badge: 'Experiencia 02 · Acompañamiento profundo',
        title: 'Programa Eres Singular',
        subtitle: 'Tres meses para reconocer tu historia, construir identidad y expresar tu marca personal',
        duration: 'Tres meses',
        sessionsCount: '13 sesiones',
        priceUSD: 'US$ 1.490',
        shortDescription:
          'Un proceso de acompañamiento para profundizar en autoconocimiento, reconocer patrones y creencias, construir identidad y desarrollar una expresión auténtica de la marca personal.',
        purpose:
          'Integrar quién eres, qué sabes y qué has vivido en una propuesta de valor clara, humana y sostenible en el tiempo.',
        ctaLabel: 'Conocer el programa',
        detailTriggerLabel: 'Ver vista ampliada del programa',
        formTabId: 'programa',
        expandedView: {
          eyebrow: 'Experiencia 02 · Vista ampliada',
          headline: 'Programa Eres Singular — Tres meses (13 sesiones)',
          intro:
            'Un camino de acompañamiento personalizado junto a Fer a lo largo de 13 sesiones individuales. Recorremos de principio a fin el proceso Mirar → Reconocer → Comprender → Elegir → Expresar integrando las metodologías RDA y M.A.P.A.',
          whatWeExplore: [
            'Autoconocimiento profundo: lectura de tu historia personal y profesional, aprendizajes y recorrido vital.',
            'Identificación de patrones, creencias limitantes y capacidades naturalizadas que definen tu singularidad.',
            'Clarificación de propósito, dirección vital/profesional y construcción de tu identidad personal (M.A.P.A.).',
            'Desarrollo de tu narrativa, comunicación auténtica y propuesta de valor lista para expresarse en el mundo (RDA).',
          ],
          whoIsItFor: [
            'Profesionales y líderes que inician una nueva etapa y quieren construir una presencia fiel a su trayectoria.',
            'Emprendedores y consultores que buscan diferenciar su propuesta desde su identidad real, no desde moldes genéricos.',
            'Personas decididas a dar forma definitiva a un proyecto propio o a una reinvención profesional con acompañamiento cercano.',
          ],
          formatAndDuration: [
            { label: 'Duración total', value: 'Tres meses de acompañamiento continuo' },
            { label: 'Estructura', value: '13 sesiones individuales 1 a 1 con Fer' },
            { label: 'Inversión', value: 'US$ 1.490' },
          ],
          nextSteps: [
            '1. Envía tu solicitud de información sobre el Programa Eres Singular en el formulario de contacto.',
            '2. Conversamos brevemente para confirmar que el programa responde al momento y objetivo que estás viviendo.',
            '3. Definimos calendario de inicio y damos comienzo a tus 13 sesiones de acompañamiento.',
          ],
          primaryActionLabel: 'Solicitar información del programa (US$ 1.490)',
        },
      },
    },
  },
  stories: {
    sectionNumber: '05',
    eyebrow: 'Sección 05 — Historias reales',
    title: 'Experiencias y aprendizajes en primera persona',
    intro:
      'Detrás de cada proceso hay una historia real: profesionales y líderes que se detuvieron a mirarse para reconocer su valor y darle una expresión propia.',
    unpublishedNotice: {
      badge: 'ESPACIO PREPARADO · PUBLICACIÓN RESPONSABLE',
      title: 'Testimonios y casos reales en proceso de edición autorizada',
      description:
        'Por respeto a la intimidad y veracidad de cada proceso, esta sección mantiene sus tarjetas en modo marcador hasta incorporar los textos literales y autorizaciones de cada persona acompañada por Fer.',
    },
    items: [
      {
        id: 'historia-01',
        published: false,
        name: 'Espacio reservado — Caso Real 01',
        roleOrContext: 'Profesional en transición / Nueva etapa profesional',
        country: 'Hispanoamérica',
        photoPlaceholderLabel: 'Fotografía autorizada · Caso 01',
        quote:
          '[Marcador de testimonio: aquí se integrará el relato literal autorizado sobre cómo fue el proceso de mirarse y reconocer capacidades naturalizadas.]',
        concreteLearning:
          '[Aprendizaje y resultado concreto: claridad alcanzada, cambio de mirada y expresión de su propuesta.]',
      },
      {
        id: 'historia-02',
        published: false,
        name: 'Espacio reservado — Caso Real 02',
        roleOrContext: 'Emprendimiento y desarrollo de propuesta auténtica',
        country: 'Hispanoamérica',
        photoPlaceholderLabel: 'Fotografía autorizada · Caso 02',
        quote:
          '[Marcador de testimonio: aquí se integrará el relato literal autorizado sobre el acompañamiento con la metodología RDA y M.A.P.A.]',
        concreteLearning:
          '[Aprendizaje y resultado concreto: articulación de su historia profesional en una oferta con identidad propia.]',
      },
      {
        id: 'historia-03',
        published: false,
        name: 'Espacio reservado — Caso Real 03',
        roleOrContext: 'Reinvención profesional y voz propia',
        country: 'Hispanoamérica',
        photoPlaceholderLabel: 'Fotografía autorizada · Caso 03',
        quote:
          '[Marcador de testimonio: aquí se integrará el relato literal autorizado sobre la experiencia de trabajar 1 a 1 con Fer.]',
        concreteLearning:
          '[Aprendizaje y resultado concreto: paso de la postergación a la puesta en movimiento de su proyecto.]',
      },
    ],
  },
  aboutFer: {
    sectionNumber: '06',
    eyebrow: 'Sección 06 — Soy Fer',
    title: 'Soy Fer',
    subtitle: 'Publicista, mentora y Tejedora de Huella Personal',
    leadParagraph:
      'Mi recorrido no es solamente un currículum: es el territorio vivo desde el que hoy te acompaño a mirar tu propia historia.',
    storyParagraphs: [
      'Soy publicista y emprendedora. Durante más de 30 años he trabajado con personas, marcas y negocios, comprendiendo cómo se construyen las propuestas que logran conectar de verdad y permanecer en la memoria.',
      'Con el tiempo comprendí que las marcas más poderosas no se sostienen en artificios de comunicación, sino en la verdad de quien las habita. Mi propio camino de transformación personal me llevó a integrar esa experiencia estratégica con una mirada profunda hacia el autoconocimiento, la conciencia y la libertad de elección.',
      'Elegí vivir como nómada para salir de lo conocido, recorrer distintos países, escuchar otras culturas y descubrir nuevas formas de mirar el mundo. Ese viaje continuo me confirmó algo esencial: en cada persona existe una riqueza que muchas veces ella misma aún no ha terminado de ver.',
      'Hoy acompaño a profesionales, emprendedores y personas en momentos de cambio a observar su recorrido, reconocer sus patrones y capacidades naturalizadas, y transformarlos en una expresión auténtica de su singularidad.',
    ],
    highlights: [
      {
        figure: '+30 años',
        label: 'Trayectoria profesional',
        detail: 'Como publicista, estratega y emprendedora trabajando junto a personas y negocios.',
      },
      {
        figure: 'Vida nómada',
        label: 'Mirada intercultural',
        detail: 'Conectando con personas, historias y culturas en todo el mundo hispanohablante.',
      },
      {
        figure: 'Huella Personal',
        label: 'Acompañamiento 1 a 1',
        detail: 'Donde el autoconocimiento y la identidad dan origen a una marca personal auténtica.',
      },
    ],
    mainPortrait: {
      src: '/images/fer-sillon.png',
      alt: 'Fer — Ma. Fernanda Cortés Espinosa, Tejedora de Huella Personal',
      caption: 'Ma. Fernanda Cortés Espinosa',
    },
    mediaPlaceholders: [
      {
        id: 'fer-foto-nomada',
        label: 'Espacio para fotografía auténtica · Fer en ruta y encuentros',
        aspectRatio: '4/3',
        description: 'Marcador preparado para fotografía documental de Fer en ruta y conversaciones presenciales.',
      },
      {
        id: 'fer-foto-trabajo',
        label: 'Espacio para fotografía auténtica · Trabajo 1 a 1 con Fer',
        aspectRatio: '4/3',
        description: 'Marcador preparado para fotografía de sesión de acompañamiento o retrato de Fer.',
      },
    ],
    closingQuote: '«Mi singularidad es ayudar a otros a reconocer la suya».',
    signatureName: 'Ma. Fernanda Cortés Espinosa',
    signatureTitle: 'Tejedora de Huella Personal',
  },
  nextStep: {
    sectionNumber: '07',
    eyebrow: 'Sección 07 — Tu siguiente paso',
    title: 'Tu historia ya tiene valor. ¿Qué te gustaría hacer con ella?',
    intro:
      'Elige la alternativa que mejor responda al momento en que te encuentras hoy. Completa unos pocos datos y me pondré en contacto contigo personalmente para dar el siguiente paso.',
    transparencyNote:
      'Importante: Este formulario registra tu solicitud de contacto directo. No realiza cobros automáticos ni simula reservas de agenda sin confirmación previa.',
    forms: {
      session: {
        tabLabel: 'Reservar sesión individual (US$ 150)',
        badge: 'Experiencia 01 · 80 minutos · US$ 150',
        title: 'Reservar una sesión individual de 80 minutos',
        priceTag: 'US$ 150',
        description:
          'Déjame tus datos y cuéntame brevemente qué te gustaría mirar en nuestra sesión de 80 minutos. Te responderé personalmente para coordinar fecha, horario en tu país y forma de pago.',
        submitLabel: 'Solicitar mi sesión individual',
        confirmationTitle: '¡Gracias por dar este primer paso!',
        confirmationMessage:
          'Tu solicitud para la Sesión individual de 80 minutos (US$ 150) ha quedado registrada correctamente.',
        confirmationNextSteps: [
          'Todavía no se ha realizado ningún cobro ni bloqueo automático de agenda.',
          'Revisaré personalmente tu mensaje y te escribiré a tu correo o WhatsApp para coordinar el horario y enviarte el enlace de pago definitivo.',
        ],
      },
      program: {
        tabLabel: 'Solicitar información del programa (US$ 1.490)',
        badge: 'Experiencia 02 · Tres meses (13 sesiones) · US$ 1.490',
        title: 'Solicitar información sobre el programa de tres meses',
        priceTag: 'US$ 1.490',
        description:
          'Cuéntame en qué etapa te encuentras y qué te mueve a explorar el Programa Eres Singular (3 meses, 13 sesiones). Te contactaré personalmente para conversar sobre el proceso y resolver tus dudas.',
        submitLabel: 'Solicitar información del programa',
        confirmationTitle: '¡He recibido tu interés en el Programa Eres Singular!',
        confirmationMessage:
          'Tu consulta sobre el Programa de acompañamiento de tres meses (13 sesiones — US$ 1.490) ha quedado registrada.',
        confirmationNextSteps: [
          'Esta solicitud no implica un compromiso de pago inmediato.',
          'Me pondré en contacto contigo personalmente para compartirte los detalles del proceso y conversar sobre cómo se adapta a tu momento actual.',
        ],
      },
    },
  },
  footer: {
    manifesto:
      'Eres Singular es una invitación a reconocerse para expresarse auténticamente en el mundo. La tecnología sostiene la experiencia. La persona es el centro.',
    socialLinks: [
      {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mar%C3%ADafernandacortesespinosa/',
      },
      {
        id: 'instagram',
        label: 'Instagram',
        href: 'https://www.instagram.com/fer.eressingular/',
      },
      {
        id: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/@Fer.EresSingular',
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        href: 'https://www.tiktok.com/@fer.huellapersonal',
      },
    ],
    contactEmail: 'lafer.mentora@gmail.com',
    journey: {
      label: 'EL CAMINO',
      brands: [
        {
          id: 'eres-singular',
          name: 'Eres Singular',
          logoSrc: '/images/journey/eres-singular.png',
          alt: 'Eres Singular',
          height: 28,
        },
        {
          id: 'doubbleyou',
          name: 'DouBBleYou',
          logoSrc: '/images/journey/doubbleyou.png',
          alt: 'DouBBleYou',
          height: 20,
        },
        {
          id: 'netthinking',
          name: 'NetThinking',
          logoSrc: '/images/journey/netthinking.png',
          alt: 'NetThinking',
          height: 22,
        },
        {
          id: 'mindyou',
          name: 'MindYou',
          logoSrc: '/images/journey/mindfer.png',
          alt: 'MindYou',
          height: 28,
        },
        {
          id: 'imcebra',
          name: 'ImCebra',
          logoSrc: '/images/journey/imcebra.png',
          alt: 'ImCebra',
          height: 26,
        },
        {
          id: 'misombrero',
          name: 'Mi Sombrero',
          logoSrc: '/images/journey/misombrero.png',
          alt: 'Mi Sombrero',
          height: 34,
        },
      ],
    },
    copyright: `© ${new Date().getFullYear()} Eres Singular · Fer (Ma. Fernanda Cortés Espinosa ツ) · Todos los derechos reservados.`,
    futureLanguagesNote: 'Edición en Español · Arquitectura preparada para Español, English y Français.',
  },
};

export const siteDictionary: Record<Locale, SiteContent> = {
  es: siteContentEs,
  // Arquitectura lista para expandir a inglés y francés manteniendo la misma estructura tipada:
  en: siteContentEs,
  fr: siteContentEs,
};

export function getSiteContent(locale: Locale = 'es'): SiteContent {
  return siteDictionary[locale] ?? siteContentEs;
}
