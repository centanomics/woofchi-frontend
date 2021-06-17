import {SET_LOADING, GET_GUILD_NAME} from '../actions/types';

const initialState = {
  guildName = null,
  loading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: false,
        guildName = action.payload,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}