'use client';

import React, { useState } from 'react';
import { Quote, Eye, EyeOff, UserCheck } from 'lucide-react';
import type { SiteContent, TestimonialItem } from '@/content/siteContent';

interface StoriesSectionProps {
  content: SiteContent['stories'];
}

export function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="story-card" aria-label={`Historia de ${item.name}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(181, 31, 112, 0.16)',
            border: '1px dashed var(--color-magenta-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: '0.72rem',
            textAlign: 'center',
            color: 'var(--color-magenta-light)',
            padding: '0.25rem',
          }}
          title={item.photoPlaceholderLabel}
        >
          <UserCheck size={20} aria-hidden="true" />
        </div>
        <div>
          <h3 style={{ fontSize: '1.08rem', fontWeight: 600, color: 'var(--color-white)' }}>
            {item.name}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)' }}>
            {item.roleOrContext} · {item.country}
          </p>
        </div>
      </div>

      <blockquote
        style={{
          fontSize: '0.98rem',
          lineHeight: 1.7,
          color: 'var(--color-gray-300)',
          fontStyle: 'italic',
          borderInlineStart: '2px solid var(--color-magenta)',
          paddingInlineStart: '0.9rem',
        }}
      >
        {item.quote}
      </blockquote>

      <div
        style={{
          marginTop: 'auto',
          paddingTop: '0.9rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          fontSize: '0.88rem',
          color: 'var(--color-gray-300)',
        }}
      >
        <strong style={{ color: 'var(--color-magenta-light)', display: 'block', marginBottom: '0.2rem' }}>
          Aprendizaje y transformación concreta:
        </strong>
        {item.concreteLearning}
      </div>
    </article>
  );
}

export function StoriesSection({ content }: StoriesSectionProps) {
  const publishedStories = content.items.filter((item) => item.published);
  const [showStructuralPreview, setShowStructuralPreview] = useState(false);

  return (
    <section id="historias" className="section-dark" aria-labelledby="stories-heading">
      <div className="container">
        <div className="scroll-reveal" style={{ maxWidth: '780px' }}>
          <span className="section-eyebrow">{content.eyebrow}</span>
          <h2 id="stories-heading" className="section-title">
            {content.title}
          </h2>
          <p className="section-intro">{content.intro}</p>
        </div>

        {publishedStories.length > 0 ? (
          <div className="stories-grid">
            {publishedStories.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div
            style={{
              marginTop: '2.5rem',
              background: 'linear-gradient(145deg, rgba(26,26,32,0.9), rgba(16,16,20,0.9))',
              border: '1px dashed rgba(224, 75, 154, 0.45)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem',
              }}
            >
              <div style={{ maxWidth: '64ch' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-magenta-light)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Quote size={14} aria-hidden="true" />
                  {content.unpublishedNotice.badge}
                </span>
                <h3
                  className="font-display-montserrat"
                  style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)', fontWeight: 800, marginBottom: '0.5rem' }}
                >
                  {content.unpublishedNotice.title}
                </h3>
                <p style={{ color: 'var(--color-gray-300)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                  {content.unpublishedNotice.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowStructuralPreview((prev) => !prev)}
                className="btn btn-outline-dark"
                aria-expanded={showStructuralPreview}
              >
                {showStructuralPreview ? (
                  <>
                    <EyeOff size={17} aria-hidden="true" />
                    <span>Ocultar marcadores de diseño</span>
                  </>
                ) : (
                  <>
                    <Eye size={17} aria-hidden="true" />
                    <span>Previsualizar estructura de tarjetas (3 espacios)</span>
                  </>
                )}
              </button>
            </div>

            {showStructuralPreview && (
              <div className="stories-grid" style={{ marginTop: '2rem' }}>
                {content.items.map((item) => (
                  <TestimonialCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
