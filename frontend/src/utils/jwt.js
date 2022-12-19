import jwtDecode from 'jwt-decode'
// routes
import { PATH_AUTH } from '../routes/paths'
//
import axios from './axios'

// ----------------------------------------------------------------------

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false
  }
  const decoded = jwtDecode(accessToken)

  const currentTime = Date.now() / 1000

  return decoded.exp > currentTime
}

const handleTokenExpired = (exp) => {
  let expiredTimer

  // const currentTime = Date.now()

  //  convert exp into remaining days

  // const timeLeft = exp * 1000 + currentTime //

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime // ~10s
  // const timeLeft = currentTime + 8640000 - currentTime // 1 day
  const timeLeft = exp * 1000
  // console.log('currentTime', currentTime, 'exp', exp * 1000)
  // const timeLeft = exp - currentTime

  // console.log('timeLeft', timeLeft)

  clearTimeout(expiredTimer)

  expiredTimer = setTimeout(() => {
    // eslint-disable-next-line no-alert
    alert('Token expired')

    localStorage.removeItem('accessToken')

    window.location.href = PATH_AUTH.login
  }, timeLeft)
}

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken)
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`

    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken) // ~3 days by minimals server
    // handleTokenExpired(exp)
  } else {
    localStorage.removeItem('accessToken')
    delete axios.defaults.headers.common.Authorization
  }
}

export { isValidToken, setSession }
