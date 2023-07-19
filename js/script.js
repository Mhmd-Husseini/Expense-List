function expenseItemElement(text1, text2) {
  return `<tr>
      <td class="text">${text1}</td>
      <td class="text2">${text2}</td>
      <td class="delete">&#128465</td>
      </tr>`;
}

function addExpenseItem() {
  const expenseList = $(".expenseList");
  const input_name = $("#input_name");
  const input_expense = $("#input_expense");

  if (input_name.val().trim() === "" || input_expense.val().trim() === "") {
    return;
  }

  const name = input_name.val().trim();
  const amount = parseFloat(input_expense.val().trim());

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense amount.");
    return;
  }

  const items = $(expenseItemElement(name, `$${amount.toFixed(2)}`));
  expenseList.append(items);

  input_name.val("");
  input_expense.val("");
  updateTotalSum();
}

function updateTotalSum() {
  let total_sum = 0;
  $(".expenseList .text2").each(function () {
    const expenseAmount = parseFloat($(this).text().slice(1));
    total_sum += expenseAmount;
  });
  $("#totalSum").text(`$${total_sum.toFixed(2)}`);
}

$(document).ready(function () {
  const addBtn = $("#add_btn");
  addBtn.click(addExpenseItem);

  $(".expenseList").on("click", ".delete", function () {
    const expenseRow = $(this).closest("tr");
    const deletedExpense = parseFloat(expenseRow.find(".text2").text().slice(1));
    expenseRow.remove();
    updateTotalSum();
  });
});
