//khởi tạo lớp đối tượng Chó (prototype Chó)
//function constructor
const Cho = function (ten,canNang, chieuCao) {
  this.ten = ten;
  this.chieuCao = chieuCao;
  this.canNang = canNang;
  this.sua = function () {
    return this.ten;
  };
};

//Instance của lớp Chó
const cho1 = new Cho('lulu',40, 100);
const cho2 = new Cho('kiki',20,40);

console.log(cho1, cho2);

// const cho1 = {
//   id: 1,
//   ten: "Lulu",
//   canNang: 20,
//   chieuCao: 50,
//   gioiTinh: "Đực",
//   chichNgua: false,

//   sua: function () {
//     return this.ten;
//   },
// };

// const cho2 = {
//   id: 2,
//   ten: "Kiki",
//   canNang: 30,
//   chieuCao: 80,
//   gioiTinh: "Cái",
//   chichNgua: true,

//   sua: function () {
//     return "Gâu gâu gru gru ang ang";
//   },
// };

const trungTamNuoiCho = {
  id: 1,
  ten: "Cybercore",
  diaChi: "398 lê văn lương, tân hưng, q7",
  giamDocs: [
    {
      id: 1,
      ten: "Dang Trung Hieu",
      tuoi: 12,
    },
    {
      id: 2,
      ten: "Nguyen Phi Hung",
      tuoi: 13,
    },
  ],
  danhSachCho: [cho1, cho2],
};

// for(var i = 0; i < trungTamNuoiCho.danhSachCho.length; i++ ){
//     console.log(trungTamNuoiCho.danhSachCho[i].ten)
// }

//edit property
cho1.ten = "meomeo";
//add property
cho1.giong = "husky";

//delete property
delete cho1.canNang;

console.log(cho1.sua());

// console.log(cho1.ten, cho1.chichNgua, cho1.sua());
// console.log(cho2.ten, cho2.chichNgua, cho1.sua());
