import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { CreditCard, Landmark, Plus } from 'lucide-react';
import { MOCK_FEES } from '../constants';

export const StudentFees: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Fee Details & Payment</h2>

      {/* Top Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Balance Card */}
         <Card className="flex flex-col justify-between">
           <div>
             <h3 className="text-slate-500 font-medium mb-1">Outstanding Balance</h3>
             <p className="text-4xl font-bold text-slate-900">$1,500.00</p>
           </div>
           
           <div className="mt-6 space-y-4">
              <Button fullWidth>Pay Now</Button>
              <p className="text-xs text-slate-500 text-center">Last Payment: $500.00 on Oct 15, 2023</p>
           </div>
         </Card>
         
         {/* Upcoming Payments List */}
         <Card title="Upcoming Payments" className="lg:col-span-2">
            <div className="space-y-4">
              {MOCK_FEES.filter(f => f.status === 'Pending').length === 0 && (
                <div className="py-4 text-center text-slate-500">No pending payments.</div>
              )}
               {MOCK_FEES.map((fee) => (
                 <div key={fee.id} className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <div>
                      <p className="font-semibold text-slate-800">{fee.description}</p>
                      <p className="text-sm text-slate-500">Due: {fee.date}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 flex items-center gap-4">
                      <span className="font-bold text-slate-800">${fee.amount.toFixed(2)}</span>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        fee.status === 'Paid' ? 'bg-green-100 text-green-700' :
                        fee.status === 'Overdue' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {fee.status}
                      </span>
                    </div>
                 </div>
               ))}
            </div>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Methods */}
        <Card title="Payment Methods">
           <div className="space-y-3">
             <div className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="p-2 bg-blue-50 rounded-md mr-3">
                   <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 text-sm">Saved Cards</p>
                  <p className="text-xs text-slate-500">Visa ending in 1234</p>
                </div>
             </div>
             <div className="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="p-2 bg-indigo-50 rounded-md mr-3">
                   <Landmark className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 text-sm">Bank Account</p>
                </div>
             </div>
             
             <button className="w-full mt-2 py-2 border border-dashed border-slate-300 rounded-lg text-sm text-slate-500 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-colors flex items-center justify-center">
               <Plus className="w-4 h-4 mr-2" />
               Add New Payment Method
             </button>
           </div>
        </Card>

        {/* Full History */}
        <Card title="Payment History" className="lg:col-span-2">
          <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                 <tr>
                   <th className="px-4 py-3">Date</th>
                   <th className="px-4 py-3">Description</th>
                   <th className="px-4 py-3">Amount</th>
                   <th className="px-4 py-3">Status</th>
                   <th className="px-4 py-3 text-right">Action</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {MOCK_FEES.map((fee) => (
                    <tr key={fee.id} className="hover:bg-slate-50">
                       <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{fee.date.split(' - ')[0]}</td>
                       <td className="px-4 py-3 font-medium text-slate-800">{fee.description}</td>
                       <td className="px-4 py-3 text-slate-600">${fee.amount.toFixed(2)}</td>
                       <td className="px-4 py-3">
                         <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                            fee.status === 'Paid' ? 'bg-green-100 text-green-700' :
                            fee.status === 'Overdue' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {fee.status}
                          </span>
                       </td>
                       <td className="px-4 py-3 text-right">
                         <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">View Receipt</button>
                       </td>
                    </tr>
                  ))}
               </tbody>
             </table>
          </div>
        </Card>
      </div>
    </div>
  );
};