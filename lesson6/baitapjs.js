// 1/ tính chu vi diện tích:
let chieudai = 10;
let chieurong = 5;
let dientich = chieudai * chieurong;
console.log(dientich);
let chuvi = (chieudai + chieurong) * 2;
console.log(chuvi);

//2/ đổi giờ-phút-giây:
let S= 123456;
let gio=(S - S % 3600) / 3600;
let phut=((S % 3600) - (S % 3600) % 60) / 60;
let giay = S - phut * 60 - gio * 3600;
let thoigian = `${gio}h ${phut}min ${giay}s`;
console.log(thoigian);

//3/ tính luỹ thừa:
let coso = 5;
let luythua = 2;
let ketqua = Math.pow(coso,luythua);
console.log(ketqua);

//4/ tính trung bình cộng của ba số:
let a = 1;
let b = 2;
let c = 3;
let n = 3;
let trungbinh = (a + b + c) / n;
console.log(trungbinh); 

//5/ tính khoảng cách giữa 2 điểm trong không gian 2D:
let x1= 1;
let y1= 2;
let x2= 3;
let y2= 4;
let khoangcach = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
console.log(khoangcach);

//6/ so sánh 3 số:
let so1 = 10;
let so2 = 5;
let so3 = 8;
console.log(so1 > so2 && so1 > so3);
console.log(so1 > so2 && so1 < so3);

//7/ so sánh hai chuỗi nhập từ người dùng và trả về true nếu chúng giống nhau, ngược lại trả về false:
let z = 5;
let y = "5";
console.log(z == y);
console.log(z === y);

//8/ kiểm tra số dương nhập vào từ bàn phím:
let input = 5;
let output = input > 0;
console.log(output);

//9/  kiểm tra năm nhuận:
let nam = 1900;
let namnhuan = (nam % 400 == 0) || (nam % 4 == 0 && nam % 100 !== 0);
console.log(nam, namnhuan);
