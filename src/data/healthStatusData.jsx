import React from 'react';
import { Bone } from 'lucide-react'; // Cleaned up: only using Bone
import CustomHeartIcon from '../components/icons/CustomHeartIcon';
import CustomTeethIcon from '../components/icons/CustomTeethIcon';

export const healthStatusData = [
  {
    icon: <CustomHeartIcon />,
    label: 'Lungs',
    date: '26 Okt 2021',
    status: 80,
    color: '#9B0000'
  },
  {
    icon: <CustomTeethIcon />,
    label: 'Teeth',
    date: '26 Okt 2021',
    status: 80,
    color: '#7FFFD4'
  },
  {
    label: 'Bone',
    icon: <Bone size={40} />,
    date: '26 Okt 2021',
    status: 60,
    color: '#D2691E'
  },
];
