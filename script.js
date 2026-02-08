/**
 * VFX PORTFOLIO — DATA MODEL + LOGIC
 * Brutal Rule: No breakdown = No display
 */

// ============================================
// PROJECTS DATA MODEL
// ============================================
const PROJECTS = [
  {
    id: "proj-001",
    title: "Luxury Perfume Product Spot",
    year: 2024,
    category: "product3d",
    role: "3D Artist — Full CG Product + Lighting + Compositing",
    tools: ["Blender", "After Effects", "Photoshop"],
    hero: true,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Perfume+Spot",
    finalVideo: "placeholder_final_perfume.mp4",
    breakdownVideo: "placeholder_breakdown_perfume.mp4",
    beforeAfter: null,
    responsibilities: [
      "Modeled perfume bottle from client reference photos",
      "Created glass and liquid materials with realistic caustics",
      "Lit product to match brand moodboard aesthetic",
      "Animated bottle reveal with particle effects",
      "Composited final with grain and color grade",
      "Delivered 3 aspect ratios for social media"
    ],
    credits: "Client: Fragrance Brand (NDA)",
    notes: "Full CG, 10-day turnaround."
  },
  {
    id: "proj-002",
    title: "Hologram Phone Interface",
    year: 2024,
    category: "vfx_comp",
    role: "VFX Compositor — Hologram Design + Integration",
    tools: ["After Effects", "Blender", "Mocha Pro"],
    hero: true,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Hologram+VFX",
    finalVideo: "placeholder_final_hologram.mp4",
    breakdownVideo: "placeholder_breakdown_hologram.mp4",
    beforeAfter: {
      before: "https://placehold.co/640x360/1a1a1a/666?text=Plate",
      after: "https://placehold.co/640x360/1a1a1a/666?text=Final+Comp"
    },
    responsibilities: [
      "Tracked handheld phone footage in Mocha Pro",
      "Designed holographic UI elements in After Effects",
      "Created glitch and scan-line effects",
      "Integrated hologram with interactive light on hand",
      "Color matched to original footage",
      "Delivered ProRes for social media"
    ],
    credits: "Personal Project — Concept Piece",
    notes: "120 frames, handheld track."
  },
  {
    id: "proj-003",
    title: "Skincare Brand Campaign",
    year: 2024,
    category: "product3d",
    role: "3D Generalist — Product Animation + Compositing",
    tools: ["Blender", "After Effects", "Photoshop"],
    hero: true,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Skincare+Ad",
    finalVideo: "placeholder_final_skincare.mp4",
    breakdownVideo: "placeholder_breakdown_skincare.mp4",
    beforeAfter: null,
    responsibilities: [
      "Modeled product from 2D reference images",
      "Created cream texture with subsurface scattering",
      "Animated lid open and cream reveal",
      "Rendered 4 angles for carousel content",
      "Composited with lifestyle background plates"
    ],
    credits: "Client: Beauty Startup",
    notes: "Delivered in 1 week."
  },
  {
    id: "proj-004",
    title: "Music Video — Portal Effect",
    year: 2024,
    category: "vfx_comp",
    role: "VFX Artist — Portal Design + Compositing",
    tools: ["After Effects", "Blender", "Mocha Pro"],
    hero: false,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Portal+VFX",
    finalVideo: "placeholder_final_portal.mp4",
    breakdownVideo: "placeholder_breakdown_portal.mp4",
    beforeAfter: {
      before: "https://placehold.co/640x360/1a1a1a/666?text=Clean+Plate",
      after: "https://placehold.co/640x360/1a1a1a/666?text=Portal+Final"
    },
    responsibilities: [
      "Created 3D portal geometry in Blender",
      "Animated portal opening with particle emission",
      "Tracked talent movement for interaction",
      "Composited portal with light wrap on talent",
      "Added interactive glow and reflections"
    ],
    credits: "Artist: Nigerian Musician",
    notes: "200-frame shot, greenscreen."
  },
  {
    id: "proj-005",
    title: "Brand Explainer Motion Graphics",
    year: 2024,
    category: "motion",
    role: "Motion Designer — Full Explainer Video",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    hero: true,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Explainer+Video",
    finalVideo: "placeholder_final_explainer.mp4",
    breakdownVideo: "placeholder_breakdown_explainer.mp4",
    beforeAfter: null,
    responsibilities: [
      "Designed custom icons and graphics from brief",
      "Animated 60-second explainer video",
      "Created modular graphics for brand consistency",
      "Synced animations to voiceover timing",
      "Delivered web-optimized final"
    ],
    credits: "Client: Tech Startup (NDA)",
    notes: "Turnaround: 8 days."
  },
  {
    id: "proj-006",
    title: "Environment Extension — Rooftop Scene",
    year: 2024,
    category: "vfx_comp",
    role: "Compositor — Sky Replacement + Set Extension",
    tools: ["After Effects", "Mocha Pro", "Photoshop"],
    hero: true,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Environment+VFX",
    finalVideo: "placeholder_final_environment.mp4",
    breakdownVideo: "placeholder_breakdown_environment.mp4",
    beforeAfter: {
      before: "https://placehold.co/640x360/1a1a1a/666?text=Original+Plate",
      after: "https://placehold.co/640x360/1a1a1a/666?text=Extended+Scene"
    },
    responsibilities: [
      "Replaced overcast sky with dramatic sunset",
      "Extended building rooftop with matte painting",
      "Tracked camera movement for seamless blend",
      "Color matched extension to original footage",
      "Added atmospheric haze and light rays",
      "Delivered color-graded final"
    ],
    credits: "Client: Content Creator",
    notes: "150 frames, handheld footage."
  },
  {
    id: "proj-007",
    title: "Social Media Intro Package",
    year: 2024,
    category: "motion",
    role: "Motion Designer — Intro + Lower Thirds",
    tools: ["After Effects", "Blender", "Illustrator"],
    hero: false,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Intro+Package",
    finalVideo: "placeholder_final_intro.mp4",
    breakdownVideo: "placeholder_breakdown_intro.mp4",
    beforeAfter: null,
    responsibilities: [
      "Designed 8-second animated intro",
      "Created matching lower thirds templates",
      "Built 3D logo animation in Blender",
      "Delivered editable Premiere templates"
    ],
    credits: "Client: YouTube Creator",
    notes: "Template files for client reuse."
  },
  {
    id: "proj-008",
    title: "Screen Replacement — Laptop Ad",
    year: 2023,
    category: "vfx_comp",
    role: "Compositor — Screen Track + Replacement",
    tools: ["After Effects", "Mocha Pro"],
    hero: false,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Screen+Replace",
    finalVideo: "placeholder_final_screen.mp4",
    breakdownVideo: "placeholder_breakdown_screen.mp4",
    beforeAfter: {
      before: "https://placehold.co/640x360/1a1a1a/666?text=Green+Screen",
      after: "https://placehold.co/640x360/1a1a1a/666?text=Final+Comp"
    },
    responsibilities: [
      "Tracked laptop screen through full shot",
      "Replaced green screen with UI mockup",
      "Added realistic screen reflections",
      "Matched screen glow to environment"
    ],
    credits: "Client: Tech Brand",
    notes: "300 frames, subtle camera move."
  },
  {
    id: "proj-009",
    title: "Beverage Product Animation",
    year: 2024,
    category: "product3d",
    role: "3D Artist — Product Modeling + Animation",
    tools: ["Blender", "After Effects", "Photoshop"],
    hero: false,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Beverage+3D",
    finalVideo: "placeholder_final_beverage.mp4",
    breakdownVideo: "placeholder_breakdown_beverage.mp4",
    beforeAfter: null,
    responsibilities: [
      "Modeled can from product photos",
      "Created condensation and water droplet materials",
      "Animated pour with liquid simulation",
      "Rendered multiple angles for ad cuts"
    ],
    credits: "Client: Beverage Brand",
    notes: "Full CG including liquid."
  },
  {
    id: "proj-010",
    title: "VFX Breakdown Showreel",
    year: 2024,
    category: "direction",
    role: "Director + Editor — Self-Promo Piece",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    hero: true,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Breakdown+Reel",
    finalVideo: "placeholder_final_showreel.mp4",
    breakdownVideo: "placeholder_breakdown_showreel.mp4",
    beforeAfter: null,
    responsibilities: [
      "Selected 10 best shots from recent work",
      "Edited 75-second reel with breakdown wipes",
      "Paced cuts to music for impact",
      "Color graded for visual consistency",
      "Rendered web and social media versions"
    ],
    credits: "Self-directed",
    notes: "Updated quarterly."
  },
  {
    id: "proj-011",
    title: "2D Compositing Course",
    year: 2024,
    category: "direction",
    role: "Instructor — Curriculum Design + Delivery",
    tools: ["After Effects", "OBS", "Premiere Pro"],
    hero: false,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Compositing+Course",
    finalVideo: "placeholder_final_training.mp4",
    breakdownVideo: "placeholder_breakdown_training.mp4",
    beforeAfter: null,
    responsibilities: [
      "Designed beginner-friendly curriculum",
      "Recorded tutorial content with screen capture",
      "Created project files for each lesson",
      "Taught tracking, roto, holograms, color matching",
      "Mentored students through completion"
    ],
    credits: "Platform: Private Workshops",
    notes: "Project-based learning approach."
  },
  {
    id: "proj-012",
    title: "Ad Campaign — Product Closeups",
    year: 2023,
    category: "motion",
    role: "Motion Designer — Product Showcase",
    tools: ["After Effects", "Blender", "Photoshop"],
    hero: false,
    thumb: "https://placehold.co/640x360/1a1a1a/666?text=Product+Motion",
    finalVideo: "placeholder_final_product.mp4",
    breakdownVideo: "placeholder_breakdown_product.mp4",
    beforeAfter: null,
    responsibilities: [
      "Animated product reveals with 3D elements",
      "Designed text overlays and callouts",
      "Created seamless loop animations",
      "Delivered 60s and 15s social cuts"
    ],
    credits: "Client: E-commerce Brand",
    notes: "Instagram and TikTok formats."
  }
];

