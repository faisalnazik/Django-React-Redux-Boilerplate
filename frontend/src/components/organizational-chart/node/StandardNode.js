import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Typography, IconButton, MenuItem, Card, Avatar } from '@mui/material';
//
import Iconify from '../../Iconify';
import MenuPopover from '../../MenuPopover';

// ----------------------------------------------------------------------

StandardNode.propTypes = {
  node: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  sx: PropTypes.object,
};

export default function StandardNode({ node, onEdit, onDelete, sx }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Card
        sx={{
          p: 2,
          minWidth: 200,
          borderRadius: 1.5,
          textAlign: 'left',
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
          textTransform: 'capitalize',
          ...sx,
        }}
      >
        <IconButton onClick={handleOpen} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <Iconify icon="eva:more-horizontal-fill" width={20} height={20} />
        </IconButton>

        <Avatar alt={node.name} src={node.avatar || ''} sx={{ mr: 2, mb: 1, width: 48, height: 48 }} />

        <Typography variant="subtitle2" noWrap>
          {node.name}
        </Typography>

        <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
          {node.role}
        </Typography>
      </Card>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
        transformOrigin={{ vertical: 'center', horizontal: 'left' }}
        arrow="left-center"
        sx={{
          width: 160,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20 },
          },
        }}
      >
        {onDelete && (
          <MenuItem
            onClick={() => {
              handleClose();
              onDelete();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon={'eva:trash-2-outline'} />
            Delete
          </MenuItem>
        )}

        {onEdit && (
          <MenuItem
            onClick={() => {
              handleClose();
              onEdit();
            }}
          >
            <Iconify icon={'eva:edit-fill'} />
            Edit
          </MenuItem>
        )}
      </MenuPopover>
    </>
  );
}
