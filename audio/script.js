// Ambil elemen
const startButton = document.getElementById('startButton');
const landing = document.getElementById('landing');
const slideshow = document.getElementById('slideshow');
const bgAudio = document.getElementById('bgAudio');
const slider = document.querySelector('.slider');

// Saat tombol ditekan
startButton.addEventListener('click', function() {
  landing.classList.add('hidden'); // Sembunyikan halaman awal
  slideshow.classList.remove('hidden'); // Tampilkan slideshow
  bgAudio.play(); // Putar musik
});

// Swipe geser manual
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// Untuk swipe di HP
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  const x = e.touches[0].clientX;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});