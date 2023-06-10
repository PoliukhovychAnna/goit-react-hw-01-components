import css from './FriendList.module.css'
import { FriendListItem } from "./FriendListItem"

export const FriendList = ({ friends }) => (
    <ul className={css.friendList} >
        <FriendListItem friends={friends} />
</ul>
)