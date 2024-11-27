// src/app/admin/settings/page.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface SettingsForm {
  // 基本信息
  name: string;
  email: string;
  phone: string;
  
  // 联系信息
  businessHours: string;
  address: string;
  
  // 社交媒体
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  
  // 安全设置
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsForm>({
    name: 'Admin',
    email: 'admin@example.com',
    phone: '+1 234 567 890',
    businessHours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    address: '123 Business Street, City, Country',
    social: {
      facebook: '',
      twitter: '',
      linkedin: ''
    },
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现更新逻辑
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="space-y-6">
        {/* 基本信息 */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => setSettings({...settings, name: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({...settings, email: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => setSettings({...settings, phone: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </Card>

        {/* 业务信息 */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Business Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Hours
              </label>
              <input
                type="text"
                value={settings.businessHours}
                onChange={(e) => setSettings({...settings, businessHours: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                value={settings.address}
                onChange={(e) => setSettings({...settings, address: e.target.value})}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </Card>

        {/* 社交媒体链接 */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Social Media Links</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facebook
              </label>
              <input
                type="url"
                value={settings.social.facebook}
                onChange={(e) => setSettings({
                  ...settings,
                  social: {...settings.social, facebook: e.target.value}
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Twitter
              </label>
              <input
                type="url"
                value={settings.social.twitter}
                onChange={(e) => setSettings({
                  ...settings,
                  social: {...settings.social, twitter: e.target.value}
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn
              </label>
              <input
                type="url"
                value={settings.social.linkedin}
                onChange={(e) => setSettings({
                  ...settings,
                  social: {...settings.social, linkedin: e.target.value}
                })}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </Card>

        {/* 密码修改 */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                value={settings.currentPassword}
                onChange={(e) => setSettings({...settings, currentPassword: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                value={settings.newPassword}
                onChange={(e) => setSettings({...settings, newPassword: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                value={settings.confirmPassword}
                onChange={(e) => setSettings({...settings, confirmPassword: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </Card>

        {/* 保存按钮 */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}