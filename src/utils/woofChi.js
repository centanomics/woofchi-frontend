import axios from 'axios';

const woofChi = {
  getGuildName: async (guildId) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_WOOFCHI_SERVER_DEV}/json/${guildId}`
    );
    return data;
  },
};

export default woofChi;
