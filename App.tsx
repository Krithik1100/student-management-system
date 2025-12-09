import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GraduationCap, Lock, User } from 'lucide-react';
import { Layout } from './components/Layout';
import { StudentDashboard } from './components/StudentDashboard';
import { StudentProfile } from './components/StudentProfile';
import { StudentAttendance } from './components/StudentAttendance';
import { StudentFees } from './components/StudentFees';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminStudents } from './components/AdminStudents';
import { AdminSettings } from './components/AdminSettings';
import { Button } from './components/Button';
import { login } from './services/authService';
import { User as UserType } from './types';

// Login Component
const LoginScreen = ({ onLogin }: { onLogin: (u: string) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate simple auth check
    if (password === 'admin123' || password === 'student123') {
       onLogin(username);
    } else {
       setError('Invalid credentials (try: student/student123 or admin/admin123)');
       setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
       <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
             <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                   <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-2xl font-bold text-slate-800">Student Portal Login</h1>
                <p className="text-slate-500 text-sm mt-1">Access your university account</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Username or Student ID</label>
                   <div className="relative">
                      <User className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="e.g. student or admin"
                        required
                      />
                   </div>
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                   <div className="relative">
                      <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="••••••••"
                        required
                      />
                   </div>
                </div>

                <div className="flex items-center justify-end">
                   <button type="button" className="text-sm text-blue-600 hover:text-blue-800 font-medium">Forgot Password?</button>
                </div>

                <Button fullWidth type="submit" disabled={loading}>
                   {loading ? 'Logging in...' : 'Login'}
                </Button>
             </form>
             
             <div className="mt-6 text-center text-sm text-slate-500">
                Don't have an account? <button className="text-blue-600 font-medium hover:underline">Register Now</button>
             </div>
          </div>
          <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
             <p className="text-xs text-slate-400">© 2024 University Management System</p>
          </div>
       </div>
    </div>
  );
};

const ProtectedRoute = ({ user, children }: { user: UserType | null, children: React.ReactNode }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppContent = () => {
  const [user, setUser] = useState<UserType | null>(null);
  
  const handleLogin = async (username: string) => {
    const loggedInUser = await login(username);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Routes>
      <Route path="/login" element={!user ? <LoginScreen onLogin={handleLogin} /> : <Navigate to={user.role === 'admin' ? '/admin' : '/dashboard'} replace />} />
      
      {/* Student Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute user={user}>
           <Layout user={user} onLogout={handleLogout}>
              <StudentDashboard />
           </Layout>
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute user={user}>
           <Layout user={user} onLogout={handleLogout}>
              <StudentProfile />
           </Layout>
        </ProtectedRoute>
      } />
      <Route path="/attendance" element={
        <ProtectedRoute user={user}>
           <Layout user={user} onLogout={handleLogout}>
              <StudentAttendance />
           </Layout>
        </ProtectedRoute>
      } />
      <Route path="/fees" element={
        <ProtectedRoute user={user}>
           <Layout user={user} onLogout={handleLogout}>
              <StudentFees />
           </Layout>
        </ProtectedRoute>
      } />

      {/* Admin Routes */}
      <Route path="/admin" element={
        <ProtectedRoute user={user}>
           <Layout user={user} onLogout={handleLogout}>
              <AdminDashboard />
           </Layout>
        </ProtectedRoute>
      } />
      <Route path="/admin/students" element={
        <ProtectedRoute user={user}>
           <Layout user={user} onLogout={handleLogout}>
              <AdminStudents />
           </Layout>
        </ProtectedRoute>
      } />
      <Route path="/admin/settings" element={
        <ProtectedRoute user={user}>
           <Layout user={user} onLogout={handleLogout}>
              <AdminSettings />
           </Layout>
        </ProtectedRoute>
      } />

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
