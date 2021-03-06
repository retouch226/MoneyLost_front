import React, { useState, useContext } from "react";
import ExpensesContext from "../../context/ExpensesContext";
import cl from "./SwitchButton.module.css";

const SwitchButton = () => {
  // const [toggleButton, setToggleButton] = useState({
  //   isExpense: true,
  //   isIncome: false,
  // });
  const { switchMode, setSwitchMode } = useContext(ExpensesContext);

  return (
    <div className={cl.switch}>
      <button
        className={` ${switchMode.isExpense ? cl.checkb : ""}`}
        onClick={() => {
          setSwitchMode({ isExpense: true, isIncome: false });
        }}
      >
        EXPENSES
      </button>
      <button
        className={` ${switchMode.isIncome ? cl.checkb : ""}`}
        onClick={() => {
          setSwitchMode({ isExpense: false, isIncome: true });
        }}
      >
        INCOME
      </button>
    </div>
  );
};

export default SwitchButton;
