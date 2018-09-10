import * as React from "react";

import { MainWrapper, FullWidth } from "../styles";

import { Fetcher } from "../components/Fetcher";
import { ProjectPage } from "../components/ProjectPage";

import { singlePostHandler } from "../reducers/data-reducers";
import { logPageView } from "../utils/google-analytics";

interface IState {
  slug: string;
}

class Project extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      slug: ""
    };
  }

  componentDidMount() {
    const query = window.location;
    const slug = query.search.split("?slug=").join("");
    this.setState({
      slug
    });

    logPageView(window.location);
  }

  render() {
    const { slug } = this.state;

    return (
      <MainWrapper>
        <FullWidth>
          {slug ? (
            <Fetcher
              fetchMethod={{
                method: "singlePost",
                query: slug
              }}
              dataReducer={singlePostHandler}
              renderComponent={data => <ProjectPage {...data} />}
            />
          ) : null}
        </FullWidth>
      </MainWrapper>
    );
  }
}

export default Project;
