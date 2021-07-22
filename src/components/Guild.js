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
  //grabs guild id from url
  const guildId = location.search.substring(location.search.indexOf('=') + 1);

  // gets the guild name and ratings on component load
  useEffect(() => {
    getGuildName(guildId);
    getGuildRatings(guildId);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>WoofChi - {guildName || 'Guild'}</h1>
      <section>
        <h2>Rating</h2>
        <div>
          {ratings.map((rating, index) => (
            <p key={rating.user}>
              <span>{index + 1}</span>
              <span>
                <img src={rating.avatar} />
              </span>
              <span>{rating.name}</span>
              <span>{rating.avg} stars</span>
            </p>
          ))}
        </div>
      </section>
    </div>
  );
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
