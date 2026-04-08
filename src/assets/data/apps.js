import { addOrSubtractDaysFromDate } from '@/utils/date';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import avatar12 from '@/assets/images/users/avatar-12.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import animationImg from '@/assets/images/animation-bg.jpg';
import small1 from '@/assets/images/small/small-1.jpg';
import small2 from '@/assets/images/small/small-2.jpg';
import facebookLogo from '@/assets/images/brands/Facebook-logo.png';
import twitterLogo from '@/assets/images/brands/twitter.png';
import pinterestLogo from '@/assets/images/brands/pinterest.png';
import dribbbleLogo from '@/assets/images/brands/dribbble.png';
import websiteLogo from '@/assets/images/brands/website.webp';
import emailLogo from '@/assets/images/brands/email.png';
export const kanbanSectionsData = [{
  id: '501',
  title: 'Do'
}, {
  id: '502',
  title: 'Review'
}, {
  id: '503',
  title: 'Progress'
}, {
  id: '504',
  title: 'Done'
}];
export const kanbanTasksData = [{
  id: '1001',
  sectionId: '501',
  title: 'iOS App home page',
  image: small1,
  variant: 'warning',
  views: 5,
  share: 18,
  commentsCount: 12,
  members: [avatar1, avatar3, avatar4]
}, {
  id: '1002',
  sectionId: '501',
  title: 'Topnav layout design',
  description: 'Navigation bars design best practices involve focusing on functionality.',
  variant: 'pink',
  views: 2,
  share: 24,
  commentsCount: 24,
  progress: 50,
  members: [avatar12, avatar1, avatar10]
}, {
  id: '1003',
  sectionId: '501',
  title: 'Invite user to a project',
  description: 'To collaborate with users in a repository that belongs to your personal account',
  variant: 'purple',
  views: 1,
  share: 8,
  commentsCount: 13,
  progress: 25,
  members: [avatar2, avatar4]
}, {
  id: '1004',
  sectionId: '502',
  title: 'Kanban board design',
  description: 'A basic Kanban board is divided into three columns',
  variant: 'danger',
  views: 3,
  share: 21,
  commentsCount: 22,
  progress: 80,
  members: [avatar7, avatar3, avatar4]
}, {
  id: '1005',
  sectionId: '502',
  title: 'Code the script',
  description: 'Scripting is code used to automate processes.',
  variant: 'pink',
  views: 6,
  share: 12,
  commentsCount: 14,
  progress: 60,
  members: [avatar6, avatar8, avatar10]
}, {
  id: '1006',
  sectionId: '502',
  title: 'Brand Logo Design',
  description: 'Making your Content logo is easy with BrandCrowd Logo Maker.',
  variant: 'info',
  views: 1,
  share: 21,
  commentsCount: 22,
  progress: 30,
  members: [avatar7]
}, {
  id: '1007',
  sectionId: '502',
  title: 'Improve Animation Loader',
  description: '',
  image: animationImg,
  variant: 'warning',
  views: 1,
  share: 8,
  commentsCount: 13,
  members: [avatar6, avatar8]
}, {
  id: '1008',
  sectionId: '503',
  title: 'Usability Testing',
  description: 'Evaluating a product or service by testing it with representative users',
  variant: 'success',
  progress: 45,
  views: 4,
  share: 10,
  commentsCount: 20,
  members: [avatar2, avatar4]
}, {
  id: '1009',
  sectionId: '503',
  title: 'Research',
  description: 'The process of identifying topics to make content about.',
  variant: 'danger',
  progress: 84,
  views: 2,
  share: 7,
  commentsCount: 12,
  members: [avatar6, avatar8]
}, {
  id: '1010',
  sectionId: '504',
  title: 'Wireframes',
  image: small2,
  variant: 'warning',
  views: 25,
  share: 6,
  commentsCount: 12,
  members: [avatar6, avatar8, avatar10]
}];
export const invoicesData = [{
  id: '349122',
  userId: '101',
  product: 'Dashboard',
  date: addOrSubtractDaysFromDate(2),
  amount: 111.0,
  vendor: 'Company Lac.',
  status: 'Paid',
  review: {
    rate: 4.0,
    vote: '199 Votes'
  }
}, {
  id: '215212',
  userId: '102',
  product: 'Dashboard UI',
  date: addOrSubtractDaysFromDate(32),
  amount: 29.0,
  vendor: 'Design',
  status: 'Unpaid',
  review: {
    rate: 4.8,
    vote: '1k Votes'
  }
}, {
  id: '215402',
  userId: '103',
  product: 'Techmin UL Kit',
  date: addOrSubtractDaysFromDate(68),
  amount: 22.0,
  vendor: '3D Artist',
  status: 'Paid',
  review: {
    rate: 3.8,
    vote: '259 Votes'
  }
}, {
  id: '223294',
  userId: '104',
  product: 'Glassmorphisam UL kit',
  date: addOrSubtractDaysFromDate(75),
  amount: 86.0,
  vendor: 'Techzaa',
  status: 'Unpaid',
  review: {
    rate: 4.0,
    vote: '4k Votes'
  }
}, {
  id: '224698',
  userId: '105',
  product: 'Lugda UL Kit',
  date: addOrSubtractDaysFromDate(56),
  amount: 32.0,
  vendor: 'IP Themes',
  status: 'Paid',
  review: {
    rate: 3.7,
    vote: '220 Votes'
  }
}, {
  id: '21756',
  userId: '106',
  product: 'Dashboard UI',
  date: addOrSubtractDaysFromDate(45),
  amount: 98.0,
  vendor: 'Techzaa',
  status: 'Paid',
  review: {
    rate: 4.8,
    vote: '10K Votes'
  }
}, {
  id: '568965',
  userId: '107',
  product: 'Theme UI',
  date: addOrSubtractDaysFromDate(85),
  amount: 25.0,
  vendor: 'Craft Inc.',
  status: 'Unpaid',
  review: {
    rate: 3.6,
    vote: '1.2K Votes'
  }
}, {
  id: '926082',
  userId: '108',
  product: 'Megzi UI kit',
  date: addOrSubtractDaysFromDate(96),
  amount: 55.0,
  vendor: '3D Artist',
  status: 'Paid',
  review: {
    rate: 3.0,
    vote: '120 Votes'
  }
}, {
  id: '120963',
  userId: '109',
  product: 'Zarko Dashboard UI',
  date: addOrSubtractDaysFromDate(140),
  amount: 119.0,
  vendor: 'Craft Inc.',
  status: 'Paid',
  review: {
    rate: 4.2,
    vote: '3.9k Votes'
  }
}];
export const referralsData = [{
  image: facebookLogo,
  name: 'Facebook',
  view: '38,512',
  sales: 608,
  conversion: '11.08%',
  total: 10000.0,
  rate: 4.9
}, {
  image: twitterLogo,
  name: 'Twitter',
  view: '32,192',
  sales: 436,
  conversion: '9.12%',
  total: 1000.0,
  rate: 3.0
}, {
  image: pinterestLogo,
  name: 'Pinterest',
  view: '48,242',
  sales: 496,
  conversion: '9.14%',
  total: 1200.0,
  rate: 3.2
}, {
  image: dribbbleLogo,
  name: 'Dribble',
  view: '16,518',
  sales: 189,
  conversion: '4.56%',
  total: 800.12,
  rate: 1.8
}, {
  image: websiteLogo,
  name: 'Website',
  view: '26,141',
  sales: 592,
  conversion: '6.5%',
  total: 688.14,
  rate: 2.2
}, {
  image: emailLogo,
  name: 'Email',
  view: '86,120',
  sales: 1006,
  conversion: '12.89%',
  total: 15000.86,
  rate: 5.0
}];