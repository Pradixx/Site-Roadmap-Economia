/* ═══════════════════════════════════════════════════════
   Economia Avançada — Trilha de Pesquisa
   main.js — Tema, acordeão, navegação suave
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Tema ───────────────────────────────────────────── */
  const THEME_KEY = 'economia-theme';
  const root = document.documentElement;

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (_) { return null; }
  }

  function storeTheme(t) {
    try { localStorage.setItem(THEME_KEY, t); } catch (_) {}
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    storeTheme(theme);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Init: stored → system → light
  const initialTheme = getStoredTheme() || getSystemTheme() || 'light';
  applyTheme(initialTheme);

  // Sync with system changes (only if user hasn't manually set)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!getStoredTheme()) applyTheme(e.matches ? 'dark' : 'light');
  });

  /* ─── Acordeão de cards ──────────────────────────────── */
  function toggle(card) {
    const body = card.querySelector('.card-body');
    const isOpen = body.classList.contains('open');

    // Fechar todos
    document.querySelectorAll('.card-body.open').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.topic-card.open').forEach(c => c.classList.remove('open'));

    if (!isOpen) {
      body.classList.add('open');
      card.classList.add('open');
      // Scroll suave para o card
      setTimeout(() => {
        const rect = card.getBoundingClientRect();
        const navH = document.querySelector('nav')?.offsetHeight || 56;
        if (rect.top < navH + 12) {
          window.scrollBy({ top: rect.top - navH - 12, behavior: 'smooth' });
        }
      }, 40);
    }
  }

  // Expor globalmente para onclick inline no HTML
  window.toggle = toggle;

  /* ─── Navegação dos cards overview ──────────────────── */
  function initOverviewLinks() {
    document.querySelectorAll('.overview-card[href]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
          const card = target.querySelector('.topic-card');
          if (card && !card.classList.contains('open')) toggle(card);
        }, 420);
      });
    });
  }

  /* ─── Botão de tema ──────────────────────────────────── */
  function initThemeBtn() {
    const btn = document.getElementById('theme-btn');
    if (btn) btn.addEventListener('click', toggleTheme);
  }

  /* ─── Init ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initThemeBtn();
    initOverviewLinks();
  });
})();