/* eslint-disable handle-callback-err */
/* eslint-disable dot-notation */
/* eslint-disable camelcase */
import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/apiClient'

interface SignInData {
  email: string
  password: string
}

interface Task {
  id: string
  content: string
}

interface User {
  id: string
  name: string
  email: string
  avatar_url?: string
  tasks: Task[]
  created_at: Date
}

interface AuthContextData {
  signIn: (data: SignInData) => Promise<void>
  signOut: () => void;
  user: User
  isUserLoggedIn: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

interface Result {
  token: string
  user: User
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function signOut() {
  destroyCookie(undefined, '@tskr:cookie')

  Router.push('/')
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const isUserLoggedIn = !!user

  useEffect(() => {
    const cookies = parseCookies()

    const { '@tskr:cookie': token } = cookies

    if (token) {
      api
        .get('users/profile')
        .then(response => {
          setUser(response.data)
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    try {
      const response = await api.post<Result>('sessions', {
        email,
        password
      })

      const {
        token,
        user: { id, name, avatar_url, tasks, created_at }
      } = response.data

      setCookie(undefined, '@tskr:cookie', token, {
        maxAge: 60 * 60 * 24, // 1 day
        path: '/'
      })

      setUser({
        id,
        name,
        email,
        avatar_url,
        tasks,
        created_at
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/home')
    } catch (error: any) {
      console.log(error.respoonse)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isUserLoggedIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
