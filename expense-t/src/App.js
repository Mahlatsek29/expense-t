// import logo from './logo.svg';
import './App.css';
import AddTransaction from './components/add';
import DisplayTransaction from './components/displayTransaction';

import {useState} from 'react'

function App() {

 

  const [transaction, setTransaction]= useState ([]);

  const add= (transactionItem, amount, transactionType)=>{ setTransaction ((transaction)=>[...transaction, {transactionItem:transactionItem, amount:amount, transactionType:transactionType}]);
  console.log(transaction);   
};

  return (
    <div className="container">
      <DisplayTransaction  transaction={transaction}/>
     <AddTransaction add={add}/>
    </div>
  );
}

export default App;
