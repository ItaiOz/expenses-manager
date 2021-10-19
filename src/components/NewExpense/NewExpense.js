import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(!isEditing);
  };

  const toggleVisibilityButton = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {isEditing === true ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleVisibilityButton}
        />
      ) : (
        <button type="button" onClick={toggleVisibilityButton}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
