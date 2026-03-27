// ===== 全局状态 =====
let profileData = null;
let blogData = null;
let coursesData = null;
let projectsData = null;
let contactData = null;

// ===== 数据加载 =====
// 优先从 data.js 加载（可直接双击运行）
// 如果想从 JSON 文件加载（需要 HTTP 服务），可以启用下面的 fetch

async function loadData() {
  // 如果 DATA 对象存在（data.js 已加载），直接使用
  if (typeof DATA !== 'undefined') {
    profileData = DATA.profile;
    blogData = DATA.blog;
    coursesData = DATA.courses;
    projectsData = DATA.projects;
    contactData = DATA.contact;
    return;
  }

  // 否则尝试从 JSON 文件加载（需要 HTTP 服务）
  try {
    const [profile, blog, courses, projects, contact] = await Promise.all([
      fetch('data/profile.json').then(r => r.json()),
      fetch('data/blog.json').then(r => r.json()),
      fetch('data/courses.json').then(r => r.json()),
      fetch('data/projects.json').then(r => r.json()),
      fetch('data/contact.json').then(r => r.json())
    ]);
    profileData = profile;
    blogData = blog;
    coursesData = courses;
    projectsData = projects;
    contactData = contact;
  } catch (e) {
    console.error('Failed to load data:', e);
  }
}

async function init() {
  await loadData();
  renderMenu(profileData);
  initCanvas();
  initNavigation();
}

function renderMenu(data) {
  if (!data) return;
  document.getElementById('menu-name').textContent = data.name;
  document.getElementById('menu-title').textContent = data.title || '';
}

// ===== 导航逻辑 =====
function initNavigation() {
  const sections = {
    about: null,
    blog: blogData,
    courses: coursesData,
    projects: projectsData,
    contact: contactData
  };

  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      showSection(section, sections[section]);
    });
  });

  document.getElementById('back-btn').addEventListener('click', hideSection);

  // ESC 返回
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const contentPage = document.getElementById('content-page');
      if (contentPage.classList.contains('active')) {
        hideSection();
      }
    }
  });
}

const sectionNames = {
  about: '关于',
  blog: '想法',
  courses: '课程',
  projects: '项目',
  contact: '联系'
};

function showSection(name, data) {
  const menuPage = document.getElementById('menu-page');
  const contentPage = document.getElementById('content-page');
  const contentWrapper = document.getElementById('content-wrapper');
  const currentSection = document.getElementById('current-section');

  contentWrapper.innerHTML = renderSection(name, data);
  currentSection.textContent = sectionNames[name] || '';

  menuPage.classList.add('hidden');
  contentPage.classList.add('active');
  contentPage.scrollTop = 0;

  // 绑定博客展开事件
  if (name === 'blog') {
    contentWrapper.querySelectorAll('.blog-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('expanded');
      });
    });
  }
}

function hideSection() {
  const menuPage = document.getElementById('menu-page');
  const contentPage = document.getElementById('content-page');

  contentPage.classList.remove('active');
  menuPage.classList.remove('hidden');
}

// ===== 渲染各区块 =====
function renderSection(name, data) {
  switch (name) {
    case 'about': return renderAbout();
    case 'blog': return renderBlog(data);
    case 'courses': return renderCourses(data);
    case 'projects': return renderProjects(data);
    case 'contact': return renderContact(data);
    default: return '<p>Section not found</p>';
  }
}

function renderAbout() {
  if (!profileData) return '<p style="color:var(--text-secondary)">Loading...</p>';
  const p = profileData;

  const avatarHtml = p.avatar
    ? `<img src="${p.avatar}" alt="avatar" class="avatar">`
    : `<div class="avatar-placeholder">${p.name.charAt(0)}</div>`;

  const interestsHtml = p.interests
    ? p.interests.map(i => `<span class="interest-tag">${escapeHtml(i)}</span>`).join('')
    : '';

  return `
    <div class="section-header">
      <span class="section-tag">01</span>
      <h2>关于</h2>
    </div>
    <div class="profile-hero">
      <div class="avatar-container">
        <div class="avatar-ring"></div>
        <div class="avatar-ring"></div>
        ${avatarHtml}
      </div>
      <h1 class="profile-name">${escapeHtml(p.name)}</h1>
      <p class="profile-title">${escapeHtml(p.title || '')}</p>
      <p class="profile-bio">${escapeHtml(p.bio || '')}</p>
      <div class="interests">${interestsHtml}</div>
    </div>
  `;
}

function renderBlog(posts) {
  const postsHtml = posts && posts.length
    ? posts.map(post => `
      <div class="blog-item">
        <div class="blog-date">${formatDate(post.date)}</div>
        <h3 class="blog-title">${escapeHtml(post.title)}</h3>
        <p class="blog-summary">${escapeHtml(post.summary)}</p>
        <div class="blog-content">${escapeHtml(post.content)}</div>
      </div>
    `).join('')
    : '<p style="color: var(--text-secondary)">暂无内容</p>';

  return `
    <div class="section-header">
      <span class="section-tag">02</span>
      <h2>想法</h2>
    </div>
    <div class="blog-list">${postsHtml}</div>
  `;
}

