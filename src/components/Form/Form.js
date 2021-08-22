import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js';
import { createProfile, updateProfile } from '../../actions/profiles.js';

export default function Form({ currentId, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const profile = useSelector((state) =>
    currentId
      ? state.profiles.find((profile) => profile._id === currentId)
      : null
  );

  const [profileData, setProfileData] = useState({
    name: '',
    surname: '',
    email: '',
    photo: ''
  });

  useEffect(() => {
    if (profile) {
      setProfileData(profile);
    }
  }, [profile]);

  function handleSubmit(e) {
    e.preventDefault();

    if (currentId) {
      dispatch(updateProfile(currentId, profileData));
    } else {
      dispatch(createProfile(profileData));
    }

    clear();
  }

  function clear() {
    setCurrentId(null);
    setProfileData({
      name: '',
      surname: '',
      email: '',
      photo: ''
    });
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">
          {currentId ? 'Editing' : 'Creating'} a Profile :)
        </Typography>

        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={profileData.name}
          onChange={(e) =>
            setProfileData({ ...profileData, name: e.target.value })
          }
        />

        <TextField
          name="surname"
          variant="outlined"
          label="Surname"
          fullWidth
          value={profileData.surname}
          onChange={(e) =>
            setProfileData({ ...profileData, surname: e.target.value })
          }
        />

        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={profileData.email}
          onChange={(e) =>
            setProfileData({ ...profileData, email: e.target.value })
          }
        />

        <div className={classes.fileInput}>File Base was here</div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

//
