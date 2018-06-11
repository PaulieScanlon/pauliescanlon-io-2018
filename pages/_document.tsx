import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html || page.errorHtml);
    return { ...page, ...styles };
  }

  constructor(props) {
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
          <title>With Glamorous</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script src="http://138.68.162.135/public/ghost-sdk.min.js?v=d1b11a97e4" />
          <script
            dangerouslySetInnerHTML={{
              __html: `            ghost.init({
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