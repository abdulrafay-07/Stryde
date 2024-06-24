import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './store/store.js'

import { Home, Login, Signup, Browse, Search, SingleExercise, WorkoutRegime, EditPreference, UserInfo, Forums } from './pages/index.js'
import { AuthLayout } from './components/index.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: '/browse',
        element: (
          <AuthLayout authentication>
            {' '}
            <Browse />
          </AuthLayout>
        )
      },
      {
        path: '/search',
        element: (
          <AuthLayout authentication>
            {' '}
            <Search />
          </AuthLayout>
        )
      },
      {
        path: '/community-posts',
        element: (
          <AuthLayout authentication>
            {' '}
            <Forums />
          </AuthLayout>
        )
      },
      {
        path: '/profile-information',
        element: (
          <AuthLayout authentication>
            {' '}
            <UserInfo />
          </AuthLayout>
        )
      },
      {
        path: '/edit-split',
        element: (
          <AuthLayout authentication>
            {' '}
            <EditPreference />
          </AuthLayout>
        )
      },
      {
        path: '/search/:name',
        element: <SingleExercise />
      },
      {
        path: '/split/:slug',
        element: <WorkoutRegime />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)