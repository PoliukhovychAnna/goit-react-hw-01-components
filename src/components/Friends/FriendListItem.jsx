import css from './FriendList.module.css';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';

export const FriendListItem = ({ friends }) =>
  friends.map(friend => (
    <li className={css.item} key={friend.id}>
          <span className={clsx(css.status, friend.isOnline ? css.online : css.offline)}>{friend.isOnline}</span>
      <img
              className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
          <p className={css.name}>{friend.name}</p>
    </li>
  ));

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
