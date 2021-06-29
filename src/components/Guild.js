import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getGuildName, getGuildRatings } from '../actions/woofchi';

const Guild = ({
  woofChi: { guildName, ratings },
  getGuildName,
  getGuildRatings,
  location,
}) => {
  // const [guildName, setGuildName] = useState('');
  const guildId = location.search.substring(location.search.indexOf('=') + 1);

  useEffect(() => {
    getGuildName(guildId);
    getGuildRatings(guildId);
    // eslint-disable-next-line
  }, []);

  return <div>WoofChi - {guildName || 'Guild'}</div>;
};

Guild.propTypes = {
  woofChi: PropTypes.object.isRequired,
  getGuildName: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  woofChi: state.woofChi,
});

export default connect(mapStateToProps, { getGuildName, getGuildRatings })(
  Guild
);
