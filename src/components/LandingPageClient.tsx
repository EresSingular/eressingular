'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Play,
  Compass,
  Layers,
  Sparkles,
  Camera,
  X,
  Check,
} from 'lucide-react';
import type { SiteContent } from '@/content/siteContent';
import { Navbar } from './Navbar';
import { MirrorSection } from './MirrorSection';
import { ExperiencesSection } from './ExperiencesSection';
import { StoriesSection } from './StoriesSection';
import { ContactFormsSection } from './ContactFormsSection';
import { GistesySignature } from './GistesySignature';

interface LandingPageClientProps {
  content: SiteContent;
}

export function LandingPageClient({ content }: LandingPageClientProps) {
  const [selectedFormTab, setSelectedFormTab] = useState<'sesion' | 'programa'>('sesion');
  const videoDialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <Navbar
        content={content}
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
        <MirrorSection content={content.mirror} />

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
                  Mirar → Reconocer → Comprender → Elegir → Expresar
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
              {/* RDA */}
              <article className="method-box" aria-labelledby="method-rda-title">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-magenta-light)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Sparkles size={16} aria-hidden="true" />
                  <span>Metodología de Fer · {content.methodology.proprietaryMethods.rda.tagline}</span>
                </div>

                <h3
                  id="method-rda-title"
                  className="font-display-montserrat"
                  style={{ fontSize: 'clamp(1.4rem, 2vw, 1.78rem)', fontWeight: 800, marginBottom: '0.75rem' }} /* ~28.5px (26–30px) */
                >
                  {content.methodology.proprietaryMethods.rda.acronym} —{' '}
                  {content.methodology.proprietaryMethods.rda.fullName}
                </h3>

                <p style={{ color: 'var(--color-gray-300)', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.7, maxWidth: '56ch' }}>
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
                        padding: '0.9rem 1rem',
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
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-gray-300)' }}>
                          {pillar.meaning}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* M.A.P.A. */}
              <article className="method-box" aria-labelledby="method-mapa-title">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-magenta-light)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Compass size={16} aria-hidden="true" />
                  <span>Metodología de Fer · {content.methodology.proprietaryMethods.mapa.tagline}</span>
                </div>

                <h3
                  id="method-mapa-title"
                  className="font-display-montserrat"
                  style={{ fontSize: 'clamp(1.4rem, 2vw, 1.78rem)', fontWeight: 800, marginBottom: '0.75rem' }} /* ~28.5px (26–30px) */
                >
                  {content.methodology.proprietaryMethods.mapa.acronym} —{' '}
                  {content.methodology.proprietaryMethods.mapa.fullName}
                </h3>

                <p style={{ color: 'var(--color-gray-300)', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.7, maxWidth: '56ch' }}>
                  {content.methodology.proprietaryMethods.mapa.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {content.methodology.proprietaryMethods.mapa.dimensions.map((dim, idx) => (
                    <li
                      key={dim}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        padding: '0.9rem 1rem',
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
                      <span style={{ fontSize: '0.95rem', color: 'var(--color-white)', fontWeight: 600 }}>
                        {dim}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Qué integra Eres Singular */}
                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-gray-400)',
                      marginBottom: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    <Layers size={14} aria-hidden="true" />
                    <span>Ejes que integra el acompañamiento:</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {content.methodology.integrationAreas.map((area) => (
                      <span
                        key={area}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          padding: '0.35rem 0.75rem',
                          borderRadius: '999px',
                          background: 'rgba(255,255,255,0.06)',
                          color: 'var(--color-gray-300)',
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            {/* ¿Para quién es Eres Singular? */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              }}
            >
              <h3
                className="font-display-montserrat"
                style={{ fontSize: 'clamp(1.4rem, 2vw, 1.78rem)', fontWeight: 800, marginBottom: '1.5rem' }} /* ~28.5px (26–30px) */
              >
                ¿Para quién es{' '}
                <span
                  className="font-brittany"
                  style={{
                    fontSize: '1.28em',
                    fontWeight: 400,
                    color: 'var(--color-magenta-light)',
                    marginInline: '0.2rem',
                  }}
                >
                  Eres Singular
                </span>
                ?
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {content.methodology.audiences.map((aud) => (
                  <div
                    key={aud.title}
                    style={{
                      padding: '1.15rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(11,11,13,0.65)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--color-white)',
                        fontWeight: 700,
                        fontSize: '0.96rem',
                        marginBottom: '0.45rem',
                      }}
                    >
                      <Check size={16} aria-hidden="true" style={{ color: 'var(--color-magenta-light)', flexShrink: 0 }} />
                      <span>{aud.title}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-gray-300)', lineHeight: 1.6 }}>
                      {aud.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 04 — DOS MANERAS DE TRABAJAR CONMIGO (#experiencias)
           ========================================================= */}
        <ExperiencesSection
          content={content.experiences}
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
            <div className="about-grid">
              {/* Columna visual: Retrato auténtico + Marcadores claramente identificados */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <figure className="fer-portrait-frame">
                  <Image
                    src={content.aboutFer.mainPortrait.src}
                    alt={content.aboutFer.mainPortrait.alt}
                    width={760}
                    height={940}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                  <figcaption
                    style={{
                      padding: '1rem 1.25rem',
                      background: 'var(--color-black)',
                      color: 'var(--color-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                    }}
                  >
                    <GistesySignature
                      fontSize="1.7rem"
                      smileyFontSize="0.95rem"
                      color="var(--color-white)"
                    />
                    <span
                      style={{
                        color: 'var(--color-magenta-light)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                      }}
                    >
                      {content.brand.authorRole}
                    </span>
                  </figcaption>
                </figure>

                {/* Marcadores claramente identificados para fotografías adicionales de Fer */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {content.aboutFer.mediaPlaceholders.map((slot) => (
                    <div key={slot.id} className="placeholder-slot">
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--color-magenta)',
                        }}
                      >
                        <Camera size={15} aria-hidden="true" />
                        <span>Marcador fotográfico</span>
                      </div>
                      <strong style={{ fontSize: '0.92rem', color: 'var(--color-black)' }}>
                        {slot.label}
                      </strong>
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-gray-600)' }}>
                        {slot.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna narrativa: Historia humana, trayectoria y firma */}
              <div>
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
                    fontSize="clamp(2.2rem, 3.6vw, 3.1rem)"
                    smileyFontSize="1.2rem"
                    color="var(--color-black)"
                  />
                </div>
                <p
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-magenta)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {content.aboutFer.subtitle}
                </p>

                <p
                  className="font-display-montserrat"
                  style={{
                    fontSize: 'clamp(1.12rem, 1.5vw, 1.32rem)', /* ~21px frase de apertura */
                    fontWeight: 700,
                    lineHeight: 1.48,
                    color: 'var(--color-black)',
                    marginBottom: '1.5rem',
                    borderInlineStart: '3.5px solid var(--color-magenta)',
                    paddingInlineStart: '1.1rem',
                    maxWidth: '56ch',
                  }}
                >
                  {content.aboutFer.leadParagraph}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem', maxWidth: '62ch' }}>
                  {content.aboutFer.storyParagraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      style={{
                        fontSize: 'clamp(1rem, 1.08vw, 1.06rem)', /* 16–17px párrafo (rango 16–18px) */
                        lineHeight: 1.78,
                        color: 'var(--color-gray-800)',
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Hitos de recorrido */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                    gap: '1rem',
                    marginBottom: '2.25rem',
                  }}
                >
                  {content.aboutFer.highlights.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        padding: '1.15rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--color-offwhite)',
                        border: '1px solid var(--color-gray-200)',
                      }}
                    >
                      <div
                        className="font-display-montserrat"
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          color: 'var(--color-magenta)',
                          lineHeight: 1.15,
                        }}
                      >
                        {item.figure}
                      </div>
                      <div
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: 'var(--color-black)',
                          marginTop: '0.3rem',
                        }}
                      >
                        {item.label}
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-gray-600)', marginTop: '0.25rem' }}>
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Cierre y Firma obligatoria en Gistesy */}
                <div
                  style={{
                    padding: '1.85rem 2.1rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--color-black)',
                    color: 'var(--color-white)',
                    border: '1px solid rgba(255, 3, 154, 0.35)',
                  }}
                >
                  <blockquote
                    className="font-display-montserrat"
                    style={{
                      fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      marginBottom: '1rem',
                      color: 'var(--color-white)',
                    }}
                  >
                    {content.aboutFer.closingQuote}
                  </blockquote>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '0.95rem' }}>
                    <GistesySignature
                      fontSize="2.15rem"
                      smileyFontSize="1.05rem"
                      color="var(--color-white)"
                    />
                    <div
                      style={{
                        fontSize: '0.9rem',
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
            <div style={{ maxWidth: '42ch' }}>
              <div
                className="font-brittany"
                style={{
                  fontSize: '1.75rem',
                  color: '#FFFFFF',
                  marginBottom: '0.75rem',
                  lineHeight: 1.1,
                }}
              >
                Eres Singular
              </div>
              <p style={{ color: 'var(--color-gray-300)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                {content.footer.manifesto}
              </p>
            </div>

            {/* Centro: Navegación compacta */}
            <nav aria-label="Navegación pie de página" className="footer-nav">
              {content.nav.items.map((item) => (
                <a key={item.href} href={item.href} className="footer-nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Derecha: Firma armónica */}
            <div className="footer-signature">
              <GistesySignature
                fontSize="1.48rem"
                smileyFontSize="0.85rem"
                color="var(--color-white)"
              />
              <span
                style={{
                  color: 'var(--color-magenta-light)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}
              >
                {content.brand.authorRole}
              </span>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>{content.footer.copyright}</span>
            <span>{content.footer.futureLanguagesNote}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
