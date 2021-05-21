import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
  },
  selfie: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '250px',
    borderRadius: '50%',
  },
  link: {
    color: 'black',
    '&:hover': {
      textDecoration: 'none'
    }
  },
}));

export default useStyles;
