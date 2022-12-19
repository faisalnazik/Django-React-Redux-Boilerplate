import PropTypes from 'prop-types';
// @mui
import { Stack } from '@mui/material';

// ----------------------------------------------------------------------

TextIconLabel.propTypes = {
  endIcon: PropTypes.bool,
  icon: PropTypes.element,
  sx: PropTypes.object,
  value: PropTypes.node,
};

export default function TextIconLabel({ icon, value, endIcon = false, sx, ...other }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        typography: 'body2',
        ...sx,
      }}
      {...other}
    >
      {!endIcon && icon}
      {value}
      {endIcon && icon}
    </Stack>
  );
}
