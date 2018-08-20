import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

// switch to emotion:
// https://github.com/zeit/next.js/blob/master/examples/with-emotion/pages/_document.js

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
          <title>Paul Scanlon</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
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
