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

var empList = new EmployeeList();
var validation = new Validation();

//-------------Helper function---------------
//Hàm tìm vị trí:  id => vị trí
const findById = function (id) {
  for (var i = 0; i < empList.arr.length; i++) {
    if (empList.arr[i].id === id) {
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
  // const index = findById(emplId);

  // if (index !== -1) {
  //   alert("Nhân viên đã tồn tại");
  //   return;
  // }

  var isValid = true;

  isValid &= validation.checkEmpty(lastName, "Ho khong dc rong!", "sp-ho");
  isValid &= validation.checkEmpty(firstName, "Ten khong dc rong!", "sp-ten");
  isValid &=
    validation.checkEmpty(emplId, "Ma khong dc rong!", "sp-ma") &&
    validation.checkLength(emplId, "Do dai ky tu 4-10", "sp-ma", 3, 11) &&
    validation.checkNumber(emplId, "Ma phai la so!", "sp-ma") &&
    validation.checkTrungMa(emplId, "Ma da ton tai!", "sp-ma", empList.arr);
  isValid &= validation.checkPosition(
    "chucvu",
    "Phai chon chuc vu!",
    "sp-chucvu"
  );

  if (!isValid) {
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

  // call api tới backend nhờ thêm nhân viên mới vào DB
  axios({
    method: "POST",
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees",
    data: newEmpl,
  })
    .then(function (res) {
      // call api láy danh sách nhân viên mới sau khi thêm
      fetchEmpls();
    })
    .catch(function (err) {
      console.log(err);
    });
  //3.push cái đối tượng nhân viên vào mảng
  // empList.addEmpl(newEmpl);

  //4. render table nhân viên ra màn hình
  // renderEmpl();
  // setLocalStorage();
};

const renderEmpl = function (list = empList.arr) {
  var htmlContent = "";

  for (var i = 0; i < list.length; i++) {
    //template string
    htmlContent += `<tr>
      <td>${i + 1}</td>
      <td>${list[i].lastName + " " + list[i].firstName}</td>
      <td>${list[i].id}</td>
      <td>${list[i].startedDate}</td>
      <td>${list[i].position}</td>
      <td>8000$</td>
      <td>
        <button class="btn btn-info" onclick="editEmpl(${
          list[i].id
        })">Edit</button>

        <button class="btn btn-danger" onclick="deleteEmpl(${
          list[i].id
        })">Delete</button>

        <button class="btn btn-success" onclick="goToDetail(${
          list[i].id
        })">View Detail</button>
      </td>
	  </tr>`;
  }
  document.getElementById("tbodyEmpl").innerHTML = htmlContent;
};

// function xem chi tiết
const goToDetail = function (id) {
  window.location.assign("detail.html?id=" + id);
};

// getLocalStorage();

/**
 * Delete Empl
 */
function deleteEmpl(id) {
  // empList.deleteEmpl(id);
  // renderEmpl();
  // setLocalStorage();

  //"https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees"/:id DELETE
  axios({
    method: "DELETE",
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees/" + id,
  })
    .then(function (res) {
      // call api láy danh sách nhân viên mới sau khi xóa
      fetchEmpls();
    })
    .catch(function (err) {
      console.log(err);
    });
}

/**
 * Edit Empl
 */
function editEmpl(id) {
  getEle("btnAdd").style.display = "none";
  getEle("btnUpdate").style.display = "block";
  getEle("btnCancle").style.display = "block";
  getEle("msnv").setAttribute("disabled", true);
  /**
   * 1. viết 1 phuong thức getEmplById. Viết bên LĐT EmployeeList
   *    => return về đối tượng empl {id: "", lastName: "", firstName: "", position: "", startedDate: ""}
   * 2. Đổ dữ liệu ra ngoài các ô input.
   */
  var empl = empList.getEmplById(id);

  getEle("ho").value = empl.lastName;
  getEle("ten").value = empl.firstName;
  getEle("msnv").value = empl.id;
  getEle("datepicker").value = empl.startedDate;
  getEle("chucvu").value = empl.position;
}

/**
 * Cancle
 */
function cancle() {
  getEle("btnAdd").style.display = "block";
  getEle("btnUpdate").style.display = "none";
  getEle("btnCancle").style.display = "none";

  getEle("frmEmpl").reset();
  getEle("msnv").removeAttribute("disabled");
}

/**
 * UPDATE
 */
function updateEmpl() {
  var lastName = getEle("ho").value;
  var firstName = getEle("ten").value;
  var id = getEle("msnv").value;
  var startedDate = getEle("datepicker").value;
  var position = getEle("chucvu").value;

  var empl = new Employee(id, lastName, firstName, position, startedDate);
  //   empList.updateEmpl(empl);
  //   renderEmpl();

  // call api cập nhật thông tin nhân viên trong DB
  //"https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees"/:id PUT
  axios({
    method: "PUT",
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees/" + id,
    // gủi đối tượng mới sau khi cập nhật lên để backend lưu lại trong DB
    data: empl,
  })
    .then(function (res) {
      // call api lấy ds nhân viên mới sau khi cập nhật
      fetchEmpls();
    })
    .catch(function (err) {
      console.log(err);
    });
}
/**
 * Search
 */
getEle("txtSearch").addEventListener("keyup", function () {
  var keyword = getEle("txtSearch").value;
  var mangTimKiem = empList.search(keyword);
  renderEmpl(mangTimKiem);
});

function getEle(id) {
  return document.getElementById(id);
}

function setLocalStorage() {
  /**
   * Lưu mảng empl xuống localStorage
   * Khi lưu xuống ép sang kiểu string
   */
  localStorage.setItem("ListEmpl", JSON.stringify(empList.arr));
}

// function getLocalStorage() {
//   if (localStorage.getItem("ListEmpl")) {
//     /**
//      * lấy mảng empl dưới localStorage lên dùng
//      * Khi lấy lên để sử dụng ép sang kiểu Json
//      */
//     empList.arr = JSON.parse(localStorage.getItem("ListEmpl"));
//     renderEmpl();
//   }
// }

// function lấy danh sách nhân viên dưới DB
const fetchEmpls = function () {
  // hàm xử lý dữ liệu khi thành công
  const resolver = function (res) {
    console.log(res.data);
    empList.arr = res.data;
    renderEmpl();
  };

  //hàm xử lý khi thất bại
  const rejecter = function (err) {
    console.log(err);
  };

  axios({
    //bất đồng bộ
    url: " https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees",
    method: "GET",
  })
    //callback
    .then(resolver)
    .catch(rejecter);
};

fetchEmpls();

// method: get(lấy) post(tạo mới) delete(xóa) put(ghi đè luôn toàn bộ object) patch(chỉ ghi đè thuộc tính chỉ định)
//Promise có 3 trạng thái : pending (đang chờ), fullfilled/ resolve (thành công), reject (thất bại)
