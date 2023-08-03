import React, { useState } from "react";
import './NewExpenseForm.css'
const NewExpenseForm =(props)=>{
    const {save}=props;
    // const [title, setTitle]=useState(null);
    let [title,setTitle]= useState(null);
    let [amount,setAmount]= useState(null);
    let [date,setDate]= useState(null);
    const onTitleChangeHandler=(event) =>
    {
        setTitle(event.target.value);
        // title= event.target.value;
    }
    // const onFormSubmitHandler =(event) =>
    // {

    // }
    const onAmountChangeHandler=(event) =>
    {
        setAmount(event.target.value);
        // amount= event.target.value;
    }
    const onDateChangeHandler=(event) =>
    {
        setDate(event.target.value);
        // date= event.target.value;
    }
    const onFormSubmitHandler = (event) =>
    {
        event.preventDefault();
        const new_expense={
            title,amount,date:new Date(date)
        }
        save(new_expense);
        setTitle('');
        setAmount('');
        setDate('');
    };
    return(
        <form onSubmit={onFormSubmitHandler}>
        <div className="new-expense__controls">
                
            <div className="new-expense__control ">
             <label htmlFor="exense_title">Title</label>
                <input type="text" id ="expense_title"
                name="title"
                value={title}
                onChange={onTitleChangeHandler}/>
            </div>
            <div className="new-expense__control ">
                <label htmlFor="expense_amount">Amount</label>
                <input type="number"
                id="expense_amount"
                min="0"
                max="10000"
                name="amount" 
                value={amount}
                onChange={onAmountChangeHandler}/>

            </div>
            <div className="new-expense__control ">
                <label htmlFor="expense_date">Date</label>
                <input type="date"
                id="expense_date" 
                name="date"
                value={date}
                onChange={onDateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button>Cancel</button>
            <button>Add Expense</button>
        </div>

        </form>

    );
    
};
export default NewExpenseForm;