// Kerpet - Modal management (extracted from inline script for CSP compliance)
function openModal(type) {
  document.getElementById('modal-' + type).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(type) {
  document.getElementById('modal-' + type).classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  // Footer links - open modals
  document.querySelectorAll('[data-modal]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(el.getAttribute('data-modal'));
    });
  });

  // Close buttons inside modals
  document.querySelectorAll('[data-modal-close]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      closeModal(btn.getAttribute('data-modal-close'));
    });
  });

  // Click on overlay to close
  document.querySelectorAll('.kerpet-modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Escape key to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.kerpet-modal-overlay.active').forEach(function (modal) {
        modal.classList.remove('active');
      });
      document.body.style.overflow = '';
    }
  });

  // A11y: Fix Slick slider cloned/hidden slides - prevent focus on hidden elements
  function fixSlickA11y() {
    document.querySelectorAll('.slick-slide[aria-hidden="true"] a, .slick-slide[aria-hidden="true"] button').forEach(function (el) {
      el.setAttribute('tabindex', '-1');
    });
    document.querySelectorAll('.slick-slide:not([aria-hidden="true"]) a, .slick-slide:not([aria-hidden="true"]) button').forEach(function (el) {
      el.removeAttribute('tabindex');
    });
  }
  // Run after Slick initializes
  setTimeout(fixSlickA11y, 1000);
  // Re-run when slides change
  var observer = new MutationObserver(fixSlickA11y);
  document.querySelectorAll('.cs_slider_wrapper').forEach(function (slider) {
    observer.observe(slider, { attributes: true, subtree: true, attributeFilter: ['aria-hidden'] });
  });
});
