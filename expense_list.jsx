import React from "react";
import ExpenseItem from "../expense_item/Expenseitem";
import './expense_list.css'
 const ExpenseList=(props)=>{
    const{expenses=[]}=props;
    if(expenses.length===0)
      return <h3 className="expenses-list__fallback">Noexpenses found</h3>
    return(
    <div className="expenses">
          <div className="expenses-list">
            {
            expenses.map((each_expense)=>(//map will iterate each valu
                <ExpenseItem
                key={each_expense.id}
                title={each_expense.title}
                amount={each_expense.amount}
                date={each_expense.date}
                />))
            }
        </div>
    </div>);
 }
 export default ExpenseList;
