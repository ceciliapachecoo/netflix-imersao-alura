import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const activeProfileData = localStorage.getItem('activeProfile');

    if (activeProfileData) {
        const activeProfile = JSON.parse(activeProfileData);
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = activeProfile.name;
        if (profileIcon) {
            // Corrigir o caminho da imagem para funcionar no GitHub Pages
            const imagePath = activeProfile.image.startsWith('./') ? 
                '../' + activeProfile.image.substring(2) : 
                activeProfile.image;
            profileIcon.src = imagePath;
        }
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
