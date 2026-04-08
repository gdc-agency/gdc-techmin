import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// auth
const Login = lazy(() => import('@/app/(other)/auth/login/page'));
const Register = lazy(() => import('@/app/(other)/auth/register/page'));
const Logout = lazy(() => import('@/app/(other)/auth/logout/page'));
const ForgotPassword = lazy(() => import('@/app/(other)/auth/forgot-pass/page'));
const LockScreen = lazy(() => import('@/app/(other)/auth/lock-screen/page'));

// dashboard
const Dashboard = lazy(() => import('@/app/(admin)/dashboard/page'));

//apps
const Calendar = lazy(() => import('@/app/(admin)/apps/calendar/page'));
const KanbanBoard = lazy(() => import('@/app/(admin)/apps/kanban/page'));

// pages
const ProfilePages = lazy(() => import('@/app/(admin)/pages/profile/page'));
const InvoiceReport = lazy(() => import('@/app/(admin)/apps/invoices/report/page'));
const InvoiceDetail = lazy(() => import('@/app/(admin)/apps/invoices/[invoiceId]/page'));
const FAQPages = lazy(() => import('@/app/(admin)/pages/faqs/page'));
const PricingPages = lazy(() => import('@/app/(admin)/pages/pricing/page'));
const MaintenancePages = lazy(() => import('@/app/(other)/maintenance/page'));
const StarterPages = lazy(() => import('@/app/(admin)/pages/starter/page'));
const ContactListPages = lazy(() => import('@/app/(admin)/pages/contacts/page'));
const TimelinePages = lazy(() => import('@/app/(admin)/pages/timeline/page'));

// base ui
const Accordions = lazy(() => import('@/app/(admin)/ui/accordions/page'));
const Alerts = lazy(() => import('@/app/(admin)/ui/alerts/page'));
const Avatars = lazy(() => import('@/app/(admin)/ui/avatars/page'));
const Badges = lazy(() => import('@/app/(admin)/ui/badges/page'));
const Breadcrumb = lazy(() => import('@/app/(admin)/ui/breadcrumb/page'));
const Buttons = lazy(() => import('@/app/(admin)/ui/buttons/page'));
const ButtonGroups = lazy(() => import('@/app/(admin)/ui/button-group/page'));
const Cards = lazy(() => import('@/app/(admin)/ui/cards/page'));
const Carousel = lazy(() => import('@/app/(admin)/ui/carousel/page'));
const Collapse = lazy(() => import('@/app/(admin)/ui/collapse/page'));
const Dropdowns = lazy(() => import('@/app/(admin)/ui/dropdowns/page'));
const EmbedVideo = lazy(() => import('@/app/(admin)/ui/embed-video/page'));
const Grid = lazy(() => import('@/app/(admin)/ui/grid/page'));
const Links = lazy(() => import('@/app/(admin)/ui/links/page'));
const ListGroup = lazy(() => import('@/app/(admin)/ui/list-group/page'));
const Modals = lazy(() => import('@/app/(admin)/ui/modals/page'));
const Notifications = lazy(() => import('@/app/(admin)/ui/toasts/page'));
const Offcanvas = lazy(() => import('@/app/(admin)/ui/offcanvas/page'));
const Placeholders = lazy(() => import('@/app/(admin)/ui/placeholders/page'));
const Pagination = lazy(() => import('@/app/(admin)/ui/pagination/page'));
const Popovers = lazy(() => import('@/app/(admin)/ui/popovers/page'));
const Progress = lazy(() => import('@/app/(admin)/ui/progress/page'));
const Spinners = lazy(() => import('@/app/(admin)/ui/spinners/page'));
const Tabs = lazy(() => import('@/app/(admin)/ui/tabs/page'));
const Tooltips = lazy(() => import('@/app/(admin)/ui/tooltips/page'));
const Typography = lazy(() => import('@/app/(admin)/ui/typography/page'));
const Utilities = lazy(() => import('@/app/(admin)/ui/utilities/page'));
const CloseButtons = lazy(() => import('@/app/(admin)/ui/close-buttons/page'));
const Navbars = lazy(() => import('@/app/(admin)/ui/navbar/page'));

// extended ui
const Portlets = lazy(() => import('@/app/(admin)/extended/portlets/page'));
const RangeSlider = lazy(() => import('@/app/(admin)/extended/range-slider/page'));
const Scrollbar = lazy(() => import('@/app/(admin)/extended/scrollbar/page'));

// icons
const RemixIcons = lazy(() => import('@/app/(admin)/icons/remix/page'));
const BootstrapIcons = lazy(() => import('@/app/(admin)/icons/bs/page'));
const MaterialIcons = lazy(() => import('@/app/(admin)/icons/mdi/page'));
const LucideIcons = lazy(() => import('@/app/(admin)/icons/lucide/page'));

