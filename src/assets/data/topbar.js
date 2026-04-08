import germanyFlag from '@/assets/images/flags/germany.jpg';
import italyFlag from '@/assets/images/flags/italy.jpg';
import spainFlag from '@/assets/images/flags/spain.jpg';
import russiaFlag from '@/assets/images/flags/russia.jpg';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import { addOrSubtractDaysFromDate, addOrSubtractMinutesFromDate } from '@/utils/date';
export const languagesData = [{
  name: 'German',
  flag: germanyFlag
}, {
  name: 'Italian',
  flag: italyFlag
}, {
  name: 'Spanish',
  flag: spainFlag
}, {
  name: 'Russian',
  flag: russiaFlag
}];
export const messages = [{
  name: 'Cristina Pride',
  avatar: avatar1,
  description: 'Hi, How are you? What about our next meeting',
  createdAt: addOrSubtractDaysFromDate(1)
}, {
  name: 'Sam Garret',
  avatar: avatar2,
  description: 'Yeah everything is fine',
  createdAt: addOrSubtractDaysFromDate(2)
}, {
  name: 'Karen Robinson',
  avatar: avatar3,
  description: "Wow that's great",
  createdAt: addOrSubtractDaysFromDate(2)
}, {
  name: 'Sherry Marshall',
  avatar: avatar4,
  description: 'Hi, How are you? What about our next meeting',
  createdAt: addOrSubtractDaysFromDate(3)
}, {
  name: 'Shawn Millard',
  avatar: avatar5,
  description: 'Yeah everything is fine',
  createdAt: addOrSubtractDaysFromDate(4)
}];
export const notifications = [{
  title: 'Caleb Flakelar commented on Admin',
  time: addOrSubtractMinutesFromDate(1),
  icon: {
    icon: 'mdi:account'
  },
  variant: 'primary'
}, {
  title: 'New user registered.',
  time: addOrSubtractMinutesFromDate(300),
  icon: {
    icon: 'mdi:account-plus'
  },
  variant: 'warning'
}, {
  title: 'Carlos Crouch liked',
  time: addOrSubtractDaysFromDate(3),
  icon: {
    icon: 'mdi:heart'
  },
  variant: 'danger'
}, {
  title: 'Caleb Flakelar commented on Admi',
  time: addOrSubtractDaysFromDate(4),
  icon: {
    icon: 'mdi:account-box'
  },
  variant: 'pink'
}, {
  title: 'New user registered.',
  time: addOrSubtractDaysFromDate(7),
  icon: {
    icon: 'mdi:account-plus'
  },
  variant: 'purple'
}, {
  title: 'Carlos Crouch liked Admin.',
  time: addOrSubtractDaysFromDate(8),
  icon: {
    icon: 'mdi:account-plus'
  },
  variant: 'success'
}];