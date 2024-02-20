import React, { useState } from "react";
import '../App.css';

function AddTransaction(props) {
  const [transactionItem, setTransactionItem] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const add = () => {
    props.add(transactionItem, amount, transactionType);
  };

  return (
    <div className="add-transaction-container">
      <h1>Add a new transaction</h1>
      <input
        type="text"
        placeholder="Enter item"
        onChange={(event) => setTransactionItem(event.target.value)}
        className="animated-input"
      />
      <br />
      <input
        type="text"
        placeholder="Enter amount"
        onChange={(event) => setAmount(event.target.value)}
        className="animated-input"
      />
      <br />
      <select
        onChange={(event) => setTransactionType(event.target.value)}
        className="animated-input"
      >
        <option>Income</option>
        <option>Expense</option>
      </select>
      <br />
      <button onClick={add} className="add-button">
        Add a transaction
      </button>
    </div>
  );
}

export default AddTransaction;