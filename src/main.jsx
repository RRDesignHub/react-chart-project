import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Nav from './components/navBar/navBar';
import Users from './components/Users/Users';
import LChart from './components/CHart/LineChart/lineChart';
import BChart from './components/CHart/BarChart/barChart';
import UDetails from './components/UDetails/UDetails';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav ></Nav>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UDetails></UDetails>
      },
      {
        path: '/lChart',
        element: <LChart></LChart>
      },
      {
        path: '/bChart',
        element: <BChart></BChart>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
