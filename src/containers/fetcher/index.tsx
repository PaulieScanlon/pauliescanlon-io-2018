import * as React from 'react';

import { Loading } from '../../components/loading';
import { Error } from '../../components/error';

import { IFetchState } from '../../types/container-types';
import { goFetch } from '../../utils/fetch';

interface IProps {
  endPoint: string;
  renderComponent(path: string, data: any): React.ReactNode;
}

export class Fetcher extends React.Component<IProps, IFetchState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      hasErrored: false,
      path: ''
    };
  }

  componentDidMount() {
    const userFetch = goFetch[this.props.endPoint]();
    userFetch.then(res => {
      this.setState(
        {
          isLoading: res.isLoading,
          data: res.data ? res.data[this.props.endPoint] : null,
          hasErrored: res.hasErrored
        },
        () => {
          this.setPath(res.url);
        }
      );
    });
  }

  setPath(url: string) {
    const pathname = url.split('/');
    this.setState({
      path: `http://${pathname[2]}`
    });
  }

  render() {
    const { isLoading, data, hasErrored, path } = this.state;

    const { renderComponent } = this.props;
    if (isLoading) {
      return <Loading />;
    }

    return hasErrored ? <Error /> : renderComponent(path, data);
  }
}
