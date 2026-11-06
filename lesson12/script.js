
const usernameEl = document.querySelector('.username');
usernameEl.innerText = 'Lê Hoàng Thịnh';
usernameEl.style.color = 'green';

const roleEl = document.querySelector('.role');
roleEl.innerHTML = '<b>Fullstack Developer</b>';

const avatarEl = document.querySelector('.avatar');
avatarEl.src = 'images.jpg';

const profileLinkEL = document.querySelector('.profile-link');
profileLinkEL.href = 'https://facebook.com';
profileLinkEL.innerText = 'Ghé thăm Facebook';

const userCardEl = document.querySelector('.user-card');
userCardEl.style.backgroundColor = '#f3f4f6';
userCardEl.style.border = '2px solid #ccc'
userCardEl.style.borderRadius = '12px';
userCardEl.style.padding = '20px';
