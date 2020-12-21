// /**
//  * Bài tập: Quản lý sinh viên
//  * Chức năng:
//  *     1.lấy danh sách điểm từ giao diện bỏ vào mảng điểm
//  *     2.Tính điểm trung bình của toàn bộ sinh viên
//  * 	   3.Kiểm tra có bao nhiêu sinh viên dưới 5 điểm trong danh sach
//  * 	   4.Tìm điểm cao nhất và cao nhì trong mảng
//  * 	   5. Sắp xếp danh sách điểm tăng dần
//  */

const gradeList = [];

function getGradeFromUI() {
  const tdTags = document.getElementsByClassName("td-grade");

  for (var i = 0; i < tdTags.length; i++) {
    gradeList.push(+tdTags[i].innerHTML);
  }
  console.log(gradeList);
}

function calcAverage() {
  var sum = 0;
  for (var i = 0; i < gradeList.length; i++) {
    sum += gradeList[i];
  }
  var average = sum / gradeList.length;
  return average;
}

function countWeakStudent() {
  var count = 0;
  for (var i = 0; i < gradeList.length; i++) {
    if (gradeList[i] < 5) {
      count++;
    }
  }
  return count;
}

function findMaxAndSecond() {
  var max = gradeList[0];
  var second = 0;
  for (var i = 1; i < gradeList.length; i++) {
    if (gradeList[i] > max) {
      second = max;
      max = gradeList[i];
    } else if (gradeList[i] > second && gradeList[i] !== max) {
      second = gradeList[i];
    }
  }
  console.log("max:", max);
  console.log("second", second);
}

function sortGradeList() {
  var noSwap = true;
  for (var i = gradeList.length; i > 0; i--) {
    for (var k = 0; k < i - 1; k++) {
      if (gradeList[k] > gradeList[k + 1]) {
        var temp = gradeList[k];
        gradeList[k] = gradeList[k + 1];
        gradeList[k + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }

  console.log(gradeList);
}

getGradeFromUI();

sortGradeList();
console.log(countWeakStudent());

findMaxAndSecond();

const average = calcAverage();
console.log(average);
console.log(Math.floor(average));
console.log(Math.ceil(average));
console.log(Math.round(average));
console.log(average.toFixed(2));

// //hoisting
// console.log(sum);
// var sum = 2;

// // declaration function
// calcSum();
// // function calcSum() {
// //   console.log(1 + 1);
// // }

// // expression function
// const calcSum = function () {
//   console.log(1 + 1);
// };
