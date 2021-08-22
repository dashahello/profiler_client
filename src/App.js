import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation
} from 'react-router-dom';
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProfiles } from './actions/profiles.js';
import Form from './components/Form/Form.js';
import Profiles from './components/Profiles/Profiles.js';
import useStyles from './styles.js';
import Profile from './components/Profile/Profile.js';

function Navigation() {
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

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getProfiles());
  }, [currentId, dispatch]);

  return (
    <Router>
      <Container maxWidth="lg">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Grow in>
              <Container>
                <Grid
                  container
                  className={classes.mainContainer}
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={3}
                >
                  <Grid item xs={12} sm={7}>
                    <Profiles setCurrentId={setCurrentId} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          </Route>
          <Route path="/profile/:_id" exact>
            <Profile />
          </Route>
          <Route>
            <Typography>Page not found :(</Typography>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
