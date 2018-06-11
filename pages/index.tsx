import Link from 'next/link';

import { User } from '../src/containers/user';

export default () => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
    <User />
  </div>
);
