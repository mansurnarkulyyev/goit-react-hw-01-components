import PropTypes from 'prop-types';

import st from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={st.Container}>
      <section className={st.statistics}>
        {title && <h2 className={st.title}>{title}</h2>}

        <ul className={st.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={st.item}
              key={id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={st.label}>{label}</span>
              <span className={st.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
