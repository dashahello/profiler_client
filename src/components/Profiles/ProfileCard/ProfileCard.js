import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles.js';
import { deleteProfile } from '../../../actions/profilesActions.js';
import { Link } from 'react-router-dom';

export default function ProfileCard({ profile, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent className={classes.card}>
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
            <Typography style={{ marginLeft: 4 }}>
              {profile.name} {profile.surname}
            </Typography>
          </div>
        </div>
        <CardActions style={{ flexWrap: 'wrap' }}>
          <Button component={Link} to={`/profile/${profile._id}`}>
            View
          </Button>
          <Button
            size="small"
            onClick={() => {
              setCurrentId(profile._id);
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteProfile(profile._id))}
          >
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
