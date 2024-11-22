// src/components/PlumberWorks.tsx
export function PlumberWorks() {
    const cases = [
      {
        title: 'Emergency Pipe Repair',
        location: 'Commercial Building',
        time: '2 hours response'
      },
      // Add more cases
    ];
  
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-16">Case Studies</h1>
          
          <div className="space-y-8">
            {cases.map((case_, idx) => (
              <div key={idx} className="bg-cyan-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-900">{case_.title}</h3>
                    <p className="text-cyan-700 mt-1">{case_.location}</p>
                  </div>
                  <span className="text-cyan-600 bg-cyan-100 px-4 py-1 rounded-full">
                    {case_.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }