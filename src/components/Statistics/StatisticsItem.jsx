import PropTypes from 'prop-types';

import styles from './Statistics.module.scss';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8);

const StatisticsItem = ({ item: { label, percentage } }) => (
  <li style={{ backgroundColor: randomColor() }} className={styles.item}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsItem;