//function: kiểm tra loại xe
function checkUberType() {
  var uberXInput = document.getElementById("uberX");
  var uberSUVInput = document.getElementById("uberSUV");
  var uberBlackInput = document.getElementById("uberBlack");

  if (uberXInput.checked) {
    return "uberX";
  }
  if (uberSUVInput.checked) {
    return "uberSUV";
  }
  if (uberBlackInput.checked) {
    return "uberBlack";
  }

  alert("Vui lòng chọn loại xe.");
}

//function: tính tổng tiền
function calcTotalAmount(
  distance,
  waitingTime,
  firstPrice,
  middlePrice,
  lastPrice,
  waitingPrice
) {
  if (distance <= 1) {
    return firstPrice + waitingTime * waitingPrice;
  }
  if (distance > 1 && distance <= 20) {
    return (
      firstPrice + (distance - 1) * middlePrice + waitingTime * waitingPrice
    );
  }

  return (
    firstPrice +
    19 * middlePrice +
    (distance - 20) * lastPrice +
    waitingTime * waitingPrice
  );
}

//function: tính tiền taxi
function main() {
  var distance = +document.getElementById("txtDistance").value;
  var waitingTime = +document.getElementById("txtWaiting").value;
  var uberType;
  var totalAmount = 0;

  uberType = checkUberType();

  switch (uberType) {
    case "uberX":
      totalAmount = calcTotalAmount(
        distance,
        waitingTime,
        8000,
        12000,
        10000,
        2000
      );
      break;
    case "uberSUV":
      //code
      break;
    case "uberBlack":
      //code
      break;
    default:
      return;
  }

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("divThanhTien").style.backgroundColor = "pink";
  document.getElementById("xuatTien").innerHTML =
    totalAmount.toLocaleString() + " VND";

  //input: loại xe, km, thời gian chờ

  //process:
  /**
   * 1. lấy được input
   *   1.1 km , thời gian chờ: dom tới input lấy value
   *   1.2 loại xe: lấy 3 input loại xe, kiểm tra người dùng check ô nào => loại xe nào
   * 2. tính tiền
   *   2.1 kiểm tra ở trên, lấy đc loại xe nào  => áp bảng giá vào
   *      switch(loaiXe){
   *       case 'UberX':
   *            ** km <=1 , km =0.5, tgCho =5 => tien = 8000 + (5 * 2000)
   *            ** km >1 && km <=20 , km =17, tgCho =5 => tien = 8000 + (16* 12000) + (5 * 2000)
   *            ** km > 20 , km = 25, tgCho =5 => tien = 8000 + (19* 12000) + (5*10000) + (5 * 2000)
   *
   *
   *       }
   *
   * 3.In tiền ra màn hình (dom)
   */

  //output: tiền
}

// truthy                     falsy
//                              0 "" null undefined false
