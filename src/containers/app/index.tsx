import Link from 'next/link';

import { Fetcher } from '../fetcher';
import { User } from '../../components/user';

export const App: React.SFC = () => {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Fetcher endPoint="users" renderComponent={data => <User {...data} />} />
    </div>
  );
};
