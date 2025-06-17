import React,{useState,useEffect} from 'react'
import Cards from './Cards'




const Body = () => {


  const [Amount,setAmount]=useState("");
  const [type,setType]=useState("");
  const [Income,setIncome]=useState(0);
  const [Expense,setExpense]=useState(0);
  const [Transactions,setTransactions] = useState([]);


  const handleInput = ()=>{    
    if(!Amount || type == ""){
      alert("Fields should not be empty");
    }else{
      

      (type=="Income")?setIncome(Income+Number(Amount)):setExpense(Expense+Number(Amount));
      
     
     setTransactions([...Transactions,{
        Amount : Amount,
        type : type,
        date : new Date().toLocaleDateString('IND'),
      }]);
      setAmount('');
      setType('');
    }    
  }


  useEffect(()=>{
    // console.log(1);
    console.log(Transactions);  
  },[Transactions]);
  return (
    <div>
        <div className='w-[70vw] bg-amber-500 mx-auto gap-5 flex items-center p-10 mt-10 max-sm:flex-col' >
          

            <input type="number" placeholder='Enter the amount' className='w-[40%] p-1.5 border max-sm:w-[100%] m-0' value={Amount} 
            onChange={(e)=>{
              setAmount(e.target.value);
            }}/> 
            <select className='w-[35%]  p-1.5 border max-sm:w-[100%]' required value={type} onChange={(e)=>{
              setType(e.target.value);
            }}>
                <option>Select</option>
                <option>Income</option>
                <option>Expense</option>
            </select>
            <input type='submit' className='border p-1 px-8 max-sm:w-[100%]' value="Add"  onClick={handleInput}/>  

            
        </div>
        <div className='grid grid-cols-3 gap-2 m-2'>

       <Cards type="Income" value={Income}/>
       <Cards type="Expense" value={Expense}/> 
       <Cards type="Savings" value={Income - Expense}/> 
        </div>
        <div>
          <table className='border border-2 w-[90%] mx-auto'>
            <thead>
            <tr>

              <th>S.No</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
              </tr>
            </thead>
            <tbody className='text-center'>
            
            
             {Transactions.length > 0 ? (
               Transactions.map((Transaction, key) => (
                 <tr key={key}>
                   <td>{key + 1}</td>
                   <td>{Transaction.Amount}</td>
                   <td>{Transaction.type}</td>
                   <td>{Transaction.date}</td>
                 </tr>
               ))
             ) : (
               <tr>
                 <td colSpan={4} className="text-center">No transactions found</td>
               </tr>
             )}
              
             
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Body