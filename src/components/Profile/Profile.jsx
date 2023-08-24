import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.profileLabel}>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span className={css.profileLabel}>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span className={css.profileLabel}>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};
