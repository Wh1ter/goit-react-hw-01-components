import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.scss';

const Statistics = ({ title, stats }) => (
  <div className={styles.wrapper}>
    <section className={styles.statistics}>
      {title && <h3 className={styles.title}>{title}</h3>}

      <ul className={styles.statList}>
        {stats.map(item => (
          <StatisticsItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  </div>
);

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;