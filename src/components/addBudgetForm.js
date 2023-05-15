export const createAddBudgetForm = () => {
  return `
    
<form id="add-budget-form">
<div class="mb-6">
  <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
  <input id='amount' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="300" required>
</div>
<div class="mb-6">
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a category</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Category</option>
  <option value="work">Work</option>
  <option value="food">Food</option>
  <option value="holidays">Holidays</option>
  <option value="pleasures">Pleasures</option>
</select>
</div>
<div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="deposit" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Deposit</label>
</div>
<div class="flex items-center mb-4">
    <input checked id="default-radio-2" type="radio" value="withdrawal" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Withdrawal</label>
</div>

<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
</form>
`;
};
