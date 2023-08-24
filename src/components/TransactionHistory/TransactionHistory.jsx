import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactions}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          {type === 'invoice' && <td className={css.table}>Invoice</td>}
          {type === 'withdrawal' && <td className={css.table}>Withdrawal</td>}
          {type === 'deposit' && <td className={css.table}>Deposit</td>}
          {type === 'payment' && <td className={css.table}>Payment</td>}
          <td className={css.table}>{amount}</td>
          <td className={css.table}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
