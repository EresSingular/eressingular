'use client';

import React, { useRef, useEffect } from 'react';
import { Clock, Calendar, ArrowRight, Eye, X, CheckCircle2 } from 'lucide-react';
import type { SiteContent, ExperienceItem, Locale } from '@/content/siteContent';

interface ExperiencesSectionProps {
  content: SiteContent['experiences'];
  locale?: Locale;
  onSelectExperienceForm: (tab: 'sesion' | 'programa') => void;
}

export function ExperiencesSection({
  content,
  locale = 'es',
  onSelectExperienceForm,
}: ExperiencesSectionProps) {
  const sessionDialogRef = useRef<HTMLDialogElement | null>(null);
  const programDialogRef = useRef<HTMLDialogElement | null>(null);

  // Light dismiss fallback for <dialog closedby="any"> per modern-web-guidance
  useEffect(() => {
    const dialogs = [sessionDialogRef.current, programDialogRef.current].filter(
      Boolean
    ) as HTMLDialogElement[];

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e: PointerEvent, dialog: HTMLDialogElement) => {
        const r = dialog.getBoundingClientRect();
        return (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        );
      };

      const cleanups = dialogs.map((dialog) => {
        let pressedOutside = false;
        const onDown = (e: PointerEvent) => {
          pressedOutside = outside(e, dialog);
        };
        const onUp = (e: PointerEvent) => {
          if (pressedOutside && outside(e, dialog)) dialog.close();
        };
        dialog.addEventListener('pointerdown', onDown);
        dialog.addEventListener('pointerup', onUp);
        return () => {
          dialog.removeEventListener('pointerdown', onDown);
          dialog.removeEventListener('pointerup', onUp);
        };
      });

      return () => cleanups.forEach((fn) => fn());
    }
  }, []);

  const openModal = (which: 'sesion' | 'programa') => {
    const ref = which === 'sesion' ? sessionDialogRef : programDialogRef;
    ref.current?.showModal();
  };

  const goToForm = (
    tab: 'sesion' | 'programa',
    dialogRef?: React.RefObject<HTMLDialogElement | null>
  ) => {
    if (dialogRef?.current?.open) {
      dialogRef.current.close();
    }
    onSelectExperienceForm(tab);
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderExpandedDialog = (
    item: ExperienceItem,
    dialogRef: React.RefObject<HTMLDialogElement | null>,
    titleId: string
  ) => (
    <dialog
      ref={dialogRef}
      id={`dialog-${item.id}`}
      aria-labelledby={titleId}
      {...({ closedby: 'any' } as React.DialogHTMLAttributes<HTMLDialogElement>)}
    >
      <div
        style={{
          padding: 'clamp(1.75rem, 4vw, 2.75rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            paddingBottom: '1.25rem',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-magenta-light)',
                fontWeight: 600,
              }}
            >
              {item.expandedView.eyebrow}
            </span>
            <h3
              id={titleId}
              className="font-display-montserrat"
              style={{
                fontSize: 'clamp(1.4rem, 2vw, 1.78rem)', /* ~28.5px título secundario (rango 26–30px) */
                fontWeight: 800,
                marginTop: '0.35rem',
                lineHeight: 1.22,
              }}
            >
              {item.expandedView.headline}
            </h3>
          </div>

          <form method="dialog">
            <button
              type="submit"
              value="close"
              autoFocus
              aria-label="Cerrar vista ampliada"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'var(--color-white)',
                minWidth: '48px',
                minHeight: '48px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </form>
        </div>

        <p style={{ color: 'var(--color-gray-300)', fontSize: '1.05rem', lineHeight: 1.75 }}>
          {item.expandedView.intro}
        </p>

        {/* Resumen de duración e inversión */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.85rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-md)',
            padding: '1.15rem',
          }}
        >
          {item.expandedView.formatAndDuration.map((meta) => (
            <div key={meta.label}>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-gray-400)', textTransform: 'uppercase' }}>
                {meta.label}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-white)', marginTop: '0.2rem' }}>
                {meta.value}
              </div>
            </div>
          ))}
        </div>

        {/* Qué trabajamos */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--color-white)' }}>
            {locale === 'en' ? 'What do we explore in this experience?' : '¿Qué recorremos en esta experiencia?'}
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {item.expandedView.whatWeExplore.map((point) => (
              <li
                key={point}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  color: 'var(--color-gray-300)',
                  fontSize: '0.96rem',
                }}
              >
                <CheckCircle2
                  size={18}
                  aria-hidden="true"
                  style={{ color: 'var(--color-magenta-light)', flexShrink: 0, marginTop: '0.2rem' }}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Próximos pasos */}
        <div
          style={{
            background: 'rgba(181, 31, 112, 0.1)',
            border: '1px solid var(--color-magenta-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
          }}
        >
          <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.65rem', color: 'var(--color-white)' }}>
            {locale === 'en' ? 'Next steps to begin:' : 'Próximos pasos para comenzar:'}
          </h4>
          <ol style={{ paddingLeft: '1.15rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--color-gray-300)', fontSize: '0.92rem' }}>
            {item.expandedView.nextSteps.map((step) => (
              <li key={step}>{step.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '0.5rem',
          }}
        >
          <form method="dialog">
            <button type="submit" value="cancel" className="btn btn-outline-dark">
              {locale === 'en' ? 'Keep exploring the website' : 'Seguir leyendo la web'}
            </button>
          </form>

          <button
            type="button"
            onClick={() => goToForm(item.formTabId, dialogRef)}
            className="btn btn-primary"
          >
            <span>{item.expandedView.primaryActionLabel}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </dialog>
  );

  const { session, program } = content.items;

  return (
    <section id="experiencias" className="section-light" aria-labelledby="experiences-heading">
      <div className="container">
        <div className="scroll-reveal" style={{ maxWidth: '820px' }}>
          <span className="section-eyebrow">{content.eyebrow}</span>
          <h2 id="experiences-heading" className="section-title">
            {content.title}
          </h2>
          <p className="section-intro">{content.intro}</p>
          <p
            style={{
              marginTop: '0.85rem',
              fontSize: '0.94rem',
              fontWeight: 600,
              color: 'var(--color-magenta)',
            }}
          >
            {content.equalValueNote}
          </p>
        </div>

        <div className="experiences-grid">
          {/* Tarjeta 1: Sesión Individual — US$ 150 */}
          <article className="experience-card" aria-labelledby="exp-session-title">
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-magenta)',
                    background: 'var(--color-magenta-subtle)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '999px',
                  }}
                >
                  {session.badge}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-gray-600)',
                  }}
                >
                  <Clock size={16} aria-hidden="true" style={{ color: 'var(--color-magenta)' }} />
                  {session.duration}
                </span>
              </div>

              <h3
                id="exp-session-title"
                className="font-display-montserrat"
                style={{
                  fontSize: 'clamp(1.45rem, 2.1vw, 1.82rem)', /* ~29px título secundario (rango 26–30px) */
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '0.5rem',
                }}
              >
                {session.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  margin: '1.15rem 0 1.35rem',
                  paddingBottom: '1.15rem',
                  borderBottom: '1px solid var(--color-gray-200)',
                }}
              >
                <span className="price-display">{session.priceUSD}</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', fontWeight: 500 }}>
                  · {session.duration}
                </span>
              </div>

              <p
                style={{
                  fontSize: '1.05rem', /* ~16.8px párrafo (rango 16–18px) */
                  lineHeight: 1.72,
                  color: 'var(--color-black)',
                  marginBottom: '0.9rem',
                  maxWidth: '54ch',
                }}
              >
                {session.shortDescription}
              </p>

              <p
                style={{
                  fontSize: '1rem', /* 16px párrafo (rango 16–18px) */
                  lineHeight: 1.7,
                  color: 'var(--color-gray-600)',
                  marginBottom: '1.85rem',
                  maxWidth: '54ch',
                }}
              >
                {session.purpose}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <button
                type="button"
                onClick={() => goToForm('sesion')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>{session.ctaLabel}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => openModal('sesion')}
                className="btn btn-outline-light"
                style={{ width: '100%' }}
              >
                <Eye size={17} aria-hidden="true" />
                <span>{session.detailTriggerLabel}</span>
              </button>
            </div>
          </article>

          {/* Tarjeta 2: Programa Eres Singular — US$ 1.490 */}
          <article
            className="experience-card experience-card-dark"
            aria-labelledby="exp-program-title"
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-white)',
                    background: 'rgba(181, 31, 112, 0.35)',
                    border: '1px solid var(--color-magenta-light)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '999px',
                  }}
                >
                  {program.badge}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-gray-300)',
                  }}
                >
                  <Calendar size={16} aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }} />
                  {program.duration} · {program.sessionsCount}
                </span>
              </div>

              <h3
                id="exp-program-title"
                className="font-display-montserrat"
                style={{
                  fontSize: 'clamp(1.45rem, 2.1vw, 1.82rem)', /* ~29px título secundario (rango 26–30px) */
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '0.5rem',
                }}
              >
                <span>Programa </span>
                <span
                  className="font-brittany"
                  style={{
                    fontSize: '1.25em',
                    fontWeight: 400,
                    color: 'var(--color-magenta-light)',
                    marginLeft: '0.15rem',
                  }}
                >
                  Eres Singular
                </span>
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  margin: '1.15rem 0 1.35rem',
                  paddingBottom: '1.15rem',
                  borderBottom: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <span className="price-display" style={{ color: 'var(--color-white)' }}>
                  {program.priceUSD}
                </span>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-300)', fontWeight: 500 }}>
                  · {program.duration} ({program.sessionsCount})
                </span>
              </div>

              <p
                style={{
                  fontSize: '1.05rem', /* ~16.8px párrafo (rango 16–18px) */
                  lineHeight: 1.72,
                  color: 'var(--color-white)',
                  marginBottom: '0.9rem',
                  maxWidth: '54ch',
                }}
              >
                {program.shortDescription}
              </p>

              <p
                style={{
                  fontSize: '1rem', /* 16px párrafo (rango 16–18px) */
                  lineHeight: 1.7,
                  color: 'var(--color-gray-300)',
                  marginBottom: '1.85rem',
                  maxWidth: '54ch',
                }}
              >
                {program.purpose}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <button
                type="button"
                onClick={() => openModal('programa')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>{program.ctaLabel}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => goToForm('programa')}
                className="btn btn-outline-dark"
                style={{ width: '100%' }}
              >
                <span>Solicitar información del programa</span>
              </button>
            </div>
          </article>
        </div>

        {/* Modales nativos <dialog> para las vistas ampliadas */}
        {renderExpandedDialog(session, sessionDialogRef, 'dialog-title-sesion')}
        {renderExpandedDialog(program, programDialogRef, 'dialog-title-programa')}
      </div>
    </section>
  );
}
