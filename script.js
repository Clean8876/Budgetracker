const transactionList = document.getElementById('transactions')
const transactionIncome = document.getElementById('total-income')
const transactionExpense = document.getElementById('total-expense')
const transactionNet = document.getElementById('total-net')

let transactions =[];

document.getElementById("addtrans").addEventListener("click",addtransaction);

function addtransaction() {
    const desc = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const transtype = document.getElementById('trans-type').value;

    if(desc && isNaN(amount)){
        const  transaction = {desc,amount,type:transtype};
        transactions.push(transaction);
        updatetrans();
        updateinsight();
        clearform();
    }
    
};
const updatetrans()=>{
    transactionList.innerHTML=""
    
}

