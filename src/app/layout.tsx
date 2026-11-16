import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { getSiteContent } from '@/content/siteContent';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
});

const content = getSiteContent('es');

export const metadata: Metadata = {
  metadataBase: new URL('https://eressingular.vercel.app'),
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  authors: [{ name: content.brand.authorFullName }],
  creator: content.brand.authorFullName,
  alternates: {
    canonical: 'https://eressingular.vercel.app',
    languages: {
      es: 'https://eressingular.vercel.app',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://eressingular.vercel.app',
    siteName: content.brand.name,
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    images: [
      {
        url: '/images/fer-mirarte.png',
        width: 1200,
        height: 900,
        alt: content.hero.portraitImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    images: ['/images/fer-mirarte.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://eressingular.vercel.app/#fer',
        name: content.brand.authorFullName,
        alternateName: ['Fer', content.brand.authorSignature],
        jobTitle: content.brand.authorRole,
        description:
          'Publicista, mentora y Tejedora de Huella Personal con más de 30 años de experiencia trabajando con personas y negocios.',
        url: 'https://eressingular.vercel.app',
        image: 'https://eressingular.vercel.app/images/fer-sillon.png',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://eressingular.vercel.app/#service',
        name: content.brand.name,
        url: 'https://eressingular.vercel.app',
        founder: { '@id': 'https://eressingular.vercel.app/#fer' },
        description: content.seo.description,
        areaServed: 'Mundo hispanohablante',
        availableLanguage: ['es'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Experiencias Eres Singular con Fer',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Sesión individual de 80 minutos con Fer',
              description: content.experiences.items.session.shortDescription,
              price: '150',
              priceCurrency: 'USD',
              url: 'https://eressingular.vercel.app/#experiencias',
            },
            {
              '@type': 'Offer',
              name: 'Programa Eres Singular (Tres meses, 13 sesiones con Fer)',
              description: content.experiences.items.program.shortDescription,
              price: '1490',
              priceCurrency: 'USD',
              url: 'https://eressingular.vercel.app/#experiencias',
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="es" className={montserrat.variable}>
      <body>
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
