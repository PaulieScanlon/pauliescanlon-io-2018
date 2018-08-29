import * as React from "react";

import { FullWidth } from "../../../ui/styles/styles";

import Fetcher from "../../organisms/fetcher";
import Project from "../../organisms/project";

import { singlePostHandler } from "../../../reducers/data-reducers";

interface IState {
  id: string;
}

export class ProjectTemplate extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: ""
    };
  }

  componentDidMount() {
    const query = window.location;
    const id = query.search.split("?project=").join("");
    this.setState({
      id
    });
  }

  render() {
    const { id } = this.state;

    return (
      <FullWidth>
        {id ? (
          <Fetcher
            fetchMethod={{
              method: "singlePost",
              query: id
            }}
            dataReducer={singlePostHandler}
            renderComponent={data => <Project {...data} />}
          />
        ) : null}
      </FullWidth>
    );
  }
}
