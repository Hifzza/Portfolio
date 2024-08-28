function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function() {
  // Scroll to the profile section when the page loads
  window.location.hash = '#My Portfolio';
});

document.querySelectorAll('.hover-text a').forEach(link => {
  link.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent parent elements from interfering
  });
});

