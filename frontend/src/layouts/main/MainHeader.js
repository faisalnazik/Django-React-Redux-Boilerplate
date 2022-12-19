import { useLocation } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
// @mui
import { styled, useTheme } from '@mui/material/styles'
import { Box, Button, AppBar, Toolbar, Container, Typography } from '@mui/material'
// hooks
import useOffSetTop from '../../hooks/useOffSetTop'
import useResponsive from '../../hooks/useResponsive'
// utils
import cssStyles from '../../utils/cssStyles'
// config
import { HEADER } from '../../config'
// routes
import { PATH_DASHBOARD } from '../../routes/paths'
// components
// import Logo from '../../components/Logo';
//
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import navConfig from './MenuConfig'

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT
  }
}))

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}))

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT)

  const theme = useTheme()

  const { pathname } = useLocation()

  const isDesktop = useResponsive('up', 'md')

  const isHome = pathname === '/dashboard/app'

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 }
          })
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography component="span" variant="h3" sx={{ color: 'primary.main' }}>
            &nbsp;FaisalNazik
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}

          <Button variant="contained" color="primary" rel="noopener" to={PATH_DASHBOARD.root} component={RouterLink}>
            Dashboard
          </Button>

          {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  )
}
