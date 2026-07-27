// ---------- PROJECT DATA ----------
const CATEGORY_META = {
  campaigns: { label: "Campaigns & Launches", color: "#C2453A" },
  editorial: { label: "Editorial & Content", color: "#D8A63D" },
  strategy:  { label: "Strategy & Research", color: "#5C7A3E" }
};

const PROJECTS = {
  "anthropocene-reviewed": {
    category: "campaigns",
    title: "The Anthropocene Reviewed",
    tagline: "Fan-made book microsite for John Green's essay collection",
    role: "Personal Project — Web & Editorial Design",
    tools: "Webflow, Figma, Illustrator",
    timeline: "Personal project",
    overview: "A fan-made promotional microsite for The Anthropocene Reviewed: Essays on a Human-Centered Planet by John Green — one of my favorite books. Designed as if it were a real publisher launch page, translating the book's reflective, review-style essay format into a warm, editorial site design.",
    highlights: [
      "Designed a microsite that reinterprets the book's essay format as an interactive scroll experience",
      "Built a fictional 'star rating' interaction inspired by the book's signature essay structure",
      "Explored publisher-style landing page conventions applied to a personal passion project"
    ],
    links: [
      { label: "View live site", url: "#", icon: "live" },
      { label: "View on GitHub", url: "#", icon: "github" }
    ]
  },
  "vivienne-westwood-campaign": {
    category: "campaigns",
    title: "Vivienne Westwood Fashion Microsite",
    tagline: "Concept still being decided — placeholder for now",
    role: "Personal Project — Web & Fashion Design",
    tools: "Webflow, Figma, Illustrator",
    timeline: "Personal project",
    overview: "A fan-made fashion microsite concept for Vivienne Westwood — direction still undecided between two ideas: a concept campaign built around an imagined FW26 'Belloni' collection, or an archival tribute to the Westwood pieces popularized by Ai Yazawa's manga Nana. This entry is a placeholder until that decision is made.",
    highlights: [
      "Direction TBD — swap this project's copy once the concept is finalized",
      "Will explore either a seasonal campaign concept or an archival/editorial tribute format",
      "Placeholder kept in the Campaigns & Launches section to hold its spot"
    ],
    links: [
      { label: "View live site", url: "#", icon: "live" },
      { label: "View on GitHub", url: "#", icon: "github" }
    ]
  },
  "velvet-summer-rollout": {
    category: "campaigns",
    title: "Red Velvet — Velvet Summer Rollout",
    tagline: "Fan-made album rollout microsite for Red Velvet's 'Velvet Summer' mini-album",
    role: "Personal Project — Web & Campaign Design",
    tools: "Webflow, Photoshop, Illustrator",
    timeline: "Personal project",
    overview: "A fan-made promotional rollout microsite imagining the campaign for Red Velvet's upcoming mini-album 'Velvet Summer,' released in two physical concepts — 'Big Wave' and 'High Tide.' Designed as a K-pop label-style countdown and concept reveal site.",
    highlights: [
      "Designed two distinct visual concepts ('Big Wave' and 'High Tide') for a single album rollout",
      "Built a countdown-style microsite modeled after real K-pop comeback rollout sites",
      "Explored dual-concept album marketing, a common K-pop release strategy"
    ],
    links: [
      { label: "View live site", url: "#", icon: "live" },
      { label: "View on GitHub", url: "#", icon: "github" }
    ]
  },
  "moss-meadow-zine": {
    category: "editorial",
    title: "Moss & Meadow Zine",
    tagline: "Print-style zine spreads, designed in Canva/InDesign and coded as a flippable web gallery",
    role: "Illustrator & Web Designer",
    tools: "Canva, InDesign, JavaScript",
    timeline: "Personal project",
    overview: "Designed a set of nature-themed zine spreads in Canva and InDesign, then exported them as images and coded a scroll-snap carousel so visitors can flip through the double-page spreads directly on the site, the way you'd flip through a print zine.",
    highlights: [
      "Designed full double-page spreads with a cohesive print-zine layout system",
      "Exported spreads as images and coded a scroll-snap flipbook carousel from scratch",
      "Built prev/next controls and page-position dots for an intuitive flip-through feel"
    ],
    media: {
      type: "flipbook",
      spreads: [
        { caption: "Cover spread" },
        { caption: "Feature spread" },
        { caption: "Back cover" }
      ]
    }
  },
  "wildflower-zine": {
    category: "editorial",
    title: "Wildflower Zine",
    tagline: "Digital flipbook zine, designed in Figma and coded as a page-turning site",
    role: "Content & Web Designer",
    tools: "Figma, Canva, JavaScript",
    timeline: "Personal project",
    overview: "Designed the zine's double-page spreads in Figma, exported them as images, then coded a page-turning flipbook experience so the zine can be read spread-by-spread, directly embedded in the portfolio.",
    highlights: [
      "Designed and laid out 6+ double-page spreads in Figma",
      "Coded a lightweight scroll-snap flipbook component reused across both zine projects",
      "Focused on a smooth, swipeable page-turn feel on both desktop and mobile"
    ],
    media: {
      type: "flipbook",
      spreads: [
        { caption: "Cover spread" },
        { caption: "Spread 1" },
        { caption: "Spread 2" },
        { caption: "Back cover" }
      ]
    }
  },
   "newjeans-case-study": {
    category: "strategy",
    title: "NewJeans: Rise, Fall & Return",
    tagline: "A case study breakdown of NewJeans' rapid rise, public fallout, and return",
    role: "Personal Project — Market & Culture Analysis",
    tools: "Google Docs, Miro",
    timeline: "Personal project",
    overview: "A case study breakdown of K-pop group NewJeans — examining their rapid rise built on a distinct Y2K, girl-next-door concept and viral marketing, the public dispute with their label that led to their hiatus, and their recent return to social media without one of the group's original five members.",
    highlights: [
      "Mapped NewJeans' brand concept and marketing timeline from debut through hiatus",
      "Analyzed how the label dispute shaped fan sentiment and public brand perception",
      "Broke down the messaging strategy behind the group's return to social media"
    ],
    media: {
      type: "gallery",
      images: [
        { caption: "Brand concept & debut" },
        { caption: "Marketing timeline" },
        { caption: "Return strategy breakdown" }
      ]
    }
  },
  "txt-tws-comparison": {
    category: "strategy",
    title: "TXT vs. TWS: Market Strategy Comparison",
    tagline: "Comparing how two boy groups built success in different markets",
    role: "Personal Project — Market & Competitive Analysis",
    tools: "Google Docs, Miro, Google Sheets",
    timeline: "Personal project",
    overview: "A side-by-side case study comparing Tomorrow X Together (TXT) and TWS — two HYBE boy groups with different market outcomes. TXT has built crossover success in both the Korean and international markets, while TWS has found success primarily within Korea. This breakdown explores how differences in group concept, musical style, and marketing strategy shaped each group's audience reach.",
    highlights: [
      "Compared group concept, sound, and visual identity across both acts",
      "Mapped each group's marketing channels and where they concentrate audience reach",
      "Identified the factors behind TXT's crossover success versus TWS's domestic-first traction"
    ],
    media: {
      type: "gallery",
      images: [
        { caption: "Concept & positioning" },
        { caption: "Marketing channel comparison" },
        { caption: "Market reach findings" }
      ]
    }
  },
  "market-research-presentation": {
  category: "strategy",
  title: "Market Research Presentation",
  tagline: "Marketing & outreach strategy presented to Baruch Writing Center staff",
  role: "Outreach & Marketing Intern",
  tools: "Google Slides, Canva, Google Docs",
  timeline: "March 2025 to May 2025",
  overview: "During my internship at the Baruch Writing Center, I worked alongside two fellow interns (L.L and S.G) to research and evaluate the Center's current marketing approach, then present data-backed recommendations to Writing Center faculty and leadership. I contributed to every stage of the research — audience analysis, SWOT, and competitor benchmarking — and took the lead on structuring the final presentation itself, organizing our findings into a clear narrative arc (audience → current state → gaps → recommendations) that stakeholders could act on immediately.",
  highlights: [
    "Synthesized 5 years of enrollment and appointment data into a clear audience profile",
    "Benchmarked outreach strategy against two comparable campus offices (STARR and SACC)",
    "Co-developed 5 actionable recommendations, presented directly to Writing Center leadership",
    "Structured the presentation's narrative arc, used to guide the entire stakeholder pitch"
  ],
  media: {
    type: "gallery",
    images: [
      { caption: "Title & Introduction", src: "assets/market-research/slide-01.jpg" },
      { caption: "Project Overview", src: "assets/market-research/slide-02.jpg" },
      { caption: "Methodology", src: "assets/market-research/slide-03.jpg" },
      { caption: "Marketing Goals", src: "assets/market-research/slide-04.jpg" },
      { caption: "SWOT Analysis", src: "assets/market-research/slide-05.jpg" },
      { caption: "Audience Analysis", src: "assets/market-research/slide-06.jpg" },
      { caption: "Who We Serve, By Major", src: "assets/market-research/slide-07.jpg" },
      { caption: "Services Provided", src: "assets/market-research/slide-08.jpg" },
      { caption: "School Culture", src: "assets/market-research/slide-09.jpg" },
      { caption: "Lasting Effects of the Pandemic", src: "assets/market-research/slide-10.jpg" },
      { caption: "Current Marketing Efforts", src: "assets/market-research/slide-11.jpg" },
      { caption: "Competitor Analysis", src: "assets/market-research/slide-12.jpg" },
      { caption: "Student Perspectives", src: "assets/market-research/slide-13.jpg" },
      { caption: "Underserved Segments", src: "assets/market-research/slide-14.jpg" },
      { caption: "The Roadmap", src: "assets/market-research/slide-15.jpg" },
      { caption: "Recommendations in Detail", src: "assets/market-research/slide-16.jpg" },
      { caption: "Deliverables", src: "assets/market-research/slide-17.jpg" },
      { caption: "Project Outcome", src: "assets/market-research/slide-18.jpg" }
    ]
  }
}
};

