import React from "react";
import NewExpenseForm from "./new_expense_form/NewExpenseForm";
import './NewExpense.css';
const NewExpense =(props)=>{
    const {onNewExpenseSave}=props;
    const onAddExpense=(new_expense)=>
    {
        const modified_expense ={
            ...new_expense,
            id: Math.random()*10,
        }
        onNewExpenseSave(modified_expense);

    }
    return(
        <div className="new-expense">

        
        <NewExpenseForm save={onAddExpense}/>
        </div>
        // <form>
        // <div>
                
        //     <div>
        //      <label htmlFor="exense_title">Title</label>
        //         <input type="text" id ="expense_title"
        //         name="title"/>
        //     </div>
        //     <div>
        //         <label htmlFor="expense_amount">Amount</label>
        //         <input type="number"
        //         id="expense_amount"
        //         min="0"
        //         max="10000"
        //         name="amount" />
        //     </div>
        //     <div>
        //         <label htmlFor="expense_date">Date</label>
        //         <input type="date"
        //         id="expense_date" 
        //         name="date"/>
        //     </div>
        // </div>
        // <div>
        //     <button>Cancel</button>
        //     <button>Add Expense</button>
        // </div>

        // </form>

    )
    
}
export default NewExpense;