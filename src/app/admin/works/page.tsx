// src/app/admin/works/page.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

const MOCK_DATA: WorkItem[] = [
  {
    id: '1',
    title: 'Kitchen Renovation',
    description: 'Complete kitchen remodeling with modern cabinets and countertops',
    imageUrl: '/placeholder.jpg',
    category: 'carpenter',
    date: '2024-03-15'
  },
  // 添加更多模拟数据...
];

export default function WorksManagement() {
  const [works, setWorks] = useState<WorkItem[]>(MOCK_DATA);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const handleDelete = (id: string) => {
    setWorks(works.filter(work => work.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Portfolio Management</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add New Work
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work) => (
          <Card key={work.id} className="hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-200 rounded-md mb-3">
              {/* 图片占位符 */}
            </div>
            <div className="p-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{work.title}</h3>
                <span className="text-sm text-gray-500">{work.category}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {work.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{work.date}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedWork(work)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(work.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add/Edit Modal Component will go here */}
      {/* {isAddModalOpen && (
        <WorkFormModal
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddWork}
        />
      )} */}

      {/* {selectedWork && (
        <WorkFormModal
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
          onSubmit={handleEditWork}
        />
      )} */}
    </div>
  );
}