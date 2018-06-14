import Link from 'next/link';

import { Fetcher } from '../src/containers/fetcher';
import { User } from '../src/components/user';

export default () => (
  <div>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Fetcher endPoint="users" renderComponent={data => <User {...data} />} />
  </div>
);
