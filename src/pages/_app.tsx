import Head from 'next/head'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Gabriela da Silva</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
