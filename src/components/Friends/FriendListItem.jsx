import css from './FriendList.module.css';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline, id}) =>
   (
    <li className={css.item} key={id}>
          <span className={clsx(css.status, isOnline ? css.online : css.offline)}>{isOnline}</span>
      <img
              className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
          <p className={css.name}>{name}</p>
    </li>
  );

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
