let slideIndex = 0;

    function showSlides() {
      const slides = document.querySelectorAll('.carousel-item');
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }

      const offset = -slideIndex * 100;
      document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    function prevSlide() {
      slideIndex--;
      showSlides();
    }

    function nextSlide() {
      slideIndex++;
      showSlides();
    }

    // Mostrar la primera imagen al cargar la página
    showSlides();