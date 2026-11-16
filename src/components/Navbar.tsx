'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import type { SiteContent } from '@/content/siteContent';

interface NavbarProps {
  content: SiteContent;
  onSelectExperienceForm: (tab: 'sesion' | 'programa') => void;
}

export function Navbar({ content, onSelectExperienceForm }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="brand-link" aria-label="Eres Singular — Ir al inicio">
          <img
            src="/images/logo-eres-singular-blanco.png"
            alt="Eres Singular"
            style={{ height: '48px', width: 'auto', objectFit: 'contain', mixBlendMode: 'screen' }}
          />
        </a>

        <nav aria-label="Navegación principal">
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

        <div className="header-pills" aria-label="Accesos directos a las dos experiencias">
          <button
            type="button"
            onClick={() => handleQuickExperienceClick('sesion')}
            className="experience-pill"
          >
            <span>{content.nav.quickAccess.sessionLabel}</span>
            <span className="experience-pill-price">{content.nav.quickAccess.sessionPrice}</span>
          </button>
          <button
            type="button"
            onClick={() => handleQuickExperienceClick('programa')}
            className="experience-pill"
          >
            <Sparkles size={14} aria-hidden="true" style={{ color: 'var(--color-magenta-light)' }} />
            <span>{content.nav.quickAccess.programLabel}</span>
            <span className="experience-pill-price">{content.nav.quickAccess.programPrice}</span>
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
        <div
          id="mobile-nav-drawer"
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(11, 11, 13, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
            padding: '1.5rem',
            zIndex: 99,
          }}
        >
          <nav aria-label="Navegación móvil">
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {content.nav.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.75rem 0',
                      fontSize: '1.15rem',
                      fontWeight: 500,
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
                <span>Sesión individual (80 min)</span>
                <span style={{ color: 'var(--color-magenta-light)', fontWeight: 700 }}>US$ 150</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickExperienceClick('programa')}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'space-between' }}
              >
                <span>Programa Eres Singular (3 meses)</span>
                <span style={{ fontWeight: 700 }}>US$ 1.490</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
