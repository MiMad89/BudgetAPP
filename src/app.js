import { createAppbar } from "./components/appbar";
import { createAddBudgetForm } from "./components/addBudgetForm";

const appEl = document.getElementById("app");

const createUi = () => {
  const appBar = createAppbar();
  const budgetForm = createAddBudgetForm();

  appEl.innerHTML = `
  <div class="mb-8">
    ${appBar}
    </div>
    <div class="container mx-auto max-w-screen-xl">
    <div class="max-w-[50%]">
    <h4 class="mb-6 text-3xl">Deposits and withdrawals</h4>
    ${budgetForm}
    </div>
    </div>`;
};

createUi();

const createAddBudgetFormEl = document.getElementById('add-budget-form');

createAddBudgetFormEl.addEventListener("submit", (e) =>{
    e.preventDefault()


})
