import * as React from "react";

import { Loading } from "../../atoms/loading";
import { Error } from "../../atoms/error";

import { fetchType } from "../../utils/fetch";

interface IProps {
  fetchMethod: {
    method: string;
    query?: string;
  };
  dataReducer(data: any);
  renderComponent(data: any): React.ReactNode;
}

export interface IState {
  isLoading: boolean;
  data: any;
  hasErrored: boolean;
}

export class Fetcher extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      hasErrored: false
    };
  }

  componentDidMount() {
    const { method, query } = this.props.fetchMethod;
    const dataFetch = fetchType[method](query);

    dataFetch.then(res => {
      this.setState({
        isLoading: res.isLoading,
        data: res.data ? this.props.dataReducer(res.data) : null,
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
