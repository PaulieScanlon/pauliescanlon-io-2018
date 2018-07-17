import * as React from "react";
import "./globalStyles";

import { AppWrapper, FullWidth } from "./styles";

import { theme } from "./styles/theme";

import { Fetcher } from "./containers/fetcher";
import { Thing } from "./containers/thing";

import { thingHandler } from "./utils/data-reducers";

import { ThemeProvider } from "emotion-theming";

export class Asd extends React.Component {
  componentDidMount() {
    console.log("componentDidMount: Asd");
  }

  render() {
    return (
      <AppWrapper>
        <FullWidth>
          <div>Asd</div>
          <ThemeProvider theme={theme}>
            <Fetcher
              endPoint="posts"
              dataReducer={thingHandler}
              renderComponent={data => <Thing {...data} />}
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
