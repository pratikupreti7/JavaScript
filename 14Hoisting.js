//Function declration are scanned and make available
//variable declarations are scanned and made undefined

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}
tipper("5");

function bigtipper(a) {
  var bill = parseInt(a);
  console.log(bill + 15);
}
tipper("205");


