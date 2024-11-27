// src/app/admin/users/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { User } from '@/types/user';
import { Card } from '@/components/ui/card';
import { UserFormModal } from './userFormModal';

export default function UsersManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setUsers(data.users);
      }
    } catch (error) {
      setError('Failed to fetch users');
    } finally {
      setIsLoading(false);
    }
  };
  const handleAddUser = async (data: Omit<User, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.error) {
        setError(result.error);
      } else {
        setUsers([...users, result.user]);
        setIsModalOpen(false);
      }
    } catch (error) {
      setError('Failed to create user');
    }
  };

  const handleEditUser = async (data: Omit<User, 'id' | 'created_at' | 'updated_at'>) => {
    if (!selectedUser) return;

    try {
      const response = await fetch(`/api/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.error) {
        setError(result.error);
      } else {
        setUsers(users.map(user => 
          user.id === selectedUser.id ? result.user : user
        ));
        setIsModalOpen(false);
        setSelectedUser(null);
      }
    } catch (error) {
      setError('Failed to update user');
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.error) {
        setError(result.error);
      } else {
        setUsers(users.filter(user => user.id !== id));
      }
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New User
        </button>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <Card key={user.id} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {user.role}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setIsModalOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {/* 添加删除确认逻辑 */}}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
{isModalOpen && (
        <UserFormModal
          user={selectedUser || undefined}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedUser(null);
          }}
          onSubmit={selectedUser ? handleEditUser : handleAddUser}
        />
      )}
    </div>
  );
}