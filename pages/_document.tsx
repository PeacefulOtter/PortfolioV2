


import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" /> 
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Kanit&family=Libre+Bodoni:wght@500&family=Major+Mono+Display&family=Outfit&family=Playfair+Display:wght@500&family=Prata&family=Roboto+Mono&family=Secular+One&family=UnifrakturCook&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument