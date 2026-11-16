'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Send, ShieldCheck, RotateCcw } from 'lucide-react';
import type { SiteContent, Locale } from '@/content/siteContent';

interface ContactFormsSectionProps {
  content: SiteContent['nextStep'];
  activeTab: 'sesion' | 'programa';
  locale?: Locale;
  onTabChange: (tab: 'sesion' | 'programa') => void;
}

export function ContactFormsSection({
  content,
  activeTab,
  locale = 'es',
  onTabChange,
}: ContactFormsSectionProps) {
  const t = locale === 'en' ? {
    option1Badge: 'Option 01 · 80 minutes',
    option1Title: 'Book 1-on-1 session',
    option2Badge: 'Option 02 · Three months (13 sessions)',
    option2Title: 'Inquire about the program',
    nameLabel: 'Full name',
    nameHint: 'What do you like to be called?',
    nameError: 'Please enter your full name (minimum 2 characters).',
    emailLabel: 'Email address',
    emailHint: 'Format: name@example.com — Fer will reply to this address.',
    emailError: 'Please enter a valid email address (e.g. you@example.com).',
    countryLabel: 'Country and city',
    countryHint: 'To coordinate meetings according to your time zone.',
    countryError: 'Please indicate your country or city (minimum 2 characters).',
    phoneLabel: 'WhatsApp / Phone (optional)',
    phoneHint: 'International format: +Country Area Number (e.g. +1 555 123 4567).',
    sessionGoalLabel: 'What would you like to explore or clarify in your 80-minute session?',
    sessionGoalHint: 'A few lines on your current moment or the question that brings you here.',
    sessionGoalError: 'Please briefly describe (at least 10 characters) what you wish to explore.',
    programGoalLabel: 'Tell me about your current stage and what you wish to develop in these 3 months',
    programGoalHint: 'Share your background, project, or the change you seek.',
    programGoalError: 'Please describe (at least 10 characters) what you seek to work on in the program.',
    submittedSessionBadge: 'Inquiry received · 1-on-1 Session (US$ 150)',
    submittedProgramBadge: 'Inquiry received · Eres Singular Program (US$ 1,490)',
    thankYou: 'Thank you,',
    sendAnother: 'Send another inquiry or edit my details',
  } : {
    option1Badge: 'Opción 01 · 80 minutos',
    option1Title: 'Reservar sesión individual',
    option2Badge: 'Opción 02 · Tres meses (13 sesiones)',
    option2Title: 'Solicitar información del programa',
    nameLabel: 'Nombre completo',
    nameHint: '¿Cómo te gusta que te llamen?',
    nameError: 'Por favor ingresa tu nombre completo (mínimo 2 caracteres).',
    emailLabel: 'Correo electrónico',
    emailHint: 'Formato: nombre@ejemplo.com — aquí recibirás la respuesta de Fer.',
    emailError: 'Ingresa un correo electrónico válido en el formato tu@correo.com.',
    countryLabel: 'País y ciudad',
    countryHint: 'Para coordinar el horario según tu zona horaria.',
    countryError: 'Indica desde qué país o ciudad nos escribes.',
    phoneLabel: 'WhatsApp / Teléfono (opcional)',
    phoneHint: 'Incluye el código de tu país (ej. +56, +52, +34, +1).',
    sessionGoalLabel: '¿Qué te gustaría mirar o trabajar en tu sesión de 80 minutos?',
    sessionGoalHint: 'Unas breves líneas sobre el momento o inquietud que te trae aquí.',
    sessionGoalError: 'Cuéntame brevemente (al menos 10 caracteres) qué te gustaría explorar en la sesión.',
    programGoalLabel: 'Cuéntame de tu etapa actual y qué buscas construir en estos tres meses',
    programGoalHint: 'Comparte brevemente tu momento profesional o personal actual.',
    programGoalError: 'Cuéntame brevemente (al menos 10 caracteres) qué buscas trabajar en el programa.',
    submittedSessionBadge: 'Solicitud registrada · Sesión individual (US$ 150)',
    submittedProgramBadge: 'Solicitud registrada · Programa Eres Singular (US$ 1.490)',
    thankYou: 'Gracias,',
    sendAnother: 'Enviar otra consulta o editar mis datos',
  };
  const [submittedSession, setSubmittedSession] = useState<{
    name: string;
    email: string;
    country: string;
  } | null>(null);

  const [submittedProgram, setSubmittedProgram] = useState<{
    name: string;
    email: string;
    country: string;
  } | null>(null);

  const sectionRootRef = useRef<HTMLDivElement | null>(null);
  const announcerRef = useRef<HTMLDivElement | null>(null);

  // Sincronización de :user-invalid con ARIA siguiendo modern-web-guidance
  useEffect(() => {
    const root = sectionRootRef.current;
    if (!root) return;

    const flagged = new WeakSet<Element>();
    const announced = new WeakSet<Element>();
    let announceTimer: ReturnType<typeof setTimeout> | undefined;

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute('aria-describedby') || '')
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
      else el.removeAttribute('aria-describedby');
    };

    const announceError = (el: HTMLInputElement | HTMLTextAreaElement) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const errorNode = document.getElementById(errorId);
      if (!errorNode || !announcerRef.current) return;
      clearTimeout(announceTimer);
      announcerRef.current.textContent = '';
      announceTimer = setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = errorNode.textContent?.trim() ?? '';
        }
      }, 450);
    };

    const syncAria = (target: EventTarget | null, announce = false) => {
      if (!(target instanceof HTMLElement)) return;
      if (!target.matches('input, select, textarea')) return;
      const el = target as HTMLInputElement | HTMLTextAreaElement;

      let invalid = false;
      try {
        invalid = el.matches(':user-invalid') || el.classList.contains('user-invalid-fallback');
      } catch {
        invalid = !el.validity.valid;
      }

      if (invalid) {
        if (announce && !announced.has(el)) {
          announceError(el);
          announced.add(el);
        }
        el.setAttribute('aria-invalid', 'true');
        linkError(el, true);
        flagged.add(el);
      } else if (flagged.has(el) || el.getAttribute('aria-invalid') !== 'true') {
        el.setAttribute('aria-invalid', 'false');
        linkError(el, false);
        flagged.delete(el);
        announced.delete(el);
      }
    };

    root.querySelectorAll('input, select, textarea').forEach((el) => {
      if (!el.hasAttribute('aria-invalid')) el.setAttribute('aria-invalid', 'false');
    });

    const onBlur = (e: Event) => syncAria(e.target, true);
    const onInput = (e: Event) => {
      if (e.target instanceof HTMLElement) {
        e.target.classList.remove('user-invalid-fallback');
        syncAria(e.target, false);
      }
    };
    const onInvalid = (e: Event) => {
      if (e.target instanceof HTMLElement) {
        e.target.classList.add('user-invalid-fallback');
        announced.add(e.target);
        syncAria(e.target, false);
      }
    };

    root.addEventListener('blur', onBlur, true);
    root.addEventListener('input', onInput);
    root.addEventListener('invalid', onInvalid, true);

    return () => {
      clearTimeout(announceTimer);
      root.removeEventListener('blur', onBlur, true);
      root.removeEventListener('input', onInput);
      root.removeEventListener('invalid', onInvalid, true);
    };
  }, [activeTab, submittedSession, submittedProgram]);

  const handleSessionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(':invalid');
      firstInvalid?.focus();
      return;
    }
    const data = new FormData(form);
    setSubmittedSession({
      name: String(data.get('full_name') ?? ''),
      email: String(data.get('email') ?? ''),
      country: String(data.get('country') ?? ''),
    });
  };

  const handleProgramSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(':invalid');
      firstInvalid?.focus();
      return;
    }
    const data = new FormData(form);
    setSubmittedProgram({
      name: String(data.get('full_name') ?? ''),
      email: String(data.get('email') ?? ''),
      country: String(data.get('country') ?? ''),
    });
  };

  const sessionMeta = content.forms.session;
  const programMeta = content.forms.program;

  return (
    <section
      id="contacto"
      ref={sectionRootRef}
      className="section-dark"
      aria-labelledby="next-step-heading"
    >
      <div ref={announcerRef} aria-live="polite" className="visually-hidden" />

      <div className="container" style={{ maxWidth: '920px' }}>
        <div className="scroll-reveal">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <h2 id="next-step-heading" className="section-title">
            {content.title}
          </h2>
          <p className="section-intro">{content.intro}</p>
        </div>

        {/* Selector de los dos caminos comerciales */}
        <div
          className="forms-selector-tabs"
          role="tablist"
          aria-label="Selecciona la experiencia sobre la que deseas dar el siguiente paso"
        >
          <button
            type="button"
            role="tab"
            id="tab-btn-sesion"
            aria-selected={activeTab === 'sesion'}
            aria-controls="tabpanel-sesion"
            className="form-tab-btn"
            onClick={() => onTabChange('sesion')}
          >
            <div>
              <div style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-magenta-light)' }}>
                {t.option1Badge}
              </div>
              <div style={{ fontSize: '1.05rem', marginTop: '0.2rem' }}>
                {t.option1Title}
              </div>
            </div>
            <span
              className="font-display-montserrat"
              style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-white)' }}
            >
              US$ 150
            </span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-btn-programa"
            aria-selected={activeTab === 'programa'}
            aria-controls="tabpanel-programa"
            className="form-tab-btn"
            onClick={() => onTabChange('programa')}
          >
            <div>
              <div style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-magenta-light)' }}>
                {t.option2Badge}
              </div>
              <div style={{ fontSize: '1.05rem', marginTop: '0.2rem' }}>
                {t.option2Title}
              </div>
            </div>
            <span
              className="font-display-montserrat"
              style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-white)' }}
            >
              US$ 1.490
            </span>
          </button>
        </div>

        {/* Panel 1: Formulario independiente para Sesión Individual (US$ 150) */}
        <div
          id="tabpanel-sesion"
          role="tabpanel"
          aria-labelledby="tab-btn-sesion"
          hidden={activeTab !== 'sesion'}
          className="form-card"
        >
          {submittedSession ? (
            <div role="status" aria-live="polite" style={{ paddingBlock: '1rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: '#6CE092',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '0.75rem',
                }}
              >
                <CheckCircle2 size={22} aria-hidden="true" />
                <span>{t.submittedSessionBadge}</span>
              </div>

              <h3
                className="font-display-montserrat"
                style={{ fontSize: 'clamp(1.65rem, 2.6vw, 2.15rem)', fontWeight: 800, marginBottom: '0.75rem' }}
              >
                {sessionMeta.confirmationTitle}
              </h3>

              <p style={{ color: 'var(--color-gray-300)', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                {t.thankYou} <strong>{submittedSession.name}</strong> ({submittedSession.email} ·{' '}
                {submittedSession.country}). {sessionMeta.confirmationMessage}
              </p>

              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  marginBottom: '1.5rem',
                }}
              >
                <ul style={{ paddingLeft: '1.15rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-gray-300)' }}>
                  {sessionMeta.confirmationNextSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setSubmittedSession(null)}
                className="btn btn-outline-dark"
              >
                <RotateCcw size={16} aria-hidden="true" />
                <span>{t.sendAnother}</span>
              </button>
            </div>
          ) : (
            <form
              id="form-sesion-individual"
              aria-labelledby="form-sesion-heading"
              onSubmit={handleSessionSubmit}
              noValidate
            >
              <div style={{ marginBottom: '1.75rem' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-magenta-light)',
                  }}
                >
                  {sessionMeta.badge}
                </span>
                <h3
                  id="form-sesion-heading"
                  className="font-display-montserrat"
                  style={{ fontSize: 'clamp(1.4rem, 2vw, 1.78rem)', fontWeight: 800, marginTop: '0.3rem', marginBottom: '0.5rem' }} /* ~28.5px (26–30px) */
                >
                  {sessionMeta.title}
                </h3>
                <p style={{ color: 'var(--color-gray-300)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '60ch' }}>
                  {sessionMeta.description}
                </p>
              </div>

              <div className="form-field">
                <label htmlFor="sesion-full-name" className="form-label">
                  {t.nameLabel} <span aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }}>*</span>
                </label>
                <span id="sesion-name-hint" className="form-hint">
                  {t.nameHint}
                </span>
                <input
                  type="text"
                  id="sesion-full-name"
                  name="full_name"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  enterKeyHint="next"
                  aria-describedby="sesion-name-hint"
                  data-error="sesion-name-error"
                  className="form-input"
                />
                <div id="sesion-name-error" className="form-error-msg">
                  <span role="img" aria-label="Error">❌</span> {t.nameError}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="sesion-email" className="form-label">
                  {t.emailLabel} <span aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }}>*</span>
                </label>
                <span id="sesion-email-hint" className="form-hint">
                  {t.emailHint}
                </span>
                <input
                  type="email"
                  id="sesion-email"
                  name="email"
                  required
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  enterKeyHint="next"
                  aria-describedby="sesion-email-hint"
                  data-error="sesion-email-error"
                  className="form-input"
                />
                <div id="sesion-email-error" className="form-error-msg">
                  <span role="img" aria-label="Error">❌</span> {t.emailError}
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1rem',
                }}
              >
                <div className="form-field">
                  <label htmlFor="sesion-country" className="form-label">
                    {t.countryLabel} <span aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }}>*</span>
                  </label>
                  <span id="sesion-country-hint" className="form-hint">
                    {t.countryHint}
                  </span>
                  <input
                    type="text"
                    id="sesion-country"
                    name="country"
                    required
                    minLength={2}
                    autoComplete="country-name"
                    enterKeyHint="next"
                    aria-describedby="sesion-country-hint"
                    data-error="sesion-country-error"
                    className="form-input"
                  />
                  <div id="sesion-country-error" className="form-error-msg">
                    <span role="img" aria-label="Error">❌</span> {t.countryError}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="sesion-phone" className="form-label">
                    {t.phoneLabel}
                  </label>
                  <span id="sesion-phone-hint" className="form-hint">
                    {t.phoneHint}
                  </span>
                  <input
                    type="tel"
                    id="sesion-phone"
                    name="phone"
                    autoComplete="tel"
                    enterKeyHint="next"
                    aria-describedby="sesion-phone-hint"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="sesion-context" className="form-label">
                  {t.sessionGoalLabel}{' '}
                  <span aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }}>*</span>
                </label>
                <span id="sesion-context-hint" className="form-hint">
                  {t.sessionGoalHint}
                </span>
                <textarea
                  id="sesion-context"
                  name="context"
                  required
                  minLength={10}
                  maxLength={1200}
                  aria-describedby="sesion-context-hint"
                  data-error="sesion-context-error"
                  className="form-textarea"
                />
                <div id="sesion-context-error" className="form-error-msg">
                  <span role="img" aria-label="Error">❌</span> {t.sessionGoalError}
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={18} aria-hidden="true" />
                <span>{sessionMeta.submitLabel}</span>
              </button>
            </form>
          )}
        </div>

        {/* Panel 2: Formulario independiente para Programa Eres Singular (US$ 1.490) */}
        <div
          id="tabpanel-programa"
          role="tabpanel"
          aria-labelledby="tab-btn-programa"
          hidden={activeTab !== 'programa'}
          className="form-card"
        >
          {submittedProgram ? (
            <div role="status" aria-live="polite" style={{ paddingBlock: '1rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: '#6CE092',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '0.75rem',
                }}
              >
                <CheckCircle2 size={22} aria-hidden="true" />
                <span>{t.submittedProgramBadge}</span>
              </div>

              <h3
                className="font-display-montserrat"
                style={{ fontSize: 'clamp(1.65rem, 2.6vw, 2.15rem)', fontWeight: 800, marginBottom: '0.75rem' }}
              >
                {programMeta.confirmationTitle}
              </h3>

              <p style={{ color: 'var(--color-gray-300)', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                {t.thankYou} <strong>{submittedProgram.name}</strong> ({submittedProgram.email} ·{' '}
                {submittedProgram.country}). {programMeta.confirmationMessage}
              </p>

              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  marginBottom: '1.5rem',
                }}
              >
                <ul style={{ paddingLeft: '1.15rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-gray-300)' }}>
                  {programMeta.confirmationNextSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setSubmittedProgram(null)}
                className="btn btn-outline-dark"
              >
                <RotateCcw size={16} aria-hidden="true" />
                <span>{t.sendAnother}</span>
              </button>
            </div>
          ) : (
            <form
              id="form-programa-acompanamiento"
              aria-labelledby="form-programa-heading"
              onSubmit={handleProgramSubmit}
              noValidate
            >
              <div style={{ marginBottom: '1.75rem' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-magenta-light)',
                  }}
                >
                  {programMeta.badge}
                </span>
                <h3
                  id="form-programa-heading"
                  className="font-display-montserrat"
                  style={{ fontSize: 'clamp(1.4rem, 2vw, 1.78rem)', fontWeight: 800, marginTop: '0.3rem', marginBottom: '0.5rem' }} /* ~28.5px (26–30px) */
                >
                  {programMeta.title}
                </h3>
                <p style={{ color: 'var(--color-gray-300)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '60ch' }}>
                  {programMeta.description}
                </p>
              </div>

              <div className="form-field">
                <label htmlFor="programa-full-name" className="form-label">
                  {t.nameLabel} <span aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }}>*</span>
                </label>
                <span id="programa-name-hint" className="form-hint">
                  {t.nameHint}
                </span>
                <input
                  type="text"
                  id="programa-full-name"
                  name="full_name"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  enterKeyHint="next"
                  aria-describedby="programa-name-hint"
                  data-error="programa-name-error"
                  className="form-input"
                />
                <div id="programa-name-error" className="form-error-msg">
                  <span role="img" aria-label="Error">❌</span> {t.nameError}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="programa-email" className="form-label">
                  {t.emailLabel} <span aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }}>*</span>
                </label>
                <span id="programa-email-hint" className="form-hint">
                  {t.emailHint}
                </span>
                <input
                  type="email"
                  id="programa-email"
                  name="email"
                  required
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  enterKeyHint="next"
                  aria-describedby="programa-email-hint"
                  data-error="programa-email-error"
                  className="form-input"
                />
                <div id="programa-email-error" className="form-error-msg">
                  <span role="img" aria-label="Error">❌</span> {t.emailError}
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1rem',
                }}
              >
                <div className="form-field">
                  <label htmlFor="programa-country" className="form-label">
                    {t.countryLabel} <span aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }}>*</span>
                  </label>
                  <span id="programa-country-hint" className="form-hint">
                    {t.countryHint}
                  </span>
                  <input
                    type="text"
                    id="programa-country"
                    name="country"
                    required
                    minLength={2}
                    autoComplete="country-name"
                    enterKeyHint="next"
                    aria-describedby="programa-country-hint"
                    data-error="programa-country-error"
                    className="form-input"
                  />
                  <div id="programa-country-error" className="form-error-msg">
                    <span role="img" aria-label="Error">❌</span> {t.countryError}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="programa-phone" className="form-label">
                    {t.phoneLabel}
                  </label>
                  <span id="programa-phone-hint" className="form-hint">
                    {t.phoneHint}
                  </span>
                  <input
                    type="tel"
                    id="programa-phone"
                    name="phone"
                    autoComplete="tel"
                    enterKeyHint="next"
                    aria-describedby="programa-phone-hint"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="programa-context" className="form-label">
                  {t.programGoalLabel}{' '}
                  <span aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }}>*</span>
                </label>
                <span id="programa-context-hint" className="form-hint">
                  {t.programGoalHint}
                </span>
                <textarea
                  id="programa-context"
                  name="context"
                  required
                  minLength={10}
                  maxLength={1200}
                  aria-describedby="programa-context-hint"
                  data-error="programa-context-error"
                  className="form-textarea"
                />
                <div id="programa-context-error" className="form-error-msg">
                  <span role="img" aria-label="Error">❌</span> {t.programGoalError}
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={18} aria-hidden="true" />
                <span>{programMeta.submitLabel}</span>
              </button>
            </form>
          )}
        </div>

        {/* Nota transparente sobre reservas y pagos */}
        <p
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.84rem',
            color: 'var(--color-gray-400)',
            textAlign: 'center',
          }}
        >
          <ShieldCheck size={16} aria-hidden="true" style={{ color: 'var(--color-magenta-light)', flexShrink: 0 }} />
          <span>{content.transparencyNote}</span>
        </p>
      </div>
    </section>
  );
}
