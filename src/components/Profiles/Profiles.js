import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SingleProfile from './SingleProfile/SingleProfile.js';
import useStyles from './styles.js';

export default function Profiles({ setCurrentId }) {
  const profiles = useSelector((state) => state.profiles);

  const classes = useStyles();

  //  maybe only using CircularProgress is not the best solution ???
  return !profiles.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {profiles.map((profile) => (
        <Grid key={profile._id} item xs={12} sm={6}>
          <SingleProfile profile={profile} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
