// function: lấy thông tin nhân viên theo id
// https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees/:id GET

const fetchEmplDetail = function () {
  // lấy id từ url để biết bên trang trước, người dùng nhấn chọn xem chi tiết nhân viên nào
  const id = window.location.search.split("=")[1];

  // gửi request lên backend kèm theo id, backend sẽ trả thông tin chi tiết của nhân viên  có id đó
  axios({
    method: "GET",
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees/" + id,
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
};

fetchEmplDetail();
