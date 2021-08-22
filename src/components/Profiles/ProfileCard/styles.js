import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    padding: theme.spacing(1)
  }
}));
