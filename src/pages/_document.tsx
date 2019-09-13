import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }: any) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_KEY}`}
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
            href="http://138.68.162.135/content/images/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="http://138.68.162.135/content/images/favicon-16x16.png"
            sizes="16x16"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
            rel="stylesheet"
          />
          <script src="http://138.68.162.135/public/ghost-sdk.min.js?v=2dc4fefcb7" />
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
