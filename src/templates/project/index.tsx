import * as React from "react";

import { FullWidth } from "../../styles";

import { theme } from "../../styles/theme";

import { Fetcher } from "../../organisms/fetcher";
import { ProjectSingle } from "../../organisms/projectSingle";

import { postsHandler } from "../../reducers/data-reducers";

import { ThemeProvider } from "emotion-theming";

interface IState {
  id: string;
}

export class Project extends React.Component<null, IState> {
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
        <ThemeProvider theme={theme}>
          {id ? (
            <Fetcher
              fetchMethod={{
                method: "singlePost",
                query: id
              }}
              dataReducer={postsHandler}
              renderComponent={data => <ProjectSingle {...data} />}
            />
          ) : null}
        </ThemeProvider>
      </FullWidth>
    );
  }
}
