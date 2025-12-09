import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Bell, Lock, Globe, Database, Shield } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  return (
    <div className="space-y-6">
       <h2 className="text-2xl font-bold text-slate-800">System Settings</h2>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
             <button className="w-full text-left px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium flex items-center">
                <Globe className="w-5 h-5 mr-3" /> General
             </button>
             <button className="w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-600 rounded-lg font-medium flex items-center transition-colors">
                <Lock className="w-5 h-5 mr-3" /> Security & Access
             </button>
             <button className="w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-600 rounded-lg font-medium flex items-center transition-colors">
                <Bell className="w-5 h-5 mr-3" /> Notifications
             </button>
             <button className="w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-600 rounded-lg font-medium flex items-center transition-colors">
                <Database className="w-5 h-5 mr-3" /> Backup & Recovery
             </button>
          </div>

          <div className="md:col-span-2 space-y-6">
             <Card title="General Configuration">
                <div className="space-y-4">
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">University Name</label>
                      <input type="text" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500" defaultValue="UniPortal University" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Current Academic Year</label>
                         <select className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm">
                            <option>2023 - 2024</option>
                            <option>2024 - 2025</option>
                         </select>
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Current Semester</label>
                         <select className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm">
                            <option>Fall Semester</option>
                            <option>Spring Semester</option>
                         </select>
                      </div>
                   </div>
                   <div className="pt-2">
                      <label className="flex items-center">
                         <input type="checkbox" className="rounded border-slate-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" defaultChecked />
                         <span className="ml-2 text-sm text-slate-600">Enable Maintenance Mode</span>
                      </label>
                   </div>
                </div>
                <div className="mt-6 flex justify-end">
                   <Button>Save Changes</Button>
                </div>
             </Card>

             <Card title="Data Management">
                <div className="flex items-center justify-between py-2">
                   <div>
                      <p className="font-medium text-slate-800">Clear System Cache</p>
                      <p className="text-xs text-slate-500">Remove temporary files and cached data.</p>
                   </div>
                   <Button variant="outline" className="text-xs">Clear Cache</Button>
                </div>
                <div className="border-t border-slate-100 my-4"></div>
                <div className="flex items-center justify-between py-2">
                   <div>
                      <p className="font-medium text-slate-800">Export All Data</p>
                      <p className="text-xs text-slate-500">Download a full SQL dump of the database.</p>
                   </div>
                   <Button variant="outline" className="text-xs">Export SQL</Button>
                </div>
             </Card>
          </div>
       </div>
    </div>
  );
};
