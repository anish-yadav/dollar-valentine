import NextDocument, { Html, Head, Main, NextScript } from "next/document";
// import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap"/>
          <link rel="icon" type="image/png" href="/heart.png"/>
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          {/* <ColorModeScript /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
