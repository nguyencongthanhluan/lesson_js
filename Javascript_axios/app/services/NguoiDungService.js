function NguoiDungService() {
  this.getListUser = function() {
    return axios({
      url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
      method: "GET"
    });
  };
}
