// src/app/(dashboard)/works/page.tsx
'use client';

export default function AdminWorks() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Works</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add New Work
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Project 1</td>
                <td className="border px-4 py-2">Description...</td>
                <td className="border px-4 py-2">
                  <button className="text-blue-500 mr-2">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}