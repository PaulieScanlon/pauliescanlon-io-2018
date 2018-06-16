import Link from 'next/link';

import { Fetcher } from '../fetcher';
import { User } from '../../components/user';
import { Post } from '../../components/post';

<<<<<<< HEAD
=======
import { usersHandler, postsHandler } from '../../utils/api-handlers';

>>>>>>> data/generic-type
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
