import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { signOut } from '../contexts/AuthContext'


export function setupApiClient(ctx = undefined) {
  const cookies = parseCookies(ctx)
  const { '@tskr:cookie': token } = cookies

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  api.interceptors.response.use(
    response => {
      return response
    },
    (error: AxiosError) => {
      if (error.response?.status === 400) {
        if (process.browser) {
          signOut()
        }
      }

      return Promise.reject(error)
    }
  )

  return api;
}