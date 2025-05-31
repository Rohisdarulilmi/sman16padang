// Tunggu sampai Reveal.js siap
Reveal.on('ready', function(event) {
  console.log("Presentasi Rohis Darul Ilmi dimulai!");
  alert("Selamat datang di presentasi Rohis Darul Ilmi!");
});

// Fungsi highlight animasi saat slide muncul
Reveal.on('slidechanged', function(event) {
  const currentSlide = event.currentSlide;
  currentSlide.classList.add('highlight-anim');

  setTimeout(() => {
    currentSlide.classList.remove('highlight-anim');
  }, 1000);
});

// Tombol shortcut: tekan "D" untuk ke Daftar Isi
document.addEventListener('keydown', function(event) {
  if (event.key === 'd' || event.key === 'D') {
    Reveal.slide(1); // Slide ke-2 (index mulai dari 0)
  }
});
