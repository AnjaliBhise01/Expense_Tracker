import styled from "styled-components";
import { useState, useEffect } from "react";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Montserrat;
`;

const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransaction = (payload) => {
    updateTransaction([...transactions, payload]);
  };

  useEffect(() => {
    let exp = 0, inc = 0;
    transactions.forEach((payload) => {
      payload.type === "EXPENSE" ? (exp += payload.amount) : (inc += payload.amount);
    });
    updateExpense(exp);
    updateIncome(inc);
  }, [transactions]);

  return (
    <Container>
      <OverviewComponent 
        addTransaction={addTransaction} 
        expense={expense} 
        income={income} 
      />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
};

export default HomeComponent;
