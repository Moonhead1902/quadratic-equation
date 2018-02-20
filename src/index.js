module.exports = function solveEquation(equation) {
  var arr;
  var a;
  var b;
  var c;
  var d;
  var x1;
  var x2;
  var result = [];

  arr = equation.split(' ');
  a = + arr[0];

  if (arr[3] == '+'){
    b = + arr[4];
  } else {
    b = + (arr[3] + arr[4]);
  }
    
  if (arr[7] == '+'){
    c = + arr[8];
  } else {
    c = (arr[7] + arr[8]);
  }

  d = Math.pow(b, 2) - 4 * a * c;
  x1 = Math.round((-b + Math.sqrt(d)) /  (2 * a));
  x2 = Math.round((-b - Math.sqrt(d)) /  (2 * a));
  result.push(x1);
  result.push(x2);

  return result.sort(function(a, b) {
    return a - b;
  });
}
