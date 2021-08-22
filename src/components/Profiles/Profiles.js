import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ProfileCard from './ProfileCard/ProfileCard.js';

export default function Profiles({ setCurrentId }) {
  const profiles = useSelector((state) => state.profiles);

  return !profiles.length ? (
    <Typography>Created profiles will be displayed here</Typography>
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {profiles.map((profile) => (
        <Grid key={profile._id} item xs={12} sm={6}>
          <ProfileCard profile={profile} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
