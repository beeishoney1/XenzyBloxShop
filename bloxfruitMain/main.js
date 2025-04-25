function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Add click animation for category items
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', (e) => {
        // Prevent the click animation from triggering when clicking the image or button
        if (e.target.tagName !== 'IMG' && e.target.tagName !== 'BUTTON') {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = 'scale(1.03)';
            }, 100);
        }
    });
});

// Function to enlarge the image when clicked
function enlargeImage(imgElement) {
    // Create a modal overlay
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    // Create the enlarged image
    const enlargedImg = document.createElement('img');
    enlargedImg.src = imgElement.src;
    enlargedImg.alt = imgElement.alt;
    enlargedImg.style.maxWidth = '80%';
    enlargedImg.style.maxHeight = '80%';
    enlargedImg.style.borderRadius = '5px';
    enlargedImg.style.boxShadow = '0 0 10px #00ff7f';

    // Add the image to the modal
    modal.appendChild(enlargedImg);

    // Close the modal when clicking outside the image
    modal.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    // Add the modal to the body
    document.body.appendChild(modal);
}