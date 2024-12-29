/* -------------------------
   Flashlight & Drape Behavior
------------------------- */

// Select the drape and buttons
const drape = document.querySelector('.drape');
const buttons = document.querySelectorAll('.glow-btn');

let isFlashlightActive = false;
let isButtonHovered = false;

/* -------------------------
   Flashlight Movement
------------------------- */

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
        drape.style.opacity = '1'; // Activate flashlight on movement
    }
    updateFlashlightPosition(e.clientX, e.clientY);
});

/* -------------------------
   Flashlight Behavior on Hover
------------------------- */

// Adjust flashlight intensity on hover (not the drape)
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        isButtonHovered = true;
        drape.style.setProperty('--flashlight-intensity', 'rgba(0, 0, 0, 0.5)'); // Dim flashlight
    });
    
    button.addEventListener('mouseleave', () => {
        isButtonHovered = false;
        drape.style.setProperty('--flashlight-intensity', 'rgba(0, 0, 0, 0)'); // Restore flashlight intensity
    });
});

/* -------------------------
   Flashlight on Touch Devices
------------------------- */

window.addEventListener('touchstart', () => {
    if (!isFlashlightActive) {
        isFlashlightActive = true;
        drape.style.opacity = '1';
    }
});

/* -------------------------
   Future Event Handlers (Optional)
------------------------- */

// Placeholder for any additional logic, e.g., button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Button clicked: ${button.textContent}`);
    });
});
