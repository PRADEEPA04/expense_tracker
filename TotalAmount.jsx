import React from "react";
import ExpenseList from "../expenses/expense_list/expense_list";
import ExpenseItem from "../expenses/expense_list/expense_list";
import './TotalAmount.css';
const TotalAmount = (props) => {
   let sum=0;
   let max;
   const {expenses = []}=props;
   expenses.forEach((expense) => {
    console.log(sum, expense);
    sum += (expense.amount*1);
   })
    // for(let i=0;i<expenses.length;i++)
    //     {
    //         sum=sum+expenses[i].amount;
    //     }
    
    max=sum;
    if(sum<5000)
    {
        sum=`Total Amount,${sum}`
    }
    else
    {
        //sum=sum+ ' ' + 'Warning!!!!'
        sum = `you spending a lot , exceeded 5000, ${sum}`

    }
    return (
       <div>
       <div className="amount">{sum}</div>
       <div className="bal">Salary : 30000
        <div>Remaining Balance : { 30000-max}</div>
        </div>
       </div>
)
    }

export default TotalAmount