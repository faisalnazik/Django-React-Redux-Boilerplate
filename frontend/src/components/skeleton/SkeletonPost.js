// @mui
import { Box, Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonPost() {
  return (
    <>
      <Skeleton width="100%" height={560} variant="rectangular" sx={{ borderRadius: 2 }} />
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
        <Skeleton variant="circular" width={64} height={64} />
        <Box sx={{ flexGrow: 1, ml: 2 }}>
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
        </Box>
      </Box>
    </>
  );
}
