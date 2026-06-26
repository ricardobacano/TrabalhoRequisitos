(function () {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const toast = $('[data-toast]');
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 3600);
  }

  const menuButton = $('[data-menu-toggle]');
  const menu = $('#menu-principal');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
  }

  const themeButtons = $$('[data-theme-toggle], [data-theme-toggle-local]');
  const savedTheme = localStorage.getItem('planoDecenalTheme');
  if (savedTheme === 'high') document.body.classList.add('high-contrast');
  function updateThemeButtons() {
    const active = document.body.classList.contains('high-contrast');
    themeButtons.forEach((button) => button.setAttribute('aria-pressed', String(active)));
  }
  updateThemeButtons();
  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const active = document.body.classList.toggle('high-contrast');
      localStorage.setItem('planoDecenalTheme', active ? 'high' : 'default');
      updateThemeButtons();
      showToast(active ? 'Alto contraste ativado.' : 'Alto contraste desativado.');
    });
  });

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }) : null;
  $$('.fade-in').forEach((item) => observer ? observer.observe(item) : item.classList.add('visible'));

  $$('.progress span[data-progress]').forEach((bar) => {
    const value = Math.max(0, Math.min(100, Number(bar.dataset.progress || 0)));
    setTimeout(() => { bar.style.width = value + '%'; }, 250);
  });

  const range = $('[data-range-output]');
  if (range) {
    const value = $('.range-value');
    const update = () => { if (value) value.textContent = range.value + '%'; };
    range.addEventListener('input', update);
    update();
  }

  const resultTable = $('[data-result-table]');
  const counter = $('[data-result-counter]');
  const filterForm = $('[data-filter-form]');
  const searchForm = $('[data-search-form]');
  const searchInput = $('[data-search-input]');
  function applySearchAndFilters() {
    if (!resultTable) return;
    const term = (searchInput?.value || '').trim().toLowerCase();
    const filters = {};
    $$('[data-filter]').forEach((field) => { filters[field.dataset.filter] = field.value.toLowerCase(); });
    let visible = 0;
    $$('tbody tr', resultTable).forEach((row) => {
      const matchesTerm = !term || (row.dataset.search || '').includes(term);
      const matchesFilters = Object.entries(filters).every(([key, value]) => !value || (row.dataset[key] || '') === value);
      const show = matchesTerm && matchesFilters;
      row.hidden = !show;
      if (show) visible += 1;
    });
    if (counter) counter.textContent = visible === 1 ? '1 resultado' : `${visible} resultados`;
    showToast('Consulta demonstrativa atualizada.');
  }
  filterForm?.addEventListener('submit', (event) => { event.preventDefault(); applySearchAndFilters(); });
  searchForm?.addEventListener('submit', (event) => { event.preventDefault(); applySearchAndFilters(); });
  $('[data-clear-filters]')?.addEventListener('click', () => {
    filterForm?.reset();
    if (searchInput) searchInput.value = '';
    applySearchAndFilters();
  });

  $('[data-status-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    showToast('Atualização simulada salva. Registro de alteração gerado.');
  });

  $('[data-login-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    showToast('Login simulado realizado. Redirecionando para o painel...');
    setTimeout(() => { window.location.href = 'admin.html'; }, 800);
  });

  $('[data-admin-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const table = $('[data-audit-table] tbody');
    if (table) {
      const row = document.createElement('tr');
      row.innerHTML = '<td>Agora</td><td>sedef@exemplo.gov.br</td><td>Cadastro</td><td>Item do plano</td><td>Registro simulado criado com justificativa.</td>';
      table.prepend(row);
    }
    event.target.reset();
    showToast('Registro simulado salvo e auditado.');
  });

  $('[data-upload-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const preview = $('[data-upload-preview]');
    if (preview) preview.hidden = false;
    showToast('Planilha validada. Prévia demonstrativa exibida.');
  });

  $('[data-export-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = $('[data-export-result]');
    if (result) {
      const now = new Date().toLocaleString('pt-BR');
      result.hidden = false;
      result.textContent = `Exportação simulada gerada em ${now}. A versão funcional produziria o arquivo selecionado.`;
    }
    showToast('Exportação da dashboard simulada.');
  });

  $('[data-print-page]')?.addEventListener('click', () => window.print());

  $$('[data-profile-select]').forEach((select) => {
    select.addEventListener('change', () => showToast('Perfil alterado. Registro de auditoria simulado.'));
  });

  $('[data-support-button]')?.addEventListener('click', () => {
    showToast('Suporte em desenvolvimento. Em uma versão funcional, este botão abriria um canal de atendimento.');
  });

})();
