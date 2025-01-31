const images = [
  { src: 'img/kuzhina1.png', alt: 'Kuzhinë Moderne' },
  { src: 'img/rajana2.jpg', alt: 'Garderobë Elegante' },
  { src: 'img/komoda2.jpg', alt: 'Komodë për TV' },
  { src: 'img/culi3.jpg', alt: 'Dhomë Gjumi' },
];

let currentIndex = 0;
let currentImageIndex = 0;

function createSlider() {
  const slider = document.getElementById('imageSlider');
  
  images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.className = `absolute top-0 left-0 w-full h-full transition-opacity duration-1000 cursor-pointer ${
      index === currentIndex ? 'opacity-100' : 'opacity-0'
    }`;
    slide.innerHTML = `
      <div class="relative w-full h-full" data-index="${index}">
        <img src="${image.src}" 
             alt="${image.alt}" 
             class="w-full h-full object-cover">
        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 class="text-xl font-semibold">${image.alt}</h3>
        </div>
      </div>
    `;
    
    // Add click event for lightbox
    slide.addEventListener('click', (e) => {
      if (!e.target.closest('button')) {
        currentImageIndex = index;
        showLightbox(index);
      }
    });
    
    slider.appendChild(slide);
  });

  // Navigation buttons
  const prevButton = document.createElement('button');
  prevButton.className = 'absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 text-gray-800 rounded-full p-3 hover:bg-opacity-100 z-10 transition-all duration-300';
  prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
  prevButton.onclick = prevSlide;

  const nextButton = document.createElement('button');
  nextButton.className = 'absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 text-gray-800 rounded-full p-3 hover:bg-opacity-100 z-10 transition-all duration-300';
  nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextButton.onclick = nextSlide;

  slider.appendChild(prevButton);
  slider.appendChild(nextButton);
}

function showLightbox(index) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = images[index].src;
  lightboxImg.alt = images[index].alt;
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function nextSlide() {
  const slides = document.querySelectorAll('#imageSlider > div:not(button)');
  slides[currentIndex].classList.remove('opacity-100');
  slides[currentIndex].classList.add('opacity-0');
  
  currentIndex = (currentIndex + 1) % slides.length;
  
  slides[currentIndex].classList.remove('opacity-0');
  slides[currentIndex].classList.add('opacity-100');
}

function prevSlide() {
  const slides = document.querySelectorAll('#imageSlider > div:not(button)');
  slides[currentIndex].classList.remove('opacity-100');
  slides[currentIndex].classList.add('opacity-0');
  
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  
  slides[currentIndex].classList.remove('opacity-0');
  slides[currentIndex].classList.add('opacity-100');
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', createSlider);
