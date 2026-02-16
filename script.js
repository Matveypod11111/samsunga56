const phone = document.getElementById('phone');

phone.addEventListener('mousemove', (e) => {
    const rect = phone.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    phone.style.transform = `rotateY(${x*0.1}deg) rotateX(${-y*0.1}deg)`;
});

phone.addEventListener('mouseleave', () => { phone.style.transform = 'rotateY(0deg) rotateX(0deg)'; });

const highlights = document.querySelectorAll('.highlight');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    highlights.forEach(highlight => {
        const highlightTop = highlight.getBoundingClientRect().top;
        if(highlightTop < triggerBottom) {
            highlight.style.opacity = 1;
            highlight.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
