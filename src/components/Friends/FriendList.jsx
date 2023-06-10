import { FriendListItem } from "./FriendListItem"
export const FriendList = ({ friends }) => (
    <ul className="friend-list">
        <FriendListItem friends={friends} />
</ul>
)