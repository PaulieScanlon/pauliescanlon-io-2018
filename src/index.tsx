import Link from 'next/link';

import { Fetcher } from './containers/fetcher';
import { User } from './components/user';
import { Post } from './components/post';

import { usersHandler, postsHandler } from './utils/api-handlers';

export const App: React.SFC = () => {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Fetcher
        endPoint="users"
        dataHandler={usersHandler}
        renderComponent={data => <User {...data} />}
      />
      <Fetcher
        endPoint="posts"
        dataHandler={postsHandler}
        renderComponent={data => <Post {...data} />}
      />
    </div>
  );
};
