export const getProjectStatusVariant = status => {
  let statusVariant = 'success';
  if (status === 'Pending') statusVariant = 'danger';else if (status === 'Work in Progress') statusVariant = 'info';else if (status === 'Coming soon') statusVariant = 'warning';
  return statusVariant;
};