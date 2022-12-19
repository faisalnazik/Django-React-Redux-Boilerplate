import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// @mui
import {
  Box,
  List,
  Stack,
  Drawer,
  Button,
  Divider,
  Typography,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material';
// config
import { NAVBAR, ICON } from '../../config';
//
import Logo from '../Logo';
import Iconify from '../Iconify';
import Scrollbar from '../Scrollbar';

// ----------------------------------------------------------------------

MegaMenuMobile.propTypes = {
  navConfig: PropTypes.array,
};

export default function MegaMenuMobile({ navConfig }) {
  const { pathname } = useLocation();

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (openDrawer) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleDrawerOpen} startIcon={<Iconify icon={'eva:menu-2-fill'} />}>
        Menu Mobile
      </Button>

      <Drawer
        open={openDrawer}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: NAVBAR.DASHBOARD_WIDTH } }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <Typography variant="h6" sx={{ px: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
            <Box component={Iconify} icon={'eva:list-fill'} sx={{ mr: 1, width: 24, height: 24 }} /> Categories
          </Typography>

          {navConfig.map((parent) => (
            <SubMenu key={parent.title} parent={parent} pathname={pathname} />
          ))}
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

ParentItem.propTypes = {
  hasSub: PropTypes.bool,
  icon: PropTypes.any,
  title: PropTypes.string,
};

function ParentItem({ icon, title, hasSub, ...other }) {
  return (
    <ListItemButton sx={{ textTransform: 'capitalize', height: 44 }} {...other}>
      <ListItemIcon sx={{ width: 22, height: 22 }}>{icon}</ListItemIcon>
      <ListItemText primaryTypographyProps={{ typography: 'body2' }}>{title}</ListItemText>
      {hasSub && <Box component={Iconify} icon={'eva:arrow-ios-forward-fill'} />}
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

SubMenu.propTypes = {
  parent: PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.any,
    path: PropTypes.string,
    children: PropTypes.array,
  }),
  pathname: PropTypes.string,
};

function SubMenu({ parent, pathname }) {
  const [open, setOpen] = useState(false);

  const { title, icon, path, children } = parent;

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (children) {
    return (
      <>
        <ParentItem title={title} icon={icon} onClick={handleOpen} hasSub />

        <Drawer
          open={open}
          onClose={handleClose}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH - 12 } }}
        >
          <Stack direction="row" alignItems="center" px={1} py={1.5}>
            <IconButton onClick={handleClose}>
              <Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />
            </IconButton>

            <Typography noWrap variant="subtitle1" sx={{ ml: 1, textTransform: 'capitalize' }}>
              {title}
            </Typography>
          </Stack>
          <Divider />

          <Scrollbar>
            <Stack spacing={5} py={3}>
              {children.map((list) => {
                const { subheader, items } = list;

                return (
                  <List key={subheader} disablePadding>
                    <Typography
                      component="div"
                      variant="overline"
                      sx={{ px: 2.5, mb: 1, color: 'text.secondary' }}
                      noWrap
                    >
                      {subheader}
                    </Typography>

                    {items.map((link) => (
                      <ListItemButton key={link.title} component={RouterLink} to={link.path} sx={{ px: 1.5 }}>
                        <ListItemIcon
                          sx={{
                            mr: 0.5,
                            width: ICON.NAVBAR_ITEM,
                            height: ICON.NAVBAR_ITEM,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Box
                            sx={{
                              width: 4,
                              height: 4,
                              bgcolor: 'currentColor',
                              borderRadius: '50%',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={link.title}
                          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                );
              })}
            </Stack>
          </Scrollbar>
        </Drawer>
      </>
    );
  }

  return (
    <Box
      component={RouterLink}
      to={path}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <ParentItem title={title} icon={icon} />
    </Box>
  );
}
