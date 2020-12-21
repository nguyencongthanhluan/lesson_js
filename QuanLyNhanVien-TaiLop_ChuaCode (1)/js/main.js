/**
 * Bài tập: Quản lý nhân viên
 * Chức năng:
 * 		1.Thêm nhân viên mới vào hệ thống
 * 		2.Hiển thị danh sách toàn bộ nhân viên
 * 		3.Xóa nhân viên
 * 		4.Cập nhật thông tin nhân viên
 * 		5.Tìm kiếm thông qua id hoặc tên
 * 		6.Validate dữ liệu
 */

const emplList = [];

//-------------Helper function---------------
//Hàm tìm vị trí:  id => vị trí
const findById = function (id) {
  for (var i = 0; i < emplList.length; i++) {
    if (emplList[i].id === id) {
      return i;
    }
  }
  return -1;
};

//--------------Main function----------------
const addEmpl = function () {
  //1. lấy dữ liệu người dùng nhập
  const lastName = document.getElementById("ho").value;
  const firstName = document.getElementById("ten").value;
  const emplId = document.getElementById("msnv").value;
  const startedDate = document.getElementById("datepicker").value;
  const position = document.getElementById("chucvu").value;

  //1.1 kiểm tra id có tồn tại trong ds chưa
  //có rồi => alert()
  //chưa => push
  const index = findById(emplId);

  if (index !== -1) {
    alert("Nhân viên đã tồn tại");
    return;
  }

  //2. tạo một đối tượng nhân viên từ dữ liệu ngta nhập
  const newEmpl = new Employee(
    emplId,
    lastName,
    firstName,
    position,
    startedDate
  );

  //3.push cái đối tượng nhân viên vào mảng
  emplList.push(newEmpl);

  //4. render table nhân viên ra màn hình
  renderEmpl();
};

const renderEmpl = function () {
  var htmlContent = "";

  for (var i = 0; i < emplList.length; i++) {
    //template string
    htmlContent += `<tr>
		<td>${i + 1}</td>
		<td>${emplList[i].lastName + " " + emplList[i].firstName}</td>
		<td>${emplList[i].id}</td>
		<td>${emplList[i].startedDate}</td>
		<td>${emplList[i].position}</td>
		<td>8000$</td>
	  </tr>`;
  }
  document.getElementById("tbodyEmpl").innerHTML = htmlContent;
};
