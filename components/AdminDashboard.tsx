import React from 'react';
import { Users, BookOpen, DollarSign, TrendingUp, Bell } from 'lucide-react';
import { Card } from './Card';
import { StatCardProps } from '../types';

const stats: StatCardProps[] = [
  { label: 'Total Students', value: '2,845', icon: Users, color: 'bg-blue-500', trend: '+12% from last month' },
  { label: 'Active Courses', value: '48', icon: BookOpen, color: 'bg-indigo-500', trend: '4 new added' },
  { label: 'Fees Collected', value: '$1.2M', icon: DollarSign, color: 'bg-green-500', trend: '95% collection rate' },
  { label: 'Avg Attendance', value: '87%', icon: TrendingUp, color: 'bg-orange-500', trend: '+2% increase' },
];

const recentActivities = [
  { id: 1, text: "New student registration: John Doe", time: "2 hours ago", type: "info" },
  { id: 2, text: "Course 'Advanced Java' updated", time: "4 hours ago", type: "update" },
  { id: 3, text: "System maintenance scheduled", time: "1 day ago", type: "alert" },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Admin Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="flex flex-col p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              {stat.trend && (
                 <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                   {stat.trend}
                 </span>
              )}
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card title="Recent Activity" className="lg:col-span-2">
           <div className="space-y-6">
             {recentActivities.map((activity) => (
               <div key={activity.id} className="flex items-start">
                  <div className={`mt-1 w-2 h-2 rounded-full mr-4 flex-shrink-0 ${
                    activity.type === 'alert' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <p className="text-slate-800 font-medium">{activity.text}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{activity.time}</p>
                  </div>
               </div>
             ))}
           </div>
        </Card>

        {/* System Health */}
        <Card title="System Status">
           <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                <span className="text-sm font-medium text-green-800">Database</span>
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Online</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                <span className="text-sm font-medium text-green-800">API Gateway</span>
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Operational</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-sm font-medium text-slate-700">Last Backup</span>
                <span className="text-xs text-slate-500">2 hours ago</span>
              </div>
           </div>
        </Card>
      </div>
    </div>
  );
};
