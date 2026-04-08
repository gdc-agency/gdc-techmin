import { addOrSubtractDaysFromDate, addOrSubtractMinutesFromDate } from '@/utils/date';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import avatar12 from '@/assets/images/users/avatar-12.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar11 from '@/assets/images/users/avatar-11.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import smallImg1 from '@/assets/images/small/small-1.jpg';
import smallImg2 from '@/assets/images/small/small-2.jpg';
import smallImg3 from '@/assets/images/small/small-3.jpg';
import smallImg4 from '@/assets/images/small/small-4.jpg';
import smallImg5 from '@/assets/images/small/small-5.jpg';
import smallImg6 from '@/assets/images/small/small-6.jpg';
export const users = [{
  id: '101',
  name: 'Dana Graves',
  avatar: avatar9,
  location: 'America'
}, {
  id: '102',
  name: 'Floyd Smith',
  avatar: avatar3,
  location: 'Russia'
}, {
  id: '103',
  name: 'Fernanda Azevedo',
  avatar: avatar6,
  location: 'Brazil'
}, {
  id: '104',
  name: 'Martine Tollmache',
  avatar: avatar4,
  location: 'Los Angeles'
}, {
  id: '105',
  name: 'Freja Sjöberg',
  avatar: avatar11,
  location: 'Miami'
}, {
  id: '106',
  name: 'Daniel J. Heim',
  avatar: avatar7,
  location: 'Indianapolis'
}, {
  id: '107',
  name: 'Sandra Fraser',
  avatar: avatar5,
  location: 'Stlouis'
}, {
  id: '108',
  name: 'Rebecca Wheeler',
  avatar: avatar10,
  location: 'Stlouis'
}, {
  id: '109',
  name: 'James Royal',
  avatar: avatar12,
  location: 'Stlouis'
}];
export const orders = [{
  id: '201',
  userId: '101',
  price: 98.59,
  requestedBy: 'Wade Warren',
  status: 'Pending Approval',
  orderId: 1562792771583
}, {
  id: '202',
  userId: '102',
  price: 32.59,
  requestedBy: 'Esther Howard',
  status: 'Cancelled Requested',
  orderId: 1562792772493
}, {
  id: '203',
  userId: '103',
  price: 18.24,
  requestedBy: 'Brooklyn...',
  status: 'Approved',
  orderId: 1562792771583
}, {
  id: '204',
  userId: '104',
  price: 42.24,
  requestedBy: 'Arlene Mccoy',
  status: 'Pending Approval',
  orderId: 1562792780452
}, {
  id: '205',
  userId: '105',
  price: 113.39,
  requestedBy: 'Jerome Bell',
  status: 'Cancelled Requested',
  orderId: 562792776427
}, {
  id: '206',
  userId: '106',
  price: 10.39,
  requestedBy: 'Courtney Henry',
  status: 'Approved',
  orderId: 1562792781478
}, {
  id: '207',
  userId: '107',
  price: 95.24,
  requestedBy: 'Guy Hawkins',
  status: 'Cancelled Requested',
  orderId: 1562792779615
}];
export const orderStatus = [{
  icon: {
    icon: 'mdi:upload',
    color: 'info'
  },
  title: 'You sold an item',
  description: 'Paul Burgess just purchased “Hyper - Admin Dashboard”!',
  time: addOrSubtractMinutesFromDate(5)
}, {
  icon: {
    icon: 'mdi:airplane',
    color: 'primary'
  },
  title: 'Product on the Bootstrap Market',
  description: 'Dave Gamache added Admin Dashboard',
  time: addOrSubtractMinutesFromDate(30)
}, {
  icon: {
    icon: 'mdi:microphone',
    color: 'info'
  },
  title: 'Robert Delaney',
  description: 'Send you message “Are you there?”',
  time: addOrSubtractMinutesFromDate(120)
}, {
  icon: {
    icon: 'mdi:upload',
    color: 'primary'
  },
  title: 'Audrey Tobey',
  description: 'Uploaded a photo “Error.jpg”',
  time: addOrSubtractMinutesFromDate(840)
}, {
  icon: {
    icon: 'mdi:upload',
    color: 'info'
  },
  title: 'You sold an item',
  description: 'Paul Burgess just purchased “Hyper - Admin Dashboard”!',
  time: addOrSubtractMinutesFromDate(960)
}, {
  icon: {
    icon: 'mdi:airplane',
    color: 'primary'
  },
  title: 'Product on the Bootstrap Market',
  description: 'Dave Gamache added Admin Dashboard',
  time: addOrSubtractMinutesFromDate(960)
}, {
  icon: {
    icon: 'mdi:microphone',
    color: 'info'
  },
  title: 'Robert Delaney',
  description: 'Send you message “Are you there?”',
  time: addOrSubtractDaysFromDate(2)
}];
export const contactListData = [{
  id: '301',
  userId: '101',
  image: smallImg1,
  position: 'HVACR technician',
  social: {
    follower: 8340,
    following: 2340,
    post: 6230
  }
}, {
  id: '302',
  userId: '102',
  image: smallImg2,
  position: 'Electronic data processor',
  social: {
    follower: 4230,
    following: 1450,
    post: 3640
  }
}, {
  id: '303',
  userId: '103',
  image: smallImg3,
  position: 'Commercial and industrial designer',
  social: {
    follower: 4200,
    following: 9400,
    post: 2700
  }
}, {
  id: '304',
  userId: '104',
  image: smallImg4,
  position: 'Printing machine operator',
  social: {
    follower: 6470,
    following: 5370,
    post: 9340
  }
}, {
  id: '305',
  userId: '105',
  image: smallImg5,
  position: 'Administrative assistant',
  social: {
    follower: 3980,
    following: 7150,
    post: 8240
  }
}, {
  id: '306',
  userId: '106',
  image: smallImg6,
  position: 'Systems software engineer',
  social: {
    follower: 2770,
    following: 8350,
    post: 5600
  }
}];
export const activityData = [{
  name: 'John Doe',
  title: 'Uploaded a photo',
  images: [smallImg3, smallImg4],
  time: addOrSubtractMinutesFromDate(5)
}, {
  name: 'Lorem',
  title: 'commented your post',
  description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."',
  time: addOrSubtractMinutesFromDate(30)
}, {
  name: 'Jessi',
  title: 'attended a meeting with John Doe',
  description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."',
  time: addOrSubtractMinutesFromDate(59)
}, {
  name: 'John Doe',
  title: 'Uploaded 2 new photos',
  images: [smallImg2, smallImg1],
  time: addOrSubtractMinutesFromDate(5)
}, {
  name: 'Lorem',
  title: 'commented your post',
  description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."',
  time: addOrSubtractMinutesFromDate(30)
}, {
  name: 'Jessi',
  title: 'attended a meeting with John Doe',
  description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."',
  time: addOrSubtractMinutesFromDate(59)
}];
export const projectData = [{
  name: 'Techmin Admin',
  startDate: addOrSubtractDaysFromDate(1, true),
  dueDate: addOrSubtractDaysFromDate(3, true),
  status: 'Work in Progress'
}, {
  name: 'Techmin Frontend',
  startDate: addOrSubtractDaysFromDate(5, true),
  dueDate: addOrSubtractDaysFromDate(9, true),
  status: 'Pending'
}, {
  name: 'Techmin Admin',
  startDate: addOrSubtractDaysFromDate(12, true),
  dueDate: addOrSubtractDaysFromDate(17, true),
  status: 'Done'
}, {
  name: 'Techmin Frontend',
  startDate: addOrSubtractDaysFromDate(21, true),
  dueDate: addOrSubtractDaysFromDate(28, true),
  status: 'Work in Progress'
}, {
  name: 'Techmin Admin',
  startDate: addOrSubtractDaysFromDate(36, true),
  dueDate: addOrSubtractDaysFromDate(43, true),
  status: 'Coming soon'
}];
export const timelineData = {
  Today: [{
    date: '1 hour ago',
    time: '08:25 am',
    text: 'Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?'
  }, {
    date: '2 hours ago',
    time: '08:25 am',
    text: 'consectetur adipisicing elit. Iusto, optio, dolorum John deon provident rerum aut hic quasi placeat iure tempora laudantium',
    variant: 'success'
  }, {
    date: '10 hours ago',
    time: '08:25 am',
    text: '3 new photo Uploaded on facebook fan page',
    images: [smallImg1, smallImg2, smallImg3],
    variant: 'primary'
  }, {
    date: '14 hours ago',
    time: '08:25 am',
    text: 'Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding to setup a new show room.',
    variant: 'purple'
  }, {
    date: '19 hours ago',
    time: '08:25 am',
    text: 'Jonatha Smith added new milestone crishtianLorem ipsum dolor sit amet consiquest dio'
  }],
  Yesterday: [{
    date: '07 January 2018',
    time: '08:25 am',
    text: 'Montly Regular Medical check up at Greenland Hospital by the doctor Johm meon',
    variant: 'warning'
  }, {
    date: '07 January 2018',
    time: '08:25 am',
    text: 'Download the new updates of Valonic admin dashboard',
    variant: 'primary'
  }, {
    date: '07 January 2018',
    time: '08:25 am',
    text: 'Jonatha Smith added new milestone crishtianLorem ipsum dolor sit amet consiquest dio',
    variant: 'success'
  }],
  LastMonth: [{
    date: '31 December 2015',
    time: '08:25 am',
    text: 'Download the new updates of Velonic admin dashboard'
  }, {
    date: '16 Decembar 2015',
    time: '08:25 am',
    text: 'Jonatha Smith added new milestone prankLorem ipsum dolor sit amet consiquest dio',
    variant: 'danger'
  }]
};
export const pricingPlans = [{
  name: 'Professional Pack',
  icon: {
    icon: 'mdi:account-multiple-outline'
  },
  price: 9,
  description: 'To discover our products and its features',
  features: [{
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '10 GB Storage'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '500 GB Bandwidth'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'No Domain'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '1 User'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'Email Support'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '24x7 Support'
  }, {
    icon: {
      icon: 'mdi:sticker-remove-outline',
      color: 'danger'
    },
    name: 'Sharing permission'
  }, {
    icon: {
      icon: 'mdi:sticker-remove-outline',
      color: 'danger'
    },
    name: 'Admin Tools'
  }, {
    icon: {
      icon: 'mdi:sticker-remove-outline',
      color: 'danger'
    },
    name: 'Reporting and analytic'
  }, {
    icon: {
      icon: 'mdi:sticker-remove-outline',
      color: 'danger'
    },
    name: 'Account Manager'
  }],
  variant: 'info'
}, {
  name: 'Business Pack',
  icon: {
    icon: 'mdi:arch'
  },
  price: 19,
  description: 'The best option for individual notetakers',
  features: [{
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '10 GB Storage'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '500 GB Bandwidth'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'No Domain'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '1 User'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'Email Support'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '24x7 Support'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'Sharing permission'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'Admin Tools'
  }, {
    icon: {
      icon: 'mdi:sticker-remove-outline',
      color: 'danger'
    },
    name: 'Reporting and analytic'
  }, {
    icon: {
      icon: 'mdi:sticker-remove-outline',
      color: 'danger'
    },
    name: 'Account Manager'
  }],
  variant: 'danger'
}, {
  name: 'Enterprise Pack',
  icon: {
    icon: 'mdi:black-mesa'
  },
  price: 29,
  description: 'Best suited for larger notetakers',
  features: [{
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '10 GB Storage'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '500 GB Bandwidth'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'No Domain'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '1 User'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'Email Support'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: '24x7 Support'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'Sharing permission'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'Admin Tools'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'Reporting and analytic'
  }, {
    icon: {
      icon: 'mdi:sticker-check-outline'
    },
    name: 'Account Manager'
  }],
  variant: 'info'
}];