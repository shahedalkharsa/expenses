import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChanheHandler = (event) => {
    setEnteredTitle(event.target.value); // to get the value of input
  };

  const amountChanheHandler = (event) => {
    setEnteredAmount(event.target.value); // to get the value of input
  };

  const dateChanheHandler = (event) => {
    setEnteredDate(event.target.value); // to get the value of input
  };

  const submitHandler = (event) => {
    event.preventDefault(); //not reload the page

    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseDate(expenseDate);

    console.log(expenseDate);
    setEnteredDate("");
    setEnteredAmount("");
    setEnteredTitle(""); //so after the submit , we clear the values
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChanheHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChanheHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChanheHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type={"button"} onClick={() => props.onCancel()}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
