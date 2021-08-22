import { Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProfiles } from '../../actions/profilesActions.js';

export default function SingleProfile() {
  //const classes = useStyles();

  const dispatch = useDispatch();

  const { _id } = useParams();

  useEffect(() => {
    dispatch(getProfiles());
  }, [_id, dispatch]);

  const profile = useSelector((state) =>
    state.profiles.filter((x) => x._id === _id)
  )[0];
  //@TODO styling for single component
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
          <Typography style={{ marginLeft: 4 }}>
            {profile.name} {profile.surname}
          </Typography>
        </div>
      </div>
      <Typography style={{ color: 'red' }}>{profile.email}</Typography>
    </Paper>
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
