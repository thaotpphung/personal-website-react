import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme} from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[100],
      contrastText: '#fff',
    },
    secondary: {
      main: pink[100]
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
