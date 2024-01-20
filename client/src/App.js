import Header from './components/Header'
import MainFooter from './components/MainFooter'
import About from './pages/About'
import Home from './pages/Home'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <MainFooter />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])
function App() {
  return (
    <div className=''>
      <div className='font-bodyFont'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
