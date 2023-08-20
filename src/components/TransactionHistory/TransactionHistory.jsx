import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
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
          {type === 'invoice' && <td>Invoice</td>}
          {type === 'withdrawal' && <td>Withdrawal</td>}
          {type === 'deposit' && <td>Deposit</td>}
          {type === 'payment' && <td>Payment</td>}
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
