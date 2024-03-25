const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

function addExpense(amount, description, category) {
    const expense = {
        amount: amount,
        description: description,
        category: category
    };

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    displayExpenses();
}

function displayExpenses() {
    expenseList.innerHTML = '';
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `
            Amount: $${expense.amount}, 
            Description: ${expense.description}, 
            Category: ${expense.category}
            <button onclick="deleteExpense(${expense.id})">Delete</button>
            <button onclick="editExpense(${expense.id})">Edit</button>
        `;
        expenseList.appendChild(li);
    });
}

function deleteExpense(id) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses = expenses.filter(expense => expense.id !== id);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}


function editExpense(id) {
    let expenses=JSON.parse(localStorage.getItem('expenses'))||[];
   const expenseedit=expenses.find(expense=>expense.id==id);
   document.getElementById("amount").value=expenseedit.amount;
   document.getElementById("description").value=expenseedit.description;
   document.getElementById("category").value=expenseedit.category;
   const subm=document.querySelector('#expense-form button[type="submit"]');
   subm.textContent="submit";
   }

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    addExpense(amount, description, category);

    this.reset();
});

displayExpenses();