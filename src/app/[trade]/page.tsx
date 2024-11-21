// src/app/[trade]/page.tsx
import { notFound } from 'next/navigation';
import { tradeData, isValidTrade } from '@/config/trades';
import Image from 'next/image';
import Link from 'next/link';

export default function TradePage({ params }: { params: { trade: string } }) {
  const trade = params.trade.toLowerCase();
  
  if (!isValidTrade(trade)) {
    notFound();
  }

  const data = tradeData[trade];
  const colorClass = `text-${data.color}-600`;
  const bgColorClass = `bg-${data.color}-600`;
  const bgLightClass = `bg-${data.color}-50`;

  return (
    <div>
      {/* Hero Section */}
      <div className={`${bgLightClass} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className={`text-5xl font-bold ${colorClass}`}>
                {data.title}
              </h1>
              <p className="text-xl text-gray-600">
                {data.description}
              </p>
              <div className="space-y-4">
                {data.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`${bgColorClass} p-1 rounded-full`}>
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4">
                <Link 
                  href={`/${trade}/contact`}
                  className={`${bgColorClass} hover:bg-opacity-90 text-white px-8 py-3 rounded-lg transition-colors duration-300`}
                >
                  Contact Now
                </Link>
                <Link 
                  href={`/${trade}/works`}
                  className="bg-white text-gray-800 px-8 py-3 rounded-lg border hover:border-gray-300 transition-colors duration-300"
                >
                  View Works
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={`/api/placeholder/1000/1000`}
                alt={trade}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className={`text-xl font-semibold mb-4 ${colorClass}`}>{feature}</h3>
              <p className="text-gray-600">Professional service with attention to detail and customer satisfaction.</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={`${bgLightClass} py-20`}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <Link 
            href={`/${trade}/contact`}
            className={`${bgColorClass} hover:bg-opacity-90 text-white px-8 py-3 rounded-lg transition-colors duration-300 inline-block`}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}