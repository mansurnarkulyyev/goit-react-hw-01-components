import PropTypes from 'prop-types';
import st from 'components/FriendList/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={st.item}>
      <span
        className={st.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      >
        {isOnline}
      </span>
      <img className={st.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={st.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
