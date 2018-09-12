import * as React from "react";

import { MainWrapper, FullWidth } from "../styles";

import { Page } from "../components/Page";
import { Fetcher } from "../components/Fetcher";
import { ProjectPage } from "../components/ProjectPage";

import { singlePostHandler } from "../reducers/data-reducers";

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
  }

  render() {
    const { slug } = this.state;

    return (
      <Page>
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
      </Page>
    );
  }
}

export default Project;
