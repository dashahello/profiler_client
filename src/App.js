import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProfiles } from './actions/profilesActions.js';
import NavigationBar from './components/NavigationBar/NavigationBar.js';
import Form from './components/Form/Form.js';
import Profiles from './components/Profiles/Profiles.js';
import useStyles from './styles.js';
import SingleProfile from './components/SingleProfile/SingleProfile.js';

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
        <NavigationBar />
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
                  <Grid item xs={12} md={7}>
                    <Profiles setCurrentId={setCurrentId} />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          </Route>
          <Route path="/profile/:_id" exact>
            <SingleProfile />
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
