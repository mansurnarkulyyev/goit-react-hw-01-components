import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import st from 'components/FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={st.container}>
      {friends.map((el) => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar:PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline:PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;