import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_ID
} from '../constants/actionTypes.js';

// profiles is a state
const profiles = (profiles = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case FETCH_BY_ID:
      return action.payload;

    case CREATE:
      return [...profiles, action.payload];

    case UPDATE:
      return profiles.map((profile) =>
        profile._id === action.payload._id ? action.payload : profile
      );

    case DELETE:
      return profiles.filter((profile) => profile._id !== action.payload);

    default:
      return profiles;
  }
};

export default profiles;
