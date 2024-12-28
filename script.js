// Select the drape
const drape = document.querySelector('.drape');

// Function to update flashlight position
function updateFlashlightPosition(x, y) {
    drape.style.setProperty('--x', `${x}px`);
    drape.style.setProperty('--y', `${y}px`);
}

// Event Listener: Mouse Move
document.addEventListener('mousemove', (e) => {
    updateFlashlightPosition(e.clientX, e.clientY);
});
