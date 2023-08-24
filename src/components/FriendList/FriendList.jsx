import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Fragment>
    {isOnline}
    <span className={css.status}>{isOnline}</span>
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </Fragment>
);

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <li className={css.friendListItem} key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
