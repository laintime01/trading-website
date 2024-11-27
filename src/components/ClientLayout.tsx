// src/components/ClientLayout.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center text-gray-600">
          © {year} Skilled Trades Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');
  const isLoginPage = pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPage && !isLoginPage && <Navbar />}
      <main className={`flex-grow ${!isAdminPage && !isLoginPage ? 'pt-16' : ''}`}>
        {children}
      </main>
      {!isAdminPage && !isLoginPage && <Footer />}
    </div>
  );
}