// ---------- LIGHTBOX (click a gallery image to view full size) ----------
function openLightbox(src, caption) {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <figure>
      <img src="${src}" alt="${caption}">
      <figcaption>${caption}</figcaption>
    </figure>
  `;
  overlay.addEventListener("click", () => overlay.remove());
  document.body.appendChild(overlay);
}

// ---------- ELEMENT REFS ----------
const tabbar = document.getElementById("tabbar");
const dynamicPanels = document.getElementById("dynamicPanels");
const urlText = document.getElementById("url-text");

// ---------- CORE TAB SWITCHING ----------
function showTab(key) {
  document.querySelectorAll(".tab").forEach(t => {
    const tKey = t.dataset.project ? "project-" + t.dataset.project : t.dataset.tab;
    t.classList.toggle("active", tKey === key);
  });
  document.querySelectorAll(".panel").forEach(p => {
    p.classList.toggle("active", p.dataset.panel === key);
  });
  urlText.textContent = "jasmin-bonilla.portfolio.com/" + key;
  document.querySelector(".frame").scrollIntoView({ behavior: "smooth", block: "start" });
}

// static tab clicks
document.querySelectorAll(".tab[data-tab]").forEach(tab => {
  tab.addEventListener("click", () => showTab(tab.dataset.tab));
});

// ---------- DYNAMIC PROJECT TABS ----------
function openProject(id) {
  const key = "project-" + id;
  const existing = document.querySelector(`.tab[data-project="${id}"]`);

  if (!existing) {
    const data = PROJECTS[id];
    if (!data) return;
    createProjectTab(id, data);
    createProjectPanel(id, data);
  }
  showTab(key);
}

function createProjectTab(id, data) {
  const tab = document.createElement("button");
  tab.className = "tab";
  tab.dataset.project = id;
  tab.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/></svg>
    <span class="tab-label"></span>
    <span class="tab-close" title="Close tab">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </span>
  `;
  tab.querySelector(".tab-label").textContent = data.title;

  tab.addEventListener("click", () => showTab("project-" + id));
  tab.querySelector(".tab-close").addEventListener("click", (e) => {
    e.stopPropagation();
    closeProject(id);
  });

  tabbar.appendChild(tab);
}

