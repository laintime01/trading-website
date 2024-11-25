// src/components/works/PlumberWorks.tsx
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

export function PlumberWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('repair');

  const categories: { [key: string]: ProjectCategory } = {
    repair: {
      title: 'Emergency Repairs',
      desc: '24/7 emergency plumbing solutions',
      projects: [
        {
          title: 'Burst Pipe Emergency',
          category: 'Emergency',
          desc: 'Rapid response and repair of burst water main',
          stats: {
            response: '30 mins',
            repair: 'Same day',
            service: '24/7'
          },
          images: ['/pipe-1.jpg', '/pipe-2.jpg']
        },
        {
          title: 'Leak Detection',
          category: 'Diagnostic',
          desc: 'Advanced leak detection and repair',
          stats: {
            method: 'Thermal scan',
            accuracy: '99%',
            coverage: 'Full home'
          },
          images: ['/leak-1.jpg', '/leak-2.jpg']
        }
      ]
    },
    bathroom: {
      title: 'Bathroom Plumbing',
      desc: 'Complete bathroom solutions',
      projects: [
        {
          title: 'Full Bath Renovation',
          category: 'Installation',
          desc: 'Complete plumbing renovation for master bath',
          stats: {
            fixtures: 'Premium grade',
            warranty: '5 years',
            time: '1 week'
          },
          images: ['/bath-1.jpg', '/bath-2.jpg']
        },
        {
          title: 'Custom Shower Install',
          category: 'Installation',
          desc: 'Multi-head shower system installation',
          stats: {
            heads: '3 fixtures',
            pressure: 'Optimized',
            control: 'Digital'
          },
          images: ['/shower-1.jpg', '/shower-2.jpg']
        }
      ]
    },
    kitchen: {
      title: 'Kitchen Systems',
      desc: 'Kitchen plumbing and appliances',
      projects: [
        {
          title: 'Kitchen Upgrade',
          category: 'Installation',
          desc: 'Modern kitchen plumbing with filtration',
          stats: {
            filter: 'Whole kitchen',
            sink: 'Dual mount',
            disposal: 'High power'
          },
          images: ['/kitchen-1.jpg', '/kitchen-2.jpg']
        },
        {
          title: 'Dishwasher Setup',
          category: 'Appliance',
          desc: 'Professional appliance installation',
          stats: {
            type: 'Built-in',
            drainage: 'Optimized',
            hookup: 'Full service'
          },
          images: ['/dish-1.jpg', '/dish-2.jpg']
        }
      ]
    },
    drain: {
      title: 'Drain Services',
      desc: 'Professional drain solutions',
      projects: [
        {
          title: 'Main Line Service',
          category: 'Maintenance',
          desc: 'Complete drain cleaning and inspection',
          stats: {
            method: 'Hydro jetting',
            inspection: 'Camera',
            warranty: '1 year'
          },
          images: ['/drain-1.jpg', '/drain-2.jpg']
        },
        {
          title: 'Basement Drainage',
          category: 'Installation',
          desc: 'Sump pump and drainage system',
          stats: {
            pump: 'Dual system',
            backup: 'Battery',
            coverage: 'Full basement'
          },
          images: ['/sump-1.jpg', '/sump-2.jpg']
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header section with pattern background */}
      <div className="relative bg-gradient-to-br from-cyan-900 to-cyan-700 py-16">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485 1.415 1.415L34.828.828 32 0zm-6.485 0L16.828 8.687l1.414 1.414 8.485-8.485L25.515 0zm12.97 0l8.485 8.485-1.414 1.415-8.485-8.485L38.485 0zm18.657 0l-1.414 1.414 2.243 2.243L60 1.828V0h-2.858zM0 0c.453 4.973 3.886 9.522 8.97 10.495l2.828-2.828C7.719 7.07 4.973 4.324 4.324 0H0zm0 60c.453-4.973 3.886-9.522 8.97-10.495l2.828 2.828C7.719 52.93 4.973 55.676 4.324 60H0zM60 0c-.453 4.973-3.886 9.522-8.97 10.495l-2.828-2.828c4.079-.597 6.825-3.343 7.474-7.667H60zm0 60c-.453-4.973-3.886-9.522-8.97-10.495l-2.828 2.828c4.079.597 6.825 3.343 7.474 7.667H60zM39.9 16.385l1.414-1.414 2.243 2.243-1.414 1.414-2.243-2.243zm-19.8 0L18.385 16.9l-2.243 2.243 1.414 1.414 2.243-2.243zM40.657 15.628l2.828-2.828 2.243 2.243-2.828 2.828-2.243-2.243zM20.343 15.628l-2.828-2.828-2.243 2.243 2.828 2.828 2.243-2.243zM42.9 18.627l1.414-1.414 2.243 2.243-1.414 1.414-2.243-2.243z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Licensed & Insured Plumbing Services
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-cyan-100 max-w-2xl mx-auto">
            Browse our collection of successful plumbing installations and repairs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Navigation with pattern background */}
        <div className="relative rounded-2xl p-8 mb-12">
          
          <div className="relative flex flex-wrap justify-center gap-4">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === key
                    ? 'bg-white text-cyan-800'
                    : 'bg-cyan-700/50 text-white hover:bg-cyan-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">{categories[activeCategory].title}</h2>
          <p className="text-gray-600">{categories[activeCategory].desc}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories[activeCategory].projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-cyan-700/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="aspect-video relative overflow-hidden bg-cyan-50">
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-cyan-800">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="bg-cyan-50 p-3 rounded-lg">
                      <p className="text-gray-500 capitalize mb-1">{key}</p>
                      <p className="font-medium text-cyan-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  {selectedProject.images.map((img, i) => (
                    <div key={i} className="aspect-video bg-cyan-50 rounded-lg overflow-hidden relative group">
                      {/* Replace with actual image component */}
                      <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-50">
                        <div className="absolute inset-0 bg-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 mb-6">{selectedProject.desc}</p>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Project Details</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="bg-white p-3 rounded-lg">
                        <p className="text-gray-500 capitalize text-sm mb-1">{key}</p>
                        <p className="font-medium text-cyan-900">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}