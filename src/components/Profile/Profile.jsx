import PropTypes from 'prop-types';

import st from 'components/Profile/Profile.module.css';
export const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;

  return (
    <div className={st.profile}>
      <div className={st.description}>
        <img src={avatar} alt="User avatar" className={st.avatar} />
        <p className={st.userName}>{username}</p>
        <p className={st.tag}>@{tag}</p>
        <p className={st.location}>{location}</p>
      </div>

      <ul className={st.stats}>
        <li className={st.statsItem}>
          <span className={st.label}>Followers</span>
          <span className={st.quantity}>{followers}</span>
        </li>
        <li className={st.statsItem}>
          <span className={st.label}>Views</span>
          <span className={st.quantity}>{views}</span>
        </li>
        <li className={st.statsItem}>
          <span className={st.label}>Likes</span>
          <span className={st.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
