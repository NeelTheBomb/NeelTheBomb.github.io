(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const url = project => `project.html?id=${encodeURIComponent(project.id)}`;
  const tags = project => `<ul class="tags" aria-label="Technologies">${project.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`;
  const external = link => `<a class="text-link" href="${esc(link.url)}" ${link.download ? 'download' : ''}>${esc(link.label)}</a>`;
  const isDetail = document.body.dataset.page === 'project';
  document.getElementById('header').innerHTML = `<a class="brand" href="index.html" aria-label="${esc(data.name)} home"><span>${esc(data.name)}</span></a><nav aria-label="Main navigation"><a href="index.html#projects" ${!isDetail ? 'aria-current="page"' : ''}>Projects</a><a href="index.html#about">About</a><a href="${esc(data.linkedin)}">LinkedIn</a></nav>`;
  document.getElementById('footer').innerHTML = `<span>© ${new Date().getFullYear()} ${esc(data.name)}</span>`;
  const cardImage = project => project.video
    ? `<div class="project-visual welding"><div class="weld-orbit" aria-hidden="true"></div><span class="play-symbol" aria-hidden="true">▷</span></div>`
    : `<div class="project-visual ${esc(project.imageClass || '')}"><img src="${esc(project.image)}" alt="${esc(project.imageAlt)}" loading="lazy" width="800" height="500"></div>`;
  const card = project => `<article class="project-card"><a href="${url(project)}" class="card-link">${cardImage(project)}<div class="card-copy"><h3>${esc(project.shortTitle)}</h3><p>${esc(project.summary)}</p></div></a>${tags(project)}</article>`;
  const main = document.getElementById('main');
  if (!isDetail) {
    const featured = data.projects[0];
    main.innerHTML = `<section id="projects" aria-labelledby="projects-heading"><div class="section-heading"><h1 id="projects-heading">Projects</h1></div><article class="featured"><div class="featured-copy"><h2><a href="${url(featured)}">${esc(featured.shortTitle)}</a></h2><p>${esc(featured.summary)}</p>${tags(featured)}<span class="featured-context">${esc(featured.context)}</span></div><a class="featured-image" href="${url(featured)}" aria-label="Explore ${esc(featured.shortTitle)}"><img src="${esc(featured.image)}" alt="${esc(featured.imageAlt)}" width="1000" height="750"></a></article><div class="project-grid">${data.projects.slice(1).map(card).join('')}</div></section>
      <section id="about" class="about" aria-labelledby="about-heading"><div><h2 id="about-heading">About</h2><p class="about-intro">${esc(data.about)}</p>${data.email ? `<div class="about-links"><a class="text-link" href="mailto:${esc(data.email)}">Email</a></div>` : ''}</div><div class="activities">${data.activities.map(a => `<article><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p></article>`).join('')}</div></section>`;
  } else {
    const project = data.projects.find(p => p.id === new URLSearchParams(location.search).get('id'));
    if (!project) {
      document.title = `Project not found — ${data.name}`;
      main.innerHTML = '<section class="detail-hero"><h1>Project not found</h1><p>This project link may have changed.</p><a class="text-link" href="index.html#projects">View all projects</a></section>';
      return;
    }
    document.title = `${project.shortTitle} — ${data.name}`;
    document.querySelector('meta[name="description"]').content = project.summary;
    const media = project.video
      ? `<video controls playsinline preload="metadata" aria-label="Underwater welding VR project demonstration"><source src="${esc(project.video)}" type="video/mp4">Your browser cannot play this video. <a href="${esc(project.video)}">Download the demonstration</a>.</video>`
      : `<div class="media-gallery ${project.imageClass === 'phone' ? 'phones' : ''}">${project.id === 'protein-language-models' ? `<a href="assets/ml-poster.pdf" aria-label="Open full research poster PDF">` : ''}<img src="${esc(project.image)}" alt="${esc(project.imageAlt)}" width="1000" height="750">${project.id === 'protein-language-models' ? '</a>' : ''}${(project.gallery || []).map(im => `<img src="${esc(im.src)}" alt="${esc(im.alt)}" loading="lazy" width="1000" height="750">`).join('')}</div>`;
    main.innerHTML = `<section class="detail-hero"><h1>${esc(project.shortTitle)}</h1><p class="detail-summary">${esc(project.summary)}</p><div class="detail-meta"><span>${esc(project.context)}</span>${tags(project)}</div>${project.links.length ? `<div class="project-links">${project.links.map(external).join('')}</div>` : ''}</section><div class="project-story">${project.sections.map(section => `<section><h2>${esc(section.title)}</h2><p>${esc(section.text)}</p></section>`).join('')}</div><figure class="project-media">${media}<figcaption>${esc(project.mediaCaption)}</figcaption></figure>`;
  }
})();
