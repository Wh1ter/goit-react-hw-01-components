import PropTypes from 'prop-types';

import TransactionHistoryItem from './TransactionHistoryItem';

import styles from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => (
  <div>
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.type}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;