import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js';
import { createProfile, updateProfile } from '../../actions/profilesActions.js';

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

  function clear() {
    setCurrentId(null);
    setProfileData({
      name: '',
      surname: '',
      email: '',
      photo: ''
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', profileData.name);
    formData.append('surname', profileData.surname);
    formData.append('email', profileData.email);

    if (currentId) {
      if (profileData.photo instanceof File) {
        formData.append('photo', profileData.photo);
      }
      dispatch(updateProfile(currentId, formData));
    } else {
      formData.append('photo', profileData.photo);
      dispatch(createProfile(formData));
    }

    clear();
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

        <input
          id="contained-button-file"
          type="file"
          style={{ display: 'none' }}
          accept="image/webp, image/jpg, image/jpeg, image/png"
          onChange={(evt) => {
            console.log(evt.target.files);

            setProfileData({ ...profileData, photo: evt.target.files[0] });
          }}
        />
        <label htmlFor="contained-button-file">
          <Button
            className={classes.buttonUpload}
            variant="contained"
            component="span"
          >
            Upload
          </Button>
        </label>

        {profileData.photo ? (
          <Typography style={{ right: '0' }}>File selected</Typography>
        ) : null}

        <Button
          className={classes.buttonSubmit}
          disabled={
            !profileData.name ||
            !profileData.surname ||
            !profileData.email ||
            !profileData.photo
          }
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
