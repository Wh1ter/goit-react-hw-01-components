import PropTypes from 'prop-types';
import friendAvatarPlaceholder from './happy-user-placeholder.png';

import styles from './FriendList.module.scss';

const FriendListItem = ({
  friend: { avatar=friendAvatarPlaceholder, name, isOnline },
}) => {
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item}>
      <span className={statusClass}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name}  width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};


FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;