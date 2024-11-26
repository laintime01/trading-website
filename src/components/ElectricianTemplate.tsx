// src/components/ElectricianTemplate.tsx
export function ElectricianTemplate() {
    return (
      <div className="min-h-screen bg-slate-900">
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900" />
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 py-32">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-300 text-sm">24/7 Emergency Service</span>
                </div>
                
                <h1 className="text-6xl font-bold">
                  <span className="text-white">Smart Electrical</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h1>
                
                <p className="text-gray-400 text-xl max-w-xl">
                  Professional electrical solutions with cutting-edge technology
                </p>
  
                <div className="flex gap-6">
                  <button className="group relative px-8 py-3 bg-blue-600 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:opacity-0 transition-opacity" />
                    <span className="relative text-white">Get Started</span>
                  </button>
                  <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-900/50">
                    Learn More
                  </button>
                </div>
              </div>
  
              <div className="relative flex-1 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                'Smart Home',
                'Industrial',
                'Security',
                'Energy',
                'Maintenance',
                'Emergency'
              ].map((service, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-8 bg-slate-800 rounded-2xl border border-slate-700 group-hover:border-transparent transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4">{service}</h3>
                    <p className="text-gray-400">Professional solutions & service</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }