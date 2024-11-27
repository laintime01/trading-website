// src/app/admin/dashboard/page.tsx
'use client';

import { Card } from "../../../components/ui/card";
import { 
  BarChart, 
  Users, 
  Image, 
  MessageSquare 
} from 'lucide-react';

const stats = [
  {
    title: "Total Views",
    value: "8,282",
    change: "+12.3%",
    icon: BarChart,
  },
  {
    title: "Total Users",
    value: "1,324",
    change: "+8.1%",
    icon: Users,
  },
  {
    title: "Portfolio Items",
    value: "24",
    change: "+2",
    icon: Image,
  },
  {
    title: "Messages",
    value: "48",
    change: "+12",
    icon: MessageSquare,
  },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* 最近活动部分将在下一步添加 */}
    </div>
  );
}