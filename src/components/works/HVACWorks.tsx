// src/components/works/HVACWorks.tsx
import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  desc: string;
  stats: {
    [key: string]: string;
  };
  images: string[];
}

type ProjectCategory = {
  title: string;
  desc: string;
  projects: Project[];
};

export function HVACWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('cooling');

  const categories: { [key: string]: ProjectCategory } = {
    cooling: {
      title: 'Air Conditioning',
      desc: 'Modern cooling solutions for any space',
      projects: [
        {
          title: 'Smart AC System',
          category: 'Cooling',
          desc: 'Multi-zone cooling with smart controls',
          stats: {
            coverage: '2,500 sq ft',
            efficiency: '20 SEER',
            control: 'Smart WiFi'
          },
          images: ['/ac-1.jpg', '/ac-2.jpg']
        },
        {
          title: 'Mini-Split Install',
          category: 'Ductless',
          desc: 'Efficient ductless cooling solution',
          stats: {
            units: '3 zones',
            type: 'Inverter',
            rating: '16 SEER'
          },
          images: ['/mini-1.jpg', '/mini-2.jpg']
        }
      ]
    },
    heating: {
      title: 'Heating Systems',
      desc: 'Efficient heating installations',
      projects: [
        {
          title: 'Heat Pump System',
          category: 'Dual System',
          desc: 'Year-round comfort solution',
          stats: {
            capacity: '4 ton',
            backup: 'Electric',
            efficiency: '10 HSPF'
          },
          images: ['/heat-1.jpg', '/heat-2.jpg']
        },
        {
          title: 'Furnace Upgrade',
          category: 'Heating',
          desc: 'High-efficiency gas furnace installation',
          stats: {
            efficiency: '96% AFUE',
            type: 'Variable',
            warranty: '10 years'
          },
          images: ['/furnace-1.jpg', '/furnace-2.jpg']
        }
      ]
    },
    airQuality: {
      title: 'Air Quality',
      desc: 'Indoor air quality improvements',
      projects: [
        {
          title: 'Whole-Home Purification',
          category: 'Air Quality',
          desc: 'Complete air purification system',
          stats: {
            coverage: 'Full home',
            filtration: 'HEPA',
            features: 'UV-C light'
          },
          images: ['/air-1.jpg', '/air-2.jpg']
        },
        {
          title: 'ERV Installation',
          category: 'Ventilation',
          desc: 'Energy recovery ventilation system',
          stats: {
            recovery: '85%',
            airflow: '200 CFM',
            control: 'Automated'
          },
          images: ['/erv-1.jpg', '/erv-2.jpg']
        }
      ]
    },
    commercial: {
      title: 'Commercial HVAC',
      desc: 'Commercial and industrial solutions',
      projects: [
        {
          title: 'Rooftop Unit',
          category: 'Commercial',
          desc: 'Multi-zone commercial system',
          stats: {
            capacity: '20 ton',
            zones: 'Multi-zone',
            monitoring: 'Remote'
          },
          images: ['/rtu-1.jpg', '/rtu-2.jpg']
        },
        {
          title: 'VRF System',
          category: 'Commercial',
          desc: 'Variable refrigerant flow system',
          stats: {
            type: 'Heat recovery',
            zones: '12 indoor',
            control: 'Central BMS'
          },
          images: ['/vrf-1.jpg', '/vrf-2.jpg']
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 rounded-full px-4 py-1 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm">Climate Control Excellence</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Project Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of advanced HVAC installations
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl transition-all ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-slate-800/80 text-gray-400 hover:bg-slate-700/80'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-12 bg-slate-800/50 rounded-2xl p-6 backdrop-blur border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-2">
            {categories[activeCategory].title}
          </h2>
          <p className="text-gray-400">{categories[activeCategory].desc}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories[activeCategory].projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-slate-800/50 backdrop-blur rounded-2xl overflow-hidden cursor-pointer border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-slate-900/90 rounded-full text-sm font-medium text-emerald-400 mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{project.desc}</p>

                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="bg-slate-900/50 p-3 rounded-xl">
                      <p className="text-gray-500 text-sm capitalize mb-1">{key}</p>
                      <p className="text-emerald-400 font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl max-w-4xl w-full overflow-hidden border border-slate-800">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm font-medium text-emerald-400">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.images.map((img, i) => (
                    <div key={i} className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                      {/* Replace with actual image component */}
                      <div className="w-full h-full bg-gradient-to-tr from-emerald-600/20 to-cyan-600/20" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} className="bg-slate-800/50 p-3 rounded-xl">
                      <p className="text-gray-500 text-sm capitalize mb-1">{key}</p>
                      <p className="text-emerald-400 font-medium">{value}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 mt-6">{selectedProject.desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}