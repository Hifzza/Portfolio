// Toggle the hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Scroll to the profile section on page load without updating the URL
document.addEventListener('DOMContentLoaded', function() {
  // Check if the URL hash is '#My%20Portfolio' and scroll to profile section
  if (window.location.hash === '#My%20Portfolio') {
    const profileSection = document.querySelector('#profile');
    
    if (profileSection) {
      // Smoothly scroll to the profile section
      profileSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Remove the hash from the URL after scrolling
    setTimeout(() => {
      history.replaceState(null, null, window.location.pathname);
    }, 500); // Small delay to ensure the scroll happens before the URL is updated
  }
});

// Prevent parent elements from interfering with link clicks
document.querySelectorAll('.hover-text a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
