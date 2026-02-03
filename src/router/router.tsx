import { createBrowserRouter } from 'react-router-dom';

import { 
  Root, 
  Home,
  NotFound,
} from '../routes';
import Layout from '@/components/layouts/Layout';
import WhoWeAre from '@/routes/corporativeContent/WhoWeAre';
import Pricing from '@/routes/corporativeContent/Pricing';
import Faqs from '@/routes/corporativeContent/Faqs';
import '../sass/index.scss';


const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: '*',
            loader() {
              throw new Response(null, { status: 404, statusText: 'Not found' })
            }
          }
        ]
      }
    ]
  },
  {
    path: '',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'que-es-kredi',
        element: <WhoWeAre />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'faqs',
        element: <Faqs />,
      },
      {
        path: '*',
        loader() {
          throw new Response(null, { status: 404, statusText: 'Not found' })
        }
      }
    ]
  }
];

const Router = createBrowserRouter(routes);

export default Router;
