// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verificar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    // Alternar tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        themeToggle.textContent = isLight ? '☀️' : '🌙';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Funcionalidade de perfis
    const profileButtons = document.querySelectorAll('.profile button');
    
    profileButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const profileName = button.getAttribute('data-profile-name');
            const profileImage = button.getAttribute('data-profile-image');
            
            // Salvar perfil ativo no localStorage
            const activeProfile = {
                name: profileName,
                image: profileImage
            };
            
            localStorage.setItem('activeProfile', JSON.stringify(activeProfile));
            
            // Redirecionar para o catálogo
            window.location.href = 'catalogo/catalogo.html';
        });
    });
});