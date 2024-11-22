// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tradeColors = {
  carpenter: 'text-amber-600 hover:text-amber-700',
  electrician: 'text-blue-600 hover:text-blue-700',
  plumber: 'text-cyan-600 hover:text-cyan-700',
  hvac: 'text-emerald-600 hover:text-emerald-700'
} as const;

type TradeType = keyof typeof tradeColors;

export default function Navbar() {
  const pathname = usePathname();
  const trade = pathname.split('/')[1] as TradeType;
  const isHome = pathname === '/';

  const getActiveClass = (path: string) => {
    return pathname.includes(path) ? tradeColors[trade] || 'text-blue-600' : 'text-gray-600';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {isHome ? (
            <div className="w-full flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                Trading Services
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
                Login
              </Link>
            </div>
          ) : (
            <>
              <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                Trading Services
              </Link>
              <div className="flex space-x-8">
                <Link
                  href={`/${trade}`}
                  className={`hover:text-blue-600 transition-colors ${getActiveClass(trade)}`}
                >
                  Home
                </Link>
                <Link
                  href={`/${trade}/works`}
                  className={`transition-colors ${getActiveClass('works')}`}
                >
                  Works
                </Link>
                <Link
                  href={`/${trade}/contact`}
                  className={`transition-colors ${getActiveClass('contact')}`}
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className={`transition-colors ${getActiveClass('login')}`}
                >
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}