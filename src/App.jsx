import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Root } from './Pages/Root/Root'
import { Account } from './Pages/Account/Account'
import { Home } from './Pages/Home/Home'
import { NbaPage } from './Pages/NbaPage/NbaPage'
import { NflPage } from './Pages/NflPage/NflPage'



function App() {
  const [count, setCount] = useState(0)
  // will always be true until Account page is created:
  const [currentUser, changeUser] = useState(true)

  const queryClient = new QueryClient()

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
            {
              // path: "nba",
              index: true,
              element: <NbaPage />,
              
            },
            {
              path: "nfl",
              element: <NflPage />,
            }
          ]
        }
      ]
    }
  ]
  const router = createBrowserRouter(routes)


  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
