// src/app/admin/layout.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Images, 
  MessageSquare, 
  User, 
  Users,
  Menu,
  X
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Portfolio',
    path: '/admin/works',
    icon: Images
  },
  {
    title: 'Settings',
    path: '/admin/settings',
    icon: User
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: Users
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-white border-r w-64">
          <div className="flex items-center justify-between mb-6 px-2">
            <Link href="/admin/dashboard" className="text-xl font-bold">
              Admin Panel
            </Link>
            <button 
              className="md:hidden" 
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav>
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center px-2 py-3 mb-1 rounded-lg ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'md:ml-64' : ''}`}>
        {/* Top bar */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-auto">
              <Link 
                href="/admin/profile"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200" />
                <span>Admin</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}