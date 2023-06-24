import "./ExpenseItem.css";

function ExpenseItem() {
  const ExpenseDate = new Date(2023, 6, 24);
  const ExpenseTitle = "Car insurance";
  const ExpenseAmount = 300;
  return (
    <div className="expense-item">
      <div>{ExpenseDate.toDateString()}</div>
      <div>
        <h2 className="expense-item__description">{ExpenseTitle}</h2>
        <div className="expense-item__price">${ExpenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
