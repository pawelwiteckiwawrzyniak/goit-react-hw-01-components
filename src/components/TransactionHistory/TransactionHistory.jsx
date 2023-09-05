import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactions}>
    <thead>
      <tr>
        <th className={css.tableHead}>Type</th>
        <th className={css.tableHead}>Amount</th>
        <th className={css.tableHead}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          {type === 'invoice' && <td className={css.tableCell}>Invoice</td>}
          {type === 'withdrawal' && (
            <td className={css.tableCell}>Withdrawal</td>
          )}
          {type === 'deposit' && <td className={css.tableCell}>Deposit</td>}
          {type === 'payment' && <td className={css.tableCell}>Payment</td>}
          <td className={css.tableCell}>{amount}</td>
          <td className={css.tableCell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
