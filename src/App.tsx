import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css"
import MainLayout from "./layout/MainLayout";
import Account1 from './pages/Account1';
import Account2 from './pages/Account2';
import Account3 from './pages/Account3';
import Account4 from './pages/Account4';
import Account5 from './pages/Account5';
import Account6 from './pages/Account6';

// Router yaratish
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: "/", // Bosh sahifa
        element: <Account1 />
      },
      {
        path: '/1',
        element: <Account2 />
      },
      {
        path: '/2',
        element: <Account3 />
      },
      {
        path: '/3',
        element: <Account4 />
      },
      {
        path: '/4',
        element: <Account5 />
      },
      {
        path: '/5',
        element: <Account6 />
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
