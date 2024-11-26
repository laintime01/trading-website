// src/app/[trade]/contact/layout.tsx
export function generateStaticParams() {
    return [
      { trade: 'carpenter' },
      { trade: 'electrician' },
      { trade: 'plumber' },
      { trade: 'hvac' }
    ];
  }
  
  export default function ContactLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return children;
  }