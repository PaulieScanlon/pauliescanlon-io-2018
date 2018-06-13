import { css } from 'glamor';
import { createMuiTheme } from '@material-ui/core/styles';

css.global('html, body, #root', {
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif'
});

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fb2e69'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#00b5fe'
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contast with palette.secondary.main
    }
    // error: will use the default color
  }
});
