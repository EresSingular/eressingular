import React from 'react';

interface GistesySignatureProps {
  /** Whether to show the subtle signature smiley beside Fer's name. */
  showSmiley?: boolean;
  /** Font size for the Montserrat smiley character. */
  smileyFontSize?: string;
  /** Font size for the Gistesy script name. */
  fontSize?: string;
  /** Text color override (defaults to current text color). */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Renders "Ma. Fernanda Cortés Espinosa" in Gistesy script with a clean
 * calligraphic acute accent over Gistesy's native lowercase "e" glyph.
 */
export function GistesySignature({
  showSmiley = true,
  smileyFontSize = '0.95rem',
  fontSize = '1.75rem',
  color,
  className = '',
  style,
}: GistesySignatureProps) {
  return (
    <span
      className={`font-gistesy ${className}`.trim()}
      style={{
        fontSize,
        color,
        lineHeight: 1.2,
        display: 'inline-block',
        ...style,
      }}
    >
      <span className="visually-hidden">
        Ma. Fernanda Cortés Espinosa{showSmiley ? ' ツ' : ''}
      </span>
      <span aria-hidden="true">
        Ma. Fernanda Cort<span className="gistesy-e-acute">e</span>s Espinosa
      </span>
      {showSmiley && (
        <span
          aria-hidden="true"
          className="font-display-montserrat"
          style={{
            fontSize: smileyFontSize,
            fontWeight: 600,
            marginLeft: '0.28rem',
          }}
        >
          ツ
        </span>
      )}
    </span>
  );
}
