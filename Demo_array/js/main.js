var array = [1, 2, 3, "4", true, false, undefined];

// array.push(5);
// array.unshift(0);
// array.pop()
// array.shift();
// array.splice(3,3)

// console.log(array);
// var i = 0;
// for (;;) {
//   console.log(i);
// }

// while (true) {
//   console.log(1);
// }

//function 1: kiểm tra số nguyên tố
function checkPrime(num) {
  // num = 7 => 2,3,4,5,6
  //num = 10 => 2,3,4,5
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function checkOdd(numArr) {
  var count = 0;
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 1) {
      console.log("Số lẻ: ", numArr[i]);
      count = count + 1;
      //   count++
    }
  }

  if (!count) {
    console.log("no odd!");
  }
}

checkOdd([1, 2, 3, 4, 5, 6]);
checkOdd([2, 4, 6]);
//=> 1,3,5

// console.log(checkPrime(11));
// console.log(checkPrime(13));
// console.log(checkPrime(15));

//2,3,5,7,11,13,17
