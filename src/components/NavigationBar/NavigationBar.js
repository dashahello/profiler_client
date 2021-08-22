import { AppBar, Button, Typography } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import useStyles from './styles.js';

export default function NavigationBar() {
  const location = useLocation();

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography className={classes.heading} variant="h4" align="center">
          PROFILER
        </Typography>

        {location.pathname === '/' ? null : (
          <Button component={Link} to="/">
            Go back
          </Button>
        )}
      </div>
    </AppBar>
  );
}
