<script>
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

// Tampilkan slide pertama saat load
slides[slideIndex].classList.add('active');

// Ubah setiap 3 detik
setInterval(showSlides, 3000);
</script>