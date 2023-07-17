import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.victorbarilin.com" />
        <meta name="author" content="Victor Andres Barilin" />

        <meta property="og:title" content="Mi portfolio - Mi sitio web - victorbarilin" />
        <meta name="description" content="Portafolio web personal, desarrollador en reactjs junior" />
        <meta name="keywords" content="Desarrollador web, React, Front-end, Portafolio, victorbarilin, Programador, Developer" />

        {/* clarity config */}
        <script type="text/javascript" 
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "i0wi5c9jyg");`
          }}
        />

        <meta name="msvalidate.01" content="9F865620FF2EB48160FC645CC3BC3859" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}