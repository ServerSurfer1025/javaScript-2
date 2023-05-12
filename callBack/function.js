function myDisplayer(artc) {
  document.getElementById("demo").innerHTML = artc;
}

function myCalculator(num1, num2, myCallBack) {
  let sum = num1 * num2;
  myCallBack(sum);
}

myCalculator(5, 90, myDisplayer);
console.log({ myCalculator });
