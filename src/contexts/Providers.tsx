/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactNode } from 'react'
import { AuthContextProvider } from './AuthContext'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}
