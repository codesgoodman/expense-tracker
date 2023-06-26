import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [EnteredTitle, SetEnteredTitle] = useState(""); //Empty string since nothing was input initially"
  const [EnteredAmount, SetEnteredAmount] = useState("");
  const [EnteredDate, SetEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;