// src/components/works/CarpenterWorks.tsx
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

export function CarpenterWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('decks');

  const categories: { [key: string]: ProjectCategory } = {
    decks: {
      title: 'Decks & Patios',
      desc: 'Custom outdoor living spaces',
      projects: [
        {
          title: 'Modern Composite Deck',
          category: 'Deck',
          desc: 'Low-maintenance Trex deck with glass railings',
          stats: {
            area: '400 sq ft',
            time: '2 weeks',
            material: 'Trex Transcend'
          },
          images: ['/deck-1.jpg', '/deck-2.jpg', '/deck-3.jpg']
        },
        {
          title: 'Multi-level Deck',
          category: 'Deck',
          desc: 'Pressure-treated wood deck with built-in seating',
          stats: {
            area: '600 sq ft',
            time: '3 weeks',
            material: 'PT Lumber'
          },
          images: ['/deck-4.jpg', '/deck-5.jpg', '/deck-6.jpg']
        },
        // More deck projects...
      ]
    },
    fencing: {
      title: 'Fencing',
      desc: 'Privacy and security solutions',
      projects: [
        {
          title: 'Cedar Privacy Fence',
          category: 'Fence',
          desc: 'Solid panel cedar fence with lattice top',
          stats: {
            length: '120 ft',
            height: '6 ft',
            material: 'Western Red Cedar'
          },
          images: ['/fence-1.jpg', '/fence-2.jpg']
        },
        {
          title: 'Mixed Material Fence',
          category: 'Fence',
          desc: 'Modern design with wood and metal',
          stats: {
            length: '80 ft',
            height: '6 ft',
            material: 'Cedar & Aluminum'
          },
          images: ['/fence-3.jpg', '/fence-4.jpg']
        },
        // More fence projects...
      ]
    },
    landscaping: {
      title: 'Landscaping',
      desc: 'Hardscaping and outdoor features',
      projects: [
        {
          title: 'Stone Patio',
          category: 'Hardscape',
          desc: 'Interlocking stone with built-in firepit',
          stats: {
            area: '300 sq ft',
            pattern: 'Herringbone',
            material: 'Permacon'
          },
          images: ['/patio-1.jpg', '/patio-2.jpg']
        },
        {
          title: 'Garden Design',
          category: 'Hardscape',
          desc: 'Complete backyard transformation',
          stats: {
            area: '500 sq ft',
            features: 'Multiple',
            material: 'Mixed'
          },
          images: ['/garden-1.jpg', '/garden-2.jpg']
        },
        // More landscaping projects...
      ]
    },
    pergolas: {
      title: 'Pergolas & Structures',
      desc: 'Custom outdoor structures',
      projects: [
        {
          title: 'Modern Pergola',
          category: 'Structure',
          desc: 'Custom cedar pergola with retractable shade',
          stats: {
            size: '16x12 ft',
            time: '1 week',
            material: 'Cedar'
          },
          images: ['/pergola-1.jpg', '/pergola-2.jpg']
        },
        {
          title: 'Garden Shed',
          category: 'Structure',
          desc: 'Custom storage solution with style',
          stats: {
            size: '10x12 ft',
            time: '1 week',
            material: 'Mixed'
          },
          images: ['/shed-1.jpg', '/shed-2.jpg']
        },
        // More structure projects...
      ]
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of custom outdoor projects
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === key
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-amber-50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">{categories[activeCategory].title}</h2>
          <p className="text-gray-600">{categories[activeCategory].desc}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeCategory].projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-video relative overflow-hidden bg-amber-100">
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-amber-900">
                  {project.category}
                </span>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">View Gallery</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>

                <div className="space-y-2 text-sm">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-500 capitalize">{key}</span>
                      <span className="font-medium">{value}</span>
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
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {selectedProject.images.map((img, i) => (
                    <div key={i} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      {/* Replace with actual image component */}
                      <div className="w-full h-full bg-amber-100"></div>
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