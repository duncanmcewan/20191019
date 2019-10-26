function minus(int1, int2) {
  return int1 - int2;
}

function sum(int1, int2) {
  return int1 + int2;
}

function multiply(int1, int2) {
  return int1 * int2;
}

function divide(int1, int2) {
  return int1 / int2;
}

function calculator(int1, int2, operator) {
  return operator(int1,int2);
}

//  Use uppercase letter at start of constructor name
function Worker (name, address, permit) {
  this.name = name;
  this.address = address;
  this.permit = permit;
}

var worker1 = new Worker("John","Glasgow","Yes");
//worker1
//Object { name: "John", address: "Glasgow", permit: "Yes" }
//
//worker1.name
//"John"
