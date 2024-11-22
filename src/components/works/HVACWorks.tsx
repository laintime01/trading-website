// src/components/HVACWorks.tsx
export function HVACWorks() {
    const solutions = [
      {
        title: 'Smart Climate System',
        benefits: ['30% Energy Savings', 'AI-powered Control', 'Remote Monitoring']
      },
      // Add more solutions
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-16">Innovative Solutions</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-1">
                  <div className="bg-white p-8">
                    <h3 className="text-2xl font-bold mb-6">{solution.title}</h3>
                    <ul className="space-y-4">
                      {solution.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }