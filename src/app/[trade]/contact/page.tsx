// src/app/[trade]/contact/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import {
  CarpenterContact,
  ElectricianContact,
  PlumberContact,
  HVACContact
} from '@/components/contact';

const templates = {
  carpenter: CarpenterContact,
  electrician: ElectricianContact,
  plumber: PlumberContact,
  hvac: HVACContact
} as const;

type TradeType = keyof typeof templates;

export default function ContactPage({
  params
}: {
  params: { trade: TradeType }
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const Template = templates[params.trade];
  
  if (!Template) {
    notFound();
  }

  return <Template />;
}