// charts
const ApexCharts = lazy(() => import('@/app/(admin)/charts/apex/page'));
const SparklineCharts = lazy(() => import('@/app/(admin)/charts/sparkline/page'));
const ChartJs = lazy(() => import('@/app/(admin)/charts/chartjs/page'));

// forms
const BasicElements = lazy(() => import('@/app/(admin)/forms/basic/page'));
const FormAdvanced = lazy(() => import('@/app/(admin)/forms/advanced/page'));
const Validation = lazy(() => import('@/app/(admin)/forms/validation/page'));
const Wizard = lazy(() => import('@/app/(admin)/forms/wizard/page'));
const FileUploads = lazy(() => import('@/app/(admin)/forms/file-uploads/page'));
const Editors = lazy(() => import('@/app/(admin)/forms/editors/page'));
const ImageCrop = lazy(() => import('@/app/(admin)/forms/image-crop/page'));
const Editable = lazy(() => import('@/app/(admin)/forms/editable/page'));

// tables
const BasicTables = lazy(() => import('@/app/(admin)/tables/basic/page'));
const DataTables = lazy(() => import('@/app/(admin)/tables/data-table/page'));
const ResponsiveTable = lazy(() => import('@/app/(admin)/tables/responsive-table/page'));

// maps
const GoogleMaps = lazy(() => import('@/app/(admin)/maps/google/page'));
const VectorMaps = lazy(() => import('@/app/(admin)/maps/vector/page'));

// error
const Error404 = lazy(() => import('@/app/(other)/(error-pages)/error-404/page'));
const Error404Alt = lazy(() => import('@/app/(admin)/pages/error-404-alt/page'));
const Error500 = lazy(() => import('@/app/(other)/(error-pages)/error-500/page'));
const initialRoutes = [{
  path: '/',
  name: 'root',
  element: <Navigate to="/dashboard" />
}];

// dashboards
const generalRoutes = [{
  path: '/dashboard',
  name: 'Dashboard',
  element: <Dashboard />
}];
const appsRoutes = [{
  path: '/apps/calendar',
  name: 'Calendar',
  element: <Calendar />
}, {
  path: '/apps/kanban',
  name: 'Kanban',
  element: <KanbanBoard />
}, {
  path: '/apps/invoices/report',
  name: 'Invoice',
  element: <InvoiceReport />
}, {
  name: 'Invoice',
  path: '/apps/invoices/:invoiceId',
  element: <InvoiceDetail />
}];

// pages
const customPagesRoutes = [{
  path: '/pages/profile',
  name: 'Profile',
  element: <ProfilePages />
}, {
  path: '/pages/faqs',
  name: 'FAQ',
  element: <FAQPages />
}, {
  path: '/pages/pricing',
  name: 'Pricing',
  element: <PricingPages />
}, {
  path: '/pages/starter',
  name: 'Starter Page',
  element: <StarterPages />
}, {
  path: '/pages/contacts',
  name: 'Contact List',
  element: <ContactListPages />
}, {
  path: '/pages/timeline',
  name: 'Timeline',
  element: <TimelinePages />
}, {
  path: 'pages/error-404-alt',
  name: 'Error - 404-alt',
  element: <Error404Alt />
}];

