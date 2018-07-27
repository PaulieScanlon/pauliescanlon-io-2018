import "../../globalStyles";

import { AppWrapper, FullWidth, ContainedWidth } from "../../styles";

import { theme } from "../../styles/theme";

import { Fetcher } from "../../containers/fetcher";
import { User } from "../../containers/user";
import { Post } from "../../containers/post";

import { usersHandler, postsHandler } from "../../utils/data-reducers";

import { ThemeProvider } from "emotion-theming";

export const App: React.SFC = () => {
  return (
    <AppWrapper>
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
            renderComponent={data => <Post {...data} />}
          />
        </ThemeProvider>
      </ContainedWidth>
    </AppWrapper>
  );
};
