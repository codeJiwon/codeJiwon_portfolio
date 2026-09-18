/* =========================================================
   정지원 iOS Developer Portfolio — main.js
   순수 바닐라 JS. 프레임워크/빌드 도구 없이 그대로 편집 가능합니다.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileMenu();
  initScrollSpy();
  initRevealOnScroll();
  initProjectAccordion();
  initProjectFilter();
  initBackToTop();
  initFooterYear();
});

/* ---------------- Nav background on scroll ---------------- */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const toggle = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}

/* ---------------- Mobile hamburger menu ---------------- */
function initMobileMenu() {
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  const closeMenu = () => {
    btn.classList.remove('open');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu.querySelectorAll('a[data-nav]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

/* ---------------- Scrollspy: highlight active nav link ---------------- */
function initScrollSpy() {
  const links = document.querySelectorAll('.nav-link[data-nav]');
  if (!links.length) return;

  const sections = Array.from(links)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ---------------- Reveal-on-scroll animation ---------------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach((item) => observer.observe(item));
}

/* ---------------- Project accordion ---------------- */
function initProjectAccordion() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    const summary = card.querySelector('.project-summary');
    const detail = card.querySelector('.project-detail');
    const inner = card.querySelector('.project-detail-inner');
    if (!summary || !detail || !inner) return;

    summary.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      if (isOpen) {
        detail.style.maxHeight = '0px';
        card.classList.remove('open');
        summary.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('open');
        summary.setAttribute('aria-expanded', 'true');
        detail.style.maxHeight = `${inner.scrollHeight}px`;
      }
    });
  });

  // 창 크기 변경 시 열려있는 카드의 높이 재계산 (텍스트 줄바꿈 변화 대응)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.querySelectorAll('.project-card.open').forEach((card) => {
        const detail = card.querySelector('.project-detail');
        const inner = card.querySelector('.project-detail-inner');
        if (detail && inner) detail.style.maxHeight = `${inner.scrollHeight}px`;
      });
    }, 150);
  });
}

/* ---------------- Project filter (전체 / iOS / Flutter / AI·Backend) ---------------- */
function initProjectFilter() {
  const bar = document.getElementById('filterBar');
  const grid = document.getElementById('projectGrid');
  if (!bar || !grid) return;

  const buttons = bar.querySelectorAll('.filter-btn');
  const cards = grid.querySelectorAll('.project-card');

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    buttons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      const tags = (card.dataset.tags || '').split(' ');
      const show = filter === 'all' || tags.includes(filter);
      card.classList.toggle('hidden', !show);

      // 필터로 숨겨지는 카드가 열려 있었다면 접어서 레이아웃 깨짐 방지
      if (!show && card.classList.contains('open')) {
        const summary = card.querySelector('.project-summary');
        const detail = card.querySelector('.project-detail');
        if (summary && detail) {
          detail.style.maxHeight = '0px';
          card.classList.remove('open');
          summary.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
}

/* ---------------- Back to top ---------------- */
function initBackToTop() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------------- Footer year ---------------- */
function initFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}
