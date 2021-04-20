import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';

const TransactionHistoryItem = ({ item: { type, amount, currency } }) => (
  <tr className={styles.tablerow}>
    <td className={styles.type}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistoryItem;