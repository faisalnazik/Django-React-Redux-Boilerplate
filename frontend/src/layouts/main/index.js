import { Outlet } from 'react-router-dom'
// @mui
import { Box, Stack } from '@mui/material'
// components
// import Logo from '../../components/Logo';
//
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'

// ----------------------------------------------------------------------

export default function MainLayout() {
  // const { pathname } = useLocation();

  // const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      <MainFooter />

    </Stack>
  )
}
