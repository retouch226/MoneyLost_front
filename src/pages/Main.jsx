import React, { useState, useContext } from "react";
import "../styles/App.css";
import Header from "../components/Header/Header";
import ExpensesDetails from "../components/ExpensesDetails/ExpensesDetails";
import "../styles/App.css";
import { useFetching } from "../components/hooks/useFetching";
import { useEffect } from "react";
import DateMode from "../components/DateMode";
import { ExpensesDetailsProvider } from "../context/ExpenseDetailsContext";
import CategoryContext from "../context/CategoryContext";

const Main = () => {
  const { category, setCategory } = useContext(CategoryContext);

  const categoryUrl = "http://localhost:3000/category/";

  const [fetchCategories] = useFetching(async () => {
    await fetch(categoryUrl)
      .then((res) => res.json())
      .then((json) => setCategory(json.answer))
      .then((data) => console.log(data));
  });

  useEffect(() => {
    fetchCategories();
  }, []);
  // console.log(category);
  return (
    <div className="wrapper">
      <ExpensesDetailsProvider>
        <Header />
        <DateMode />
        <section className="main">
          <ExpensesDetails category={category} />
        </section>
      </ExpensesDetailsProvider>
    </div>
  );
};

export default Main;
