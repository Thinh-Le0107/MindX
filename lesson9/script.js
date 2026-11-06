// let thinh = {
//     name: "Thịnh",
//     age: 30,
//     address: "SaiGon",
//     phone: "0123456789",
//     email: "[EMAIL_ADDRESS]",
//     isMarried: true,
// }
// console.log(thinh.name)
// console.log(thinh.age)
// console.log(thinh.address)
// console.log(thinh.phone)
// console.log(thinh.email)
// console.log(thinh.isMarried)


// let thinh = {
//   name: "Nguyễn Văn Thịnh",
//   age: 20,
//   address: {
//     city: "Hà Nội",
//     country: "Việt Nam",
//     postCode: {
//       code: 10000,
//       lat: [21],
//       lng: [105],
//     },
//   },
//   isMarried: true,
//   hobbies: ["Nghe nhạc", { name: "Đọc sách", level: "high" }, [1, 2, 3, 4, 5]],
// };
// console.log(thinh.hobbies[1].level)
// console.log(thinh.hobbies[2][3])
// console.log(thinh.address.postCode.lat[0])

const techProducts = [
  {
    name: "Laptop Dell XPS 13",
    price: 1500,
    description: "Laptop mỏng nhẹ với màn hình 13.4 inch, vi xử lý Intel Core i7 thế hệ 11 và ổ cứng SSD 512GB.",
    quantity: 10
  },
  {
    name: "Apple iPhone 13 Pro",
    price: 1200,
    description: "Điện thoại iPhone 13 Pro với màn hình Super Retina XDR 6.1 inch, chip A15 Bionic và hệ thống camera ba ống kính.",
    quantity: 25
  },
  {
    name: "Tai nghe Sony WH-1000XM4",
    price: 350,
    description: "Tai nghe chống ồn chủ động cao cấp từ Sony, với thời lượng pin lên đến 30 giờ và khả năng kết nối không dây Bluetooth.",
    quantity: 15
  },
  {
    name: "Apple Watch Series 7",
    price: 500,
    description: "Đồng hồ thông minh với màn hình lớn hơn, chống nước và theo dõi sức khỏe toàn diện.",
    quantity: 30
  },
  {
    name: "Máy tính bảng Samsung Galaxy Tab S7",
    price: 700,
    description: "Máy tính bảng với màn hình 11 inch, hỗ trợ bút S Pen, chạy hệ điều hành Android 11.",
    quantity: 20
  },
  {
    name: "Loa thông minh Google Nest Audio",
    price: 100,
    description: "Loa thông minh tích hợp trợ lý ảo Google Assistant, âm thanh sống động và kết nối với hệ thống nhà thông minh.",
    quantity: 50
  },
  {
    name: "Camera GoPro HERO9",
    price: 450,
    description: "Camera hành trình GoPro HERO9 với khả năng quay video 5K, chống nước và ổn định hình ảnh mạnh mẽ.",
    quantity: 12
  },
  {
    name: "Bàn phím cơ Keychron K2",
    price: 80,
    description: "Bàn phím cơ không dây với layout 75%, hỗ trợ kết nối đa thiết bị và các phím chuyển đổi Mac/Windows.",
    quantity: 40
  }
];
// techProducts[i].price > 500
 
for (let i = 0; i < techProducts.length; i++) {
  if (techProducts[i].price > 500) {
    console.log(techProducts[i].name);
  }
}
