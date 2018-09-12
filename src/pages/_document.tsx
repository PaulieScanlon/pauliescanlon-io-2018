import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }: any) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props: any) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${
              process.env.GA_KEY
            }`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_KEY}');
          `
            }}
          />

          <link
            rel="icon"
            type="image/png"
            href={`${process.env.GHOST_CMS}/content/images/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${process.env.GHOST_CMS}/content/images/favicon-16x16.png`}
            sizes="16x16"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
          />
          <title>PaulieScanlon.io</title>
          <meta property="og:title" content="Paul Scanlon" />
          <meta
            property="og:description"
            content="I'm a React UI developer (contract) based in North London. JavaScript, TypeScript, TDD (Jest/Enzyme) and tiny bit of Node.js"
          />
          <meta
            property="og:image"
            content={`${
              process.env.GHOST_CMS
            }/content/images/pauliescanlon-io_1920x960.jpg`}
          />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
            rel="stylesheet"
          />
          <script
            src={`${
              process.env.GHOST_CMS
            }/public/ghost-sdk.min.js?v=d1b11a97e4`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `ghost.init({
                  clientId: "ghost-frontend",
                  clientSecret: "7e66121d4050"
              });`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
