import React, { useState } from "react"
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/Expensedate";
function ExpenseItem(props) {
    console.log(props);
    //const date ='12-04-2023';
    //const title ="Hello world";
    //const amount='100';
    const {
        date = new Date(), title = '', amount = 0
    } = props;
    console.log();
    //const month=date.toLocaleString('en-Us',{month:'long'});
    //const day=date.toLocaleString('en-Us',{day:'numeric'});
    //const year=date.getFullYear();
    const[modified_title, setModifiedTitle]=useState(title)
   {/* const onClickHandler=()=>{
        setModifiedTitle('updated');
        console.log(modified_title,props);
    }*/}
    return (

        <div className="expense-item">
           {/* <button onClick={onClickHandler}>update</button>*/}
            <ExpenseDate date={date} />

            <div className="expense-item__description">
                <h2>{modified_title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;