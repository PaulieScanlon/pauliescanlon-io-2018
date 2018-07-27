import * as React from "react";
import { FullWidth, ContainedWidth } from "../../styles";

import { theme } from "../../styles/theme";

import { Fetcher } from "../../organisms/fetcher";
import { User } from "../../organisms/user";
import { Posts } from "../../organisms/posts";

import { usersHandler, postsHandler } from "../../reducers/data-reducers";

import { ThemeProvider } from "emotion-theming";

export const Home: React.SFC = () => {
  return (
    <React.Fragment>
      <FullWidth>
        <ThemeProvider theme={theme}>
          <Fetcher
            fetchMethod={{
              method: "users",
              query: "1"
            }}
            dataReducer={usersHandler}
            renderComponent={data => <User {...data} />}
          />
        </ThemeProvider>
      </FullWidth>
      <ContainedWidth>
        <ThemeProvider theme={theme}>
          <Fetcher
            fetchMethod={{
              method: "posts"
            }}
            dataReducer={postsHandler}
            renderComponent={data => <Posts {...data} />}
          />
        </ThemeProvider>
      </ContainedWidth>
    </React.Fragment>
  );
};
