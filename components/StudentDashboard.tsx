import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { User, Calendar, CreditCard } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { MOCK_STUDENT_PROFILE, MOCK_NOTIFICATIONS } from '../constants';

const attendanceData = [
  { name: 'Present', value: 92, color: '#2563eb' }, // blue-600
  { name: 'Absent', value: 8, color: '#e2e8f0' }, // slate-200
];

export const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
         <h2 className="text-2xl font-bold mb-2">Welcome back, {MOCK_STUDENT_PROFILE.fullName}!</h2>
         <p className="opacity-90">Here's what's happening with your academic progress today.</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Summary */}
        <Card className="flex flex-col h-full bg-blue-50 border-blue-100">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">My Details</h3>
              <span className="text-sm text-slate-500">Student Profile</span>
            </div>
          </div>
          
          <div className="space-y-3 flex-1">
             <div className="flex justify-between border-b border-blue-100 pb-2">
               <span className="text-slate-500">Student ID</span>
               <span className="font-medium text-slate-700">{MOCK_STUDENT_PROFILE.studentId}</span>
             </div>
             <div className="flex justify-between border-b border-blue-100 pb-2">
               <span className="text-slate-500">Program</span>
               <span className="font-medium text-slate-700 text-right text-sm">{MOCK_STUDENT_PROFILE.program}</span>
             </div>
             <div className="flex justify-between border-b border-blue-100 pb-2">
               <span className="text-slate-500">Year</span>
               <span className="font-medium text-slate-700">{MOCK_STUDENT_PROFILE.year}</span>
             </div>
          </div>

          <div className="mt-6">
            <Button fullWidth onClick={() => navigate('/profile')}>View Profile</Button>
          </div>
        </Card>

        {/* Attendance Summary */}
        <Card className="flex flex-col h-full">
           <div className="flex items-center space-x-4 mb-2">
            <div className="p-3 bg-blue-50 rounded-full">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-800 text-lg">Attendance Status</h3>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative min-h-[160px]">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={attendanceData}
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {attendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-3xl font-bold text-slate-800">92%</span>
               <span className="text-xs text-slate-500 font-medium">Present</span>
            </div>
          </div>
          
          <div className="text-center text-sm text-slate-500 mb-4">
             Last updated: Oct 25, 2024
          </div>

          <Button variant="outline" fullWidth onClick={() => navigate('/attendance')}>View Report</Button>
        </Card>

        {/* Fees Summary */}
        <Card className="flex flex-col h-full">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-blue-50 rounded-full">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">Fee Details</h3>
              <span className="text-sm text-slate-500">Pending Payments</span>
            </div>
          </div>

          <div className="flex-1 space-y-4">
             <div>
               <p className="text-sm text-slate-500 mb-1">Amount Due</p>
               <p className="text-3xl font-bold text-slate-800">$1,500.00</p>
             </div>
             <div className="flex justify-between items-center text-sm">
               <span className="text-slate-500">Due Date:</span>
               <span className="font-medium text-red-600">Nov 15, 2024</span>
             </div>
          </div>

          <div className="mt-6">
            <Button variant="danger" fullWidth onClick={() => navigate('/fees')}>Pay Now</Button>
          </div>
        </Card>
      </div>

      {/* Notifications */}
      <Card title="Upcoming Events & Notifications">
         <div className="space-y-0 divide-y divide-slate-100">
           {MOCK_NOTIFICATIONS.map((notif) => (
             <div key={notif.id} className="py-4 flex items-start">
               <div className={`w-2 h-2 mt-2 rounded-full mr-4 flex-shrink-0 ${
                 notif.type === 'alert' ? 'bg-red-500' : 
                 notif.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
               }`} />
               <div className="flex-1">
                 <p className="font-medium text-slate-800">{notif.title}</p>
                 <p className="text-sm text-slate-500 mt-1">Posted on {notif.date}</p>
               </div>
             </div>
           ))}
         </div>
      </Card>
    </div>
  );
};