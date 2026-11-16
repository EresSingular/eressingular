'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Check, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface AudienceItem {
  title: string;
  description: string;
}

interface AudienceCarouselProps {
  audiences: AudienceItem[];
  title: string;
}

export function AudienceCarousel({ audiences, title }: AudienceCarouselProps) {
  // Duplicamos la lista para permitir un bucle infinito fluido
  const extendedItems = [...audiences, ...audiences];
  const total = audiences.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [withTransition, setWithTransition] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  // Detectar cantidad de tarjetas visibles según el ancho de pantalla
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    let count = 3;
    if (w < 680) {
      count = 1;
    } else if (w < 980) {
      count = 2;
    } else {
      count = 3;
    }
    setVisibleCount(count);

    if (firstCardRef.current) {
      setCardWidth(firstCardRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const handleNext = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => {
      if (prev === 0) {
        // Salto instantáneo al duplicado y luego retroceso con transición
        return total - 1;
      }
      return prev - 1;
    });
  }, [total]);

  // Si currentIndex llega a 'total', reajustamos instantáneamente a 0 en transitionEnd
  const handleTransitionEnd = () => {
    if (currentIndex >= total) {
      setWithTransition(false);
      setCurrentIndex(0);
    }
  };

  // Autoplay con movimiento cada 3.8 segundos
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Brecha entre tarjetas (en píxeles)
  const gap = 18;
  const activeDotIndex = currentIndex % total;

  return (
    <div
      className="audience-carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Cabecera del carrusel con controles */}
      <div className="audience-carousel-header">
        <div>
          <h3 className="audience-carousel-title font-display-montserrat">
            ¿Para quién es{' '}
            <span className="font-brittany audience-carousel-brittany">
              Eres Singular
            </span>
            ?
          </h3>
          <p className="audience-carousel-subtitle">
            Perfiles y momentos de vida para los que está diseñado este acompañamiento.
          </p>
        </div>

        {/* Controles de navegación interactivos */}
        <div className="audience-carousel-controls" aria-label="Controles del carrusel">
          <span className="audience-carousel-counter font-display-montserrat">
            0{activeDotIndex + 1} / 0{total}
          </span>

          <div style={{ display: 'flex', gap: '0.45rem' }}>
            <button
              type="button"
              onClick={handlePrev}
              className="audience-nav-btn"
              aria-label="Ver perfil anterior"
              title="Anterior"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="audience-nav-btn"
              aria-label="Ver perfil siguiente"
              title="Siguiente"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Ventana visible del carrusel */}
      <div className="audience-carousel-viewport" ref={containerRef}>
        <div
          className="audience-carousel-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
            transition: withTransition
              ? 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)'
              : 'none',
            gap: `${gap}px`,
          }}
        >
          {extendedItems.map((aud, idx) => {
            const originalIndex = idx % total;
            const isFirst = idx === 0;

            return (
              <article
                key={`${aud.title}-${idx}`}
                ref={isFirst ? firstCardRef : null}
                className="audience-card"
                style={{
                  flex: `0 0 calc((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount})`,
                }}
              >
                <div>
                  <div className="audience-card-topbar">
                    <span className="audience-card-number font-display-montserrat">
                      0{originalIndex + 1}
                    </span>
                    <span className="audience-card-check">
                      <Check size={14} aria-hidden="true" />
                    </span>
                  </div>

                  <h4 className="audience-card-title font-display-montserrat">
                    {aud.title}
                  </h4>
                </div>

                <p className="audience-card-description">
                  {aud.description}
                </p>

                <div className="audience-card-bottom-line" />
              </article>
            );
          })}
        </div>
      </div>

      {/* Barra de indicadores / puntos interactivos */}
      <div className="audience-carousel-dots">
        {audiences.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => {
              setWithTransition(true);
              setCurrentIndex(dotIdx);
            }}
            className={`audience-dot${dotIdx === activeDotIndex ? ' is-active' : ''}`}
            aria-label={`Ir al perfil ${dotIdx + 1} de ${total}`}
          />
        ))}
      </div>
    </div>
  );
}
