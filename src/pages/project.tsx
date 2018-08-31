import * as React from "react";

import { MainWrapper, ContainedWidth } from "../styles";

import { Fetcher } from "../components/Fetcher";
import { ProjectPage } from "../components/ProjectPage";

import { singlePostHandler } from "../reducers/data-reducers";

interface IState {
  id: string;
}

class Project extends React.Component<any, IState> {
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
      <MainWrapper>
        <ContainedWidth>
          {id ? (
            <Fetcher
              fetchMethod={{
                method: "singlePost",
                query: id
              }}
              dataReducer={singlePostHandler}
              renderComponent={data => <ProjectPage {...data} />}
            />
          ) : null}
        </ContainedWidth>
      </MainWrapper>
    );
  }
}

export default Project;
