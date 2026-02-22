const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!mediaQuery.matches) {
  // запускаем анимации
}

// ================================
// BURGER MENU / NAV MODAL
// ================================

const burger = document.querySelector('.burger');
const navModal = document.querySelector('.nav-modal');
const modalLinks = navModal.querySelectorAll('a');
const closeBtn = document.querySelector('.nav-modal__close');

// --- Открытие / закрытие по бургеру ---
burger.addEventListener('click', () => {
  navModal.classList.toggle('is-open');

  // блокируем скролл страницы при открытой модалке
  if (navModal.classList.contains('is-open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// --- Закрытие по клику на крестик ---
closeBtn.addEventListener('click', () => {
  navModal.classList.remove('is-open');
  document.body.style.overflow = '';
});

// --- Закрытие при клике на ссылку ---
modalLinks.forEach(link => {
  link.addEventListener('click', () => {
    navModal.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

// --- Закрытие по клику на фон ---
navModal.addEventListener('click', (e) => {
  if (e.target === navModal) {
    navModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

// --- Закрытие по ESC ---
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navModal.classList.contains('is-open')) {
    navModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});


// === Scroll-to-top button visibility (scroll down) ===

const scrollTopBtn = document.querySelector('.scroll-top-btn');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  });
}

// === Cover Letter modal (FULL CONTROL) ===

const cvLink = document.querySelector('.nav-logo');
const coverModal = document.querySelector('.cover-modal');
const modalContent = document.querySelector('.cover-modal__content');
const closeModalBtn = document.querySelector('.cover-modal__close');

function openModal() {
  coverModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // автоскролл текста к началу
  modalContent.scrollTop = 0;
}

function closeModal() {
  coverModal.classList.remove('is-open');
  document.body.style.overflow = '';
}

// Открытие
if (cvLink && coverModal) {
  cvLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
}

// Закрытие по крестику
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}

// Закрытие по клику на фон
coverModal.addEventListener('click', (e) => {
  if (e.target === coverModal) {
    closeModal();
  }
});

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && coverModal.classList.contains('is-open')) {
    closeModal();
  }
});

