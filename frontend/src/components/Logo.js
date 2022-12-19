import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
// @mui
// import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object
}

export default function Logo({ disabledLink = false, sx }) {
  // const theme = useTheme()

  // const PRIMARY_LIGHT = theme.palette.primary.light

  // const PRIMARY_MAIN = theme.palette.primary.main

  // const PRIMARY_DARK = theme.palette.primary.dark

  // OR
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = <Box sx={{ width: 40, height: 40, ...sx }}></Box>

  if (disabledLink) {
    return <>{logo}</>
  }

  return <RouterLink to="/">{logo}</RouterLink>
}
