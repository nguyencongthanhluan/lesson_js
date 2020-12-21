//function 1: tính điểm trung bình
function calcAverage(math, physics, chemistry) {
  //input: điểm toán lý hóa
  //process:
  /**
   * 1.lấy được input : truyền tham số
   * 2.tính:  (toán + lý + hó)/ 3
   * 3. return điểm tb
   */
  //output :điểm trung bình
  return (math + physics + chemistry) / 3;
}

//function 2: xếp loại học sinh
function classifyStudent(average) {
  //input: điểm trung bình
  //process:
  /**
   * 1.Lấy được input
   * 2.xếp loại: if else check điều kiện
   * 3.return loại kiểm tra .vd : if(diem > 9) return "Gioi"
   */
  //output: loại
  //   if (average < 5) return "Yeu";
  //   if (average >= 5 && average < 6) return "TB";
  //   if (average >= 6 && average < 7) return "TB Kha";
  //   if (average >= 7 && average < 8) return "Kha";
  //   if (average >= 8 && average < 9) return "gioi";
  //   return "Xuat sac";
  if (average >= 9) return "Xức xắc";
  if (average >= 8) return "Giỏi";
  if (average >= 7) return "Khá";
  if (average >= 6) return "TB Khá";
  if (average >= 5) return "TB";
  return "Yếu";
}

//function 3: main
function main() {
  //1. gọi hàm calcAverage lấy được điểm tb. truyền điểm ngẫu nhiêu
  //2. gọi hàm classifyStudent, truyền vào điểm tb => xếp loại
  //3. console.log loại
  var math = document.getElementById("txtMath").value;
  var physics = document.getElementById("txtPhysics").value;
  var chemistry = document.getElementById("txtChemistry").value;

  //Chuyển từ chuỗi sang số
  //1.Hàm parseFloat, parseInt
  //   math = parseFloat(math);
  //   physics = parseFloat(physics);
  //   chemistry = parseFloat(chemistry);
  //2. nhân 1
  //   math = math * 1;
  //   physics = physics * 1;
  //   chemistry = chemistry * 1;
  //3.
    math = +math;
    physics = +physics;
    chemistry = +chemistry;

  // debug
  var avg = calcAverage(math, physics, chemistry);
  var rank = classifyStudent(avg);
  console.log("Rank: ", rank);
}

//gọi hàm main chạy ngay lúc đầu
// main();
