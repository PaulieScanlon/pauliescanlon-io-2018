import * as React from 'react';

import { goFetch } from '../../utils/fetch';

interface IProps {
  thing?: any;
}

interface IState {
  data: any;
}

export class Users extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    const userData = goFetch.users();
    userData.then(data => {
      this.setState({
        data: data.users[0]
      });
    });
  }

  render() {
    const { data } = this.state;
    console.log('UserData', data);
    return (
      <div>
        <p>{data.name}</p>
        <p>{data.bio}</p>
        <p>{data.twitter}</p>
        <p>{data.website}</p>
      </div>
    );
  }
}
