import { LayoutGrid, CalendarDays, ArrowUpDown, SquareActivity, MessageCircleMore, Phone, Settings, BriefcaseMedical } from 'lucide-react';

export const mainLinks = [
  { label: 'Dashboard', icon: <LayoutGrid size={18} fill='#1f349c' /> },
  { label: 'History', icon: <ArrowUpDown size={18} /> },
  { label: 'Calendar', icon: <CalendarDays size={18} /> },
  { label: 'Appointments', icon: <BriefcaseMedical size={18} /> },
  { label: 'Statistics', icon: <SquareActivity size={18} /> },
];

export const bottomLinks = [
  { label: 'Chat', icon: <MessageCircleMore size={18} /> },
  { label: 'Support', icon: <Phone size={18} /> },
];


export const settingLink = { label: 'Setting', icon: <Settings size={18} /> };