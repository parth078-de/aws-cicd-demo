// ============ THEME TOGGLE ============
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const toggleLabel = document.getElementById('toggleLabel');
  const toggleIcon = document.getElementById('toggleIcon');

  function applyTheme(dark){
    root.classList.toggle('dark', dark);
    toggleLabel.textContent = dark ? 'Blueprint' : 'Paper';
    toggleIcon.innerHTML = dark
      ? '<path d="M20 14.5A8 8 0 1110 3a6.5 6.5 0 0010 11.5z" fill="#E7A94C" stroke="none"/>'
      : '<circle cx="12" cy="12" r="4.2"/>';
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);

  themeToggle.addEventListener('click', () => {
    applyTheme(!root.classList.contains('dark'));
  });

  // ============ MOBILE DRAWER ============
  const drawer = document.getElementById('drawer');
  document.getElementById('drawerOpen').addEventListener('click', () => drawer.classList.add('open'));
  document.getElementById('drawerClose').addEventListener('click', () => drawer.classList.remove('open'));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

  // ============ SPEC TABLE (skills) ============
  const specs = [
    { key:'Languages', items:['Java','SQL','Python','JavaScript','Swift'] },
    { key:'Web development', items:['HTML','CSS','PHP'] },
    { key:'Frameworks', items:['Bootstrap','jQuery','React'] },
    { key:'Databases', items:['PostgreSQL','MySQL'] },
    { key:'Tools', items:['VS Code','Figma','Webflow','MS Office'] },
    { key:'Working style', items:['Communication','Teamwork','Collaboration'] },
  ];
  const specTable = document.getElementById('specTable');
  specs.forEach((row, i) => {
    const el = document.createElement('div');
    el.className = 'spec-row';
    el.innerHTML = `
      <div class="spec-key"><span class="spec-index">${String(i+1).padStart(2,'0')}</span>${row.key}</div>
      <div class="spec-items">${row.items.map(it => `<span class="chip">${it}</span>`).join('')}</div>
    `;
    specTable.appendChild(el);
  });

  // ============ SCROLL REVEAL ============
  const reveal = (selector, cls='in') => {
    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(cls); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
  };
  reveal('.spec-row');
  reveal('.plan-card');
  reveal('.survey-item');
