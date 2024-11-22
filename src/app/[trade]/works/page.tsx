// src/app/[trade]/works/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import {
  CarpenterWorks,
  ElectricianWorks,
  PlumberWorks,
  HVACWorks
} from '@/components/works';

const templates = {
  carpenter: CarpenterWorks,
  electrician: ElectricianWorks,
  plumber: PlumberWorks,
  hvac: HVACWorks
} as const;

type TradeType = keyof typeof templates;

export default function WorksPage({
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