import '../../style.scss'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My portfolio</title>
      </Head>
       <Component {...pageProps} />
    </>
  )
}