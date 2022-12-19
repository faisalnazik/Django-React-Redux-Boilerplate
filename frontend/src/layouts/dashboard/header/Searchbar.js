import { useState, memo, useEffect } from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useLocation, useNavigate } from 'react-router-dom';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Slide, Popper, TextField, InputAdornment, ClickAwayListener } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
// utils
import cssStyles from '../../../utils/cssStyles';
import flattenArray from '../../../utils/flattenArray';
// components
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
import SearchNotFound from '../../../components/SearchNotFound';
//
import NavConfig from '../navbar/NavConfig';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const autocompleteStyle = {
  width: 1,
  height: 1,
  '& .MuiFormControl-root, .MuiOutlinedInput-root, .MuiAutocomplete-input': {
    height: 1,
    p: '0 !important',
    fontWeight: 'fontWeightBold',
    '& fieldset': { display: 'none' },
  },
};

const PopperStyle = styled((props) => <Popper {...props} />)(({ theme }) => ({
  left: `8px !important`,
  top: `${APPBAR_MOBILE + 8}px !important`,
  width: 'calc(100% - 16px) !important',
  transform: 'none !important',
  [theme.breakpoints.up('md')]: {
    top: `${APPBAR_DESKTOP + 8}px !important`,
  },
  '& .MuiAutocomplete-paper': {
    padding: theme.spacing(1, 0),
  },
  '& .MuiListSubheader-root': {
    '&.MuiAutocomplete-groupLabel': {
      ...cssStyles(theme).bgBlur({ color: theme.palette.background.neutral }),
      ...theme.typography.overline,
      top: 0,
      margin: 0,
      lineHeight: '48px',
      borderRadius: theme.shape.borderRadius,
    },
  },
  '& .MuiAutocomplete-listbox': {
    '& .MuiAutocomplete-option': {
      padding: theme.spacing(0.5, 2),
      margin: 0,
      display: 'block',
      border: `dashed 1px transparent`,
      borderBottom: `dashed 1px ${theme.palette.divider}`,
      '&:hover': {
        border: `dashed 1px ${theme.palette.primary.main}`,
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      },
    },
  },
}));

// ----------------------------------------------------------------------

function Searchbar() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const reduceItems = NavConfig.map((list) => handleLoop(list.items, list.subheader)).flat();

  const allItems = flattenArray(reduceItems).map((option) => {
    const group = splitPath(reduceItems, option.path);

    return {
      group: group && group.length > 1 ? group[0] : option.subheader,
      title: option.title,
      path: option.path,
    };
  });

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleClick = (path) => {
    if (path.includes('http')) {
      window.open(path);
    } else {
      navigate(path);
    }
    setOpen(false);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleClick(searchQuery);
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        {!open && (
          <IconButtonAnimate onClick={() => setOpen((prev) => !prev)}>
            <Iconify icon={'eva:search-fill'} width={20} height={20} />
          </IconButtonAnimate>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Autocomplete
              sx={autocompleteStyle}
              autoHighlight
              disablePortal
              disableClearable
              popupIcon={null}
              PopperComponent={PopperStyle}
              onInputChange={(event, value) => setSearchQuery(value)}
              noOptionsText={<SearchNotFound searchQuery={searchQuery} />}
              options={allItems.sort((a, b) => -b.group.localeCompare(a.group))}
              groupBy={(option) => option.group}
              getOptionLabel={(option) => option.path}
              isOptionEqualToValue={(option, value) => option.path === value.path}
              filterOptions={createFilterOptions({
                matchFrom: 'start',
                stringify: (option) => option.title || option.path,
              })}
              renderOption={(props, option, { inputValue }) => {
                const { title, path } = option;

                const partsTitle = parse(title, match(title, inputValue));

                const partsPath = parse(path, match(path, inputValue));

                return (
                  <Box component="li" {...props} onClick={() => handleClick(path)}>
                    <div>
                      {partsTitle.map((part, index) => (
                        <Box
                          key={index}
                          component="span"
                          sx={{
                            typography: 'subtitle2',
                            textTransform: 'capitalize',
                            color: part.highlight ? 'primary.main' : 'text,primary',
                          }}
                        >
                          {part.text}
                        </Box>
                      ))}
                    </div>

                    <div>
                      {partsPath.map((part, index) => (
                        <Box
                          key={index}
                          component="span"
                          sx={{
                            typography: 'caption',
                            color: part.highlight ? 'primary.main' : 'text.secondary',
                          }}
                        >
                          {part.text}
                        </Box>
                      ))}
                    </div>
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  autoFocus
                  placeholder="Search..."
                  onKeyUp={handleKeyUp}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}

export default memo(Searchbar);

// ----------------------------------------------------------------------

function splitPath(array, key) {
  let stack = array.map((item) => ({
    path: [item.title],
    currItem: item,
  }));

  while (stack.length) {
    const { path, currItem } = stack.pop();

    if (currItem.path === key) {
      return path;
    }

    if (currItem.children?.length) {
      stack = stack.concat(
        currItem.children.map((item) => ({
          path: path.concat(item.title),
          currItem: item,
        }))
      );
    }
  }
  return null;
}

// ----------------------------------------------------------------------

function handleLoop(array, subheader) {
  return array?.map((list) => ({
    subheader,
    ...list,
    ...(list.children && {
      children: handleLoop(list.children, subheader),
    }),
  }));
}
