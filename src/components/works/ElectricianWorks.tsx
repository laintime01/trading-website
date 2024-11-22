// src/components/ElectricianWorks.tsx
export function ElectricianWorks() {
    const projects = [
      {
        title: 'Smart Home Installation',
        stats: {
          devices: '24',
          area: '3,500 sq ft',
          completion: '2 weeks'
        }
      },
      // Add more projects
    ];
  
    return (
      <div className="min-h-screen bg-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-white mb-16">Latest Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8 bg-slate-800 rounded-2xl h-full border border-slate-700 group-hover:border-transparent transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="space-y-2">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 capitalize">{key}</span>
                        <span className="text-blue-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }