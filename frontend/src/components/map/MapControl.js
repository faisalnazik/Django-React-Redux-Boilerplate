import PropTypes from 'prop-types';
import { NavigationControl, FullscreenControl, ScaleControl, GeolocateControl } from 'react-map-gl';
//
import { ControlStyle } from './style';

// ----------------------------------------------------------------------

MapControl.propTypes = {
  hideFullscreenControl: PropTypes.bool,
  hideGeolocateControl: PropTypes.bool,
  hideNavigationnControl: PropTypes.bool,
  hideScaleControl: PropTypes.bool,
};

export default function MapControl({
  hideScaleControl,
  hideGeolocateControl,
  hideFullscreenControl,
  hideNavigationnControl,
}) {
  return (
    <>
      <ControlStyle />

      {!hideGeolocateControl && <GeolocateControl position="top-left" positionOptions={{ enableHighAccuracy: true }} />}

      {!hideFullscreenControl && <FullscreenControl position="top-left" />}

      {!hideScaleControl && <ScaleControl position="bottom-left" />}

      {!hideNavigationnControl && <NavigationControl position="bottom-left" />}
    </>
  );
}
