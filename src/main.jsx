import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserDetails from './components/UserDetails.jsx'
import Followers from './components/Followers.jsx'
import Following from './components/Following.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/userdetails/:username',
    element: <UserDetails />
  },
  {
    path: '/userdetails/:username/:followers',
    element: <Followers />
  },
  {
    path: '/userdetails/:username/:myfollowing',
    element: <Following />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
