import axios from 'axios';
import { GET_GUILD_NAME, SET_LOADING, GET_GUILD_RATINGS } from './types';

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
      `${process.env.REACT_APP_WOOFCHI_SERVER_DEV}/api/guilds/guildName/${guildId}`
    );
    const data = await res.data;
    dispatch({
      type: GET_GUILD_NAME,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

// gets all of the users listed from highest to lowest rating

export const getGuildRatings = (guildId) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      `${process.env.REACT_APP_WOOFCHI_SERVER_DEV}/api/guilds/ratings/${guildId}`
    );
    const data = await res.data;
    console.log(data);
    dispatch({
      type: GET_GUILD_RATINGS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
