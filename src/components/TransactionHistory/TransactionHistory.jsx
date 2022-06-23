import PropTypes from 'prop-types';

import st from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={st.transactionHistory}>
      <thead>
        <tr className={st.tableHead}>
          <th className={st.tableHeadItem}>Type</th>
          <th className={st.tableHeadItem}>Amount</th>
          <th className={st.tableHeadItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={st.tableItem} key={id}>
            <td className={st.tableTd}>{type}</td>
            <td className={st.tableTd}>{amount}</td>
            <td className={st.tableTd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

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
