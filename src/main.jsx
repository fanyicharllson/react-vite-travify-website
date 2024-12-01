import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {  RouterProvider } from 'react-router-dom';
import './index.css';
import router from './router';

// const router = createBrowserRouter([
//   {
//     path: '/', 
//     element: <HomePage/>,
//     errorElement: <NotFound />
//   },
//   {
//     path: '/news',
//     element: <News/>,
//   },
//   {
//     path: '/profiles',
//     element: <Profile/>,
//     children: [
//       {
//         path: '/profiles/:profileId',
//         element: <ProfilesPage/>,
//       }
//     ]
//   },
 
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
