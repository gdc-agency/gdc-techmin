import { useTitle } from '@/context/useTitleContext';
import { useEffect } from 'react';
import { DEFAULT_PAGE_TITLE } from '@/context/constants';
import { Helmet } from 'react-helmet-async';
const PageTitle = ({
  title
}) => {
  const defaultTitle = DEFAULT_PAGE_TITLE;
  const {
    setTitle
  } = useTitle();
  useEffect(() => {
    setTitle(title);
  }, [setTitle]);
  return <Helmet>
      <title>{title ? `${title} | Techmin React- Bootstrap 5 Admin & Dashboard Template` : defaultTitle}</title>
    </Helmet>;
};
export default PageTitle;