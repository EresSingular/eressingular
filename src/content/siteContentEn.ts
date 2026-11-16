import type { SiteContent } from './siteContent';

export const siteContentEn: SiteContent = {
  locale: 'en',
  seo: {
    title: 'Eres Singular | Fer — Ma. Fernanda Cortés Espinosa · Personal Imprint Weaver',
    description:
      'Self-discovery mentorship and authentic personal branding with Fer (Ma. Fernanda Cortés Espinosa). 80-minute 1-on-1 session (US$ 150) and 3-month Eres Singular Program (US$ 1,490).',
    keywords: [
      'personal branding mentorship',
      'self-discovery and personal brand',
      'uncover natural strengths',
      'career reinvention',
      'professional purpose',
      'personal identity architecture',
      '1-on-1 mentorship',
      'authentic personal brand development',
      'Ma. Fernanda Cortés Espinosa',
      'Fer',
      'Eres Singular',
      'Personal Imprint Weaver',
    ],
    ogTitle: 'Eres Singular — Before showing yourself to the world, begin by looking at yourself',
    ogDescription:
      'What do you know that you don’t yet know you know? Self-discovery, identity, and authentic personal branding mentorship with Fer (Ma. Fernanda Cortés Espinosa).',
    canonicalUrl: 'https://eressingular.vercel.app',
  },
  brand: {
    name: 'Eres Singular',
    authorFullName: 'Ma. Fernanda Cortés Espinosa',
    authorSignature: 'Ma. Fernanda Cortés Espinosa ツ',
    authorRole: 'Tejedora de Huella Personal',
    phrases: [
      'Before showing yourself to the world, begin by looking at yourself.',
      'What do you know that you don’t yet know you know?',
      'Your experience has value. Let us shape it and set it in motion.',
      'It is not about being visible, but unforgettable.',
      'My singularity is helping others recognize theirs.',
    ],
    contactWhatsapp: '+56 9 5708 1096',
    contactEmail: 'lafer.mentora@gmail.com',
  },
  nav: {
    items: [
      { label: 'Home', href: '#inicio' },
      { label: 'My Approach', href: '#mi-enfoque' },
      { label: 'Experiences', href: '#experiencias' },
      { label: 'About Fer', href: '#sobre-mi' },
      { label: 'Contact', href: '#contacto' },
    ],
    quickAccess: {
      sessionLabel: '1-on-1 Session',
      programLabel: 'Program',
    },
  },
  hero: {
    eyebrow: 'Fer · Weaver of Personal Imprint',
    headline: 'Before showing yourself to the world, begin by looking at yourself.',
    featuredQuestion: 'What do you know that you don’t yet know you know?',
    supportingText:
      'Your story, your knowledge, and your unique way of doing things hold something singular. I accompany you to recognize it, give it shape, and turn it into an authentic expression of who you are.',
    primaryCta: {
      label: 'Discover my singularity',
      href: '#el-espejo',
    },
    secondaryCta: {
      label: 'Explore the program',
      href: '#experiencias',
    },
    portraitImage: {
      src: '/images/fer-mirarte.png',
      alt: 'Fer (Ma. Fernanda Cortés Espinosa) — Before showing yourself to the world, begin by looking at yourself',
      caption: 'Ma. Fernanda Cortés Espinosa ツ — Weaver of Personal Imprint',
    },
    videoPlaceholder: {
      badge: 'RESERVED SPACE · WELCOME VIDEO',
      title: 'Meet Fer and discover the heart of Eres Singular',
      durationHint: 'Welcome capsule with Fer (coming soon)',
      description:
        'Placeholder prepared for Fer’s authentic presentation video.',
      statusNote: 'Audiovisual placeholder ready for production video upload.',
    },
  },
  mirror: {
    sectionNumber: '02',
    eyebrow: 'Section 02 — The Mirror',
    title: 'A pause to observe your own journey',
    intro:
      'Many of your strengths are so natural to you that they go unnoticed. Others have remained hidden beneath external expectations, demanding phases, or learned ways of looking at life. Pause for a moment with each question:',
    interactionHint:
      'Click on any question to pause and unfold its personal reflection space.',
    questions: [
      {
        id: 'q1',
        number: '01',
        question: 'What do you do so naturally that you have never considered it a talent?',
        reflectionPrompt:
          'What you resolve effortlessly is often at the very core of your singularity. Because it comes so easily to you, it is tempting to assume everyone sees or does it the same way.',
        pillarTag: 'Naturalized strengths',
      },
      {
        id: 'q2',
        number: '02',
        question: 'Which situations keep repeating in your life?',
        reflectionPrompt:
          'Observing the recurring scenarios, conversations, or decisions that keep emerging allows you to recognize patterns and beliefs that are currently conditioning your next chapter.',
        pillarTag: 'Pattern recognition',
      },
      {
        id: 'q3',
        number: '03',
        question: 'What have you learned from everything you have lived through?',
        reflectionPrompt:
          'Your personal and professional path is not a mere list of job titles or isolated events: it is seasoned wisdom that grounds your judgment and your authentic voice.',
        pillarTag: 'Life wisdom & history',
      },
      {
        id: 'q4',
        number: '04',
        question: 'Which project have you been wanting to start for a long time?',
        reflectionPrompt:
          'Ideas that stay with you across time usually signal a genuine direction that simply requires clarity, structure, and decision to be set in motion.',
        pillarTag: 'Purpose & direction',
      },
      {
        id: 'q5',
        number: '05',
        question: 'Which part of you is still waiting to find its expression?',
        reflectionPrompt:
          'Building an authentic personal brand is not about manufacturing an artificial persona, but about giving shape, language, and presence to who you truly are today.',
        pillarTag: 'Authentic expression',
      },
    ],
    closingQuote: '“Your experience has value. Let us shape it and set it in motion.”',
    ctaLabel: 'Learn how we walk this journey together',
  },
  methodology: {
    sectionNumber: '03',
    eyebrow: 'Section 03 — The Methodology',
    title: 'Personal brand as a consequence of self-recognition',
    intro:
      'It is not merely about learning how to show up, gaining followers, or crafting an external professional image. It is about understanding who you are, what you know, what you have lived through, what you want to contribute, and how you choose to express it in the world.',
    philosophyStatement:
      'Every person possesses a story, knowledge, experiences, and capabilities that deserve to be recognized.',
    journeyTitle: 'The Eres Singular Journey',
    journeySubtitle: 'Five conscious movements from inner observation to authentic expression in the world:',
    journeySteps: [
      {
        id: 'mirar',
        number: '01',
        verb: 'Observe',
        title: 'Looking at your journey without judgment',
        description:
          'Taking a conscious pause to contemplate your personal and professional story, honoring the road traveled and the life phase you inhabit today.',
      },
      {
        id: 'reconocer',
        number: '02',
        verb: 'Recognize',
        title: 'Identifying patterns, beliefs, and natural gifts',
        description:
          'Distinguishing those strengths so ingrained in you that you took them for granted, as well as the inherited beliefs or expectations that have constrained your voice.',
      },
      {
        id: 'comprender',
        number: '03',
        verb: 'Understand',
        title: 'Connecting your lived experience with your true value',
        description:
          'Integrating what you have experienced, learned, and mastered to comprehend your singular contribution and the genuine place from which you connect with others.',
      },
      {
        id: 'elegir',
        number: '04',
        verb: 'Choose',
        title: 'Defining purpose, direction, and proposition',
        description:
          'Making decisions with clarity and freedom regarding the chapter you wish to open, what you wish to offer, and how you want to inhabit your professional path.',
      },
      {
        id: 'expresar',
        number: '05',
        verb: 'Express',
        title: 'Giving voice and shape to your personal imprint',
        description:
          'Translating your identity into a clear narrative, a coherent value proposition, and authentic communication that allows you to be unforgettable while staying true to yourself.',
      },
    ],
    proprietaryMethods: {
      rda: {
        category: 'Fer’s Methodology',
        acronym: 'RDA',
        fullName: 'Rompe, Domina, Activa',
        tagline: 'Dynamics of personal movement and clarity',
        description:
          'A practical approach to leave borrowed molds behind, serenely own your story, and launch your value proposition into the real world.',
        pillars: [
          {
            letter: 'R',
            word: 'Rompe (Break)',
            meaning:
              'Question automatic inertias, borrowed labels, and external expectations that no longer represent who you are today.',
          },
          {
            letter: 'D',
            word: 'Domina (Master)',
            meaning:
              'Recognize and organize your skills, life lessons, and professional mastery to sustain your voice with certainty.',
          },
          {
            letter: 'A',
            word: 'Activa (Activate)',
            meaning:
              'Bring your singularity into action through tangible decisions, coherent presence, and a directed proposition.',
          },
        ],
      },
      mapa: {
        category: 'Fer’s Core Framework',
        acronym: 'M.A.P.A.',
        fullName: 'Matriz de Arquitectura Personal Auténtica',
        tagline: 'Living architecture of identity and expression',
        description:
          'The compass where your biography, your knowledge, and your purpose converge to build a personal brand with human substance and commercial clarity.',
        dimensions: [
          'Self-discovery and personal & professional history',
          'Recognition of patterns, beliefs, and naturalized strengths',
          'Purpose, direction, and personal identity architecture',
          'Authentic communication and value proposition development',
        ],
      },
    },
    integrationAreas: [
      'Self-discovery',
      'Pattern & belief recognition',
      'Personal & professional history',
      'Identification of natural strengths',
      'Purpose & direction',
      'Identity & personal brand',
      'Authentic communication',
      'Value proposition development',
    ],
    audiencesTitle: 'Who is Eres Singular for?',
    audiences: [
      {
        title: 'Experienced professionals stepping into a new chapter',
        description:
          'Individuals with a solid track record who wish to open a new professional chapter aligned with who they are today.',
      },
      {
        title: 'Entrepreneurs seeking an authentic proposition',
        description:
          'Those who want to build or revamp their brand rooted in their truth and identity, far from impersonal formulas.',
      },
      {
        title: 'Creators with long-postponed initiatives',
        description:
          'Those who have spent time nurturing an idea or initiative and need clarity and structure to bring it to life.',
      },
      {
        title: 'Leaders undergoing personal & career reinvention',
        description:
          'People navigating a change of direction who want to reorder their story to choose their next step with meaning.',
      },
      {
        title: 'Keepers of deep wisdom ready to express it',
        description:
          'Professionals who feel they have immense value and experience to share, but have not yet found how to articulate and communicate it.',
      },
    ],
  },
  experiences: {
    sectionNumber: '04',
    eyebrow: 'Section 04 — Two Ways of Working Together',
    title: 'Two points of entry. The same commitment to your singularity.',
    intro:
      'Each person stands at a distinct moment in their journey. You can begin with an individual session of clarity and recognition, or embark on the comprehensive three-month mentorship journey.',
    equalValueNote:
      'Both experiences are live 1-on-1 with Fer and deliver standalone value from our very first meeting.',
    items: {
      session: {
        id: 'sesion-individual',
        badge: 'Experience 01 · Starting Point & Fresh Perspective',
        title: '1-on-1 Session',
        subtitle: 'Recognition of patterns, capabilities, and a concrete starting point',
        duration: '80 minutes',
        sessionsCount: '1 deep individual session',
        priceUSD: 'US$ 150',
        shortDescription:
          'A dedicated individual experience to recognize patterns, natural strengths, key lessons, and real possibilities.',
        purpose:
          'The goal is to provide a fresh perspective on your own story and a concrete starting point for your next step.',
        ctaLabel: 'Book my session',
        detailTriggerLabel: 'View expanded session details',
        formTabId: 'sesion',
        expandedView: {
          eyebrow: 'Experience 01 · Expanded View',
          headline: '80-Minute 1-on-1 Session',
          intro:
            'A deep, structured one-on-one conversation with Fer, designed as a complete experience in itself to look at your current moment with clarity, untangle bottlenecks, and recognize the true value of your journey.',
          whatWeExplore: [
            'A joint reading of your present moment, your trajectory, and the questions currently guiding you.',
            'Recognition of hidden patterns, conditioned beliefs, and natural strengths that often go unnoticed.',
            'Clarity on the real possibilities ahead of you and your concrete immediate starting point.',
            'Direct guidance to structure your thoughts, your personal narrative, or the focus of your next step.',
          ],
          whoIsItFor: [
            'Those seeking an initial deep and actionable perspective on their life story and professional path.',
            'Professionals who need to untangle a major decision, organize a project, or clarify their current direction.',
            'Those who prefer experiencing a high-impact, standalone session before committing to an extended program.',
          ],
          formatAndDuration: [
            { label: 'Duration', value: '80 minutes live (online 1-on-1)' },
            { label: 'Investment', value: 'US$ 150' },
            { label: 'Modality', value: 'Personalized private session with Fer' },
          ],
          nextSteps: [
            '1. Fill out the booking request form with your name, email, country, and the main goal for your session.',
            '2. You will receive a personal reply to coordinate the schedule according to your time zone along with payment details.',
            '3. We hold our 80-minute session focused 100% on your story and your starting point.',
          ],
          primaryActionLabel: 'Book my session (US$ 150)',
        },
      },
      program: {
        id: 'programa-eres-singular',
        badge: 'Experience 02 · Deep Mentorship Journey',
        title: 'Eres Singular Program',
        subtitle: 'Three months to recognize your story, build identity, and express your personal brand',
        duration: 'Three months',
        sessionsCount: '13 sessions',
        priceUSD: 'US$ 1,490',
        shortDescription:
          'A three-month mentorship journey to deepen self-discovery, recognize patterns and beliefs, construct personal identity, and develop an authentic expression of your brand.',
        purpose:
          'To integrate who you are, what you know, and what you have lived through into a clear, human, and sustainable value proposition.',
        ctaLabel: 'Inquire about the program',
        detailTriggerLabel: 'View expanded program details',
        formTabId: 'programa',
        expandedView: {
          eyebrow: 'Experience 02 · Expanded View',
          headline: 'Eres Singular Program — Three Months (13 Sessions)',
          intro:
            'A dedicated 1-on-1 accompaniment journey alongside Fer spanning 13 individual sessions. We navigate step by step through Observe → Recognize → Understand → Choose → Express, integrating the RDA and M.A.P.A. methodologies.',
          whatWeExplore: [
            'Deep self-discovery: a comprehensive reading of your personal and professional history, lessons, and life path.',
            'Identification of limiting patterns, subconscious beliefs, and naturalized talents that define your singularity.',
            'Clarification of purpose, life/career direction, and personal identity architecture (M.A.P.A.).',
            'Development of your narrative, authentic communication, and value proposition ready to shine in the world (RDA).',
          ],
          whoIsItFor: [
            'Professionals and leaders opening a new phase who want to build a presence true to their trajectory.',
            'Entrepreneurs and consultants seeking to differentiate their offering from their true identity rather than generic formulas.',
            'Individuals committed to bringing a personal venture to life or undergoing a career reinvention with close guidance.',
          ],
          formatAndDuration: [
            { label: 'Total duration', value: 'Three months of continuous accompaniment' },
            { label: 'Structure', value: '13 individual 1-on-1 sessions with Fer' },
            { label: 'Investment', value: 'US$ 1,490' },
          ],
          nextSteps: [
            '1. Submit your inquiry about the Eres Singular Program using the contact form.',
            '2. We will have a brief initial conversation to ensure the program matches your current stage and goals.',
            '3. We set our start schedule and begin your 13-session transformative journey.',
          ],
          primaryActionLabel: 'Inquire about the program (US$ 1,490)',
        },
      },
    },
  },
  stories: {
    sectionNumber: '05',
    eyebrow: 'Section 05 — Real Stories',
    title: 'First-person experiences and transformations',
    intro:
      'Behind every process lies a real human story: professionals and leaders who paused to look at themselves, recognize their worth, and give it an expression of their own.',
    unpublishedNotice: {
      badge: 'PREPARED SPACE · RESPONSIBLE PUBLICATION',
      title: 'Testimonials and case studies undergoing authorized editorial review',
      description:
        'Out of deep respect for privacy and truthfulness, this section maintains placeholder cards until literal authorized narratives and releases from people accompanied by Fer are incorporated.',
    },
    items: [
      {
        id: 'historia-01',
        published: false,
        name: 'Reserved space — Real Case 01',
        roleOrContext: 'Professional in transition / New career chapter',
        country: 'Global',
        photoPlaceholderLabel: 'Authorized photo · Case 01',
        quote:
          '[Testimonial placeholder: authorized literal narrative on the experience of looking within and uncovering natural strengths.]',
        concreteLearning:
          '[Concrete result: clarity achieved, perspective shift, and expression of a personal proposition.]',
      },
      {
        id: 'historia-02',
        published: false,
        name: 'Reserved space — Real Case 02',
        roleOrContext: 'Entrepreneurship & authentic brand creation',
        country: 'Global',
        photoPlaceholderLabel: 'Authorized photo · Case 02',
        quote:
          '[Testimonial placeholder: authorized literal narrative on 1-on-1 mentorship with the RDA and M.A.P.A. frameworks.]',
        concreteLearning:
          '[Concrete result: articulating professional trajectory into a brand offer with genuine identity.]',
      },
      {
        id: 'historia-03',
        published: false,
        name: 'Reserved space — Real Case 03',
        roleOrContext: 'Career reinvention & authentic voice',
        country: 'Global',
        photoPlaceholderLabel: 'Authorized photo · Case 03',
        quote:
          '[Testimonial placeholder: authorized literal narrative on the experience of working 1-on-1 with Fer.]',
        concreteLearning:
          '[Concrete result: moving past hesitation and launching a long-nurtured initiative.]',
      },
    ],
  },
  aboutFer: {
    sectionNumber: '06',
    eyebrow: 'Section 06 — Soy Fer',
    title: 'Soy Fer',
    subtitle: 'Publicist, mentor and Weaver of Personal Imprint',
    leadParagraph:
      'My journey is not merely a résumé: it is the living territory from which I accompany you to look at your own story today.',
    storyParagraphs: [
      'I am a publicist, strategist, and entrepreneur. For over 30 years, I have worked with individuals, brands, and businesses, understanding how to construct propositions that truly connect and remain unforgettable.',
      'Over time, I realized that the most powerful brands do not rely on communication gimmicks, but on the truth of the person inhabiting them. My own personal transformation led me to integrate that strategic expertise with a deep commitment to self-discovery, consciousness, and freedom of choice.',
      'I chose to live as a nomad to step out of the familiar, travel across countries, listen to other cultures, and discover new ways of seeing the world. That continuous journey confirmed something essential: within every person lies a wealth that often they themselves have not yet finished seeing.',
      'Today, I accompany professionals, entrepreneurs, and people at crossroads to observe their journey, recognize their patterns and naturalized strengths, and transform them into an authentic expression of their singularity.',
    ],
    highlights: [
      {
        figure: '+30 years',
        label: 'Professional journey',
        detail: 'As a publicist, strategist, and entrepreneur working alongside people and businesses.',
      },
      {
        figure: 'Nomadic life',
        label: 'Intercultural perspective',
        detail: 'Connecting with people, stories, and cultures throughout the world.',
      },
      {
        figure: 'Personal Imprint',
        label: '1-on-1 Mentorship',
        detail: 'Where self-discovery and identity give birth to an authentic personal brand.',
      },
    ],
    mainPortrait: {
      src: '/images/fer-sillon.png',
      alt: 'Fer — Ma. Fernanda Cortés Espinosa, Weaver of Personal Imprint',
      caption: 'Ma. Fernanda Cortés Espinosa',
    },
    mediaPlaceholders: [
      {
        id: 'fer-foto-nomada',
        label: 'Space for authentic photography · Fer on the road and encounters',
        aspectRatio: '4/3',
        description: 'Placeholder for documentary photography of Fer traveling and holding live conversations.',
      },
      {
        id: 'fer-foto-trabajo',
        label: 'Space for authentic photography · 1-on-1 work with Fer',
        aspectRatio: '4/3',
        description: 'Placeholder for portrait or live session photograph of Fer.',
      },
    ],
    closingQuote: '“My singularity is helping others recognize theirs.”',
    signatureName: 'Ma. Fernanda Cortés Espinosa',
    signatureTitle: 'Tejedora de Huella Personal',
  },
  nextStep: {
    sectionNumber: '07',
    eyebrow: 'Section 07 — Your Next Step',
    title: 'Your story already holds value. What would you like to create with it?',
    intro:
      'Choose the alternative that best meets you where you are today. Fill out a few brief details and I will personally reach out to take the next step together.',
    transparencyNote:
      'Important: This form registers your direct contact inquiry. It does not perform automatic charges or simulate calendar reservations without prior confirmation.',
    forms: {
      session: {
        tabLabel: 'Book 1-on-1 session (US$ 150)',
        badge: 'Experience 01 · 80 minutes · US$ 150',
        title: 'Book an 80-minute 1-on-1 session',
        priceTag: 'US$ 150',
        description:
          'Leave your details and briefly share what you would like to explore during our 80-minute session. I will reach out personally to coordinate date, time in your country, and payment method.',
        submitLabel: 'Request my 1-on-1 session',
        confirmationTitle: 'Thank you for taking this first step!',
        confirmationMessage:
          'Your inquiry for the 80-minute 1-on-1 Session (US$ 150) has been successfully recorded.',
        confirmationNextSteps: [
          'No automated charge or schedule blocking has been made yet.',
          'I will personally review your message and write to you via email or WhatsApp to coordinate your session time and provide payment details.',
        ],
      },
      program: {
        tabLabel: 'Inquire about the program (US$ 1,490)',
        badge: 'Experience 02 · Three months (13 sessions) · US$ 1,490',
        title: 'Request information about the three-month program',
        priceTag: 'US$ 1,490',
        description:
          'Tell me about your current stage and what inspires you to explore the Eres Singular Program (3 months, 13 sessions). I will contact you personally to discuss the journey and answer your questions.',
        submitLabel: 'Request program information',
        confirmationTitle: 'I have received your interest in the Eres Singular Program!',
        confirmationMessage:
          'Your inquiry regarding the three-month mentorship program (13 sessions — US$ 1,490) has been received.',
        confirmationNextSteps: [
          'This inquiry does not commit you to an immediate payment.',
          'I will get in touch personally to share details of the journey and discuss how it adapts to your current chapter.',
        ],
      },
    },
  },
  footer: {
    manifesto:
      'Eres Singular is an invitation to recognize oneself in order to express authentically in the world. Technology supports the experience. The human being remains at the center.',
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
    copyright: `© ${new Date().getFullYear()} Eres Singular · Fer (Ma. Fernanda Cortés Espinosa ツ) · All rights reserved.`,
    futureLanguagesNote: 'Available in Español and English.',
  },
};
