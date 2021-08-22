import axios from 'axios';

const url = 'http://localhost:5000/profiles';

export const getProfiles = () => axios.get(url);
export const getProfileById = (_id) => axios.get(`${url}/${_id}`);
export const createProfile = (newProfile) => axios.post(url, newProfile);
export const updateProfile = (_id, updatedProfile) =>
  axios.patch(`${url}/${_id}`, updatedProfile);
export const deleteProfile = (_id) => axios.delete(`${url}/${_id}`);