function closeProject(id) {
  const tab = document.querySelector(`.tab[data-project="${id}"]`);
  const panel = document.querySelector(`.panel[data-panel="project-${id}"]`);
  const wasActive = tab && tab.classList.contains("active");

  if (tab) tab.remove();
  if (panel) panel.remove();

  if (wasActive) showTab("projects");
}

// ---------- ICONS FOR LINK BUTTONS ----------
const LINK_ICONS = {
  live: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>`
};

function renderLinks(links) {
  if (!links || !links.length) return "";
  const buttons = links.map(l => `
    <a class="project-link-btn" href="${l.url}" target="_blank" rel="noopener">
      ${LINK_ICONS[l.icon] || LINK_ICONS.live}
      ${l.label}
    </a>
  `).join("");
  return `<div class="project-links">${buttons}</div>`;
}

// ---------- MEDIA (GALLERY / EMBED) ----------
function renderMedia(media) {
  if (!media) return "";

  if (media.type === "gallery") {
    const items = media.images.map(img => {
      if (img.src) {
  return `
    <div class="gallery-item">
      <img src="${img.src}" alt="${img.caption}" onclick="openLightbox('${img.src}', '${img.caption.replace(/'/g, "\\'")}')">
      <p>${img.caption}</p>
    </div>
  `;
}
      return `
        <div class="gallery-item gallery-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5-9 9"/></svg>
          <p>${img.caption}</p>
        </div>
      `;
    }).join("");
    return `
      <div class="project-media">
        <h3>Take a look</h3>
        <div class="media-gallery">${items}</div>
      </div>
    `;
  }

  if (media.type === "embed") {
    if (!media.url || media.url === "#") {
      return `
        <div class="project-media">
          <h3>Take a look</h3>
          <div class="embed-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>
            <p>${media.note || "Live embed will appear here"}</p>
            <span>Add the real URL in script.js to activate this embed</span>
          </div>
        </div>
      `;
    }
    return `
      <div class="project-media">
        <h3>Take a look</h3>
        <div class="embed-frame">
          <iframe src="${media.url}" loading="lazy" title="${media.note || 'Embedded project'}"></iframe>
        </div>
      </div>
    `;
  }

  if (media.type === "flipbook") {
    const spreads = media.spreads || [];
    const uid = "fb-" + Math.random().toString(36).slice(2, 9);
    const slides = spreads.map(s => {
      if (s.src) {
        return `
          <div class="flipbook-slide">
            <img src="${s.src}" alt="${s.caption}" onclick="openLightbox('${s.src}', '${(s.caption || '').replace(/'/g, "\\'")}')">
          </div>
        `;
      }
      return `
        <div class="flipbook-slide flipbook-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.4"><rect x="2" y="4" width="9" height="16" rx="1.5"/><rect x="13" y="4" width="9" height="16" rx="1.5"/></svg>
          <p>${s.caption}</p>
        </div>
      `;
    }).join("");
    const dots = spreads.map((_, i) => `<span class="flip-dot${i === 0 ? ' active' : ''}"></span>`).join("");
    return `
      <div class="project-media">
        <h3>Take a look</h3>
        <div class="flipbook" id="${uid}">
          <button class="flip-arrow flip-prev" onclick="flipPage('${uid}', -1)" aria-label="Previous spread">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <div class="flipbook-track">${slides}</div>
          <button class="flip-arrow flip-next" onclick="flipPage('${uid}', 1)" aria-label="Next spread">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
        <div class="flipbook-dots" data-dots-for="${uid}">${dots}</div>
      </div>
    `;
  }

  return "";
}

// ---------- FLIPBOOK CONTROLS ----------
function flipPage(id, dir) {
  const track = document.querySelector(`#${id} .flipbook-track`);
  if (!track) return;
  const slide = track.querySelector(".flipbook-slide");
  const slideWidth = slide.offsetWidth + 16;
  track.scrollBy({ left: dir * slideWidth, behavior: "smooth" });
  setTimeout(() => updateFlipDots(id), 300);
}

