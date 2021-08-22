import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_ID
} from '../constants/actionTypes';
import * as api from '../api';

//Action Creators
// async (dispatch) is coming from redux thunk

export const getProfiles = () => async (dispatch) => {
  try {
    const { data } = await api.getProfiles();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProfileById = (_id) => async (dispatch) => {
  try {
    const { data } = await api.getProfileById();

    dispatch({ type: FETCH_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProfile = (profile) => async (dispatch) => {
  try {
    const { data } = await api.createProfile(profile);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log('zzzzzz', error);
  }
};

export const updateProfile = (_id, profile) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(_id, profile);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProfile = (_id) => async (dispatch) => {
  try {
    await api.deleteProfile(_id);
    dispatch({ type: DELETE, payload: _id });
  } catch (error) {
    console.log(error);
  }
};
