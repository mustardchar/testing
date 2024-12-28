// Select the drape and buttons
const drape = document.querySelector('.drape');
const buttons = document.querySelectorAll('.glow-btn');

let isFlashlightActive = false;
let isButtonHovered = false;

// Function to update flashlight position
function updateFlashlightPosition(x, y) {
    drape.style.setProperty('--x', `${x}px`);
    drape.style.setProperty('--y', `${y}px`);
}

// Enable flashlight on mouse move
document.addEventListener('mousemove', (e) => {
    if (!isFlashlightActive) {
        isFlashlightActive = true;
        drape.style.transition = 'mask-position 0.1s ease, -webkit-mask-position 0.1s ease';
    }
    updateFlashlightPosition(e.clientX, e.clientY);
});

// Handle flashlight behavior when hovering over buttons
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        isButtonHovered = true;
        drape.style.opacity = '0.5'; // Dim flashlight slightly on hover
    });
    
    button.addEventListener('mouseleave', () => {
        isButtonHovered = false;
        drape.style.opacity = '1'; // Restore flashlight brightness
    });
});

// Handle touch interactions
window.addEventListener('touchstart', () => {
    if (!isFlashlightActive) {
        isFlashlightActive = true;
        drape.style.transition = 'mask-position 0.1s ease, -webkit-mask-position 0.1s ease';
    }
});
