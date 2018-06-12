import * as React from 'react';

import { goFetch } from '../../utils/fetch';

interface IProps {
  thing?: any;
}

interface IState {
  thing?: any;
}

export class Sections extends React.Component<IProps, IState> {
  componentDidMount() {
    goFetch.sections();
  }

  render() {
    return <div>Sections</div>;
  }
}
