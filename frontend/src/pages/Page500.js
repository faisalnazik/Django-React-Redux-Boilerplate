import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// @mui
import { Button, Typography, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { MotionContainer, varBounce } from '../components/animate';
// assets
import { SeverErrorIllustration } from '../assets';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <Page title="500 Internal Server Error">
      <Container component={MotionContainer}>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              500 Internal Server Error
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: 'text.secondary' }}>There was an error, please try again later.</Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
          </m.div>

          <Button to="/dashboard/app" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
