import React from 'react';
import { getSiteContent } from '@/content/siteContent';
import { LandingPageClient } from '@/components/LandingPageClient';

export default function HomePage() {
  const content = getSiteContent('es');
  return <LandingPageClient content={content} />;
}
