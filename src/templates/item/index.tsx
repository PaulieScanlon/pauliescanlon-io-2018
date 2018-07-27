import * as React from "react";

import { TemplateWrapper, FullWidth } from "../../styles";

import { theme } from "../../styles/theme";

import { Fetcher } from "../../organisms/fetcher";
import { SingleItem } from "../../organisms/singleItem";

import { postsHandler } from "../../reducers/data-reducers";

import { ThemeProvider } from "emotion-theming";

interface IState {
  id: string;
}

export class Item extends React.Component<null, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: ""
    };
  }

  componentDidMount() {
    const query = window.location;

    const id = query.search.split("?post=").join("");
    this.setState({
      id
    });
  }

  render() {
    const { id } = this.state;

    return (
      <TemplateWrapper>
        <FullWidth>
          <ThemeProvider theme={theme}>
            {id ? (
              <Fetcher
                fetchMethod={{
                  method: "singlePost",
                  query: id
                }}
                dataReducer={postsHandler}
                renderComponent={data => <SingleItem {...data} />}
              />
            ) : null}
          </ThemeProvider>
        </FullWidth>
      </TemplateWrapper>
    );
  }
}
