import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { Root } from './Pages/Root/Root'
import { Account } from './Pages/Account/Account'
import { Home } from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)
  // will always be true until Account page is created:
  const [currentUser, changeUser] = useState(true)

  const routes = [
    {
      path: "/",
      element: <Root />,
      id: 'root',
      children: [
        {
          index: true,
          element: currentUser ? <Navigate to='/home' /> : <Navigate to='/account' />
        },
        {
          path: "account",
          element: <Account />
        },
        {
          path: "home",
          element: <Home />,
          children: [
            // LEFT OFF HERE:
            // create and insert NbaPage, etc... into here
          ]
        }
      ]
    }
  ]
  const router = createBrowserRouter(routes)


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
