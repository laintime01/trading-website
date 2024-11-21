// src/app/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const trades = [
  {
    id: 'carpenter',
    title: 'Carpenter',
    description: 'Custom woodworking & furniture',
    gradient: 'from-amber-500 to-orange-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M5 12h14M12 5v14"
        />
      </svg>
    )
  },
  {
    id: 'electrician',
    title: 'Electrician',
    description: 'Professional electrical solutions',
    gradient: 'from-blue-500 to-cyan-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'plumber',
    title: 'Plumber',
    description: 'Complete plumbing services',
    gradient: 'from-green-500 to-emerald-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M4 8h16M4 16h16M8 4v16M16 4v16" 
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M6 12h12M12 6v12"
        />
      </svg>
    )
  },
  {
    id: 'hvac',
    title: 'HVAC',
    description: 'Heating & cooling solutions',
    gradient: 'from-purple-500 to-indigo-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" 
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M20 12h2m-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
        />
      </svg>
    )
  }
];

export default function Home() {
  const router = useRouter();
  const [hoveredTrade, setHoveredTrade] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Professional Website Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Launch your trade business online in minutes. Choose your industry and get a fully customizable website with ongoing support.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Easy Setup</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Full Customization</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Ongoing Support</span>
            </div>
          </div>
        </div>

        {/* 下面是工种选择卡片部分，但标题和描述要更新 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trades.map((trade, index) => (
            <div
              key={trade.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => router.push(`/${trade.id}`)}
                onMouseEnter={() => setHoveredTrade(trade.id)}
                onMouseLeave={() => setHoveredTrade(null)}
                className={`w-full h-64 rounded-xl overflow-hidden relative transition-all duration-300
                  ${hoveredTrade === trade.id ? 'shadow-2xl translate-y-[-4px]' : 'shadow-lg'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${trade.gradient} opacity-90`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{trade.title} Template</h2>
                      <p className="text-sm opacity-90">Perfect for {trade.title.toLowerCase()} businesses</p>
                    </div>
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      {trade.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Preview Template</span>
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        hoveredTrade === trade.id ? 'translate-x-2' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* 添加底部服务特点说明 */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Quick Setup</h3>
            <p className="text-gray-600">Get your professional website up and running in less than a day</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Managed Hosting</h3>
            <p className="text-gray-600">Worry-free hosting with automatic updates and backups</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600">Dedicated support team to help with customization and maintenance</p>
          </div>
        </div>
      </div>
    </div>
  );
}