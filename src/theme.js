import { createMuiTheme} from "@material-ui/core/styles";
import { pink, blue } from '@material-ui/core/colors';
import 'lato-font';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[100],
    },
    secondary: {
      main: blue[100],
    }
  },
  typography: {
    fontFamily: [
      'lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 15
  },
});