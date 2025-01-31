document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footer').innerHTML = `
        <footer class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <img src="img/logo_no_bg_tiny.png" alt="Troi Furniture" class="h-16 mb-4">
                        <p class="text-gray-400">Mobilje moderne me dizajn të personalizuar për shtëpinë tuaj.</p>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Menu</h4>
                        <ul class="space-y-2">
                            <li><a href="index.html" class="text-gray-400 hover:text-primary transition-colors">Kryefaqja</a></li>
                            <li><a href="galeria.html" class="text-gray-400 hover:text-primary transition-colors">Galeria</a></li>
                            <li><a href="contact.html" class="text-gray-400 hover:text-primary transition-colors">Kontakt</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Na Kontaktoni</h4>
                        <address class="text-gray-400 not-italic space-y-2">
                            <p>
                                <a href="https://www.google.com/maps/place/Troi+Furniture/@42.374683,21.171561,843m/data=!3m1!1e3!4m6!3m5!1s0x13547f1e0cdf7409:0x5a32db6337a1cce6!8m2!3d42.3746274!4d21.1724148!16s%2Fg%2F11wxjyshqb?hl=en&entry=ttu" 
                                   target="_blank" 
                                   class="hover:text-primary transition-colors">
                                    Rruga Agim Ramadani mbrapa Outlet-it,<br>
                                    Magjistralja Prishtinë-Ferizaj
                                </a>
                            </p>
                            <p>
                                <a href="tel:+38348884220" class="hover:text-primary transition-colors">+383 48 884 220</a> /
                                <a href="tel:+38345259373" class="hover:text-primary transition-colors">+383 45 259 373</a>
                            </p>
                            <p>
                                <a href="mailto:troi.furniture@gmail.com" class="hover:text-primary transition-colors">
                                    troi.furniture@gmail.com
                                </a>
                            </p>
                        </address>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Rrjetet Sociale</h4>
                        <div class="flex space-x-4">
                            <a href="https://www.instagram.com/troifurniture/" 
                               target="_blank" 
                               class="text-gray-400 hover:text-primary transition-colors">
                                <i class="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61562354816452" 
                               target="_blank" 
                               class="text-gray-400 hover:text-primary transition-colors">
                                <i class="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="https://www.tiktok.com/@troi.furniture" 
                               target="_blank" 
                               class="text-gray-400 hover:text-primary transition-colors">
                                <i class="fab fa-tiktok text-xl"></i>
                            </a>
                        </div>
                        <p class="mt-4 text-gray-400">
                            E Hënë - E Shtunë: 08:00 - 18:00<br>
                            E Diel: Mbyllur
                        </p>
                    </div>
                </div>
                <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p class="mb-2">&copy; ${new Date().getFullYear()} Troi Furniture. Të gjitha të drejtat e rezervuara.</p>
                    <p class="text-sm">Powered by <span class="text-primary hover:text-secondary transition-colors">PixelPulse</span></p>
                </div>
            </div>
        </footer>
    `;
});

