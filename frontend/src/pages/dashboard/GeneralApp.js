import { Container } from '@mui/material'

import useSettings from '../../hooks/useSettings'
// routes
import { PATH_DASHBOARD } from '../../routes/paths'

// components
import Page from '../../components/Page'
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs'

export default function GeneralApp() {
  const { themeStretch } = useSettings()

  return (
    <Page title="App: Frontend">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs heading="Home" links={[{ name: 'Home', href: PATH_DASHBOARD.root }]} />
      </Container>
    </Page>
  )
}
