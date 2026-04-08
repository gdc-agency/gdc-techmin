import FallbackLoading from '@/components/FallbackLoading';
import { currentYear, developedBy } from '@/context/constants';
import { Suspense, useEffect } from 'react';
const OtherLayout = ({
  children
}) => {
  useEffect(() => {
    document.body.classList.add('authentication-bg', 'position-relative'), document.body.style.height = '100vh';
    return () => {
      document.body.classList.remove('authentication-bg', 'position-relative'), document.body.style.height = '100vh';
    };
  }, []);
  return <>
      <Suspense fallback={<FallbackLoading />}>{children}</Suspense>

      <footer className="footer footer-alt fw-medium">
        <span className="text-dark-emphasis">{currentYear} © Techmin - Theme by {developedBy}</span>
      </footer>
    </>;
};
export default OtherLayout;