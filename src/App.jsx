import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import LandingPageLayout from './layout/LandingPageLayout'
import Home from './routes/Home'
// import AboutUs from './routes/AboutUs'
import './style/Home.css'
import Market from './routes/Market'
import Dashboard from './routes/Dashboard'
import InvestMarket from './routes/InvestMarket'
import BorrowMarket from './routes/BorrowMarket'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Market',
        element: <Market />,
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
      {
        path: '/InvestMarket',
        element: <InvestMarket />,
      },
      {
        path: '/BorrowMarket',
        element: <BorrowMarket />,
      },
      // {
      //   path: '/AboutUs',
      //   element: <AboutUs />,
      // },
      // {
      //   path: '/FAQs',
      //   element: <FAQs />,
      // },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
