import PropTypes from 'prop-types'
// @mui
import { Checkbox, Typography, Stack } from '@mui/material'

// ----------------------------------------------------------------------

TableSelectedActions.propTypes = {
  dense: PropTypes.bool,
  actions: PropTypes.node,
  rowCount: PropTypes.number,
  numSelected: PropTypes.number,
  onSelectAllRows: PropTypes.func,
  sx: PropTypes.object
}

export default function TableSelectedActions({ dense, actions, rowCount, numSelected, onSelectAllRows, sx, ...other }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        px: 2,
        top: 0,
        left: 8,
        right: 8,
        zIndex: 9,
        height: 58,
        borderRadius: 1,
        position: 'absolute',
        bgcolor: 'primary.lighter',
        ...(dense && {
          pl: 1,
          height: 38
        }),
        ...sx
      }}
      {...other}
    >
      <Checkbox
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={(event) => onSelectAllRows(event.target.checked)}
      />

      <Typography
        variant="subtitle1"
        sx={{
          ml: 2,
          flexGrow: 1,
          color: 'primary.main',
          ...(dense && {
            ml: 3
          })
        }}
      >
        {numSelected} selected
      </Typography>

      {actions && actions}
    </Stack>
  )
}