// ui
const uiRoutes = [{
  path: '/ui/accordions',
  name: 'Accordions',
  element: <Accordions />
}, {
  path: '/ui/alerts',
  name: 'Alerts',
  element: <Alerts />
}, {
  path: '/ui/avatars',
  name: 'Avatars',
  element: <Avatars />
}, {
  path: '/ui/badges',
  name: 'Badges',
  element: <Badges />
}, {
  path: '/ui/breadcrumb',
  name: 'Breadcrumb',
  element: <Breadcrumb />
}, {
  path: '/ui/buttons',
  name: 'Buttons',
  element: <Buttons />
}, {
  path: '/ui/cards',
  name: 'Cards',
  element: <Cards />
}, {
  path: '/ui/carousel',
  name: 'Carousel',
  element: <Carousel />
}, {
  path: '/ui/collapse',
  name: 'Collapse',
  element: <Collapse />
}, {
  path: '/ui/close-buttons',
  name: 'Close Buttons',
  element: <CloseButtons />
}, {
  path: '/ui/button-group',
  name: 'Button Group',
  element: <ButtonGroups />
}, {
  path: '/ui/dropdowns',
  name: 'Dropdowns',
  element: <Dropdowns />
}, {
  path: '/ui/embed-video',
  name: 'Embed Video',
  element: <EmbedVideo />
}, {
  path: '/ui/grid',
  name: 'Grid',
  element: <Grid />
}, {
  path: '/ui/links',
  name: 'Links',
  element: <Links />
}, {
  path: '/ui/list-group',
  name: 'List Group',
  element: <ListGroup />
}, {
  path: '/ui/navbar',
  name: 'NavBars',
  element: <Navbars />
}, {
  path: '/ui/modals',
  name: 'Modals',
  element: <Modals />
}, {
  path: '/ui/toasts',
  name: 'Toasts',
  element: <Notifications />
}, {
  path: '/ui/offcanvas',
  name: 'Offcanvas',
  element: <Offcanvas />
}, {
  path: '/ui/placeholders',
  name: 'Placeholders',
  element: <Placeholders />
}, {
  path: '/ui/pagination',
  name: 'Pagination',
  element: <Pagination />
}, {
  path: '/ui/popovers',
  name: 'Popovers',
  element: <Popovers />
}, {
  path: '/ui/progress',
  name: 'Progress',
  element: <Progress />
}, {
  path: '/ui/spinners',
  name: 'Spinners',
  element: <Spinners />
}, {
  path: '/ui/tabs',
  name: 'Tabs',
  element: <Tabs />
}, {
  path: '/ui/tooltips',
  name: 'Tooltips',
  element: <Tooltips />
}, {
  path: '/ui/typography',
  name: 'Typography',
  element: <Typography />
}, {
  path: '/ui/utilities',
  name: 'Utilities',
  element: <Utilities />
}];
const iconsRoutes = [{
  path: '/icons/lucide',
  name: 'Remix Icons',
  element: <LucideIcons />
}, {
  path: '/icons/remix',
  name: 'Remix Icons',
  element: <RemixIcons />
}, {
  path: '/icons/bs',
  name: 'Bootstrap Icons',
  element: <BootstrapIcons />
}, {
  path: '/icons/mdi',
  name: 'Material Icons',
  element: <MaterialIcons />
}];
const extendedRoutes = [{
  path: '/extended/portlets',
  name: 'Portlets',
  element: <Portlets />
}, {
  path: '/extended/range-slider',
  name: 'Range Slider',
  element: <RangeSlider />
}, {
  path: '/extended/scrollbar',
  name: 'Scrollbar',
  element: <Scrollbar />
}];
const chartsRoutes = [{
  path: '/charts/apex',
  name: 'Apex Charts',
  element: <ApexCharts />
}, {
  path: '/charts/chartjs',
  name: 'ChartJS',
  element: <ChartJs />
}, {
  path: '/charts/sparkline',
  name: 'Sparkline Charts',
  element: <SparklineCharts />
}];
const formsRoutes = [{
  path: '/forms/basic',
  name: 'Basic Elements',
  element: <BasicElements />
}, {
  path: '/forms/advanced',
  name: 'Form Advanced',
  element: <FormAdvanced />
}, {
  path: '/forms/validation',
  name: 'Validation',
  element: <Validation />
}, {
  path: '/forms/wizard',
  name: 'Wizard',
  element: <Wizard />
}, {
  path: '/forms/file-uploads',
  name: 'File Uploads',
  element: <FileUploads />
}, {
  path: '/forms/editors',
  name: 'Editors',
  element: <Editors />
}, {
  path: '/forms/image-crop',
  name: 'Image Crop',
  element: <ImageCrop />
}, {
  path: '/forms/editable',
  name: 'Editable',
  element: <Editable />
}];
const tablesRoutes = [{
  path: '/tables/basic',
  name: 'Basic Tables',
  element: <BasicTables />
}, {
  path: '/tables/data-table',
  name: 'Data Tables',
  element: <DataTables />
}, {
  path: '/tables/responsive-table',
  name: 'Responsive Tables',
  element: <ResponsiveTable />
}];
const mapsRoutes = [{
  path: '/maps/google',
  name: 'Google Maps',
  element: <GoogleMaps />
}, {
  path: '/maps/vector',
  name: 'Vector Maps',
  element: <VectorMaps />
}];

// auth
const authRoutes = [{
  path: '/auth/login',
  name: 'Login',
  element: <Login />
}, {
  path: '/auth/register',
  name: 'Register',
  element: <Register />
}, {
  path: '/auth/logout',
  name: 'Logout',
  element: <Logout />
}, {
  path: '/auth/forgot-password',
  name: 'Forgot Password',
  element: <ForgotPassword />
}, {
  path: '/auth/lock-screen',
  name: 'Lock Screen',
  element: <LockScreen />
}];

// public routes
const otherPublicRoutes = [{
  path: '*',
  name: 'Error - 404',
  element: <Error404 />
}, {
  path: 'pages/error-404',
  name: 'Error - 404',
  element: <Error404 />
}, {
  path: 'pages/error-500',
  name: 'Error - 500',
  element: <Error500 />
}, {
  path: '/maintenance',
  name: 'Maintenance',
  element: <MaintenancePages />
}];
export const appRoutes = [...initialRoutes, ...generalRoutes, ...uiRoutes, ...customPagesRoutes, ...appsRoutes, ...iconsRoutes, ...extendedRoutes, ...chartsRoutes, ...formsRoutes, ...tablesRoutes, ...mapsRoutes];
export const publicRoutes = [...authRoutes, ...otherPublicRoutes];