import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import useStyles from './styles.js';
import { deleteProfile } from '../../../actions/profiles.js';
import { Link } from 'react-router-dom';

export default function SingleProfile({ profile, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // fake url exists to prevent mui error
  return (
    <Card>
      <CardContent className={classes.card}>
        <div style={{ display: 'flex' }}>
          <Avatar>{profile.name[0]}</Avatar>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography style={{ marginLeft: 4 }}>
              {profile.surname} {profile.name}
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

// return (
//   <Card className={classes.card}>
//     {/* <CardMedia
//       className={classes.media}
//       src={fakeImgUrl}
//       //image={profile.selectedFile}
//       title={profile.name}
//     /> */}

//     <div className={classes.overlay}>
//       <Typography variant="h6">{profile.surname}</Typography>
//       {/* <Typography variant="body2">
//         {moment(profile.createdAt).fromNow()}
//       </Typography> */}
//     </div>

//     <div className={classes.overlay2}>
//       <Button
//         style={{ color: 'white' }}
//         size="small"
//         onClick={() => {
//           setCurrentId(profile._id);
//         }}
//       >
//         <MoreHorizIcon fontSize="medium" />
//       </Button>
//     </div>
//     {/*
//     <div className={classes.details}>
//       <Typography variant="body2" color="textSecondary">
//         {profile.tags.map((tag) => `#${tag} `)}
//       </Typography>
//     </div> */}

//     <Typography className={classes.title} variant="h5" gutterBottom>
//       {profile.name}
//     </Typography>

//     <CardContent>
//       <Typography variant="body2" color="textSecondary" component="p">
//         {profile.email}
//       </Typography>
//     </CardContent>

//     <CardActions className={classes.cardActions}>
//       {/* <Button
//         size="small"
//         color="primary"
//         onClick={() => dispatch(likePost(profile._id))}
//       >
//         <ThumbUpAltIcon fontSize="small" />
//         &nbsp; Like &nbsp;
//         {profile.likeCount}
//       </Button> */}
//       <Button
//         size="small"
//         color="primary"
//         onClick={() => dispatch(deleteProfile(profile._id))}
//       >
//         <DeleteIcon fontSize="small" />
//         Delete
//       </Button>
//     </CardActions>
//   </Card>
// );
