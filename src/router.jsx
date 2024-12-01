import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/service',
    element: <NotFoundPage />,
  },
  {
    path: '/booknow',
    element: <NotFoundPage />,
  },
  {
    path: '/news',
    element: <NotFoundPage />,
  },
  {
    path: '/contact',
    element: <NotFoundPage />,
  },
  {
    path: '/about',
    element: <NotFoundPage />,
  },
]);

export default router;

// children: [
//   { path: '', element: <HomePage /> },
//   { path: 'service', element: <ServicePage /> },
//   { path: 'booknow', element: <BookNow /> },
//   { path: 'news', element: <News /> },
//   { path: 'contact', element: <Contact /> },
//   { path: 'about', element: <AboutPage /> },
// ],
