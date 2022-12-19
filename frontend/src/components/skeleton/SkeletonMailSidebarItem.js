// @mui
import { Stack, Skeleton } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonMailSidebarItem() {
  return (
    <Stack spacing={1} direction="row" alignItems="center" sx={{ px: 3, py: 1 }}>
      <Skeleton variant="circular" width={32} height={32} />
      <Skeleton variant="text" sx={{ width: 0.25, height: 16 }} />
    </Stack>
  );
}
