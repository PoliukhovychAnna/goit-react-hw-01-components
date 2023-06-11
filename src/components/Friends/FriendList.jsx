import css from './FriendList.module.css'
import { FriendListItem } from "./FriendListItem"

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />
        ))}
  </ul>
);
    
    