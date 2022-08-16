let budgetInput = document.getElementById('budget-amount');
let exp = document.getElementById('expense-text');
let expenseInput = document.getElementById('expense-amount');
let expH4 = document.getElementById('expense-h4');
let balance = document.getElementById('balance-h4');
let budgetH4 = document.getElementById('budget-h4');
let expError = document.getElementById('exp-error');
let budgetError = document.getElementById('budget-error');
// let tempAmount = expH4.innerHTML;


const calcualeBtn = document.querySelector('.calculate-btn');
let addExpBtn = document.querySelector('.expense-btn');


calcualeBtn.addEventListener('click', startAmount);
addExpBtn.addEventListener('click', expenses);



function startAmount (){
let budget = budgetInput.value

  if(budget === '' || budget < 0){
  budgetError.classList.remove("hide");
  } else {
    budgetError.classList.add("hide");
budgetH4.innerHTML = budget;
      document.getElementById('budget-amount').value = '';
    }

}



let totalExpenses = 0;

function expenses(){
let budgetAmount =  budgetH4.innerHTML;
let expenseText = exp.value;
let expenseAmount = expenseInput.value;

 
totalExpenses += +expenseAmount;
expH4.innerText = totalExpenses;
balance.innerHTML =  budgetAmount - totalExpenses;   

expenseTable()
  
function expenseTable() {
   let records = document.createElement('div');
   records.classList.add('table-styling');
   let parentDiv = document.getElementById('text-container')
   let expenseValue = document.createElement('div')
   expenseValue.classList.add('expenseValue');
   let costValue = document.createElement('div')
   costValue.classList.add('costValue');
   let buttons = document.createElement('div')
   buttons.classList.add('recBtns');
   let editButton = document.createElement("img");
         editButton.src = "edit.png";
   let deleteButton = document.createElement("img");
         deleteButton.src = 'delete.png';
   
   editButton.style.cursor = 'pointer';
   deleteButton.style.cursor = 'pointer';
   
    expenseValue.innerHTML = exp.value;
    costValue.innerHTML = expenseInput.value;
    buttons.append(editButton, deleteButton)
    records.append(expenseValue, costValue, buttons);
    parentDiv.appendChild(records); 



editButton.onclick = function(){
  document.getElementById('expense-text').value = expenseValue.innerText;
  document.getElementById('expense-amount').value = costValue.innerText;
  parentDiv.removeChild(records);

  document.querySelector('.expense-btn').innerText = 'update'

        
  let tempExp = totalExpenses += -expenseAmount;
  expH4.innerText = tempExp;
  balance.innerText = budgetAmount - tempExp;
  addExpBtn.innerText = 'Add expenses';
  document.querySelector('.expense-btn').innerText = 'updtd'
     }    

  deleteButton.onclick = function(){
 parentDiv.removeChild(records);
 let tempExp = totalExpenses += -expenseAmount;
 expH4.innerText = tempExp;
 balance.innerText = budgetAmount - tempExp;
      }

if(expenseText == '' || expenseAmount == '' || expenseAmount < 0 ){
      expError.classList.remove("hide");
  parentDiv.removeChild(records);
} else {
  expError.classList.add("hide");
  document.getElementById('expense-text').value = "";
  document.getElementById('expense-amount').value = "";
}
}
}