// ============================================
// ARTIST INFO
// ============================================
const ARTIST = {
  name: "Goodness Chisom",
  tagline: "VFX & Compositing • 3D Product Animation • CG Integration",
  email: "thegoodnesschisom@gmail.com",
  linkedin: "https://linkedin.com/in/goodnesschisom",
  instagram: "https://instagram.com/goodnessvfx",
  youtube: "https://youtube.com/@thegoodnesschisom",
  location: "Lagos, Nigeria",
  timezone: "WAT (UTC+1)",
  availability: "Available for freelance + remote work",
  reelUrl: "placeholder_reel.mp4",
  reelDuration: 75, // seconds
  resumeUrl: "resume_goodness_chisom.pdf",
  resumePreview: "https://placehold.co/600x800/1a1a1a/666?text=Resume+Preview"
};

// ============================================
// SERVICES / WHAT I DO
// ============================================
const SERVICES = [
  {
    id: "product3d",
    title: "3D Product Animation",
    desc: "High-quality renders and cinematic presentation for ads, social media, and brand campaigns.",
    filter: "product3d"
  },
  {
    id: "vfx_comp",
    title: "VFX & Compositing",
    desc: "Integrating CG into live-action, cleanup shots, rotoscoping, tracking, holograms, environment effects.",
    filter: "vfx_comp"
  },
  {
    id: "motion",
    title: "Motion Graphics",
    desc: "Clean, modern graphics for ads, intros, overlays, and visual enhancements.",
    filter: "motion"
  },
  {
    id: "direction",
    title: "Creative Direction",
    desc: "Concept development, shot planning, story visualization, and final execution for short VFX pieces.",
    filter: "direction"
  },
  {
    id: "training",
    title: "Training (2D Compositing)",
    desc: "Beginner-friendly After Effects classes focused on real-world skills and project-based learning.",
    link: "training.html"
  }
];

