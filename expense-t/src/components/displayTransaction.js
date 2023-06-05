function DisplayTransaction (props){
    return (
        <div>
            <h4>History of your transaction</h4>

    {props.transaction.map((data)=>(
        <div>
            <div className="list-Item">
                <div>
                <h6>{data.trnsactionItem}</h6>
                </div>
            <div> 
            <h6>{data.amount}</h6>
            </div>
           <div>
            {data.trnsactionType = "Expense" ? <div className="expenseIndicator" ></div> : <div className="incomeIndicator"></div>} 
            <h6>{data.trnsactionType}</h6>
            </div>
            </div>
            </div>
        
    ))}
        </div> 
    )
}

export default DisplayTransaction