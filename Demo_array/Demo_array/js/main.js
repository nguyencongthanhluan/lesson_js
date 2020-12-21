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

//function 2: kiểm tra số lẻ
function checkOdd(numArr) {
  var count = 0;
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 1) {
      console.log("Số lẻ: ", numArr[i]);
      count = count + 1;
      //   count++
    }
  }

  for (var i = 0; i < numArr.length; i++) {
    const sum = 1 + 1;
  }

  if (!count) {
    console.log("no odd!");
  }
}

//function 3:  cho một mảng số bất kì, kiểm tra xem trong mảng có
// 2 số bất kì cộng lại = 0;
// function checkSum(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     //arr[i] = 5
//     for (var k = i + 1; k < arr.length; k++) {
//       //arr[k] = 3
//       if (arr[i] + arr[k] === 0) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(checkSum([5, 3, 8, 2]));
// console.log(checkSum([5, 3, 8, 2, -2]));
//lần 1:
/**
 *  i = 0; arr[i] = 5
 *  k =1; arr[k] = 3
 *
 * lan 2:
 *  i = 0; arr[i] = 5
 *  k = 2; arr[k] = 8
 * lan 3:
 *  i = 0; arr[i] = 5
 *  k = 3; arr[k] = 2
 * lan 4:
 *  i = 1; arr[i] = 3
 *  k = 2; arr[k] = 8
 */

//function 4:  cho một mảng số được sắp xếp sẵn, kiểm tra xem trong mảng có
// 2 số bất kì cộng lại = 0;
function checkSum(arr) {
  var i = 0;
  var k = arr.length - 1;

  while (i !== k) {
    if (arr[i] + arr[k] === 0) return true;
    if (arr[i] + arr[k] > 0) {
      k--;
    } else {
      i++;
    }
  }

  return false;
}

console.log(checkSum([-3, -2, -1, 0, 5]));
//  k === i
//multiple Point
//th1:  === 0 => return true;
//th2:  > 0 => k--
//th3: < 0 => i++

// checkOdd([1, 2, 3, 4, 5, 6]);
// checkOdd([2, 4, 6]);
//=> 1,3,5

// console.log(checkPrime(11));
// console.log(checkPrime(13));
// console.log(checkPrime(15));

//2,3,5,7,11,13,17

function calcSum(a, b) {
  const sum = 1 + 2;
  console.log(sum);
  return a + b;
}
