import { Link as RouterLink } from 'react-router-dom'
// @mui
import { styled } from '@mui/material/styles'
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material'
// routes
import { PATH_PAGE } from '../../routes/paths'
// components
import SocialsButton from '../../components/SocialsButton'

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Company',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs }
    ]
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  },
  {
    headline: 'Contact',
    children: [
      { name: 'support@example.com', href: '#' },
      { name: 'Los Angeles, 359  Hidden Valley Road', href: '#' }
    ]
  }
]

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}))

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid container justifyContent={{ xs: 'center', md: 'space-between' }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          {/* <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid> */}

          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Company 
            </Typography>

            <Stack direction="row" justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mt: 5, mb: { xs: 5, md: 0 } }}>
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link to={link.href} key={link.name} color="inherit" variant="body2" component={RouterLink} sx={{ display: 'block' }}>
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          © 2022. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  )
}
