// src/components/CarpenterWorks.tsx
export function CarpenterWorks() {
    const projects = [
      {
        title: 'Custom Kitchen Cabinets',
        desc: 'Handcrafted maple wood cabinets',
        category: 'Kitchen'
      },
      {
        title: 'Built-in Wardrobe',
        desc: 'Floor-to-ceiling storage solution',
        category: 'Storage'
      },
      // Add more projects
    ];
  
    return (
      <div className="min-h-screen bg-amber-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-16">Our Craftsmanship</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="text-sm font-medium text-amber-300">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                  <p className="mt-2 text-gray-300">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }