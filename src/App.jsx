import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './layout/LandingPageLayout'
import Home from './routes/Home'
// import AboutUs from './routes/AboutUs'
import './style/Home.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/AboutUs',
      //   element: <AboutUs />,
      // },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
