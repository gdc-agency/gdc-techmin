import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from '@/context/useAuthContext';
import { appRoutes, publicRoutes } from '@/routes/index';
import AdminLayout from '@/layouts/AdminLayout';
import OtherLayout from '@/layouts/OtherLayout';
const AppRouter = props => {
  const {
    isAuthenticated
  } = useAuthContext();
  return <Routes>
      {publicRoutes.map((route, idx) => <Route key={idx + route.name} path={route.path} element={<OtherLayout {...props}>{route.element}</OtherLayout>} />)}

      {(appRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={isAuthenticated ? <AdminLayout {...props}>{route.element}</AdminLayout> : <Navigate to={{
      pathname: '/auth/login',
      search: 'redirectTo=' + route.path
    }} />} />)}
    </Routes>;
};
export default AppRouter;