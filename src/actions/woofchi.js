import axios from 'axios';
import { GET_GUILD_NAME, SET_LOADING } from './types';

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// gets the guildname from the server
export const getGuildName = (guildId) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      `${process.env.REACT_APP_WOOFCHI_SERVER_DEV}/json${guildId}`
    );
    const data = await res.json();
    dispatch({
      type: GET_GUILD_NAME,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
