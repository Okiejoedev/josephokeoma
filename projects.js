/* Renders projects from projects.json into any element with data-projects="cat1,cat2". Edit projects.json, not this file. */
(function () {
  const esc = t => String(t || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const ext = u => /^https?:/.test(u);
  const card = p => {
    const links = (p.links || []).map(l => `<a href="${esc(l.url)}"${ext(l.url) ? ' target="_blank" rel="noopener"' : ''}>${esc(l.label)} →${ext(l.url) ? '<span class="sr-only"> (opens in a new tab)</span>' : ''}</a>`).join('');
    return `<article class="pcard">${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : ''}
      <div class="body">${p.meta ? `<p class="meta">${esc(p.meta)}</p>` : ''}<h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
      ${p.tags && p.tags.length ? `<ul class="chips" aria-label="Tools and topics">${p.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
      <div class="links">${links || (p.note ? `<span class="soon-note">${esc(p.note)}</span>` : '')}</div></div></article>`;
  };
  const targets = document.querySelectorAll('[data-projects]');
  if (!targets.length) return;
  fetch('projects.json', { cache: 'no-cache' }).then(r => r.json()).then(data => {
    targets.forEach(el => {
      const want = el.dataset.projects.split(',').map(s => s.trim());
      const showHeads = el.dataset.headings !== 'off';
      el.innerHTML = data.categories.filter(c => want.includes(c.id)).map(c => {
        const list = data.projects.filter(p => p.category === c.id);
        if (!list.length) return '';
        return `<div class="pgroup">${showHeads ? `<h3 class="ghead">${esc(c.title)}</h3><p class="sub">${esc(c.intro)}</p>` : ''}<div class="pgrid">${list.map(card).join('')}</div></div>`;
      }).join('');
    });
  }).catch(() => targets.forEach(el => { el.innerHTML = '<p class="sub">Could not load. Please refresh the page.</p>'; }));
})();
