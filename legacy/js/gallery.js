document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = [
        // Kuzhina
        { 
            thumb: 'img/thumbnails/kuzhina1.png', 
            full: 'img/kuzhina1.png', 
            category: 'kuzhina', 
            alt: 'Kuzhinë Moderne' 
        },
        { 
            thumb: 'img/thumbnails/kuzhina2.jpg', 
            full: 'img/kuzhina2.jpg', 
            category: 'kuzhina', 
            alt: 'Kuzhinë Elegante' 
        },
        { 
            thumb: 'img/thumbnails/kuzhina3.jpg', 
            full: 'img/kuzhina3.jpg', 
            category: 'kuzhina', 
            alt: 'Kuzhinë Klasike' 
        },
        
        // Garderoba
        { 
            thumb: 'img/thumbnails/ormaniVogel.jpg', 
            full: 'img/ormaniVogel.jpg', 
            category: 'garderoba', 
            alt: 'Garderobë e Personalizuar' 
        },
        { 
            thumb: 'img/thumbnails/rajana2.jpg', 
            full: 'img/rajana2.jpg', 
            category: 'garderoba', 
            alt: 'Garderobë Moderne' 
        },
        { 
            thumb: 'img/thumbnails/culi3.jpg', 
            full: 'img/culi3.jpg', 
            category: 'garderoba', 
            alt: 'Garderobë Klasike' 
        },
        { 
            thumb: 'img/thumbnails/ormani.jpg', 
            full: 'img/ormani.jpg', 
            category: 'garderoba', 
            alt: 'Garderobë Bashkëkohore' 
        },
        
        // TV Komoda
        { 
            thumb: 'img/thumbnails/komoda1.jpg', 
            full: 'img/komoda1.jpg', 
            category: 'tv', 
            alt: 'Mobilie për TV' 
        },
        { 
            thumb: 'img/thumbnails/komoda2.jpg', 
            full: 'img/komoda2.jpg', 
            category: 'tv', 
            alt: 'Komodë Moderne për TV' 
        },
        { 
            thumb: 'img/thumbnails/komoda.jpg', 
            full: 'img/komoda.jpg', 
            category: 'tv', 
            alt: 'Komodë Elegante për TV' 
        },
        
        // Dhoma Gjumi
        { 
            thumb: 'img/thumbnails/culi4.jpg', 
            full: 'img/culi4.jpg', 
            category: 'dhoma', 
            alt: 'Dhomë Gjumi Elegante' 
        },
        { 
            thumb: 'img/thumbnails/omeri.jpg', 
            full: 'img/omeri.jpg', 
            category: 'dhoma', 
            alt: 'Dhomë Gjumi Klasike' 
        },
        { 
            thumb: 'img/thumbnails/rajana.jpg', 
            full: 'img/rajana.jpg', 
            category: 'dhoma', 
            alt: 'Dhomë Gjumi Bashkëkohore' 
        }
    ];

    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxPrev = document.getElementById('lightbox-prev');
    let currentImageIndex = 0;

    // Create gallery items
    function createGalleryItem(image, index) {
        return `
            <div class="gallery-item ${image.category} group cursor-pointer fade-up delay-${index * 100}" data-index="${index}">
                <div class="relative overflow-hidden rounded-lg shadow-lg">
                    <img src="${image.thumb}" 
                         alt="${image.alt}" 
                         loading="lazy"
                         class="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div class="text-white text-center p-4">
                            <h3 class="text-xl font-semibold mb-2">${image.alt}</h3>
                            <span class="inline-block bg-primary px-4 py-1 rounded-full text-sm">
                                ${image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize gallery
    function initGallery() {
        galleryGrid.innerHTML = galleryImages.map((img, index) => createGalleryItem(img, index)).join('');
        
        // Add click listeners to gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                currentImageIndex = parseInt(item.dataset.index);
                showLightbox(currentImageIndex);
            });
        });
    }

    // Lightbox functions
    function showLightbox(index) {
        lightboxImg.src = galleryImages[index].full;
        lightboxImg.alt = galleryImages[index].alt;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    function hideLightbox() {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showLightbox(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showLightbox(currentImageIndex);
    }

    // Lightbox event listeners
    lightboxClose.addEventListener('click', hideLightbox);
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);

    // Close lightbox with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) hideLightbox();
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('bg-primary', 'text-white'));
            button.classList.add('bg-primary', 'text-white');

            const filter = button.getAttribute('data-filter');
            const items = document.querySelectorAll('.gallery-item');

            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Initialize gallery on load
    initGallery();
}); 