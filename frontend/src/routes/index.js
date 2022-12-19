import { Suspense, lazy } from 'react'
import { Navigate, useRoutes, useLocation } from 'react-router-dom'

import DashboardLayout from '../layouts/dashboard'
import LogoOnlyLayout from '../layouts/LogoOnlyLayout'
// guards
import GuestGuard from '../guards/GuestGuard'
import AuthGuard from '../guards/AuthGuard'
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
import { PATH_AFTER_LOGIN } from '../config'
// components
import LoadingScreen from '../components/LoadingScreen'

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation()

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'new-password', element: <NewPassword /> },
        { path: 'verify', element: <VerifyCode /> }
      ]
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <UserProfile /> },
            { path: 'account', element: <UserAccount /> }
          ]
        }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ])
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')))
const Register = Loadable(lazy(() => import('../pages/auth/Register')))
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')))
const NewPassword = Loadable(lazy(() => import('../pages/auth/NewPassword')))
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')))

const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')))
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')))

// GENERAL
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')))

const Page500 = Loadable(lazy(() => import('../pages/Page500')))
const Page403 = Loadable(lazy(() => import('../pages/Page403')))
const Page404 = Loadable(lazy(() => import('../pages/Page404')))
