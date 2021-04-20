import PropTypes from 'prop-types';

import FriendListItem from './FriendsListItem';

import styles from './FriendList.module.scss';

const FriendList = ({ friends }) => (
  <div className={styles.wrapper}>
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  </div>
);

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;