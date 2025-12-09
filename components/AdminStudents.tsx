import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Plus, Mail, Download } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { StudentSummary } from '../types';

const INITIAL_STUDENTS: StudentSummary[] = [
  { id: '202310456', name: 'Alex Chen', program: 'Computer Science', year: '2nd', status: 'Active', email: 'alex.chen@uni.edu' },
  { id: '202310457', name: 'Sarah Miller', program: 'Engineering', year: '1st', status: 'Active', email: 's.miller@uni.edu' },
  { id: '202310458', name: 'James Wilson', program: 'Business Admin', year: '3rd', status: 'Inactive', email: 'j.wilson@uni.edu' },
  { id: '202310459', name: 'Emily Davis', program: 'Fine Arts', year: '2nd', status: 'Active', email: 'e.davis@uni.edu' },
  { id: '202310460', name: 'Michael Brown', program: 'Computer Science', year: '4th', status: 'Graduated', email: 'm.brown@uni.edu' },
  { id: '202310461', name: 'Lisa Anderson', program: 'Psychology', year: '1st', status: 'Active', email: 'l.anderson@uni.edu' },
];

export const AdminStudents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [students] = useState<StudentSummary[]>(INITIAL_STUDENTS);

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.includes(searchTerm) ||
    student.program.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <h2 className="text-2xl font-bold text-slate-800">Student Directory</h2>
         <div className="flex gap-2">
            <Button variant="outline" className="flex items-center">
               <Download className="w-4 h-4 mr-2" /> Export
            </Button>
            <Button className="flex items-center">
               <Plus className="w-4 h-4 mr-2" /> Add Student
            </Button>
         </div>
      </div>

      <Card className="p-0 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
           <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                 type="text" 
                 placeholder="Search by name, ID or program..." 
                 className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <div className="flex items-center gap-2 w-full sm:w-auto">
              <button className="flex items-center px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-white bg-white">
                 <Filter className="w-4 h-4 mr-2" /> Filter
              </button>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-semibold">Student Details</th>
                <th className="px-6 py-4 font-semibold">Program</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                     <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-3">
                           {student.name.charAt(0)}
                        </div>
                        <div>
                           <p className="font-medium text-slate-900">{student.name}</p>
                           <p className="text-xs text-slate-500">ID: {student.id}</p>
                        </div>
                     </div>
                  </td>
                  <td className="px-6 py-4">
                     <p className="text-slate-800">{student.program}</p>
                     <p className="text-xs text-slate-500">Year: {student.year}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-xs rounded-full font-medium border ${
                      student.status === 'Active' ? 'bg-green-50 text-green-700 border-green-100' :
                      student.status === 'Inactive' ? 'bg-red-50 text-red-700 border-red-100' :
                      'bg-slate-50 text-slate-700 border-slate-200'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                           <Mail className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                           <MoreVertical className="w-4 h-4" />
                        </button>
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-xs text-slate-500 flex justify-between items-center">
           <span>Showing {filteredStudents.length} students</span>
           <div className="flex gap-2">
              <button className="px-3 py-1 border border-slate-200 rounded bg-white disabled:opacity-50">Previous</button>
              <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50">Next</button>
           </div>
        </div>
      </Card>
    </div>
  );
};
