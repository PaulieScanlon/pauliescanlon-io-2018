import * as React from 'react';

import { goFetch } from '../../utils/fetch';

interface IProps {
  thing?: any;
}

interface IState {
  thing?: any;
}

export class User extends React.Component<IProps, IState> {
  componentDidMount() {
    goFetch.users();
  }

  render() {
    return <div>User</div>;
  }
}
