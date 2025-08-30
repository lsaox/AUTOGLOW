$(document).ready(function () {
  console.log("Elite Shine Auto Detailing site loaded.");
  // Add interactivity here if needed
});

  const fabBtn = document.getElementById('fab');
  const fabMenu = document.getElementById('fabMenu');

  fabBtn.addEventListener('click', () => {
    fabMenu.classList.toggle('active');
    const expanded = fabBtn.getAttribute('aria-expanded') === 'true';
    fabBtn.setAttribute('aria-expanded', !expanded);
    fabMenu.setAttribute('aria-hidden', expanded);
  });

  // Optional: close menu if click outside
  document.addEventListener('click', (e) => {
    if (!fabBtn.contains(e.target) && !fabMenu.contains(e.target)) {
      fabMenu.classList.remove('active');
      fabBtn.setAttribute('aria-expanded', 'false');
      fabMenu.setAttribute('aria-hidden', 'true');
    }
  });
