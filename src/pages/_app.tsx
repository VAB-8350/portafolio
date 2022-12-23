import '../../style.scss'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>vicode</title>
      </Head>
       <Component {...pageProps} />
    </>
  )
}