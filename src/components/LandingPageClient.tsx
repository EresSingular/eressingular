'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Play,
  Compass,
  Layers,
  Sparkles,
  X,
  Check,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from 'lucide-react';
import { getSiteContent, type SiteContent, type Locale } from '@/content/siteContent';
import { Navbar } from './Navbar';
import { MirrorSection } from './MirrorSection';
import { ExperiencesSection } from './ExperiencesSection';
import { StoriesSection } from './StoriesSection';
import { ContactFormsSection } from './ContactFormsSection';
import { GistesySignature } from './GistesySignature';
import { AudienceCarousel } from './AudienceCarousel';

interface LandingPageClientProps {
  content?: SiteContent;
  initialLocale?: Locale;
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74l-.07-.11a2.89 2.89 0 0 1 2.37-4.53c.4 0 .79.08 1.14.23V9.45a6.34 6.34 0 0 0-1.14-.1 6.28 6.28 0 0 0-6.27 6.29 6.28 6.28 0 0 0 6.28 6.29c3.46 0 6.28-2.81 6.28-6.29V8.72a8.23 8.23 0 0 0 4.89 1.58V6.83a4.83 4.83 0 0 1-1.06-.14z" />
    </svg>
  );
}

export function LandingPageClient({
  content: initialContent,
  initialLocale = 'es',
}: LandingPageClientProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [selectedFormTab, setSelectedFormTab] = useState<'sesion' | 'programa'>('sesion');
  const videoDialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get('lang');
      if (langParam === 'en' || langParam === 'es') {
        setLocale(langParam as Locale);
        return;
      }
      const savedLang = localStorage.getItem('es_locale');
      if (savedLang === 'en' || savedLang === 'es') {
        setLocale(savedLang as Locale);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    try {
      localStorage.setItem('es_locale', newLocale);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }
  };

  const content = getSiteContent(locale);

  return (
    <>
      <Navbar
        content={content}
        currentLocale={locale}
        onLocaleChange={handleLocaleChange}
        onSelectExperienceForm={(tab) => setSelectedFormTab(tab)}
      />

      <main id="contenido-principal">
        {/* =========================================================
            SECCIÓN 01 — PORTADA (#inicio)
           ========================================================= */}
        <section
          id="inicio"
          className="section-dark"
          style={{
            paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)',
            paddingBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
          }}
          aria-labelledby="hero-headline"
        >
          <div className="container">
            <div className="hero-grid">
              <div>
                <span className="section-eyebrow" style={{ marginBottom: '0.65rem' }}>
                  {content.hero.eyebrow}
                </span>

                <h1 id="hero-headline" className="hero-headline">
                  {content.hero.headline}
                </h1>

                <div className="hero-question-box">
                  <p className="hero-question">{content.hero.featuredQuestion}</p>
                </div>

                <p className="hero-supporting">{content.hero.supportingText}</p>

                <div className="hero-actions">
                  <a href={content.hero.primaryCta.href} className="btn btn-primary">
                    <span>{content.hero.primaryCta.label}</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>

                  <a href={content.hero.secondaryCta.href} className="btn btn-outline-dark">
                    <span>{content.hero.secondaryCta.label}</span>
                  </a>
                </div>
              </div>

              {/* Retrato auténtico de Fer completo en pantalla */}
              <div>
                <figure className="hero-portrait-card">
                  <Image
                    src={content.hero.portraitImage.src}
                    alt={content.hero.portraitImage.alt}
                    width={900}
                    height={680}
                    priority
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                  <figcaption className="hero-portrait-caption">
                    <div>
                      <GistesySignature
                        fontSize="1.7rem"
                        smileyFontSize="0.95rem"
                        color="var(--color-white)"
                      />
                      <div
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: 'var(--color-magenta-light)',
                          marginTop: '0.15rem',
                        }}
                      >
                        {content.brand.authorRole}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--color-gray-300)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '999px',
                      }}
                    >
                      Soy Fer
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Cajita de video alargada a todo el ancho de las dos columnas */}
            <div className="video-slot-card">
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.5rem 1rem',
                  flex: '1 1 500px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-magenta-light)',
                    background: 'rgba(255, 3, 154, 0.1)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '999px',
                  }}
                >
                  {content.hero.videoPlaceholder.badge}
                </span>
                <span
                  style={{
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    color: 'var(--color-white)',
                  }}
                >
                  {content.hero.videoPlaceholder.title}
                </span>
                <span style={{ fontSize: '0.84rem', color: 'var(--color-gray-400)' }}>
                  · {content.hero.videoPlaceholder.durationHint}
                </span>
              </div>

              <button
                type="button"
                onClick={() => videoDialogRef.current?.showModal()}
                className="btn btn-outline-dark"
                style={{ padding: '0.55rem 1.2rem', minHeight: '44px', flexShrink: 0 }}
              >
                <Play size={16} aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }} />
                <span>Ver espacio de video</span>
              </button>
            </div>
          </div>

          {/* Modal nativo <dialog> para el marcador de video de presentación */}
          <dialog
            ref={videoDialogRef}
            id="dialog-video-presentacion"
            aria-labelledby="video-dialog-title"
            {...({ closedby: 'any' } as React.DialogHTMLAttributes<HTMLDialogElement>)}
          >
            <div style={{ padding: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--color-magenta-light)',
                      fontWeight: 700,
                    }}
                  >
                    {content.hero.videoPlaceholder.badge}
                  </span>
                  <h2
                    id="video-dialog-title"
                    className="font-display-montserrat"
                    style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.2rem' }}
                  >
                    {content.hero.videoPlaceholder.title}
                  </h2>
                </div>

                <form method="dialog">
                  <button
                    type="submit"
                    value="close"
                    autoFocus
                    aria-label="Cerrar ventana de video"
                    className="btn btn-outline-dark"
                    style={{ minWidth: '48px', padding: '0.6rem' }}
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                </form>
              </div>

              <div
                style={{
                  aspectRatio: '16 / 9',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px dashed var(--color-magenta-light)',
                  background: 'rgba(11, 11, 13, 0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  textAlign: 'center',
                  gap: '0.85rem',
                }}
              >
                <Play size={42} aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }} />
                <p style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  {content.hero.videoPlaceholder.description}
                </p>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-gray-400)', maxWidth: '48ch' }}>
                  {content.hero.videoPlaceholder.statusNote}
                </p>
              </div>
            </div>
          </dialog>
        </section>

        {/* =========================================================
            SECCIÓN 02 — EL ESPEJO (#el-espejo)
           ========================================================= */}
        <MirrorSection content={content.mirror} locale={locale} />

        {/* =========================================================
            SECCIÓN 03 — LA METODOLOGÍA (#mi-enfoque)
           ========================================================= */}
        <section
          id="mi-enfoque"
          className="section-dark"
          aria-labelledby="methodology-heading"
        >
          <div className="container">
            <div className="scroll-reveal" style={{ maxWidth: '820px' }}>
              <span className="section-eyebrow">{content.methodology.eyebrow}</span>
              <h2 id="methodology-heading" className="section-title">
                {content.methodology.title}
              </h2>
              <p
                className="font-display-montserrat"
                style={{
                  fontSize: 'clamp(1.12rem, 1.48vw, 1.35rem)', /* ~21.6px sub-frase destacada */
                  fontWeight: 700,
                  color: 'var(--color-white)',
                  marginBottom: '1rem',
                  maxWidth: '56ch',
                  lineHeight: 1.4,
                }}
              >
                «{content.methodology.philosophyStatement}»
              </p>
              <p className="section-intro">{content.methodology.intro}</p>
            </div>

            {/* El recorrido: Mirar → Reconocer → Comprender → Elegir → Expresar */}
            <div style={{ marginTop: '3.25rem' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div>
                  <h3
                    className="font-display-montserrat"
                    style={{ fontSize: 'clamp(1.4rem, 2vw, 1.78rem)', fontWeight: 800 }} /* ~28.5px (26–30px) */
                  >
                    El recorrido{' '}
                    <span
                      className="font-brittany"
                      style={{
                        fontSize: '1.28em',
                        fontWeight: 400,
                        color: 'var(--color-magenta-light)',
                        marginLeft: '0.2rem',
                      }}
                    >
                      Eres Singular
                    </span>
                  </h3>
                  <p style={{ color: 'var(--color-gray-400)', fontSize: '1rem', marginTop: '0.25rem' }}>
                    {content.methodology.journeySubtitle}
                  </p>
                </div>

                <div
                  aria-label="Secuencia del recorrido"
                  style={{
                    fontSize: '0.84rem', /* ~13.5px auxiliar */
                    fontWeight: 700,
                    color: 'var(--color-magenta-light)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {locale === 'en'
                    ? 'Observe → Recognize → Understand → Choose → Express'
                    : 'Mirar → Reconocer → Comprender → Elegir → Expresar'}
                </div>
              </div>

              <div className="journey-grid">
                {content.methodology.journeySteps.map((step) => (
                  <article key={step.id} className="journey-card">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          color: 'var(--color-magenta-light)',
                          letterSpacing: '0.1em',
                        }}
                      >
                        PASO {step.number}
                      </span>
                    </div>
                    <h4 className="journey-verb">{step.verb}</h4>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-white)' }}>
                      {step.title}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-300)', lineHeight: 1.65 }}>
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Metodologías propias de Fer: RDA y M.A.P.A. */}
            <div className="methods-duo-grid">
              {/* RDA — Metodología */}
              <article className="method-box" aria-labelledby="method-rda-title">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-magenta-light)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '0.65rem',
                  }}
                >
                  <Sparkles size={15} aria-hidden="true" />
                  <span>{content.methodology.proprietaryMethods.rda.category} · {content.methodology.proprietaryMethods.rda.tagline}</span>
                </div>

                <h3
                  id="method-rda-title"
                  className="font-display-montserrat"
                  style={{
                    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    color: 'var(--color-white)',
                    marginBottom: '0.25rem',
                    lineHeight: 1.05,
                  }}
                >
                  {content.methodology.proprietaryMethods.rda.acronym}
                </h3>
                <div
                  style={{
                    fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                    fontWeight: 700,
                    color: 'var(--color-white)',
                    letterSpacing: '0.02em',
                    marginBottom: '1.15rem',
                  }}
                >
                  {content.methodology.proprietaryMethods.rda.fullName}
                </div>

                <p style={{ color: 'var(--color-gray-300)', marginBottom: '1.75rem', fontSize: '1rem', lineHeight: 1.7, maxWidth: '56ch' }}>
                  {content.methodology.proprietaryMethods.rda.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {content.methodology.proprietaryMethods.rda.pillars.map((pillar) => (
                    <div
                      key={pillar.letter}
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'flex-start',
                        padding: '1rem 1.15rem',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: 'var(--radius-sm)',
                        borderInlineStart: '3px solid var(--color-magenta-light)',
                      }}
                    >
                      <span
                        className="font-display-montserrat"
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 900,
                          color: 'var(--color-magenta-light)',
                          lineHeight: 1,
                          minWidth: '1.5rem',
                        }}
                      >
                        {pillar.letter}
                      </span>
                      <div>
                        <strong style={{ color: 'var(--color-white)', display: 'block', fontWeight: 700 }}>
                          {pillar.word}
                        </strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
                          {pillar.meaning}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* M.A.P.A. — Herramienta */}
              <article className="method-box" aria-labelledby="method-mapa-title">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-magenta-light)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '0.65rem',
                  }}
                >
                  <Compass size={15} aria-hidden="true" />
                  <span>{content.methodology.proprietaryMethods.mapa.category} · {content.methodology.proprietaryMethods.mapa.tagline}</span>
                </div>

                <h3
                  id="method-mapa-title"
                  className="font-display-montserrat"
                  style={{
                    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    color: 'var(--color-white)',
                    marginBottom: '0.25rem',
                    lineHeight: 1.05,
                  }}
                >
                  {content.methodology.proprietaryMethods.mapa.acronym}
                </h3>
                <div
                  style={{
                    fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                    fontWeight: 700,
                    color: 'var(--color-white)',
                    letterSpacing: '0.02em',
                    marginBottom: '1.15rem',
                  }}
                >
                  {content.methodology.proprietaryMethods.mapa.fullName}
                </div>

                <p style={{ color: 'var(--color-gray-300)', marginBottom: '1.75rem', fontSize: '1rem', lineHeight: 1.7, maxWidth: '56ch' }}>
                  {content.methodology.proprietaryMethods.mapa.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {content.methodology.proprietaryMethods.mapa.dimensions.map((dim, idx) => (
                    <li
                      key={dim}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.9rem',
                        padding: '0.95rem 1.15rem',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <span
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: 'rgba(255, 3, 154, 0.22)',
                          color: 'var(--color-magenta-light)',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <span style={{ fontSize: '0.95rem', color: 'var(--color-white)', fontWeight: 600, lineHeight: 1.5 }}>
                        {dim}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Ejes que integra el acompañamiento: abarca ambas columnas porque pertenece a ambos */}
              <div className="methods-integration-bar">
                <div className="methods-integration-header">
                  <Layers size={16} aria-hidden="true" />
                  <span>{locale === 'en' ? 'Integrated mentorship pillars:' : 'Ejes que integra el acompañamiento:'}</span>
                </div>
                <div className="methods-integration-pills">
                  {content.methodology.integrationAreas.map((area) => (
                    <span key={area} className="methods-integration-pill">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ¿Para quién es Eres Singular? — Carrusel dinámico con movimiento */}
            <AudienceCarousel
              audiences={content.methodology.audiences}
              title={content.methodology.audiencesTitle}
              locale={locale}
            />
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 04 — DOS MANERAS DE TRABAJAR CONMIGO (#experiencias)
           ========================================================= */}
        <ExperiencesSection
          content={content.experiences}
          locale={locale}
          onSelectExperienceForm={(tab) => setSelectedFormTab(tab)}
        />

        {/* =========================================================
            SECCIÓN 05 — HISTORIAS REALES (#historias)
           ========================================================= */}
        <StoriesSection content={content.stories} />

        {/* =========================================================
            SECCIÓN 06 — SOY FER (#sobre-mi)
           ========================================================= */}
        <section
          id="sobre-mi"
          className="section-light"
          aria-labelledby="about-fer-heading"
        >
          <div className="container">
            {/* Encabezado editorial de sección */}
            <div style={{ maxWidth: '64ch', marginBottom: '2.5rem' }}>
              <span className="section-eyebrow">{content.aboutFer.eyebrow}</span>
              <h2
                id="about-fer-heading"
                className="section-title"
                style={{ marginBottom: '0.2rem' }}
              >
                {content.aboutFer.title}
              </h2>
              <div style={{ marginBottom: '0.35rem' }}>
                <GistesySignature
                  fontSize="clamp(2.1rem, 3.4vw, 2.9rem)"
                  smileyFontSize="1.15rem"
                  color="var(--color-black)"
                />
              </div>
              <p
                style={{
                  fontSize: '1.02rem',
                  fontWeight: 600,
                  color: 'var(--color-gray-800)',
                }}
              >
                {content.aboutFer.subtitle}
              </p>
            </div>

            {/* Cuadrícula editorial equilibrada: Visual + Trayectoria a la izquierda, Relato y Cierre a la derecha */}
            <div className="about-editorial-grid">
              {/* Columna Izquierda: Retrato compacto de Fer + Hitos de trayectoria */}
              <div className="about-visual-col">
                <div className="fer-portrait-compact">
                  <Image
                    src={content.aboutFer.mainPortrait.src}
                    alt={content.aboutFer.mainPortrait.alt}
                    width={480}
                    height={580}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '440px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Hitos de recorrido integrados de forma armónica bajo el retrato */}
                <div className="about-highlights-stack">
                  {content.aboutFer.highlights.map((item) => (
                    <div key={item.label} className="about-highlight-card">
                      <div className="about-highlight-figure font-display-montserrat">
                        {item.figure}
                      </div>
                      <div className="about-highlight-label">{item.label}</div>
                      <p className="about-highlight-detail">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna Derecha: Frase central, Relato y Cierre */}
              <div className="about-story-col">
                <p
                  className="font-display-montserrat"
                  style={{
                    fontSize: 'clamp(1.1rem, 1.4vw, 1.28rem)',
                    fontWeight: 700,
                    lineHeight: 1.5,
                    color: 'var(--color-black)',
                    marginBottom: '1.75rem',
                    borderInlineStart: '3.5px solid var(--color-magenta)',
                    paddingInlineStart: '1.1rem',
                  }}
                >
                  {content.aboutFer.leadParagraph}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.2rem',
                    marginBottom: '2.25rem',
                  }}
                >
                  {content.aboutFer.storyParagraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      style={{
                        fontSize: 'clamp(0.98rem, 1.05vw, 1.05rem)',
                        lineHeight: 1.78,
                        color: 'var(--color-gray-800)',
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Cierre y Firma en tarjeta negra */}
                <div
                  style={{
                    padding: '2rem 2.25rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--color-black)',
                    color: 'var(--color-white)',
                    border: '1px solid rgba(255, 3, 154, 0.35)',
                    boxShadow: '0 16px 36px -12px rgba(11, 11, 13, 0.25)',
                  }}
                >
                  <blockquote
                    className="font-display-montserrat"
                    style={{
                      fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                      fontWeight: 700,
                      lineHeight: 1.38,
                      marginBottom: '1.25rem',
                      color: 'var(--color-white)',
                    }}
                  >
                    {content.aboutFer.closingQuote}
                  </blockquote>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '1rem' }}>
                    <GistesySignature
                      fontSize="2.15rem"
                      smileyFontSize="1.05rem"
                      color="var(--color-white)"
                    />
                    <div
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--color-magenta-light)',
                        fontWeight: 700,
                        marginTop: '0.2rem',
                      }}
                    >
                      {content.aboutFer.signatureTitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 07 — TU SIGUIENTE PASO (#contacto)
           ========================================================= */}
        <ContactFormsSection
          content={content.nextStep}
          activeTab={selectedFormTab}
          locale={locale}
          onTabChange={(tab) => setSelectedFormTab(tab)}
        />
      </main>

      {/* =========================================================
          PIE DE PÁGINA / FOOTER
         ========================================================= */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            {/* Izquierda: Marca y manifiesto */}
            <div className="footer-brand-col">
              <div
                className="font-brittany"
                style={{
                  fontSize: '1.65rem',
                  color: '#FFFFFF',
                  marginBottom: '0.65rem',
                  lineHeight: 1.1,
                }}
              >
                Eres Singular
              </div>
              <p style={{ color: 'var(--color-gray-300)', fontSize: '0.86rem', lineHeight: 1.65 }}>
                {content.footer.manifesto}
              </p>
            </div>

            {/* Centro: Redes Sociales & Contacto Directo */}
            <div className="footer-social-col">
              <span className="footer-social-label">
                {locale === 'en' ? 'LET’S CONNECT' : 'CONECTEMOS'}
              </span>
              <div className="footer-social-icons">
                <a
                  href={content.footer.socialLinks.find((s) => s.id === 'linkedin')?.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="LinkedIn de María Fernanda Cortés Espinosa"
                  title="LinkedIn"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href={content.footer.socialLinks.find((s) => s.id === 'instagram')?.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="Instagram @fer.eressingular"
                  title="Instagram"
                >
                  <Instagram size={18} aria-hidden="true" />
                </a>
                <a
                  href={content.footer.socialLinks.find((s) => s.id === 'youtube')?.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="Canal de YouTube @Fer.EresSingular"
                  title="YouTube"
                >
                  <Youtube size={18} aria-hidden="true" />
                </a>
                <a
                  href={content.footer.socialLinks.find((s) => s.id === 'tiktok')?.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="TikTok @fer.huellapersonal"
                  title="TikTok"
                >
                  <TikTokIcon size={18} />
                </a>
                <a
                  href={`mailto:${content.footer.contactEmail}`}
                  className="footer-social-btn"
                  aria-label={`Escribir a ${content.footer.contactEmail}`}
                  title="Email"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
              <a
                href={`mailto:${content.footer.contactEmail}`}
                className="footer-email-link"
              >
                {content.footer.contactEmail}
              </a>
            </div>

            {/* Derecha: Firma armónica y equilibrada */}
            <div className="footer-signature-col">
              <GistesySignature
                fontSize="1.35rem"
                smileyFontSize="0.8rem"
                color="var(--color-white)"
              />
              <span
                style={{
                  color: 'var(--color-magenta-light)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                }}
              >
                {content.brand.authorRole}
              </span>
            </div>
          </div>

          {/* El Camino — Logotipos de trayectoria (no clickables aún) */}
          <div className="footer-journey-section">
            <span className="footer-journey-label">{content.footer.journey.label}</span>
            <div className="footer-journey-row">
              {content.footer.journey.brands.map((b) => (
                <div
                  key={b.id}
                  className="footer-journey-item"
                  title={b.name}
                  aria-label={b.name}
                >
                  <img
                    src={b.logoSrc}
                    alt={b.alt}
                    style={{
                      height: `${b.height}px`,
                      width: 'auto',
                      maxHeight: '44px',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>{content.footer.copyright}</span>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              <span>{content.footer.futureLanguagesNote}</span>
              <span style={{ opacity: 0.3 }} aria-hidden="true">·</span>
              <div
                className="lang-switcher"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  borderColor: 'rgba(255,255,255,0.14)',
                  padding: '0.15rem 0.4rem',
                  minHeight: '28px',
                }}
              >
                <button
                  type="button"
                  onClick={() => handleLocaleChange('es')}
                  className={`lang-btn ${locale === 'es' ? 'is-active' : ''}`}
                  style={{ color: locale === 'es' ? '#FFFFFF' : 'var(--color-gray-400)' }}
                >
                  Español
                </button>
                <span className="lang-divider" style={{ color: 'rgba(255,255,255,0.3)' }} aria-hidden="true">/</span>
                <button
                  type="button"
                  onClick={() => handleLocaleChange('en')}
                  className={`lang-btn ${locale === 'en' ? 'is-active' : ''}`}
                  style={{ color: locale === 'en' ? '#FFFFFF' : 'var(--color-gray-400)' }}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
