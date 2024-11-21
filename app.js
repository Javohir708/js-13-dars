// 1 -masala
{
  function squareSum(numbers){
    return numbers.reduce((son, arr) => son + arr ** 2, 0)
}
}

// 2 -masala
{
  function findSmallestInt(arr) {
    return Math.min(...arr)
}
}

// 3 -masala
{
  const stringToNumber = function(str){
    return Number(str)
  }
}

// 4 -masala
{
  var summation = function (num) {
    let sum = 0

    for (let i = 1; i <= num; i++) {
        sum += i
    }

    return sum
}
}

// 5 -masala
{
  const greet = function () {
    return 'hello world!'
}

greet()
}

// 6 -masala
{
  function doubleInteger(i) {
    return i * 2;
}
}

// 7 -masala
{
  function greet(name){
    return `Hello, ${name} how are you doing today?`
}

console.log(greet('Javohir'));
}

// 8-masala 
{
  function booleanToString(b){
    return String(b)
  }
}

// 9 -masala 
{
  function basicOp(operation, value1, value2){
    if(operation === '+'){
      return value1 + value2;
    } else if (operation === '-'){
      return value1 - value2;
    } else if (operation === '*'){
      return value1 * value2;
    } else if (operation === '/'){
          return value1 / value2;
      }
    }
  
  console.log(basicOp('+', 4, 7));
}

// 10 -masala 
{
  function litres(time) {
    let result = time * 0.5;
    return Math.floor(result)
    
  }
  
  console.log(litres(2));
}