document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navbar').innerHTML = `
        <nav class="bg-white shadow-md fixed w-full top-0 z-50">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    <!-- Logo -->
                    <a href="/" class="flex items-center space-x-2">
                        <img src="img/logo_no_bg_tiny.png" alt="Troi Furniture" class="h-12 md:h-16">
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="index.html" class="text-gray-600 hover:text-primary transition-colors">Kryefaqja</a>
                        <a href="galeria.html" class="text-gray-600 hover:text-primary transition-colors">Galeria</a>
                        <a href="contact.html" class="text-gray-600 hover:text-primary transition-colors">Kontakt</a>
                        <button class="bg-primary text-white hover:bg-secondary px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                            Merr Ofertë
                        </button>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path class="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            <path class="close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="md:hidden hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
                        <a href="index.html" class="block px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                            Kryefaqja
                        </a>
                        <a href="galeria.html" class="block px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                            Galeria
                        </a>
                        <a href="contact.html" class="block px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                            Kontakt
                        </a>
                        <button class="w-full mt-2 bg-primary text-white hover:bg-secondary px-6 py-2 rounded-full transition-all duration-300">
                            Merr Ofertë
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Spacer to prevent content from hiding under fixed navbar -->
        <div class="h-20 md:h-24"></div>
    `;

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuButton.querySelector('.menu-icon');
    const closeIcon = mobileMenuButton.querySelector('.close-icon');

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && 
            !mobileMenuButton.contains(e.target) && 
            !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    // Close mobile menu when window is resized to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
});

