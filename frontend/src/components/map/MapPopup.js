import PropTypes from 'prop-types';
//
import { PopupStyle } from './style';

// ----------------------------------------------------------------------

MapPopup.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default function MapPopup({ sx, children, ...other }) {
  return (
    <PopupStyle anchor="bottom" sx={sx} {...other}>
      {children}
    </PopupStyle>
  );
}
