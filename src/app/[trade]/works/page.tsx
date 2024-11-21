// src/app/client/works/page.tsx
import Image from 'next/image';

export default function Works() {
  const works = [
    {
      id: 1,
      title: "Home Renovation",
      category: "Carpentry",
      description: "Complete home renovation including custom cabinets and flooring",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      id: 2,
      title: "Electrical Installation",
      category: "Electrical",
      description: "Commercial building electrical system upgrade",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      id: 3,
      title: "Bathroom Remodeling",
      category: "Plumbing",
      description: "Modern bathroom renovation with new fixtures",
      imageUrl: "/api/placeholder/800/600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Works</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <div key={work.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src={work.imageUrl}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-semibold">{work.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{work.title}</h3>
              <p className="text-gray-600">{work.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}