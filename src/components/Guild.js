import React, { useEffect, useState } from 'react';

const Guild = ({ match, history, location }) => {
  // const [guildName, setGuildName] = useState('');
  const [guildId, setGuildId] = useState('');
  const rawGId = location.search.substring(location.search.indexOf('=') + 1);

  useEffect(() => {
    setGuildId(rawGId);
    console.log(guildId);
    // eslint-disable-next-line
  }, []);

  return <div>WoofChi - Guild</div>;
};

export default Guild;
