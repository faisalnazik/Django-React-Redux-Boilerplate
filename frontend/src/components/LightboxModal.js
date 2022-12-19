import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import { Typography, GlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

function LightboxModalStyles() {
  const theme = useTheme();

  const isRTL = theme.direction === 'rtl';

  const ICON_SIZE = 32;

  const ICON_COLOR = theme.palette.grey[600].replace('#', '');

  const getIcon = (icon) =>
    `url(https://api.iconify.design/carbon/${icon}.svg?color=%23${ICON_COLOR}&width=${ICON_SIZE}&height=${ICON_SIZE})`;

  const Icon = (icon) => ({
    opacity: 1,
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    backgroundImage: `unset`,
    backgroundColor: 'transparent',
    transition: theme.transitions.create('opacity'),
    '&:before': {
      display: 'block',
      width: ICON_SIZE,
      height: ICON_SIZE,
      content: getIcon(icon),
    },
    '&:hover': {
      opacity: 0.72,
    },
  });

  return (
    <GlobalStyles
      styles={{
        '& .ReactModalPortal': {
          '& .ril__outer': {
            backgroundColor: alpha(theme.palette.grey[900], 0.96),
          },

          // Toolbar
          '& .ril__toolbar': {
            height: 'auto !important',
            padding: theme.spacing(2, 3),
            backgroundColor: 'transparent',
          },
          '& .ril__toolbarLeftSide': { display: 'none' },
          '& .ril__toolbarRightSide': {
            height: 'auto !important',
            padding: 0,
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            '& li': {
              display: 'flex',
              alignItems: 'center',
            },
            '& li:first-of-type': {
              flexGrow: 1,
            },
            '& li:not(:first-of-type)': {
              width: 40,
              height: 40,
              justifyContent: 'center',
              marginLeft: theme.spacing(2),
            },
          },

          // Button
          '& button:focus': { outline: 'none' },
          '& .ril__toolbarRightSide button': {
            width: '100%',
            height: '100%',
            '&.ril__zoomInButton': Icon('zoom-in'),
            '&.ril__zoomOutButton': Icon('zoom-out'),
            '&.ril__closeButton': Icon('close'),
          },
          '& .ril__navButtons': {
            padding: theme.spacing(3),
            '&.ril__navButtonPrev': {
              right: 'auto',
              left: theme.spacing(2),
              ...Icon(isRTL ? 'arrow-right' : 'arrow-left'),
            },
            '&.ril__navButtonNext': {
              left: 'auto',
              right: theme.spacing(2),
              ...Icon(isRTL ? 'arrow-left' : 'arrow-right'),
            },
          },
        },
      }}
    />
  );
}

// ----------------------------------------------------------------------

LightboxModal.propTypes = {
  images: PropTypes.array.isRequired,
  photoIndex: PropTypes.number,
  setPhotoIndex: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default function LightboxModal({ images, photoIndex, setPhotoIndex, isOpen, ...other }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const showIndex = <Typography variant="subtitle2">{`${photoIndex + 1} / ${images.length}`}</Typography>;

  const toolbarButtons = [showIndex];

  const customStyles = {
    overlay: {
      zIndex: 9999,
    },
  };

  return (
    <>
      <LightboxModalStyles />

      {isOpen && (
        <Lightbox
          animationDuration={160}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          toolbarButtons={toolbarButtons}
          reactModalStyle={customStyles}
          {...other}
        />
      )}
    </>
  );
}
