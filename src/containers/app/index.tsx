import Link from 'next/link';

import { Fetcher } from '../fetcher';
import { User } from '../../components/user';

// const users = ():string => {
//   return "test"
// }

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

// dataHandler={(data) => users<String>(data) }
