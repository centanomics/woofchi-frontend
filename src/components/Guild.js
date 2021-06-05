import React, { useEffect, useState } from 'react';

import woofChi from '../utils/woofChi';

const setName = async (guildId) => {
  let gName = await woofChi.getGuildName(guildId);
  return gName;
};

const Guild = ({ match, history, location }) => {
  const [gName, setGName] = useState('');
  useEffect(() => {
    let guildId = location.search.substring(location.search.indexOf('=') + 1);
    let guildName = setName(guildId);
    setGName(guildName);
    // eslint-disable-next-line
  }, []);

  return <div>WoofChi - {gName}</div>;
};

export default Guild;
