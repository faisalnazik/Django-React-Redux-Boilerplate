import axios from 'axios'
// config
import { HOST_API } from '../config'

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
)

export default axiosInstance
