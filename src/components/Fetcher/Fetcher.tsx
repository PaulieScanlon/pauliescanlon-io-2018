import * as React from "react";

import { FetcherIndicator } from "../FetcherIndicator";

import { fetchType } from "../../utils/fetch";

interface IProps {
  fetchMethod: {
    method: string;
    query?: string;
  };
  dataReducer(data: any): any;
  renderComponent(data: any): React.ReactNode;
}

export interface IState {
  isLoading: boolean;
  data: any;
  hasErrored: boolean;
}

export class Fetcher extends React.Component<IProps, IState> {
  public _isMounted = false;

  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      hasErrored: false
    };
  }

  componentDidMount() {
    // @TODO this _isMounted hack is gross.. works though :-)
    this._isMounted = true;
    const { method, query } = this.props.fetchMethod;
    const dataFetch = (fetchType as any)[method](query);
    dataFetch.then((res: any) => {
      if (this._isMounted === true) {
        this.setState({
          isLoading: res.isLoading,
          data: res.data ? this.props.dataReducer(res.data) : null,
          hasErrored: res.hasErrored
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { isLoading, data, hasErrored } = this.state;

    const { renderComponent } = this.props;
    if (isLoading) {
      return <FetcherIndicator variant="Loading" />;
    }

    return hasErrored ? (
      <FetcherIndicator variant="Error" />
    ) : (
      renderComponent(data)
    );
  }
}
