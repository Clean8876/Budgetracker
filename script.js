const transactionList = document.getElementById('transactions')
const transactionIncome = document.getElementById('total-income')
const transactionExpense = document.getElementById('total-expense')
const transactionNet = document.getElementById('total-net')

let transactions =[];

document.getElementById("addtrans").addEventListener("click",addTransaction);

function addTransaction() {
    const desc = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const transtype = document.getElementById('trans-type').value;

    if(desc && isNaN(amount)){
        const  transaction = {desc,amount,type:transtype};
        transactions.push(transaction);
        updateTrans();
        updateInsight();
        clearForm();
    }
    
};
const updateTrans=() =>{
    transactionList.innerHTML=""
    const transItem = transactions.map((transaction,index)=>{
        return `
      <li>
        <span>${transaction.desc}</span>
        <span class="${transaction.type}">${transaction.amount.toFixed(2)}</span>
        <button onclick="removeTransaction(${index})">Remove</button>
      </li>
      `;
    });
    transactionList.innerHTML=transItem.join("");

};
const removeTransaction = (index)=>{
    transactions.splice(index,1);
    updateTrans();
    updateInsight();

};

const updateInsight=()=>{
    const totalIncome = transactions.reduce((sum,transaction)=>{
        return transaction.type==='income'? sum + transaction.amount:sum;
    },0);
    const totalExpense = transactions.reduce((transaction,sum)=>{
        return transaction.type==='expense'? sum - transaction.amount:sum;

    },0);
    const netIncome = totalIncome-totalExpense;
    transactionIncome.textContent=`$${totalIncome.toFixed(2)}`;
    transactionExpense.textContent=`$${totalExpense.toFixed(2)}`;
    transactionNet.textContent=`$${netIncome.toFixed(2)}`;
};

const clearForm=()=>{
    document.getElementById("description").value="";
    document.getElementById("amount").value="";

};
updateTrans();
updateInsight();


