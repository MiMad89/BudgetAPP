import { createAppbar } from "./components/appbar";
import { createAddBudgetForm } from "./components/addBudgetForm";
import { BudgetState } from "./budgetState";

const appEl = document.getElementById("app");
const budgetState = new BudgetState();

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

const createAddBudgetFormEl = document.getElementById("add-budget-form");

createAddBudgetFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = e.target.elements.amount.value;
  const category = e.target.elements.category.value;
  const type = e.target.elements.type.value;

  console.log(amount, category, type);
});
