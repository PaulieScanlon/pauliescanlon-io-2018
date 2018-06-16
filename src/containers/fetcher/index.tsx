import * as React from 'react';

import { Loading } from '../../components/loading';
import { Error } from '../../components/error';

import { IFetchState } from '../../types/container-types';
import { fetchType } from '../../utils/fetch';

interface IProps {
  endPoint: string;
<<<<<<< HEAD
=======
  dataHandler(data: any);
>>>>>>> data/generic-type
  renderComponent(data: any): React.ReactNode;
}

export class Fetcher extends React.Component<IProps, IFetchState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      hasErrored: false
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    const userFetch = goFetch[this.props.endPoint]();
    userFetch.then(res => {
=======
    const dataFetch = fetchType[this.props.endPoint]();
    dataFetch.then(res => {
>>>>>>> data/generic-type
      this.setState({
        isLoading: res.isLoading,
        data: res.data
          ? this.props.dataHandler(res.data[this.props.endPoint])
          : null,
        hasErrored: res.hasErrored
      });
    });
  }

  render() {
    const { isLoading, data, hasErrored } = this.state;

    const { renderComponent } = this.props;
    if (isLoading) {
      return <Loading />;
    }

    return hasErrored ? <Error /> : renderComponent(data);
  }
}
