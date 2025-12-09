export type UserRole = 'student' | 'admin';

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface StudentProfile {
  id: string;
  fullName: string;
  dob: string;
  email: string;
  studentId: string;
  phone: string;
  address: string;
  program: string;
  year: string;
  department: string;
  advisor: string;
  enrollmentStatus: 'Active' | 'Inactive' | 'Graduated';
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

// Admin specific types
export interface StudentSummary {
  id: string;
  name: string;
  program: string;
  year: string;
  status: 'Active' | 'Inactive' | 'Graduated';
  email: string;
}

export interface AttendanceRecord {
  subject: string;
  totalClasses: number;
  attended: number;
}

export interface Absence {
  id: string;
  date: string;
  reason: string;
  type: 'Excused' | 'Unexcused';
}

export interface FeeRecord {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface Notification {
  id: string;
  title: string;
  date: string;
  type: 'info' | 'alert' | 'success';
}

export interface StatCardProps {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
  trend?: string;
}
