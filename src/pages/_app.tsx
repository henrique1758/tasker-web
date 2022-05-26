import { AppProps } from 'next/app'
import React from 'react'
import { Providers } from '../contexts/Providers'
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Component {...pageProps} />
      <GlobalStyle />
    </Providers>
  )
}

export default MyApp
