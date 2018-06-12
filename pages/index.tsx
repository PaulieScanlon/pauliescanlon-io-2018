import Link from 'next/link';

import { Users } from '../src/containers/users';
import { Sections } from '../src/containers/sections';

export default () => (
  <div>
    Hello World.{' '}
    <Link href="/about">
      <a>About</a>
    </Link>
    <Users />
    <Sections />
  </div>
);