// ============================================
// SKILLS
// ============================================
const SKILLS = {
  software: [
    "After Effects", "Blender", "Cinema 4D", "Premiere Pro",
    "DaVinci Resolve", "Mocha Pro", "Photoshop", "Illustrator"
  ],
  competencies: [
    "3D Product Animation & Rendering",
    "CG Integration into Live-Action",
    "Rotoscoping & Cleanup",
    "Camera Tracking / Matchmoving",
    "Hologram & Environment Effects",
    "Color Matching & Grading",
    "Motion Graphics & Titles",
    "2D Compositing Instruction"
  ]
};

// ============================================
// DOM ELEMENTS
// ============================================
let currentFilter = "all";
let qcModeEnabled = false;
let currentProject = null;
let currentMediaView = "final";

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderHero();
  renderServices();
  renderWorkGrid();
  renderBreakdowns();
  renderResume();
  renderContact();
  renderFooter();
  setupEventListeners();
  setupLazyLoading();
  setupKeyboardNav();
});

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderHeader() {
  const header = document.getElementById("header");
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  const navItems = [
    { href: "index.html", label: "About" },
    { href: "work.html", label: "Work" },
    { href: "training.html", label: "Training" },
    { href: "contact.html", label: "Contact" }
  ];
  
  const navLinks = navItems.map(item => {
    const isActive = currentPage === item.href || (currentPage === '' && item.href === 'index.html');
    return `<a href="${item.href}" class="nav-link${isActive ? ' active' : ''}">${item.label}</a>`;
  }).join('');
  
  header.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="header-brand">
        <h1 class="header-name">${ARTIST.name}</h1>
        <p class="header-tagline">${ARTIST.tagline}</p>
      </a>
      <nav class="header-nav" id="headerNav" aria-label="Main navigation">
        ${navLinks}
      </nav>
      <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="mailto:${ARTIST.email}" class="header-email">${ARTIST.email}</a>
    </div>
  `;
  
  // Mobile menu toggle functionality
  initMobileMenu();
}

function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('headerNav');
  
  if (!toggle || !nav) return;
  
  // Helper to close menu
  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', !isOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });
  
  // Close menu when clicking nav links
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close menu when clicking on backdrop (the ::before pseudo-element area)
  nav.addEventListener('click', (e) => {
    // If click is on the nav itself (backdrop area) but not on links
    if (e.target === nav) {
      closeMenu();
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
    }
  });
  
  // Close menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('open')) {
      closeMenu();
    }
  });
}

function renderHero() {
  const hero = document.getElementById("hero");
  if (!hero) return;
  
  hero.innerHTML = `
    <!-- Floating gradient blobs -->
    <div class="gradient-blob" style="top: -200px; left: -200px;"></div>
    <div class="gradient-blob" style="top: 50%; right: -200px;"></div>
    
    <div class="about-inner">
      <a href="training.html" class="training-banner reveal hover-lift">
        <span class="training-banner-icon">🎓</span>
        <span class="training-banner-text"><strong>Learn VFX Compositing</strong> — Beginner-friendly VFX classes now open</span>
        <span class="training-banner-cta">Enroll Now →</span>
      </a>
      
      <div class="about-grid">
        <div class="about-image img-reveal reveal">
          <img src="goodness.jpg" alt="Goodness Chisom - VFX Artist" />
        </div>
        
        <div class="about-content">
          <section class="about-hero reveal reveal-delay-1">
            <h1 class="about-headline">Hi, I'm <span class="name-highlight">Goodness Chisom</span></h1>
            <p class="about-title">Visual Effects Artist & Digital Creative</p>
          </section>
          
          <section class="about-intro reveal reveal-delay-2">
            <div class="about-text stagger-children">
              <p>I'm a Visual Effects Artist and Digital Creative blending 3D, compositing, and strategic visual storytelling to help brands communicate with clarity and impact.</p>
              <p>Specializing in product animation, CG integration, and cinematic visual design, I transform simple ideas into expressive, emotionally-driven visuals.</p>
              <p>Over time, I've built a reputation for delivering <strong>VFX that feels alive</strong>.</p>
              <p>Beyond production, I teach compositing and empower beginners to understand the logic behind VFX, not just the buttons.</p>
            </div>
            <div class="about-location">
              <span class="location-icon">📍</span>
              <span>Based in Lagos, working globally.</span>
            </div>
          </section>
          
          <div class="about-cta-row reveal reveal-delay-3">
            <a href="work.html" class="btn-primary magnetic-btn"><span>View Work</span></a>
            <a href="contact.html" class="btn-secondary magnetic-btn"><span>Get in Touch</span></a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderServices() {
  const services = document.getElementById("services");
  if (!services) return;
  
  services.innerHTML = `
    <div class="services-inner reveal">
      <h2 class="section-title">What I Do</h2>
      <div class="services-grid stagger-children">
        ${SERVICES.map(s => {
          const href = s.link ? s.link : `work.html?filter=${s.filter}`;
          return `
          <a href="${href}" class="service-card hover-lift hover-glow" data-filter="${s.filter || ''}">
            <h3 class="service-title">${s.title}</h3>
            <p class="service-desc">${s.desc}</p>
            <span class="service-cta">${s.link ? 'Learn More' : 'View Work'} →</span>
          </a>
        `}).join("")}
      </div>
    </div>
    
    <div class="experience-inner">
      <h2 class="section-title">Experience</h2>
      <div class="experience-grid">
        <div class="experience-card">
          <h3 class="experience-role">VFX Artist & Compositor</h3>
          <p class="experience-company">Freelance — Nigeria / Remote</p>
          <ul class="experience-list">
            <li>CG product shots</li>
            <li>Roto, cleanup, matchmoving</li>
            <li>Creative short-form VFX</li>
            <li>Compositing for ads and personal brand visuals</li>
          </ul>
        </div>
        <div class="experience-card">
          <h3 class="experience-role">VFX Instructor</h3>
          <p class="experience-company">Private Training</p>
          <ul class="experience-list">
            <li>Taught 2D compositing to beginner creatives</li>
            <li>Designed project-based learning structure</li>
            <li>Provided hands-on guidance in tracking, rotoscoping, holograms, color matching, and integration workflows</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

function renderWorkGrid() {
  const work = document.getElementById("work");
  if (!work) return;
  
  const validProjects = PROJECTS.filter(p => p.breakdownVideo);
  
  // Check for filter parameter in URL
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter') || 'all';
  const projectParam = urlParams.get('project');
  
  work.innerHTML = `
    <div class="work-inner">
      <h2 class="section-title">Work</h2>
      <div class="filter-chips" role="tablist" aria-label="Filter projects">
        <button class="filter-chip ${filterParam === 'all' ? 'active' : ''}" data-filter="all" role="tab" aria-selected="${filterParam === 'all'}">All</button>
        <button class="filter-chip ${filterParam === 'product3d' ? 'active' : ''}" data-filter="product3d" role="tab" aria-selected="${filterParam === 'product3d'}">3D Product</button>
        <button class="filter-chip ${filterParam === 'vfx_comp' ? 'active' : ''}" data-filter="vfx_comp" role="tab" aria-selected="${filterParam === 'vfx_comp'}">VFX+Comp</button>
        <button class="filter-chip ${filterParam === 'motion' ? 'active' : ''}" data-filter="motion" role="tab" aria-selected="${filterParam === 'motion'}">Motion</button>
        <button class="filter-chip ${filterParam === 'direction' ? 'active' : ''}" data-filter="direction" role="tab" aria-selected="${filterParam === 'direction'}">Direction</button>
      </div>
      <div class="work-grid" id="work-grid">
        ${validProjects.map(p => renderProjectCard(p)).join("")}
      </div>
    </div>
  `;
  
  // Apply initial filter
  if (filterParam !== 'all') {
    filterProjects(filterParam, 'work');
  }
  
  // Open project modal if specified in URL
  if (projectParam) {
    setTimeout(() => openProjectModal(projectParam), 100);
  }
}

function renderProjectCard(project) {
  const qcIssues = getProjectQcIssues(project);
  const qcClass = qcIssues.length > 0 ? "has-qc-issues" : "";
  const qcLabels = qcIssues.map(i => `<span class="qc-label">${i}</span>`).join("");
  
  return `
    <article class="project-card ${qcClass}" data-category="${project.category}" data-id="${project.id}">
      <div class="project-thumb-wrap">
        <img class="project-thumb" src="${project.thumb}" alt="${project.title}" loading="lazy">
        ${project.breakdownVideo ? '<span class="breakdown-badge">Breakdown Available</span>' : ''}
        <div class="qc-overlay">${qcLabels}</div>
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-meta">${project.year} • ${project.role.split("—")[0].trim()}</p>
        <div class="project-tags">
          ${project.tools.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
      <button class="project-view-btn" data-project="${project.id}" aria-label="View ${project.title} details">
        View Project
      </button>
    </article>
  `;
}

function renderBreakdowns() {
  const breakdowns = document.getElementById("breakdowns");
  if (!breakdowns) return;
  
  const validProjects = PROJECTS.filter(p => p.breakdownVideo);
  
  // Check for filter parameter in URL
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter') || 'all';
  const projectParam = urlParams.get('project');
  
  breakdowns.innerHTML = `
    <div class="breakdowns-inner">
      <h2 class="section-title">Breakdowns</h2>
      <p class="section-subtitle">Plate → Roto/Key/Paint → CG → Comp → Final</p>
      <div class="filter-chips" role="tablist" aria-label="Filter breakdowns">
        <button class="filter-chip ${filterParam === 'all' ? 'active' : ''}" data-filter="all" data-section="breakdowns" role="tab">All</button>
        <button class="filter-chip ${filterParam === 'product3d' ? 'active' : ''}" data-filter="product3d" data-section="breakdowns" role="tab">3D Product</button>
        <button class="filter-chip ${filterParam === 'vfx_comp' ? 'active' : ''}" data-filter="vfx_comp" data-section="breakdowns" role="tab">VFX+Comp</button>
        <button class="filter-chip ${filterParam === 'motion' ? 'active' : ''}" data-filter="motion" data-section="breakdowns" role="tab">Motion</button>
        <button class="filter-chip ${filterParam === 'direction' ? 'active' : ''}" data-filter="direction" data-section="breakdowns" role="tab">Direction</button>
      </div>
      <div class="breakdowns-grid" id="breakdowns-grid">
        ${validProjects.map(p => renderBreakdownCard(p)).join("")}
      </div>
    </div>
  `;
  
  // Apply initial filter
  if (filterParam !== 'all') {
    filterProjects(filterParam, 'breakdowns');
  }
  
  // Open project modal if specified in URL
  if (projectParam) {
    setTimeout(() => openProjectModal(projectParam, 'breakdown'), 100);
  }
}

function renderBreakdownCard(project) {
  return `
    <article class="breakdown-card" data-category="${project.category}" data-id="${project.id}">
      <div class="breakdown-thumb-wrap">
        <img class="breakdown-thumb" src="${project.thumb}" alt="${project.title} breakdown" loading="lazy">
        <div class="breakdown-play-overlay">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="breakdown-info">
        <h3 class="breakdown-title">${project.title}</h3>
        <p class="breakdown-role">${project.role}</p>
      </div>
      <button class="breakdown-view-btn" data-project="${project.id}" data-view="breakdown" aria-label="View ${project.title} breakdown">
        Watch Breakdown
      </button>
    </article>
  `;
}

function renderResume() {
  const resume = document.getElementById("resume");
  if (!resume) return;
  
  resume.innerHTML = `
    <div class="resume-inner">
      <h2 class="section-title">Resume</h2>
      <div class="resume-content">
        <div class="resume-preview">
          <img src="${ARTIST.resumePreview}" alt="Resume preview" loading="lazy">
        </div>
        <div class="resume-details">
          <a href="${ARTIST.resumeUrl}" class="resume-download" download>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Resume (PDF)
          </a>
          <div class="skills-section">
            <h3 class="skills-title">Software</h3>
            <div class="skills-list">
              ${SKILLS.software.map(s => `<span class="skill-tag">${s}</span>`).join("")}
            </div>
          </div>
          <div class="skills-section">
            <h3 class="skills-title">Competencies</h3>
            <ul class="competencies-list">
              ${SKILLS.competencies.map(c => `<li>${c}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderContact() {
  const contact = document.getElementById("contact");
  if (!contact) return;
  
  contact.innerHTML = `
    <div class="contact-inner">
      <h2 class="section-title">Contact</h2>
      <div class="contact-grid">
        <a href="mailto:${ARTIST.email}" class="contact-item contact-email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>${ARTIST.email}</span>
        </a>
        <a href="${ARTIST.linkedin}" class="contact-item" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
        <a href="${ARTIST.instagram}" class="contact-item" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>Instagram</span>
        </a>
        <a href="${ARTIST.youtube}" class="contact-item" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>YouTube</span>
        </a>
        <div class="contact-item contact-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${ARTIST.location} — Working Globally</span>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <!-- Marquee -->
    <div class="marquee">
      <div class="marquee-content">
        <span>Visual Effects</span>
        <span>Compositing</span>
        <span>3D Animation</span>
        <span>Motion Graphics</span>
        <span>Product Viz</span>
        <span>Color Grading</span>
        <span>Visual Effects</span>
        <span>Compositing</span>
        <span>3D Animation</span>
        <span>Motion Graphics</span>
        <span>Product Viz</span>
        <span>Color Grading</span>
      </div>
    </div>
    
    <div class="footer-inner reveal">
      <div class="footer-brand">
        <p class="footer-name">${ARTIST.name}</p>
        <p class="footer-tagline">Creating visuals that move.</p>
      </div>
      <div class="footer-links">
        <a href="mailto:${ARTIST.email}" class="footer-link link-underline">Email</a>
        <a href="${ARTIST.instagram}" target="_blank" class="footer-link link-underline">Instagram</a>
        <a href="${ARTIST.linkedin}" target="_blank" class="footer-link link-underline">LinkedIn</a>
        <a href="${ARTIST.youtube}" target="_blank" class="footer-link link-underline">YouTube</a>
      </div>
      <p class="footer-copy">© ${new Date().getFullYear()} ${ARTIST.name}. All rights reserved.</p>
    </div>
  `;
}

// ============================================
// MODAL
// ============================================
function openProjectModal(projectId, initialView = "final") {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;
  
  currentProject = project;
  currentMediaView = initialView;
  
  const modal = document.getElementById("modal");
  const qcIssues = getProjectQcIssues(project);
  const qcWarnings = qcIssues.length > 0 
    ? `<div class="modal-qc-warnings">${qcIssues.map(i => `<span class="qc-warning">${i}</span>`).join("")}</div>` 
    : "";
  
  modal.innerHTML = `
    <div class="modal-backdrop" id="modal-backdrop"></div>
    <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button class="modal-close" id="modal-close" aria-label="Close modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      ${qcWarnings}
      <div class="modal-media">
        <div class="modal-video-container" id="modal-video-container">
          ${renderModalMedia(project, initialView)}
        </div>
        <div class="modal-media-toggle">
          <button class="media-toggle-btn ${initialView === 'final' ? 'active' : ''}" data-view="final">Final</button>
          <button class="media-toggle-btn ${initialView === 'breakdown' ? 'active' : ''}" data-view="breakdown">Breakdown</button>
          ${project.beforeAfter ? `<button class="media-toggle-btn ${initialView === 'beforeafter' ? 'active' : ''}" data-view="beforeafter">Before/After</button>` : ''}
        </div>
      </div>
      <div class="modal-details">
        <h2 class="modal-title" id="modal-title">${project.title}</h2>
        <p class="modal-meta">${project.year} • ${project.role}</p>
        
        <div class="modal-section">
          <h3 class="modal-section-title">What I Did</h3>
          <ul class="responsibilities-list">
            ${project.responsibilities.map(r => `<li>${r}</li>`).join("")}
          </ul>
        </div>
        
        <div class="modal-section">
          <h3 class="modal-section-title">Tools</h3>
          <div class="tools-chips">
            ${project.tools.map(t => `<span class="tool-chip">${t}</span>`).join("")}
          </div>
        </div>
        
        ${project.credits ? `
          <div class="modal-section">
            <h3 class="modal-section-title">Credits</h3>
            <p class="modal-credits">${project.credits}</p>
          </div>
        ` : ''}
        
        ${project.notes ? `
          <div class="modal-section">
            <h3 class="modal-section-title">Technical Notes</h3>
            <p class="modal-notes">${project.notes}</p>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  
  // Focus trap
  const closeBtn = document.getElementById("modal-close");
  closeBtn.focus();
  
  // Event listeners
  document.getElementById("modal-backdrop").addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);
  
  document.querySelectorAll(".media-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;
      switchModalMedia(view);
    });
  });
}

function renderModalMedia(project, view) {
  if (view === "final") {
    return `
      <video class="modal-video" controls preload="metadata">
        <source src="${project.finalVideo}" type="video/mp4">
      </video>
    `;
  } else if (view === "breakdown") {
    return `
      <video class="modal-video" controls preload="metadata">
        <source src="${project.breakdownVideo}" type="video/mp4">
      </video>
    `;
  } else if (view === "beforeafter" && project.beforeAfter) {
    return `
      <div class="before-after-container">
        <div class="before-after-item">
          <span class="ba-label">Before</span>
          <img src="${project.beforeAfter.before}" alt="Before">
        </div>
        <div class="before-after-item">
          <span class="ba-label">After</span>
          <img src="${project.beforeAfter.after}" alt="After">
        </div>
      </div>
    `;
  }
  return "";
}

function switchModalMedia(view) {
  if (!currentProject) return;
  currentMediaView = view;
  
  const container = document.getElementById("modal-video-container");
  container.innerHTML = renderModalMedia(currentProject, view);
  
  document.querySelectorAll(".media-toggle-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
  currentProject = null;
  
  // Stop any playing videos
  modal.querySelectorAll("video").forEach(v => {
    v.pause();
    v.src = "";
  });
}

// ============================================
// FILTERS
// ============================================
function filterProjects(filter, section = "work") {
  currentFilter = filter;
  
  const gridId = section === "work" ? "work-grid" : "breakdowns-grid";
  const grid = document.getElementById(gridId);
  const cards = grid.querySelectorAll("[data-category]");
  
  cards.forEach(card => {
    const category = card.dataset.category;
    const show = filter === "all" || category === filter;
    card.style.display = show ? "" : "none";
  });
  
  // Update chip states
  const chips = document.querySelectorAll(`.filter-chip${section === "breakdowns" ? '[data-section="breakdowns"]' : ':not([data-section])'}`);
  chips.forEach(chip => {
    chip.classList.toggle("active", chip.dataset.filter === filter);
    chip.setAttribute("aria-selected", chip.dataset.filter === filter);
  });
}

// ============================================
// QC MODE
// ============================================
function toggleQcMode() {
  qcModeEnabled = !qcModeEnabled;
  document.body.classList.toggle("qc-mode", qcModeEnabled);
  
  const toggle = document.getElementById("qc-toggle");
  toggle.classList.toggle("active", qcModeEnabled);
  
  // Re-render work grid to show QC issues
  if (qcModeEnabled) {
    checkAllQcIssues();
  }
}

function getProjectQcIssues(project) {
  const issues = [];
  
  if (!project.breakdownVideo) {
    issues.push("NO BREAKDOWN — REMOVE");
  }
  
  if (!project.responsibilities || project.responsibilities.length === 0) {
    issues.push("NO PROOF OF WORK");
  }
  
  if (project.responsibilities) {
    const vagueWords = ["helped", "worked on", "assisted", "contributed"];
    const hasVague = project.responsibilities.some(r => 
      vagueWords.some(w => r.toLowerCase().includes(w))
    );
    if (hasVague) {
      issues.push("VAGUE RESPONSIBILITIES");
    }
  }
  
  const totalTextLength = (project.responsibilities || []).join("").length;
  if (totalTextLength > 500) {
    issues.push("TOO MUCH TEXT");
  }
  
  return issues;
}

function checkAllQcIssues() {
  // Check reel duration
  const reelWarning = document.querySelector("[data-qc='reel-long']");
  if (reelWarning) {
    reelWarning.style.display = ARTIST.reelDuration > 90 ? "" : "none";
  }
  
  // Project issues are already rendered via getProjectQcIssues
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
  // Reel play button
  const reelPlayBtn = document.getElementById("reel-play-btn");
  if (reelPlayBtn) {
    reelPlayBtn.addEventListener("click", () => {
      const video = document.getElementById("reel-video");
      const placeholder = document.getElementById("reel-placeholder");
      placeholder.style.display = "none";
      video.style.display = "block";
      video.play();
    });
  }
  
  // Filter chips
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const section = chip.dataset.section || "work";
      filterProjects(chip.dataset.filter, section);
    });
  });
  
  // Project view buttons
  document.addEventListener("click", (e) => {
    if (e.target.matches(".project-view-btn")) {
      openProjectModal(e.target.dataset.project);
    }
    if (e.target.matches(".breakdown-view-btn")) {
      openProjectModal(e.target.dataset.project, "breakdown");
    }
  });
  
  // QC toggle
  const qcToggle = document.getElementById("qc-toggle");
  if (qcToggle) {
    qcToggle.addEventListener("click", toggleQcMode);
  }
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
function setupKeyboardNav() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// ============================================
// LAZY LOADING
// ============================================
function setupLazyLoading() {
  const images = document.querySelectorAll("img[loading='lazy']");
  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => observer.observe(img));
  }
}

// ============================================
// UTILITIES
// ============================================
function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  
  if (!cursor || !follower) return;
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let followerX = 0, followerY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Smooth follow animation
  function animate() {
    // Cursor follows instantly
    cursorX = mouseX;
    cursorY = mouseY;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    // Follower has lag
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    
    requestAnimationFrame(animate);
  }
  animate();
  
  // Hover states
  const hoverTargets = document.querySelectorAll('a, button, .service-card, .project-card, .btn-primary, .btn-secondary');
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursor.classList.add('hovering');
      follower.classList.add('hovering');
    });
    target.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering');
      follower.classList.remove('hovering');
    });
  });
  
  // Click states
  document.addEventListener('mousedown', () => follower.classList.add('clicking'));
  document.addEventListener('mouseup', () => follower.classList.remove('clicking'));
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal, .stagger-children, .img-reveal');
  
  if (!reveals.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
}

// ============================================
// PAGE LOADER
// ============================================
function initPageLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
      document.body.style.overflow = '';
      
      // Trigger initial animations
      setTimeout(() => {
        document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('revealed');
          }
        });
      }, 100);
    }, 800);
  });
  
  // Prevent scroll while loading
  document.body.style.overflow = 'hidden';
}

// ============================================
// MAGNETIC BUTTONS
// ============================================
function initMagneticButtons() {
  const magnetics = document.querySelectorAll('.magnetic-btn');
  
  magnetics.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      
      const span = btn.querySelector('span');
      if (span) {
        span.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      }
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
      const span = btn.querySelector('span');
      if (span) span.style.transform = 'translate(0, 0)';
    });
  });
}

// ============================================
// HOVER GLOW EFFECT
// ============================================
function initHoverGlow() {
  const glowElements = document.querySelectorAll('.hover-glow');
  
  glowElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mouse-x', x + '%');
      el.style.setProperty('--mouse-y', y + '%');
    });
  });
}

// ============================================
// SMOOTH PARALLAX SCROLLING
// ============================================
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Header scroll effect
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Parallax elements
    if (parallaxElements.length) {
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.5;
        const yPos = scrollY * speed;
        el.style.transform = `translateY(${yPos}px)`;
      });
    }
  }, { passive: true });
}

// ============================================
// INITIALIZE ALL PREMIUM EFFECTS
// ============================================
function initPremiumEffects() {
  initMagneticButtons();
  initHoverGlow();
  initParallax();
  
  // Re-init cursor for dynamic content
  setTimeout(() => {
    const hoverTargets = document.querySelectorAll('a, button, .service-card, .project-card, .btn-primary, .btn-secondary');
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    
    if (cursor && follower) {
      hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
          cursor.classList.add('hovering');
          follower.classList.add('hovering');
        });
        target.addEventListener('mouseleave', () => {
          cursor.classList.remove('hovering');
          follower.classList.remove('hovering');
        });
      });
    }
  }, 500);
}

// Call after DOM content loaded
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(initPremiumEffects, 100);
  });
}
