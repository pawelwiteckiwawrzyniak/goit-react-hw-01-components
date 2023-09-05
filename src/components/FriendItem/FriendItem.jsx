import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './FriendItem.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => (
  <Fragment>
    {isOnline ? (
      <span className={css.statusIsOnline}></span>
    ) : (
      <span className={css.statusIsOffline}></span>
    )}
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </Fragment>
);

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
