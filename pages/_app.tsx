import Head from 'next/head'
import { CookiesProvider } from 'react-cookie'
import type { AppProps } from 'next/app'
import '../styles/global.css'

const MyApp = ({ Component }: AppProps) => {
  return (
    <>
      <CookiesProvider>
        <Head>
          <title>HELLO</title>
        </Head>
        <Component />
      </CookiesProvider>
    </>
  )
}

export default MyApp
