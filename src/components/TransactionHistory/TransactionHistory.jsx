import PropTypes from 'prop-types';

import st from 'components/TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {

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
        {items.map((el) => (
          <tr className={st.tableItem} key={el.id}>
            <td className={st.tableTd}>{el.type}</td>
            <td className={st.tableTd}>{el.amount}</td>
            <td className={st.tableTd}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {
  items:[],
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;