// src/app/[trade]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { 
  CarpenterTemplate, 
  ElectricianTemplate, 
  PlumberTemplate, 
  HVACTemplate 
} from '@/components/home';

const templates = {
  carpenter: CarpenterTemplate,
  electrician: ElectricianTemplate,
  plumber: PlumberTemplate,
  hvac: HVACTemplate
} as const;

type TradeType = keyof typeof templates;

export default function TradePage({
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