import { useMemo } from "react";
import { useBudget } from "../hook/useBudget";
import ExpenseDetail from "./ExpenseDetail";

export function ExpenseList() {
  const { state } = useBudget();

  const filterExpense = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;
  const isEmpty = useMemo(
    () => filterExpense.length == 0,
    [filterExpense.length]
  );

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
      {isEmpty ? (
        <p className=" text-gray-600 text-2xl font-bold">No hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">
            Listado de gastos
          </p>
          {filterExpense.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
