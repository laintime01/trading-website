// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const trade = pathname.split('/')[1];
  const isHome = pathname === '/';

  const getActiveClass = (path: string) => {
    return pathname.includes(path) ? 'text-blue-600' : 'text-gray-600';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {isHome ? (
            // 主页版本的导航栏
            <div className="w-full flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                Trading Services
              </Link>
              <Link 
                href="/login" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
            </div>
          ) : (
            // 工种页面的导航栏
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
                  href={`/${trade}/about`} 
                  className={`hover:text-blue-600 transition-colors ${getActiveClass('about')}`}
                >
                  About
                </Link>
                <Link 
                  href={`/${trade}/works`} 
                  className={`hover:text-blue-600 transition-colors ${getActiveClass('works')}`}
                >
                  Works
                </Link>
                <Link 
                  href={`/${trade}/contact`} 
                  className={`hover:text-blue-600 transition-colors ${getActiveClass('contact')}`}
                >
                  Contact
                </Link>
                <Link 
                  href="/login" 
                  className={`hover:text-blue-600 transition-colors ${getActiveClass('login')}`}
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