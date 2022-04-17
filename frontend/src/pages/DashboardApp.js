import { Grid, Container, Typography, Card, CardContent, Box, Button, CardActions, Link } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome 👋
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <Typography variant="p" sx={{ mb: 5 }}>
                  Kick start your project 🚀
                </Typography>
                All the best for your new project
                <Typography>
                  Please make sure to{' '}
                  <Link
                    href="https://github.com/faisalnazik/Django-REST-Framework-React-BoilerPlate/blob/master/README.md"
                    target="_blank"
                  >
                    README
                  </Link>
                  to understand where to go from here to use this BoilerPlate
                </Typography>
                <Box m={2} pt={3}>
                  <Button
                    href="https://github.com/faisalnazik/Django-REST-Framework-React-BoilerPlate"
                    target="_blank"
                    variant="outlined"
                  >
                    Get more information
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              {' '}
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  @faisalnazik
                </Typography>
                <Typography variant="h5" component="div">
                  Give a ⭐️ if this project helped you!
                </Typography>

                <Typography variant="body2">
                  If you have find any type of Bug, Raise an Issue So we can fix it
                </Typography>
              </CardContent>
              <CardActions>
                <Box m={2} pt={2}>
                  <Button
                    href="https://github.com/faisalnazik/Django-REST-Framework-React-BoilerPlate"
                    target="_blank"
                    variant="outlined"
                  >
                    Github
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
