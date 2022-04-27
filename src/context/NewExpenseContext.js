import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import ExpensesDetailsContext from "../context/ExpenseDetailsContext";
const NewExpenseContext = createContext({});

export const NewExpenseProvider = ({ children }) => {
  const [switchMode, setSwitchMode] = useState({
    isExpense: true,
    isIncome: false,
  });
  let [amount, setAmount] = useState("");
  // const { allExpenses, setAllExpenses } = useContext(ExpensesDetailsContext);
  const [categoryName, setCategoryName] = useState("");

  const addNewExpense = (categor) => {
    console.log("userId= ", sessionStorage.getItem("userId"));
    const config = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: sessionStorage.getItem("userId"),
        category: categor,
        date: new Date().toLocaleDateString("en-US"),
        moneyAmount: amount,
      }),
    };
    try {
      const response = fetch("http://localhost:3000/expenses", config).then(
        (res) => res.json()
      );
    } catch (error) {}
    // setAllExpenses([
    //   ...allExpenses,
    //   categor,
    //   new Date().toLocaleDateString("en-US"),
    //   amount,
    // ]);
  };

  return (
    <NewExpenseContext.Provider
      value={{
        switchMode,
        setSwitchMode,
        amount,
        setAmount,
        categoryName,
        setCategoryName,
        addNewExpense,
      }}
    >
      {children}
    </NewExpenseContext.Provider>
  );
};

export default NewExpenseContext;
