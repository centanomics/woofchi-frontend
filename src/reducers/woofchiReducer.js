import { SET_LOADING, GET_GUILD_NAME } from '../actions/types';

const initialState = {
  guildName: null,
  loading: false,
};

const woofchiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GUILD_NAME:
      return {
        ...state,
        loading: false,
        guildName: action.payload,
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
