import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const EditorToolbarStyle = styled('div')(({ theme }) => {
  const isRTL = theme.direction === 'rtl';

  return {
    '& .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill':
      {
        fill: theme.palette.primary.main,
      },
    '& .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected':
      {
        color: theme.palette.primary.main,
      },
    '& .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter':
      {
        stroke: theme.palette.primary.main,
      },
    '& .ql-stroke': {
      stroke: theme.palette.text.primary,
    },
    '& .ql-fill, .ql-stroke.ql-fill': {
      fill: theme.palette.text.primary,
    },
    '& .ql-picker, .ql-picker-options, .ql-picker-item, .ql-picker-label, button': {
      '&:focus': { outline: 'none' },
    },
    '& .ql-toolbar.ql-snow': {
      border: 'none',
      borderBottom: `solid 1px ${theme.palette.grey[500_32]}`,
      '& .ql-formats': {
        '&:not(:last-of-type)': {
          marginRight: theme.spacing(2),
        },
      },

      // Button
      '& button': {
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        color: theme.palette.text.primary,
      },

      // Icon svg
      '& button svg, span svg': {
        width: 20,
        height: 20,
      },

      // Select
      '& .ql-picker-label': {
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary,
        '& .ql-stroke': {
          stroke: theme.palette.text.primary,
        },
      },
      '& .ql-picker-label svg': {
        ...(isRTL && {
          right: '0 !important',
          left: 'auto !important',
        }),
      },
      '& .ql-color,& .ql-background,& .ql-align ': {
        '& .ql-picker-label': {
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      '& .ql-expanded': {
        '& .ql-picker-label': {
          borderRadius: 4,
          color: theme.palette.text.disabled,
          borderColor: 'transparent !important',
          backgroundColor: theme.palette.action.focus,
          '& .ql-stroke': { stroke: theme.palette.text.disabled },
        },
        '& .ql-picker-options': {
          padding: 0,
          marginTop: 4,
          border: 'none',
          maxHeight: 200,
          overflow: 'auto',
          boxShadow: theme.customShadows.z20,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
        },
        '& .ql-picker-item': {
          color: theme.palette.text.primary,
        },

        // Align
        '&.ql-align': {
          '& .ql-picker-options': { padding: 0, display: 'flex' },
          '& .ql-picker-item': {
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        // Color & Background
        '&.ql-color, &.ql-background': {
          '& .ql-picker-options': { padding: 8 },
          '& .ql-picker-item': {
            margin: 3,
            borderRadius: 4,
            '&.ql-selected': { border: 'solid 1px black' },
          },
        },
        // Font, Size, Header
        '&.ql-font, &.ql-size, &.ql-header': {
          '& .ql-picker-options': {
            padding: theme.spacing(1, 0),
          },
          '& .ql-picker-item': {
            padding: theme.spacing(0.5, 1.5),
          },
        },
      },
    },
  };
});

export default EditorToolbarStyle;
