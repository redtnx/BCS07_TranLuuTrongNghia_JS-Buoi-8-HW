var listNumber = [];

function nhapSo() {
  var number = document.getElementById("soNguyen").value * 1;
  var content = "";
  listNumber.push(number);
  console.log(listNumber);
  for (var i = 0; i < listNumber.length; i++) {
    content += listNumber[i] + ", ";
    document.getElementById("inSo").innerHTML = content;
    document.getElementById("soNguyen").value = "";
  }
}

// Câu 1:
function tinhTongSoDuong() {
  var tong = 0;
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      tong += listNumber[i];
    }
  }
  document.getElementById("answer-1").innerHTML =
    "Tổng các số dương trong mảng là: " + tong;
}

// Câu 2:
function demSoDuong() {
  var demSoDuong = 0;
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      demSoDuong++;
    }
  }
  document.getElementById("answer-2").innerHTML =
    "Số lượng số dương trong mảng là: " + demSoDuong;
}

// Câu 3:
function timMin() {
  var soMin = listNumber[0];
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < soMin) {
      soMin = listNumber[i];
    }
  }
  document.getElementById("answer-3").innerHTML =
    "Số nhỏ nhất trong mảng là: " + soMin;
}

// Câu 4:
function timSoDuongMin() {
  var listSoDuong = [];

  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      listSoDuong.push(listNumber[i]);
    }
  }
  if (listSoDuong.length === 0) {
    alert("Không có số dương trong mảng!");
    return;
  }

  var soDuongMin = listSoDuong[0];
  for (var j = 0; j < listSoDuong.length; j++) {
    if (listSoDuong[i] < soDuongMin) {
      soDuongMin = listSoDuong[i];
    }
  }

  document.getElementById("answer-4").innerHTML =
    "Số dương nhỏ nhất trong mảng là: " + soDuongMin;
}

// Câu 5:
function timSoChanCuoiCung() {
  var listSoChan = [];
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 === 0) {
      listSoChan.push(listNumber[i]);
    }
  }

  var jLast = 0;
  var soChanLast = listSoChan[jLast];
  if (listSoChan.length === 0) {
    soChanLast = -1;
    document.getElementById("answer-5").innerHTML = soChanLast;
    return;
  }

  for (var j = 0; j < listSoChan.length; j++) {
    if (j > jLast) {
      jLast = j;
      soChanLast = listSoChan[j];
    }
  }
  document.getElementById("answer-5").innerHTML =
    "Số chẵn cuối cùng trong mảng là: " + soChanLast;
}

// Câu 6:
function swap(listNumber, viTri1, viTri2) {
  var temp = listNumber[viTri1];
  listNumber[viTri1] = listNumber[viTri2];
  listNumber[viTri2] = temp;
  return listNumber;
}

function doiViTri() {
  if (listNumber.length === 0) {
    alert("Vui lòng nhập số!");
    return;
  }
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;

  var listSauThayDoi = swap(listNumber, viTri1, viTri2);

  document.getElementById("answer-6").innerHTML = listSauThayDoi;
}

// Câu 7:
function sortTheoSo(listNumber) {
  var result = listNumber.sort(function (numTruoc, numSau) {
    return numTruoc - numSau;
  });
  return result;
}

function sapXep() {
  var sapXep = sortTheoSo(listNumber);
  document.getElementById("answer-7").innerHTML =
    "Sắp xếp theo thứ tự tăng dần: " + sapXep;
}

// Câu 8:
function checkSoNguyenTo(n) {
  var flag = 1;

  if (n < 2) {
    return (flag = 0);
  }

  var i = 2;

  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }
  return flag;
}

var soNguyenTo = 0;

function timSoNguyenToDauTien() {
  for (var i = 0; i < listNumber.length; i++) {
    if (checkSoNguyenTo(listNumber[i]) == 1) {
      soNguyenTo = "Số nguyên tố đầu tiên trong mảng là: " + listNumber[i];
      break;
    } else {
      soNguyenTo = -1;
    }
  }
  document.getElementById("answer-8").innerHTML = soNguyenTo;
}

// Câu 9:
var soThuc = [];
function nhapSoThuc() {
  var number = document.getElementById("soThuc").value * 1;
  var content = "";

  soThuc.push(number);

  if (soThuc.length === 0) {
    alert("Vui lòng nhập số thực!");
    return;
  }

  for (var i = 0; i < soThuc.length; i++) {
    content += soThuc[i] + ", ";
    document.getElementById("mangSoThuc").innerHTML = content;
    document.getElementById("soThuc").value = "";
  }
}

function demSoNguyen() {
  var count = 0;
  for (var i = 0; i < soThuc.length; i++) {
    if (Number.isInteger(soThuc[i])) {
      count++;
    }
  }
  document.getElementById("answer-9").innerHTML =
    "Có " + count + " số nguyên trong mảng.";
}

// Câu 10:
function soSanh() {
  var countAm = 0;
  var countDuong = 0;
  var ketQua = "";
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < 0) {
      countAm += 1;
    } else {
      countDuong += 1;
    }
  }
  if (countAm < countDuong) {
    ketQua =
      "<p>Có " +
      countAm +
      " số âm</p>" +
      "Có " +
      countDuong +
      " số dương</p>" +
      "<p>Số dương nhiều hơn số âm</p>";
  } else if (countAm > countDuong) {
    ketQua =
      "<p>Có " +
      countAm +
      " số âm</p>" +
      "Có " +
      countDuong +
      " số dương</p>" +
      "<p>Số âm nhiều hơn số dương</p>";
  } else if (countAm === countDuong) {
    ketQua =
      "<p>Có " +
      countAm +
      " số âm</p>" +
      "Có " +
      countDuong +
      " số dương</p>" +
      "<p>Số lượng 2 số bằng nhau</p>";
  }

  document.getElementById("answer-10").innerHTML = ketQua;
}
