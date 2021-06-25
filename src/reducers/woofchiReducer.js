import {
  SET_LOADING,
  GET_GUILD_NAME,
  GET_GUILD_RATINGS,
} from '../actions/types';

const initialState = {
  guildName: null,
  loading: false,
  ratings: null,
};

const woofchiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GUILD_NAME:
      return {
        ...state,
        loading: false,
        guildName: action.payload,
      };
    case GET_GUILD_RATINGS:
      return {
        ...state,
        loading: false,
        ratings: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default woofchiReducer;
