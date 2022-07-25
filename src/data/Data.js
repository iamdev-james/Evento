import { MdSettings, MdDashboard, MdEventAvailable } from 'react-icons/md';
import { BsBoxSeam } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa'
import { MdOutlineSupervisorAccount } from 'react-icons/md';


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <MdDashboard />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'Events',
        icon: <MdEventAvailable />,
      },
      {
        name: 'Settings',
        icon: <MdSettings />,
      },
      {
        name: 'Profile',
        icon: <FaUser />,
      },
    ],
  }
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '3',
    title: 'Upcoming Events',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB'
  },
  {
    icon: <BsBoxSeam />,
    amount: '0',
    title: 'Outlines Created',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)'
  }
];