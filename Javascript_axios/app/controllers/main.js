var nguoiDungService = new NguoiDungService();

layDanhSachNguoiDung();

function layDanhSachNguoiDung() {
  nguoiDungService
    .getListUser()
    .then(function(result) {
      renderTable(result.data);
    })
    .catch(function(err) {
      console.log(reserrult);
    });
}

function renderTable(arr) {
  var contentHTML = "";
  arr.forEach(function(item, index) {
    contentHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>${item.maLoaiNguoiDung}</td>
            </tr>
        `;
  });
  getEle("tblDanhSachNguoiDung").innerHTML = contentHTML;
}

function getEle(id) {
  return document.getElementById(id);
}
