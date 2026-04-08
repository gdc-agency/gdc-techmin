import { AuthProvider } from '@/context/useAuthContext';
import { LayoutProvider } from '@/context/useLayoutContext';
import { NotificationProvider } from '@/context/useNotificationContext';
import { TitleProvider } from '@/context/useTitleContext';
import { HelmetProvider } from 'react-helmet-async';
const AppProvidersWrapper = ({
  children
}) => {
  return <HelmetProvider>
      <AuthProvider>
        <LayoutProvider>
          <TitleProvider>
            <NotificationProvider>{children}</NotificationProvider>
          </TitleProvider>
        </LayoutProvider>
      </AuthProvider>
    </HelmetProvider>;
};
export default AppProvidersWrapper;