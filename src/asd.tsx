import * as React from "react";
import "./globalStyles";

import { AppWrapper, FullWidth } from "./styles";

import { theme } from "./styles/theme";

import { Fetcher } from "./containers/fetcher";
import { Thing } from "./containers/thing";

import { thingHandler } from "./utils/data-reducers";

import { ThemeProvider } from "emotion-theming";

interface IState {
  id: string;
}

export class Asd extends React.Component<null, IState> {
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
    return (
      <AppWrapper>
        <FullWidth>
          <div>Asd</div>
          {/* <div>{pageProps}</div> */}
          <ThemeProvider theme={theme}>
            <Fetcher
              endPoint="posts"
              dataReducer={thingHandler}
              renderComponent={data => (
                <Thing posts={data.posts} id={this.state.id} />
              )}
            />
          </ThemeProvider>
        </FullWidth>
      </AppWrapper>
    );
  }
}

// import "./globalStyles";

// import { AppWrapper, FullWidth } from "./styles";

// import { theme } from "./styles/theme";

// import { Fetcher } from "./containers/fetcher";
// import { Thing } from "./containers/thing";

// import { thingHandler } from "./utils/data-reducers";

// import { ThemeProvider } from "emotion-theming";

// export const Asd: React.SFC = () => {
//   return (
//     <AppWrapper>
//       <FullWidth>
//         <div>Asd</div>
//         <ThemeProvider theme={theme}>
//           <Fetcher
//             endPoint="posts"
//             dataReducer={thingHandler}
//             renderComponent={data => <Thing {...data} />}
//           />
//         </ThemeProvider>
//       </FullWidth>
//     </AppWrapper>
//   );
// };
