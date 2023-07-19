function expenseItemElement(text1,text2) {
  return  `<tr>
      <td class="text">${text1}</td>
      <td class="text2">${text2}</td>
      <td class="delete">&#128465</td>
      </tr>`
}
function addExpenseItem() {
  const expenseList = $(".expenseList");
  const input_name = $("#input_name");
  const input_expense = $("#input_expense");

  if (input_name.val().trim() === "" || input_expense.val().trim() === "") {
      return;
  }
  const items = $(expenseItemElement(input_name.val(),input_expense.val()));

  expenseList.append(items);

  input_name.val("");
  input_expense.val("");
   let total_sum = 0;
$(".expenseList .text2 ").each(function () {
  total_sum += parseInt($(this).text());
});
  items.find(".delete").click(function() {
      let deletedExpense = parseInt(items.find(".text2 ").text());
      total_sum -= deletedExpense;
      items.remove();
  })   
  console.log(total_sum); 
}

$(document).ready(function() {
  const addBtn = $("#add_btn");
  addBtn.click(addExpenseItem);
})