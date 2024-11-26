// src/app/[trade]/contact/page.tsx
'use client';

import { useEffect, useState, use } from 'react';
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

interface ContactPageProps {
  params: Promise<{
    trade: TradeType;
  }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ContactPage({ params }: ContactPageProps) {
  const [mounted, setMounted] = useState(false);
  const resolvedParams = use(params);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const Template = templates[resolvedParams.trade];
  
  if (!Template) {
    notFound();
  }

  return <Template />;
}