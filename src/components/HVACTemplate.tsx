// src/components/HVACTemplate.tsx
export function HVACTemplate() {
    return (
      <div className="min-h-screen bg-gray-100">
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777), linear-gradient(60deg, #77777777 25%, transparent 25.5%, transparent 75%, #77777777 75%, #77777777)',
              backgroundSize: '80px 140px',
              backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
              opacity: 0.05
            }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/20 rounded-full px-4 py-2">
                  <span className="text-emerald-400 text-sm">Smart Climate Control</span>
                </div>
                <h1 className="text-5xl font-bold text-white leading-tight">
                  Advanced
                  <br/>
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    HVAC Solutions
                  </span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl">
                  Expert heating, ventilation, and air conditioning services
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg hover:from-emerald-700 hover:to-cyan-700">
                    Free Assessment
                  </button>
                  <button className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20">
                    Our Services
                  </button>
                </div>
              </div>
              
              <div className="relative hidden md:block">
                <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-emerald-500/50 animate-[spin_10s_linear_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                'AC Systems',
                'Heating',
                'Ventilation',
                'Smart Controls',
                'Maintenance',
                'Energy Solutions'
              ].map((service, idx) => (
                <div key={idx} className="group p-8 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white">{service}</h3>
                  <p className="text-gray-600 group-hover:text-white/90">Advanced climate control solutions</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }