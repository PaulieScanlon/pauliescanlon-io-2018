import Link from 'next/link';
import { theme } from '../src/styles/';
import { Fetcher } from '../src/containers/fetcher';
import { User } from '../src/components/user';

import { MuiThemeProvider } from '@material-ui/core/styles';

export default () => (
  <MuiThemeProvider theme={theme}>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
    <Fetcher endPoint="users" renderComponent={data => <User {...data} />} />
  </MuiThemeProvider>
);
