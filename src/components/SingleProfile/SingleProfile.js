import { Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProfiles } from '../../actions/profilesActions.js';

export default function SingleProfile() {
  const dispatch = useDispatch();

  const { _id } = useParams();

  useEffect(() => {
    dispatch(getProfiles());
  }, [_id, dispatch]);

  const profile = useSelector((state) =>
    state.profiles.filter((x) => x._id === _id)
  )[0];
  return !profile ? null : (
    <Paper>
      <div style={{ display: 'flex' }}>
        <img
          style={{ width: 50, height: 50 }}
          src={`${process.env.REACT_APP_SERVER_URL}/${profile.photo}`}
          alt=""
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Typography style={{ marginLeft: 8 }}>
            {profile.name} {profile.surname}
          </Typography>
        </div>
      </div>

      <Typography style={{ color: 'blue' }}>{profile.email}</Typography>
    </Paper>
  );
}
