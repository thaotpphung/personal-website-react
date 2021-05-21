import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme} from "@material-ui/core/styles";
import { pink } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[100],
      contrastText: '#fff',
    },
    secondary: {
      main: pink[100],
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily: [
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
  },
 
});