function updateFlipDots(id) {
  const track = document.querySelector(`#${id} .flipbook-track`);
  const dotsWrap = document.querySelector(`[data-dots-for="${id}"]`);
  if (!track || !dotsWrap) return;
  const slide = track.querySelector(".flipbook-slide");
  if (!slide) return;
  const slideWidth = slide.offsetWidth + 16;
  const index = Math.round(track.scrollLeft / slideWidth);
  dotsWrap.querySelectorAll(".flip-dot").forEach((d, i) => d.classList.toggle("active", i === index));
}

function createProjectPanel(id, data) {
  const meta = CATEGORY_META[data.category];

  const panel = document.createElement("div");
  panel.className = "panel";
  panel.dataset.panel = "project-" + id;

  const highlightsHtml = data.highlights.map(h => `
    <li>
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
      <span>${h}</span>
    </li>
  `).join("");

  panel.innerHTML = `
    <div class="project-detail">
      <button class="back-link" data-back>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg>
        Back to Projects
      </button>

      <div class="project-banner" style="background:${meta.color};">
        <span class="cat-label">${meta.label}</span>
        <h2>${data.title}</h2>
        <p>${data.tagline}</p>
      </div>

      <div class="project-meta">
        <div class="meta-chip"><b>Role</b>${data.role}</div>
        <div class="meta-chip"><b>Tools</b>${data.tools}</div>
        <div class="meta-chip"><b>Timeline</b>${data.timeline}</div>
      </div>

      ${renderLinks(data.links)}

      <div class="project-body">
        <h3>Overview</h3>
        <p>${data.overview}</p>
        <h3>Highlights</h3>
        <ul class="project-highlights">
          ${highlightsHtml}
        </ul>
      </div>

      ${renderMedia(data.media)}
    </div>
  `;

  panel.querySelector("[data-back]").addEventListener("click", () => showTab("projects"));

  panel.querySelectorAll(".flipbook-track").forEach(track => {
    const wrapId = track.closest(".flipbook").id;
    track.addEventListener("scroll", () => {
      clearTimeout(track._scrollTimer);
      track._scrollTimer = setTimeout(() => updateFlipDots(wrapId), 100);
    });
  });

  dynamicPanels.appendChild(panel);
}

// project tile clicks
document.querySelectorAll(".tile[data-project]").forEach(tile => {
  tile.addEventListener("click", () => openProject(tile.dataset.project));
});