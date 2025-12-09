import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  CalendarCheck, 
  CreditCard, 
  LogOut, 
  Menu, 
  X,
  School,
  Settings,
  Bell,
  Search
} from 'lucide-react';
import { User as UserType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: UserType | null;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, user, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navigation = user?.role === 'admin' ? [
     { name: 'Admin Dashboard', to: '/admin', icon: LayoutDashboard },
     { name: 'Student List', to: '/admin/students', icon: User },
     { name: 'Settings', to: '/admin/settings', icon: Settings },
  ] : [
    { name: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
    { name: 'My Details', to: '/profile', icon: User },
    { name: 'Attendance', to: '/attendance', icon: CalendarCheck },
    { name: 'Fees & Payments', to: '/fees', icon: CreditCard },
  ];

  const getPageTitle = () => {
    const currentItem = navigation.find(item => item.to === location.pathname);
    return currentItem ? currentItem.name : 'UniPortal';
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-slate-100">
            <School className="w-8 h-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-slate-800">UniPortal</span>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => `
                  flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <item.icon className={`w-5 h-5 mr-3 ${location.pathname === item.to ? 'text-blue-600' : 'text-slate-400'}`} />
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-slate-100">
            <button 
              onClick={onLogout}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-slate-600 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8">
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden lg:block">
            <h1 className="text-xl font-semibold text-slate-800">{getPageTitle()}</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
               <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
               <input 
                 type="text" 
                 placeholder="Search..." 
                 className="pl-9 pr-4 py-2 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
               />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center pl-4 border-l border-slate-200">
               <div className="text-right mr-3 hidden sm:block">
                 <p className="text-sm font-medium text-slate-700">{user?.name}</p>
                 <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
               </div>
               <img 
                 src={user?.avatarUrl || "https://picsum.photos/200"} 
                 alt="User" 
                 className="w-8 h-8 rounded-full border border-slate-200" 
               />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};