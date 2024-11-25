// src/components/works/ElectricianWorks.tsx
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

export function ElectricianWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('residential');

  const categories: { [key: string]: ProjectCategory } = {
    residential: {
      title: 'Residential',
      desc: 'Home electrical solutions and upgrades',
      projects: [
        {
          title: 'Smart Home Installation',
          category: 'Automation',
          desc: 'Complete home automation with voice control',
          stats: {
            coverage: 'Whole house',
            devices: '24 smart points',
            system: 'HomeKit & Alexa'
          },
          images: ['/smart-1.jpg', '/smart-2.jpg']
        },
        {
          title: 'Panel Upgrade',
          category: 'Essential',
          desc: '200A service with surge protection',
          stats: {
            capacity: '200 Amp',
            warranty: '10 years',
            protection: 'Full home surge'
          },
          images: ['/panel-1.jpg', '/panel-2.jpg']
        }
      ]
    },
    evCharging: {
      title: 'EV Charging',
      desc: 'Electric vehicle charging solutions',
      projects: [
        {
          title: 'Home EV Station',
          category: 'Green Energy',
          desc: 'Level 2 charging with load management',
          stats: {
            power: '48A/11.5kW',
            type: 'Level 2',
            features: 'Smart enabled'
          },
          images: ['/ev-1.jpg', '/ev-2.jpg']
        },
        {
          title: 'Multi-Car Setup',
          category: 'Green Energy',
          desc: 'Dual charger installation with power sharing',
          stats: {
            power: '80A total',
            vehicles: '2 simultaneous',
            features: 'Load balancing'
          },
          images: ['/ev-3.jpg', '/ev-4.jpg']
        }
      ]
    },
    renovation: {
      title: 'Renovation',
      desc: 'Complete electrical renovations',
      projects: [
        {
          title: 'Basement Development',
          category: 'Renovation',
          desc: 'Full electrical with entertainment setup',
          stats: {
            area: '1000 sq ft',
            circuits: '12 new',
            features: 'Media wiring'
          },
          images: ['/basement-1.jpg', '/basement-2.jpg']
        },
        {
          title: 'Kitchen Remodel',
          category: 'Renovation',
          desc: 'Modern kitchen electrical upgrade',
          stats: {
            outlets: '8 GFCI',
            lighting: 'LED system',
            appliances: 'High-capacity'
          },
          images: ['/kitchen-1.jpg', '/kitchen-2.jpg']
        }
      ]
    },
    emergency: {
      title: 'Emergency Systems',
      desc: 'Backup power and safety solutions',
      projects: [
        {
          title: 'Generator Install',
          category: 'Emergency',
          desc: 'Whole-home backup power system',
          stats: {
            power: '22kW',
            transfer: 'Automatic',
            coverage: 'Full home'
          },
          images: ['/gen-1.jpg', '/gen-2.jpg']
        },
        {
          title: 'Safety System',
          category: 'Emergency',
          desc: 'Advanced smoke and CO detection',
          stats: {
            sensors: '12 points',
            backup: 'Battery',
            monitoring: '24/7'
          },
          images: ['/safety-1.jpg', '/safety-2.jpg']
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-1 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-sm">Professional Electrical Services</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Project Showcase</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of electrical installations and solutions
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">
            {categories[activeCategory].title}
          </h2>
          <p className="text-gray-400">{categories[activeCategory].desc}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories[activeCategory].projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden cursor-pointer border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-blue-400">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>

                <div className="space-y-2 text-sm">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-500 capitalize">{key}</span>
                      <span className="text-blue-400">{value}</span>
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
            <div className="relative bg-slate-900 rounded-2xl max-w-4xl w-full overflow-hidden border border-slate-800">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {selectedProject.images.map((img, i) => (
                    <div key={i} className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                      {/* Replace with actual image component */}
                      <div className="w-full h-full bg-gradient-to-tr from-blue-600/20 to-cyan-600/20"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}