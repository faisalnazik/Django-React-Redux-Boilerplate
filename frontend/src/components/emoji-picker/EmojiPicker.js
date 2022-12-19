import PropTypes from 'prop-types';
import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';
import { useEffect, useRef, useState } from 'react';
// @mui
import { useTheme, hexToRgb } from '@mui/material/styles';
import { Box, IconButton, ClickAwayListener, Paper, GlobalStyles } from '@mui/material';
//
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

EmojiPicker.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  setValue: PropTypes.func,
  sx: PropTypes.object,
};

export default function EmojiPicker({ value, setValue, disabled, sx, ...other }) {
  const theme = useTheme();

  const emojiRef = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    new Picker({
      ref: emojiRef,
      data,
      onEmojiSelect: (emoji) => setValue(value + emoji?.native),
      ...other,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const hexToRgbString = (hex) => hexToRgb(hex).replace('rgb(', '').replace(')', '');

  return (
    <>
      <GlobalStyles
        styles={{
          '#root': {
            '--color-border': theme.palette.divider,
            '--rgb-accent': hexToRgbString(theme.palette.primary.main),
            '--rgb-background': hexToRgbString(theme.palette.background.paper),
            '--rgb-color': hexToRgbString(theme.palette.text.secondary), //
            '--rgb-input': 'transparent',
          },
        }}
      />

      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Box sx={{ position: 'relative' }}>
          <IconButton disabled={disabled} size="small" onClick={() => setOpen(!open)}>
            <Iconify icon={'eva:smiling-face-fill'} width={20} height={20} />
          </IconButton>

          {open && (
            <Paper
              ref={emojiRef}
              sx={{
                bottom: 36,
                position: 'absolute',
                boxShadow: (theme) => theme.customShadows.dropdown,
                ...sx,
              }}
            />
          )}
        </Box>
      </ClickAwayListener>
    </>
  );
}