function renderCourses(data) {
  // data: { now: {cs: [], phys: []}, history: {cs: [], phys: []} }
  // each course: {name, instructor, semester, grade, description}
  if (!data) return '<p style="color:var(--text-secondary)">暂无内容</p>';

  const tabNames = { now: '现在课程', history: '历史课程' };

  function renderCard(course) {
    if (!course) return '';
    return `
      <div class="course-item">
        <div class="course-header">
          <span class="course-name">${escapeHtml(course.name)}</span>
          ${course.grade ? `<span class="course-grade">${escapeHtml(course.grade)}</span>` : ''}
        </div>
        <div class="course-meta">${escapeHtml(course.instructor || '')} · ${escapeHtml(course.semester || '')}</div>
        ${course.description ? `<p class="course-description">${escapeHtml(course.description)}</p>` : ''}
      </div>
    `;
  }

  function renderCol(courses) {
    if (!courses || courses.length === 0) return '<div class="course-col-empty">暂无课程</div>';
    return courses.map(c => renderCard(c)).join('');
  }

  const nowCsHtml = renderCol(data.now && data.now.cs);
  const nowPhysHtml = renderCol(data.now && data.now.phys);
  const histCsHtml = renderCol(data.history && data.history.cs);
  const histPhysHtml = renderCol(data.history && data.history.phys);

  return `
    <div class="section-header">
      <span class="section-tag">03</span>
      <h2>课程</h2>
    </div>

    <div class="course-tabs">
      <button class="course-tab active" data-tab="now" onclick="switchCourseTab('now', this)">${tabNames.now}</button>
      <button class="course-tab" data-tab="history" onclick="switchCourseTab('history', this)">${tabNames.history}</button>
    </div>

    <div class="course-panels">
      <div class="course-panel active" id="panel-now">
        <div class="course-dept-row">
          <div class="course-dept-col">
            <div class="dept-label">信科</div>
            <div class="dept-courses">${nowCsHtml}</div>
          </div>
          <div class="course-dept-col">
            <div class="dept-label">物院</div>
            <div class="dept-courses">${nowPhysHtml}</div>
          </div>
        </div>
      </div>
      <div class="course-panel" id="panel-history">
        <div class="course-dept-row">
          <div class="course-dept-col">
            <div class="dept-label">信科</div>
            <div class="dept-courses">${histCsHtml}</div>
          </div>
          <div class="course-dept-col">
            <div class="dept-label">物院</div>
            <div class="dept-courses">${histPhysHtml}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchCourseTab(tabName, btn) {
  document.querySelectorAll('.course-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.course-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + tabName).classList.add('active');
}

function renderProjects(items) {
  const itemsHtml = items && items.length
    ? items.map(item => `
      <div class="project-card">
        <div class="project-header">
          <span class="project-name">${escapeHtml(item.name)}</span>
          ${item.link ? `<a href="${escapeHtml(item.link)}" class="project-link" target="_blank">查看 →</a>` : ''}
        </div>
        <div class="project-period">${escapeHtml(item.period)} · ${escapeHtml(item.role || '')}</div>
        <p class="project-description">${escapeHtml(item.description || '')}</p>
        ${item.tech && item.tech.length ? `
          <div class="project-tech">
            ${item.tech.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    `).join('')
    : '<p style="color: var(--text-secondary)">暂无内容</p>';

  return `
    <div class="section-header">
      <span class="section-tag">04</span>
      <h2>项目</h2>
    </div>
    <div class="projects-grid">${itemsHtml}</div>
  `;
}

function renderContact(data) {
  if (!data) return '<p style="color:var(--text-secondary)">Loading...</p>';

  const items = [];

  if (data.email) {
    items.push({
      icon: '✉', label: 'Email', value: data.email,
      link: `mailto:${data.email}`
    });
  }
  if (data.github) {
    items.push({
      icon: '⌥', label: 'GitHub', value: data.github.replace('https://', ''),
      link: data.github
    });
  }
  if (data.linkedin) {
    items.push({
      icon: 'in', label: 'LinkedIn', value: data.linkedin.replace('https://', ''),
      link: data.linkedin
    });
  }
  if (data.twitter) {
    items.push({
      icon: 'X', label: 'Twitter', value: data.twitter.replace('https://', ''),
      link: data.twitter
    });
  }
  if (data.scholar) {
    items.push({
      icon: '📄', label: 'Scholar', value: 'Google Scholar',
      link: data.scholar
    });
  }
  if (data.location) {
    items.push({
      icon: '◎', label: 'Location', value: data.location, link: null
    });
  }

  const itemsHtml = items.map(item => item.link
    ? `<a href="${item.link}" class="contact-card" target="_blank">
        <span class="contact-icon">${item.icon}</span>
        <div class="contact-info">
          <div class="contact-label">${item.label}</div>
          <div class="contact-value">${item.value}</div>
        </div>
      </a>`
    : `<div class="contact-card">
        <span class="contact-icon">${item.icon}</span>
        <div class="contact-info">
          <div class="contact-label">${item.label}</div>
          <div class="contact-value">${item.value}</div>
        </div>
      </div>`
  ).join('');

  return `
    <div class="section-header">
      <span class="section-tag">05</span>
      <h2>联系</h2>
    </div>
    <div class="contact-grid">
      ${itemsHtml}
      ${data.available ? '<div class="available-badge">● 可联系 / Available</div>' : ''}
    </div>
  `;
}

// ===== 工具函数 =====
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ===== 背景动效 =====
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const numParticles = 80;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1
    });
  }

  function animate() {
    ctx.fillStyle = 'rgba(5, 5, 8, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 - dist / 750})`;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }
  animate();
}

// ===== 启动 =====
document.addEventListener('DOMContentLoaded', init);
