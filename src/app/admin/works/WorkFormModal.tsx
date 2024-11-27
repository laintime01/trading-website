// src/components/works/WorkFormModal.tsx
import { WorkItem } from "@/types/work";
import { useState } from "react";

interface WorkFormModalProps {
  work?: WorkItem;
  onClose: () => void;
  onSubmit: (data: Omit<WorkItem, 'id' | 'created_at' | 'updated_at'>) => void;
}

export function WorkFormModal({ work, onClose, onSubmit }: WorkFormModalProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      title: (form.elements.namedItem('title') as HTMLInputElement).value,
      description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
      trade: (form.elements.namedItem('trade') as HTMLSelectElement).value,
      category: (form.elements.namedItem('category') as HTMLSelectElement).value,
      image_url: work?.image_url || '', // 这里后续需要处理新上传的图片
    };
    
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">
          {work ? 'Edit Work' : 'Add New Work'}
        </h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              name="title"
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              defaultValue={work?.title}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              rows={3}
              defaultValue={work?.description}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trade
            </label>
            <select
              name="trade"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              defaultValue={work?.trade}
            >
              <option value="">Select a trade</option>
              <option value="carpenter">Carpenter</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="hvac">HVAC</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image
            </label>
            {work?.image_url && (
              <div className="mb-2">
                <img 
                  src={work.image_url} 
                  alt={work.title}
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            <p className="text-sm text-gray-500 mt-1">
              Supported formats: JPG, PNG, WebP
            </p>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {work ? 'Save Changes' : 'Add Work'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}