import { invoicesData, referralsData } from '@/assets/data/apps';
import { activityData, contactListData, orders, orderStatus, pricingPlans, timelineData, users } from '@/assets/data/other';
import { sleep } from '@/utils/promise';
export const getAllOrders = async () => {
  const data = orders.map(order => {
    const user = users.find(user => user.id === order.userId);
    return {
      ...order,
      user
    };
  });
  await sleep();
  return data;
};
export const getAllContacts = async () => {
  const data = contactListData.map(contact => {
    const user = users.find(user => user.id === contact.userId);
    return {
      ...contact,
      user
    };
  });
  await sleep();
  return data;
};
export const getAllInvoices = async () => {
  const data = invoicesData.map(invoice => {
    const user = users.find(user => user.id === invoice.userId);
    return {
      ...invoice,
      user
    };
  });
  await sleep();
  return data;
};
export const getInvoiceById = async id => {
  const data = invoicesData.find(invoice => invoice.id == id);
  await sleep();
  return data;
};
export const getOrderStatus = async () => {
  await sleep();
  return orderStatus;
};
export const getReferralsData = async () => {
  await sleep();
  return referralsData;
};
export const getActivityData = async () => {
  await sleep();
  return activityData;
};
export const getTimelineData = async () => {
  await sleep();
  return timelineData;
};
export const getAllPricingPlans = async () => {
  await sleep();
  return pricingPlans;
};