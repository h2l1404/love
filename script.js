// Hiệu ứng máy bay bay theo scroll
const plane = document.getElementById("plane");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  plane.style.transform = `translateY(${scrollTop * 0.5}px) translateX(${scrollTop * 0.7}px)`;
});

// Tạo trái tim bay ngẫu nhiên
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = Math.random() * window.innerHeight + "px";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);

// Scroll xuống khi nhấn nút
function scrollToJourney() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}
