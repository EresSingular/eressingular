'use client';

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import type { SiteContent } from '@/content/siteContent';

interface MirrorSectionProps {
  content: SiteContent['mirror'];
}

export function MirrorSection({ content }: MirrorSectionProps) {
  const [activeId, setActiveId] = useState<string>(content.questions[0]?.id ?? 'q1');
  const [personalNotes, setPersonalNotes] = useState<Record<string, string>>({});

  const toggleQuestion = (id: string) => {
    setActiveId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="el-espejo" className="section-light" aria-labelledby="mirror-heading">
      <div className="container">
        <div className="scroll-reveal" style={{ maxWidth: '780px' }}>
          <span className="section-eyebrow">{content.eyebrow}</span>
          <h2 id="mirror-heading" className="section-title">
            {content.title}
          </h2>
          <p className="section-intro">{content.intro}</p>
          <p
            style={{
              marginTop: '0.85rem',
              fontSize: '0.9rem',
              color: 'var(--color-magenta)',
              fontWeight: 500,
            }}
          >
            {content.interactionHint}
          </p>
        </div>

        <div className="mirror-list">
          {content.questions.map((item) => {
            const isOpen = activeId === item.id;
            const panelId = `mirror-panel-${item.id}`;
            const triggerId = `mirror-trigger-${item.id}`;
            const noteInputId = `mirror-note-${item.id}`;

            return (
              <article
                key={item.id}
                className="mirror-item"
                data-active={isOpen ? 'true' : 'false'}
              >
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    className="mirror-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleQuestion(item.id)}
                  >
                    <span className="mirror-number" aria-hidden="true">
                      {item.number}
                    </span>
                    <span className="mirror-question-text">{item.question}</span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.78rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: isOpen ? 'var(--color-magenta)' : 'var(--color-gray-600)',
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      <span className="mirror-tag-desktop">{item.pillarTag}</span>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                        }}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="mirror-panel"
                >
                  <p
                    style={{
                      fontSize: '1.06rem',
                      color: 'var(--color-gray-800)',
                      lineHeight: 1.75,
                      marginBottom: '1.15rem',
                      maxWidth: '66ch',
                    }}
                  >
                    {item.reflectionPrompt}
                  </p>

                  <div
                    style={{
                      background: 'var(--color-white)',
                      border: '1px solid var(--color-gray-200)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '1rem 1.15rem',
                      maxWidth: '640px',
                    }}
                  >
                    <label
                      htmlFor={noteInputId}
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--color-gray-600)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Apunte personal para ti (opcional y privado en tu pantalla; no se envía ni almacena):
                    </label>
                    <input
                      id={noteInputId}
                      type="text"
                      value={personalNotes[item.id] ?? ''}
                      onChange={(e) =>
                        setPersonalNotes((prev) => ({ ...prev, [item.id]: e.target.value }))
                      }
                      placeholder="Escribe una idea, recuerdo o palabra que te venga a la mente..."
                      style={{
                        width: '100%',
                        border: 'none',
                        borderBottom: '1.5px solid var(--color-gray-300)',
                        padding: '0.5rem 0',
                        fontSize: '1rem',
                        color: 'var(--color-black)',
                        background: 'transparent',
                      }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-gray-200)',
          }}
        >
          <blockquote
            className="font-display-montserrat"
            style={{
              fontSize: 'clamp(1.2rem, 1.9vw, 1.55rem)',
              fontWeight: 700,
              color: 'var(--color-black)',
              maxWidth: '42ch',
            }}
          >
            {content.closingQuote}
          </blockquote>

          <a href="#mi-enfoque" className="btn btn-outline-light">
            <span>{content.ctaLabel}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
