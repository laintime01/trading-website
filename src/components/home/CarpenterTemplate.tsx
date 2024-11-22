// src/components/templates/CarpenterTemplate.tsx
export function CarpenterTemplate() {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[90vh]">
          <div className="absolute inset-0 bg-[url('/wood-bg.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[url('/wood-texture.png')] mix-blend-multiply opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                ARTISAN CRAFTSMANSHIP
              </span>
              <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
                Transforming Wood Into
                <br/>
                <span className="text-amber-300">Timeless Art</span>
              </h1>
              <div className="flex gap-4 mt-8">
                <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
                  Get Quote
                </button>
                <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                'Custom Furniture',
                'Built-in Cabinets',
                'Wood Restoration',
                'Commercial Spaces',
                'Bespoke Pieces',
                'Home Renovation'
              ].map((service, idx) => (
                <div 
                  key={idx} 
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{service}</h3>
                    <p className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      View our portfolio
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Crafting Process</h2>
              <p className="text-gray-600">Every piece goes through our rigorous crafting process</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: 'Consultation', desc: 'Understanding your vision' },
                { title: 'Design', desc: 'Professional drafting' },
                { title: 'Crafting', desc: 'Expert construction' }, 
                { title: 'Delivery', desc: 'Professional installation' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="w-16 h-16 rounded-full bg-amber-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }