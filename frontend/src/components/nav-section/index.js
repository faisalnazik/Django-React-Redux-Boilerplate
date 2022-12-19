import { matchPath } from 'react-router-dom';

// ----------------------------------------------------------------------

export { default as NavSectionVertical } from './vertical';
export { default as NavSectionHorizontal } from './horizontal';

export function isExternalLink(path) {
  return path.includes('http');
}

export function getActive(path, pathname) {
  return path ? !!matchPath({ path, end: false }, pathname) : false;
}
