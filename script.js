// Particle effect function
function createParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle particle-spark';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#a855f7';
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 8px #c084fc';

        const angle = (Math.PI * 2 * i) / 8;
        const velocity = 60 + Math.random() * 40;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }
}

// Add glow effect to all info cards on hover
document.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.card-glow');
    if (card && !card.classList.contains('glow-pulse')) {
        card.classList.add('glow-pulse');
        createParticles(card);
    }
});

// Tab Navigation
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        
        const target = btn.dataset.tab;
        contents.forEach(c => {
            c.classList.add('hidden');
            c.classList.remove('fade-in');
        });
        
        const el = document.getElementById('tab-' + target);
        if (el) {
            el.classList.remove('hidden');
            void el.offsetWidth;
            el.classList.add('fade-in');
        }
    });
});

// ====================== FOTO DE PERFIL ======================
const mainPhoto = document.getElementById('mainPhoto');
const mainPhotoImg = document.getElementById('mainPhotoImg');
const photoInput = document.getElementById('photoInput');

mainPhoto.addEventListener('click', () => photoInput.click());

photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
        mainPhotoImg.src = ev.target.result;
    };
    reader.readAsDataURL(file);
});

// ====================== SOBRE MIM ======================
const aboutText = document.getElementById('aboutText');
const aboutTextarea = document.getElementById('aboutTextarea');

aboutText.addEventListener('click', () => {
    aboutTextarea.value = aboutText.textContent;
    aboutText.classList.add('hidden');
    aboutTextarea.classList.remove('hidden');
    aboutTextarea.focus();
});

aboutTextarea.addEventListener('blur', () => {
    if (aboutTextarea.value.trim()) {
        aboutText.textContent = aboutTextarea.value;
    }
    aboutTextarea.classList.add('hidden');
    aboutText.classList.remove('hidden');
});

// ====================== GALERIA ======================
const galleryInput = document.getElementById('galleryInput');
let activeSlot = null;

document.querySelectorAll('.gallery-slot').forEach(slot => {
    slot.addEventListener('click', () => {
        activeSlot = slot;
        galleryInput.click();
    });
});

galleryInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file || !activeSlot) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
        activeSlot.innerHTML = `<img src="${ev.target.result}" alt="Foto da galeria">`;
    };
    reader.readAsDataURL(file);
});

// Element SDK (mantido)
const defaultConfig = {
    about_me_text: 'Clique aqui para editar e contar um pouco sobre você! 💜',
    primary_color: '#a855f7',
    bg_color: '#1a1025',
    card_color: '#2a1f3d',
    text_color: '#ffffff',
    accent_color: '#7c3aed',
    font_family: 'Outfit',
    font_size: 16
};

window.elementSdk?.init({
    defaultConfig,
    onConfigChange: async (config) => {
        const font = config.font_family || defaultConfig.font_family;
        document.body.style.fontFamily = `${font}, sans-serif`;
        const size = config.font_size || defaultConfig.font_size;
        document.body.style.fontSize = size + 'px';
        if (config.about_me_text) {
            aboutText.textContent = config.about_me_text;
        }
    },
    // ... resto do SDK mantido igual
});

lucide.createIcons();
