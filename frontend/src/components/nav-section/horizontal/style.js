// @mui
import { alpha, styled } from '@mui/material/styles';
import { Popover, ListItemButton } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { NAVBAR } from '../../../config';

// ----------------------------------------------------------------------

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open',
})(({ active, depth, open, theme }) => {
  const isLight = theme.palette.mode === 'light';

  const activeStyle = {
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.common.white,
    boxShadow: `-2px 4px 6px 0 ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.16)}`,
  };

  const activeSubStyle = {
    boxShadow: 'none',
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  const hoverStyle = {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.hover,
    boxShadow: `inset 0 0 1px 1px ${theme.palette.divider}`,
  };

  return {
    textTransform: 'capitalize',
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(0, 1),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    height: NAVBAR.DASHBOARD_ITEM_HORIZONTAL_HEIGHT,
    '&:hover': hoverStyle,
    // Active item
    ...(active && {
      ...activeStyle,
      '&:hover': { ...activeStyle },
    }),
    // Active item sub
    ...(active &&
      depth !== 1 && {
        ...activeSubStyle,
        '&:hover': { ...activeSubStyle },
      }),
    // Sub item
    ...(depth && {
      ...(depth > 1 && {
        width: '100%',
        margin: 0,
        paddingRight: 0,
        paddingLeft: theme.spacing(1),
      }),
    }),
    // Open
    ...(open && !active && hoverStyle),
  };
});

// ----------------------------------------------------------------------

export const PaperStyle = styled(Popover)(({ theme }) => ({
  pointerEvents: 'none',
  '& .MuiPopover-paper': {
    width: 160,
    pointerEvents: 'auto',
    padding: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    boxShadow: theme.customShadows.dropdown,
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    ...cssStyles(theme).bgBlur(),
  },
}));
