'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import type { SiteContent, Locale } from '@/content/siteContent';

interface NavbarProps {
  content: SiteContent;
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onSelectExperienceForm: (tab: 'sesion' | 'programa') => void;
}

export function Navbar({
  content,
  currentLocale,
  onLocaleChange,
  onSelectExperienceForm,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleQuickExperienceClick = (tab: 'sesion' | 'programa') => {
    setMobileOpen(false);
    onSelectExperienceForm(tab);
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="header-pill-shell">
          <a href="#inicio" className="brand-link" aria-label="Eres Singular — Ir al inicio">
            {/* Logo versión clara (en reposo sobre fondo blanco translúcido) */}
            <img
              src="/images/logo-eres-singular.png"
              alt="Eres Singular"
              className="brand-logo brand-logo-light"
            />
            {/* Logo versión oscura (al hacer scroll sobre fondo oscuro translúcido) */}
            <span
              className="brand-logo brand-logo-dark font-brittany"
              style={{
                fontSize: '1.62rem',
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
                lineHeight: 1,
              }}
            >
              Eres Singular
            </span>
          </a>

          <nav aria-label="Navegación principal" className="header-center-nav">
            <ul className="nav-links">
              {content.nav.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-pills" aria-label="Selector de idioma y accesos directos">
            {/* Selector de idioma ES / EN */}
            <div className="lang-switcher" role="group" aria-label="Language selection">
              <button
                type="button"
                onClick={() => onLocaleChange('es')}
                className={`lang-btn ${currentLocale === 'es' ? 'is-active' : ''}`}
                aria-pressed={currentLocale === 'es'}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
              <span className="lang-divider" aria-hidden="true">/</span>
              <button
                type="button"
                onClick={() => onLocaleChange('en')}
                className={`lang-btn ${currentLocale === 'en' ? 'is-active' : ''}`}
                aria-pressed={currentLocale === 'en'}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleQuickExperienceClick('sesion')}
              className="experience-pill experience-pill-secondary"
            >
              <span>{content.nav.quickAccess.sessionLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickExperienceClick('programa')}
              className="experience-pill experience-pill-cta"
            >
              <Sparkles size={13} aria-hidden="true" />
              <span>{content.nav.quickAccess.programLabel}</span>
            </button>
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-nav-drawer" className="mobile-nav-drawer">
            <nav aria-label="Navegación móvil">
              {/* Selector de idioma en móvil */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.85rem',
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', fontWeight: 600 }}>
                  {currentLocale === 'es' ? 'Idioma' : 'Language'}
                </span>
                <div className="lang-switcher" role="group" aria-label="Language selection">
                  <button
                    type="button"
                    onClick={() => {
                      onLocaleChange('es');
                      setMobileOpen(false);
                    }}
                    className={`lang-btn ${currentLocale === 'es' ? 'is-active' : ''}`}
                    aria-pressed={currentLocale === 'es'}
                  >
                    ES
                  </button>
                  <span className="lang-divider" aria-hidden="true">/</span>
                  <button
                    type="button"
                    onClick={() => {
                      onLocaleChange('en');
                      setMobileOpen(false);
                    }}
                    className={`lang-btn ${currentLocale === 'en' ? 'is-active' : ''}`}
                    aria-pressed={currentLocale === 'en'}
                  >
                    EN
                  </button>
                </div>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {content.nav.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 0',
                        fontSize: '1.08rem',
                        fontWeight: 600,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <p
                  style={{
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--color-gray-400)',
                    fontWeight: 700,
                  }}
                >
                  Dos experiencias disponibles:
                </p>
                <button
                  type="button"
                  onClick={() => handleQuickExperienceClick('sesion')}
                  className="btn btn-outline-dark"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>{content.nav.quickAccess.sessionLabel}</span>
                  <span style={{ color: 'var(--color-magenta-light)', fontWeight: 700, fontSize: '0.82rem' }}>80 min</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickExperienceClick('programa')}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>{content.nav.quickAccess.programLabel}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.82rem' }}>3 meses · 13 sesiones</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <div className="header-spacer" aria-hidden="true" />
    </>
  );
}
