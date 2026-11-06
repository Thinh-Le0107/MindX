//1/  Tính tổng các chữ số từ 1  đến 100
let tong = 0;
for (let i = 1; i <= 100; i++) {
    tong += i;
}
console.log(tong);

//2/ Các số từ 0 đến 100, in ra các số chia hết cho 3 và 5
for (let z = 0; z <= 100; z++) 
    if (z % 3 == 0 && z % 5 == 0) {
        console.log(z)
    }

//3/ Tính giai thừa của một số nguyên bất kỳ
let n = 7;
let result = 1;
if (!Number.isInteger(n) || n < 0) {
    console.log("Không hợp lệ");
} else {
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    console.log(result);
}
//4/ Sử dụng vòng lặp for để in ra bảng cửu chương từ 2 đến 9
for (let a = 2; a <= 9; a++) {
    console.log("Bảng cửu chương " + a);

    for (let j = 1; j <= 10; j++) {
        console.log(`${a} x ${j} = ${a * j}`);
    }
}
//5/ Hãy chuyển một số nguyên dương sang dạng nhị phân (gồm các chữ số 0 và 1)
let r  = 13;
let q = "";
if (!Number.isInteger(r) || r <= 0) {
    console.log("Không hợp lệ");
} else {
    while (r > 0) {
        let h = r % 2;
        q = h + q;
        r = Math.floor(r / 2);
    }
    console.log(q);
}

//6/ Sử dụng vòng lặp, thực hiện tính phép tính sau, với p là số nguyên
let p = 8;
let Y = 0;
for (let i = 1; i <= p; i++) {
    Y = Math.sqrt(i + Y);
}
console.log (Y);

//7/ Sử dụng vòng lặp, thực hiện tính phép tính sau, với K là số nguyên
let K = 5;
let X = 0;
for (let i = K; i >= 1; i--) {
    X = Math.sqrt(i + X);
}
console.log(X);

