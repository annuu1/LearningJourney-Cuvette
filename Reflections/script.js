// Select all thumbnails and the lightbox elements
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

// Loop through each thumbnail
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        lightboxImg.src = thumbnail.src.replace("thumbnail", "large"); // Adjust path if necessary
        lightbox.classList.add('active'); // Show lightbox
    });
});

// Close the lightbox when clicking on the close button
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Optional: Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) { // Close only if clicked outside the image
        lightbox.classList.remove('active');
    }
});
