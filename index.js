const body = document.body;
// Profile dropdown menu on hover
const profileButton = document.querySelector('.profile-btn');
const profileMenu = document.querySelector('.profile-menu');

// Show profile menu on hover
profileButton.addEventListener('mouseover', () => {
  profileMenu.style.display = 'block';
});

// Hide profile menu when mouse leaves profile area
profileButton.addEventListener('mouseleave', () => {
  profileMenu.style.display = 'none';
});

// Ensure profile menu stays visible if mouse is over the menu itself
profileMenu.addEventListener('mouseover', () => {
  profileMenu.style.display = 'block';
});

profileMenu.addEventListener('mouseleave', () => {
  profileMenu.style.display = 'none';
});

// Close profile menu on click outside
window.addEventListener('click', function(e) {
  if (!profileButton.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.style.display = 'none';
  }
});
