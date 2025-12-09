import { StudentProfile, AttendanceRecord, Absence, FeeRecord, Notification, User } from './types';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'student',
    name: 'Alex Chen',
    role: 'student',
    avatarUrl: 'https://picsum.photos/200'
  },
  {
    id: '2',
    username: 'admin',
    name: 'System Admin',
    role: 'admin',
    avatarUrl: 'https://picsum.photos/200'
  }
];

export const MOCK_STUDENT_PROFILE: StudentProfile = {
  id: '1',
  fullName: 'Alex Chen',
  dob: 'May 15, 2002',
  email: 'alex.chen@university.edu',
  studentId: '202310456',
  phone: '+1 (555) 123-4567',
  address: '123 University Ave, Apt 4B, Cityville, ST 12345',
  program: 'Bachelor of Science in Computer Science',
  year: '2nd Year',
  department: 'School of Computing',
  advisor: 'Prof. Sarah Lee',
  enrollmentStatus: 'Active',
  emergencyContact: {
    name: 'Maria Chen',
    relationship: 'Mother',
    phone: '+1 (555) 987-6543'
  }
};

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
  { subject: 'Mathematics', totalClasses: 30, attended: 28 },
  { subject: 'Physics', totalClasses: 25, attended: 20 },
  { subject: 'Chemistry', totalClasses: 25, attended: 22 },
  { subject: 'Computer Science', totalClasses: 20, attended: 19 },
  { subject: 'English', totalClasses: 20, attended: 15 },
];

export const MOCK_ABSENCES: Absence[] = [
  { id: '1', date: 'Oct 24, 2024', reason: 'Sick Leave', type: 'Excused' },
  { id: '2', date: 'Oct 18, 2024', reason: 'Personal', type: 'Unexcused' },
  { id: '3', date: 'Oct 10, 2024', reason: 'Medical Appointment', type: 'Excused' },
  { id: '4', date: 'Sep 28, 2024', reason: 'Unknown', type: 'Unexcused' },
];

export const MOCK_FEES: FeeRecord[] = [
  { id: '1', date: 'Nov 01, 2023', description: 'Tuition Fee - Semester 1', amount: 1000.00, status: 'Paid' },
  { id: '2', date: 'Dec 01, 2023', description: 'Hostel Fee - Semester 2', amount: 500.00, status: 'Paid' },
  { id: '3', date: 'Dec 01, 2023', description: 'Hostel Fee', amount: 500.00, status: 'Pending' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: '1', title: 'Midterm Exam Schedule Released', date: 'Oct 26, 2024', type: 'info' },
  { id: '2', title: 'Fee Payment Reminder', date: 'Oct 25, 2024', type: 'alert' },
  { id: '3', title: 'Campus Maintenance Notice', date: 'Oct 20, 2024', type: 'info' },
];