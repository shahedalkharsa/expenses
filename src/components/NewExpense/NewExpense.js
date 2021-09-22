import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDateHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
    setIsEditing(false);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div class="new-expense">
      {!isEditing && (
        <button onClick={() => startEditingHandler()}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={onSaveExpenseDateHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
