import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { MOCK_STUDENT_PROFILE } from '../constants';

export const StudentProfile: React.FC = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">My Details</h2>
           <p className="text-slate-500">Manage and view your personal information</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button>Request Modification</Button>
        </div>
      </div>

      {/* Personal Info */}
      <Card title="Personal Information">
        <div className="flex flex-col md:flex-row gap-8">
           <div className="flex-shrink-0 flex justify-center md:justify-start">
             <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden border-4 border-slate-50 shadow-inner">
               <img src="https://picsum.photos/300" alt="Student" className="w-full h-full object-cover" />
             </div>
           </div>
           
           <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
             <div>
               <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
               <p className="text-slate-800 font-medium text-lg">{MOCK_STUDENT_PROFILE.fullName}</p>
             </div>
             <div>
               <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Date of Birth</label>
               <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.dob}</p>
             </div>
             <div>
               <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Student ID</label>
               <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.studentId}</p>
             </div>
              <div>
               <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</label>
               <div className="flex items-center mt-1">
                 <Phone className="w-4 h-4 text-slate-400 mr-2" />
                 <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.phone}</p>
               </div>
             </div>
             <div className="md:col-span-2">
               <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
               <div className="flex items-center mt-1">
                 <Mail className="w-4 h-4 text-slate-400 mr-2" />
                 <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.email}</p>
               </div>
             </div>
             <div className="md:col-span-2">
               <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Mailing Address</label>
               <div className="flex items-center mt-1">
                 <MapPin className="w-4 h-4 text-slate-400 mr-2" />
                 <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.address}</p>
               </div>
             </div>
           </div>
        </div>
      </Card>

      {/* Academic Details */}
      <Card title="Academic Details">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
             <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Course Enrolled</label>
             <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.program}</p>
          </div>
          <div>
             <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Year of Study</label>
             <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.year}</p>
          </div>
          <div>
             <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Enrollment Status</label>
             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
               {MOCK_STUDENT_PROFILE.enrollmentStatus}
             </span>
          </div>
          <div>
             <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Advisor</label>
             <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.advisor}</p>
          </div>
           <div>
             <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Department</label>
             <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.department}</p>
          </div>
        </div>
      </Card>

      {/* Emergency Contact */}
      <Card title="Emergency Contact">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div>
             <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Name</label>
             <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.emergencyContact.name}</p>
          </div>
          <div>
             <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Relationship</label>
             <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.emergencyContact.relationship}</p>
          </div>
          <div>
             <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</label>
             <p className="text-slate-800 font-medium">{MOCK_STUDENT_PROFILE.emergencyContact.phone}</p>
          </div>
        </div>
      </Card>
      
      <p className="text-xs text-slate-400 italic">
        Note: Profile changes are subject to administrative approval. Allow 2-3 business days for processing.
      </p>
    </div>
  );
};