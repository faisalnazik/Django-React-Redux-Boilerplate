import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Typography, Card, Box, Stack, Avatar } from '@mui/material';
//
import Label from '../../Label';

// ----------------------------------------------------------------------

GroupNode.propTypes = {
  depth: PropTypes.number,
  length: PropTypes.number,
  node: PropTypes.shape({
    avatar: PropTypes.string,
    group: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
  sx: PropTypes.object,
};

export default function GroupNode({ node, depth, length, sx }) {
  const theme = useTheme();

  const style = (color) => ({
    color: theme.palette[color].darker,
    bgcolor: alpha(theme.palette[color].main, 0.08),
    border: `solid 1px ${alpha(theme.palette[color].main, 0.24)}`,
  });

  const isLabel = depth === 1;

  const isGrRoot = node.group === 'root';

  const isGrProduct = node.group === 'product design';

  const isGrDevelopment = node.group === 'development';

  const isGrMarketing = node.group === 'marketing';

  return (
    <Stack sx={{ position: 'relative', display: 'inline-flex' }} alignItems="center">
      {!isLabel && (
        <Avatar
          alt={node.name}
          src={node.avatar || ''}
          sx={{
            mt: -3.5,
            zIndex: 9,
            width: 56,
            height: 56,
            position: 'absolute',
            border: `solid 4px ${theme.palette.background.paper}`,
          }}
        />
      )}

      <Card
        sx={{
          pt: 5,
          pb: 3,
          minWidth: 200,
          borderRadius: 1.5,
          textTransform: 'capitalize',
          ...(isLabel && { py: 2 }),
          ...(isLabel && isGrProduct && style('primary')),
          ...(isLabel && isGrDevelopment && style('info')),
          ...(isLabel && isGrMarketing && style('warning')),
          ...sx,
        }}
      >
        {depth !== 1 && !isGrRoot && (
          <Box
            sx={{
              top: 0,
              left: 0,
              width: 1,
              height: 4,
              position: 'absolute',
              borderRadius: 1.5,
              ...(isGrProduct && {
                bgcolor: 'primary.light',
              }),
              ...(isGrDevelopment && {
                bgcolor: 'info.light',
              }),
              ...(isGrMarketing && {
                bgcolor: 'warning.light',
              }),
            }}
          />
        )}

        <Typography variant={isLabel ? 'subtitle1' : 'subtitle2'} noWrap>
          {node.name}
          {isLabel && (
            <Label color={(isGrDevelopment && 'info') || (isGrMarketing && 'warning') || 'primary'} sx={{ ml: 1 }}>
              {length}
            </Label>
          )}
        </Typography>

        {!isLabel && (
          <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
            {node.role}
          </Typography>
        )}
      </Card>
    </Stack>
  );
}
