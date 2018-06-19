import Link from 'next/link';

import { theme } from './styles/theme';

import { Fetcher } from './containers/fetcher';
import { User } from './containers/user';
import { Post } from './containers/post';

import { usersHandler, postsHandler } from './utils/data-reducers';

import { ThemeProvider } from 'emotion-theming';

export const App: React.SFC = () => {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <ThemeProvider theme={theme}>
        <Fetcher
          endPoint="users"
          dataReducer={usersHandler}
          renderComponent={data => <User {...data} />}
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Fetcher
          endPoint="posts"
          dataReducer={postsHandler}
          renderComponent={data => <Post {...data} />}
        />
      </ThemeProvider>
    </div>
  );
};
