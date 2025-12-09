import React from 'react';
import { Card } from './Card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MOCK_ATTENDANCE, MOCK_ABSENCES } from '../constants';

const overallData = [
  { name: 'Attended', value: 87, color: '#22c55e' }, // green-500
  { name: 'Missed', value: 13, color: '#e2e8f0' }, // slate-200
];

export const StudentAttendance: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Attendance Status</h2>

      {/* Overview Banner */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-center space-x-6">
           <div className="w-24 h-24 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={overallData}
                    innerRadius={35}
                    outerRadius={45}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                     {overallData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-xl font-bold text-slate-800">87%</span>
              </div>
           </div>
           <div>
             <h3 className="text-xl font-bold text-slate-800">Overall Attendance: <span className="text-green-600">87%</span></h3>
             <p className="text-slate-500 text-sm">Target: 85% - Good Standing</p>
           </div>
         </div>
         
         <div className="flex gap-8 text-sm">
           <div>
             <p className="text-slate-500 mb-1 flex items-center"><span className="w-3 h-3 bg-slate-400 rounded-full mr-2"></span>Total Classes</p>
             <p className="font-bold text-slate-800 text-lg">120</p>
           </div>
           <div>
             <p className="text-slate-500 mb-1 flex items-center"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>Attended</p>
             <p className="font-bold text-green-600 text-lg">104</p>
           </div>
            <div>
             <p className="text-slate-500 mb-1 flex items-center"><span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>Absent</p>
             <p className="font-bold text-red-500 text-lg">16</p>
           </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject Breakdown */}
        <Card title="Subject Breakdown" className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-medium">Subject</th>
                  <th className="px-4 py-3 font-medium text-center">Total</th>
                  <th className="px-4 py-3 font-medium text-center">Attended</th>
                  <th className="px-4 py-3 font-medium text-right">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_ATTENDANCE.map((record, index) => {
                  const percentage = Math.round((record.attended / record.totalClasses) * 100);
                  const colorClass = percentage >= 85 ? 'bg-green-500' : percentage >= 75 ? 'bg-yellow-400' : 'bg-red-500';
                  
                  return (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-800">{record.subject}</td>
                      <td className="px-4 py-3 text-center text-slate-600">{record.totalClasses}</td>
                      <td className="px-4 py-3 text-center text-slate-600">{record.attended}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-3">
                          <span className="font-bold text-slate-700 w-8">{percentage}%</span>
                          <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${colorClass}`} style={{ width: `${percentage}%` }}></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Recent Absences */}
        <Card title="Recent Absences">
           <div className="space-y-4">
             {MOCK_ABSENCES.map((absence) => (
               <div key={absence.id} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                 <div className="flex justify-between items-start mb-1">
                   <p className="font-medium text-slate-800">{absence.date}</p>
                   <span className={`text-xs px-2 py-0.5 rounded-full ${
                     absence.type === 'Excused' 
                       ? 'bg-green-100 text-green-700' 
                       : 'bg-red-100 text-red-700'
                   }`}>
                     {absence.type}
                   </span>
                 </div>
                 <p className="text-sm text-slate-500">{absence.reason}</p>
               </div>
             ))}
           </div>
           <div className="mt-6 pt-4 border-t border-slate-100 text-center">
             <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View Full Calendar</button>
           </div>
        </Card>
      </div>
    </div>
  );
};