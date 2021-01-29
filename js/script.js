//total calculate function
function totalCalculate(booking, countUpdate) {
  const input = document.getElementById(booking + "-input");
  const inputNumber = parseFloat(input.value);
  let inputVal = inputNumber;
  if (countUpdate === true) {
    inputVal = inputNumber + 1;
  } else if (countUpdate === false && inputVal > 0) {
    inputVal = inputNumber - 1;
  }
  document.getElementById(booking + "-input").value = inputVal;
  subTotal();
}

// subtotal function
function subTotal() {
  const firstClassInput = document.getElementById("firstClass-input");
  const firstClassNumber = parseFloat(firstClassInput.value);
  const economyInput = document.getElementById("economy-input");
  const economyNumber = parseFloat(economyInput.value);
  // subtotal
  const subtotalPrice = firstClassNumber * 150 + economyNumber * 100;
  document.getElementById("subtotal-amount").innerText = "$" + subtotalPrice;
  // tax
  const tax = subtotalPrice * 0.1;
  document.getElementById('tax-amount').innerText = "$" + tax;
  // grand total
  const totalPrice = subtotalPrice + tax;
  document.getElementById('total-amount').innerText = "$" + totalPrice;
}

// Order invoice
document.getElementById('book-now').addEventListener('click', function(){
    document.getElementById('order-invoice').style.display = 'block'
    orderInvoice('flyingFrom', 'from')
    orderInvoice('flyingTo', 'to')
    orderInvoice('departureDate', 'departure')
    orderInvoice('returnDate', 'return')
    orderInvoice('firstClass', 'flightCountFirst')
    orderInvoice('economy', 'flightCountEeco')
    orderInvoice('economy', 'flightCountEeco')
    orderPrice('subtotal','subtotalPrice')
    orderPrice('tax','taxAmount')
    orderPrice('total','grandTotal')
})
function orderInvoice(id1, id2) {
    const input = document.getElementById(id1 + '-input').value;
    document.getElementById(id2 + '-output').innerText = input;
    
}
function orderPrice(id1, id2) {
    const innerText = document.getElementById(id1 + '-amount').innerText;
    document.getElementById(id2 + '-output').innerText = innerText;
}
// hide order invoice
document.getElementById('close').addEventListener('click', function(){
    this.parentNode.style.display = 'none'
})