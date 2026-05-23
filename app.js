// =========================================
// rice.blog — blog engine
// =========================================

// ─── STORAGE ─────────────────────────────
const STORAGE_KEY = 'riceblog_posts';

const DEFAULT_POSTS = [
  {
    id: 'dotfiles-philosophy',
    title: 'The Philosophy of Dotfiles',
    date: '2024-12-15',
    tags: ['arch', 'rice', 'config'],
    excerpt: 'After years of maintaining dotfiles, I\'ve developed some opinions on what makes a good configuration system — and why most people overcomplicate it.',
    content: `## The Problem with Most Dotfiles

Most people's dotfiles start as a simple backup and gradually evolve into a baroque system of symlinks, shell scripts, and arcane bootstrapping logic that only they can understand.

\`\`\`bash
# this shouldn't require a PhD
stow --target=$HOME --dir=$DOTFILES packages/
\`\`\`

The irony is that dotfiles are supposed to make your life **easier**. They're supposed to be the foundation you rebuild from. But if restoring from your dotfiles takes longer than setting up from scratch, you've already lost.

## Principles I've Settled On

### 1. One repo, flat structure

No submodules. No nested repos. One directory per application, symlinked into \`$HOME\`. \`stow\` handles this elegantly.

### 2. Everything declarative

If you're running imperative setup scripts, you're doing it wrong. Nix does this perfectly — your entire system described as a pure function of your config. But even without Nix, keeping an \`install.sh\` that's idempotent is achievable.

### 3. Commented liberally

Your future self has no memory. Comment every non-obvious keybind, every weird workaround, every "I wonder why this works" block.

\`\`\`bash
# fix for gaps appearing in i3 after monitor hotplug
# upstream bug: https://github.com/Airblader/i3/issues/...
exec_always --no-startup-id sleep 0.5 && i3-msg reload
\`\`\`

### 4. Modularity over completeness

Ship a minimal config first. Add complexity only when the absence of something genuinely bothers you, not because you saw it on r/unixporn.

## The Aesthetic Question

There's a tension in the rice community between functional minimalism and visual maximalism. You can have both — but they need to serve different masters.

Your *workflow* config should be invisible. It should get out of your way. Your *aesthetic* config can be as elaborate as you want, as long as it doesn't add cognitive overhead.

A beautiful prompt is worthless if parsing it takes 100ms of mental energy each time you glance at it.

## Conclusion

The best dotfiles repo is the one you actually maintain. Start small, add only what you use, document everything, and resist the urge to copy someone else's config wholesale.

Your rice should look like *you*.`,
    color: 'mauve'
  },
  {
    id: 'i3-workflow',
    title: 'i3 as a Productivity Tool, Not Just Eye Candy',
    date: '2024-11-28',
    tags: ['i3', 'workflow', 'linux'],
    excerpt: 'Tiling window managers have a reputation for being aesthetic tools for power users who spend more time ricing than working. Here\'s how to actually use one productively.',
    content: `## The Learning Curve is Real

Let me be honest: the first week with i3 is genuinely painful. You will accidentally close windows, forget keybinds, and briefly wonder if floating window managers were invented for a reason.

They were. That reason is accessibility, not productivity.

After two weeks, your hands stop reaching for the mouse. After a month, using a floating WM feels like wearing oven mitts.

## Workspace Design Matters More Than Keybinds

Most i3 guides start with keybind tables. I want to start with *workspace design*.

\`\`\`
Workspace 1: terminal(s)
Workspace 2: browser
Workspace 3: editor / IDE  
Workspace 4: communication (slack, email)
Workspace 5-9: project-specific
\`\`\`

This isn't revolutionary. But the key insight is: **each workspace should have one purpose**. The moment you mix contexts, the cognitive benefit of the tiling layout disappears.

## The Layouts That Actually Work

i3's default layout (horizontal split) is fine but rarely optimal. Here's what I use:

**Terminal workspace**: Tabbed layout. Multiple terminals, switch with mod+1-5 within the workspace. No visual clutter.

**Editor workspace**: Vertical split. Editor takes 70%, terminal takes 30%. Classic and effective.

**Browser workspace**: Usually fullscreen or almost. The web is designed for horizontal consumption.

\`\`\`
# i3 config
workspace_layout tabbed
# per-window overrides with marks
\`\`\`

## Scratchpad is Underrated

The scratchpad is i3's hidden gem. Any window can become a floating scratchpad, accessible from anywhere with a keybind.

I use it for: a persistent terminal session, a note-taking app, a calculator.

\`\`\`bash
# mark the terminal as scratchpad on startup
bindsym $mod+grave scratchpad show
\`\`\`

## Autostart Correctly

\`exec_always\` runs on every reload. \`exec\` runs once. Know the difference.

\`\`\`
exec_always --no-startup-id nm-applet
exec --no-startup-id ~/.config/i3/scripts/wallpaper.sh
\`\`\`

The difference between a productive and frustrating i3 setup often comes down to startup order and timing. When in doubt, add a small sleep.`,
    color: 'blue'
  },
  {
    id: 'arch-btw',
    title: 'Why I Use Arch (and Why You Probably Shouldn\'t)',
    date: '2024-10-10',
    tags: ['arch', 'linux', 'opinion'],
    excerpt: 'The "I use Arch btw" meme exists for a reason. But beneath the gatekeeping, there\'s a genuinely compelling case for Arch — for the right person.',
    content: `## The Honest Case for Arch

I'm not going to tell you Arch is for everyone. It's not. But the reasons people cite for avoiding it are often wrong.

**The install process**: Once genuinely difficult. Now, with \`archinstall\`, it's comparable to Ubuntu. The scary part is mostly reputation.

**Stability**: Arch is a rolling release, which means you get updates immediately. This is only a problem if you update without reading the news, run \`pacman -Syu\` right before an important deadline, or don't know how to read pacman's output.

**Maintenance burden**: Real, but overstated. A properly configured Arch system needs maybe 30 minutes of attention per month.

## Why I Actually Use It

### The AUR

The Arch User Repository is the killer feature. Any software, packaged by the community, installable with one command. \`paru\` makes this seamless:

\`\`\`bash
paru -S zen-browser-bin spotify discord
\`\`\`

Try doing that on Ubuntu without adding three PPAs and praying.

### Up-to-date everything

I write software. I want the latest version of my tools. Period. Backporting is someone else's problem.

### Understanding my system

The Arch install process forces you to make every decision consciously. What bootloader? What filesystem? What display manager, or no display manager? By the end, you understand exactly what you have and why.

This knowledge transfers. Debugging becomes faster because you know where to look.

## Who Should Actually Use Arch

You should use Arch if you're genuinely curious about how Linux works, willing to read documentation, comfortable with occasional breakage, and have a second system or live USB for recovery.

You shouldn't use it if you need your computer to "just work" for production work, you don't have time to troubleshoot, or you'll be frustrated by the (rare but real) breakage.

There's no shame in using a distro that works. The best Linux distro is the one that lets you focus on your actual work.

## The Meme

The "I use Arch btw" meme isn't about Arch. It's about a specific personality type that prioritizes the tool over the work. Don't be that person. Use Arch, but use it to *do things*, not to signal sophistication.

The irony is that the people who say "btw" least are usually the ones who've been running Arch the longest.`,
    color: 'green'
  }
];

// ─── POSTS STORAGE ───────────────────────
function loadPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  // seed defaults
  savePosts(DEFAULT_POSTS);
  return DEFAULT_POSTS;
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function getPosts() { return loadPosts(); }

function getPost(id) { return getPosts().find(p => p.id === id); }

function upsertPost(post) {
  const posts = getPosts();
  const idx = posts.findIndex(p => p.id === post.id);
  if (idx >= 0) posts[idx] = post;
  else posts.unshift(post);
  savePosts(posts);
}

function deletePost(id) {
  const posts = getPosts().filter(p => p.id !== id);
  savePosts(posts);
}

// ─── MARKDOWN RENDERER (lightweight) ────
function renderMarkdown(md) {
  let html = md
    // code blocks
    .replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) =>
      `<pre data-lang="${lang || 'code'}"><code>${escHtml(code.trim())}</code></pre>`)
    // inline code
    .replace(/`([^`]+)`/g, (_, c) => `<code>${escHtml(c)}</code>`)
    // headings
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm,  '<h2>$1</h2>')
    .replace(/^# (.+)$/gm,   '<h1>$1</h1>')
    // blockquotes
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // bold / italic
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // hr
    .replace(/^---$/gm, '<hr>')
    // unordered list items
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    // ordered list items
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    // paragraphs (blank lines)
    .split(/\n\n+/)
    .map(block => {
      block = block.trim();
      if (!block) return '';
      if (/^<(h[1-6]|pre|blockquote|hr|ul|ol|li)/.test(block)) return block;
      // wrap li in ul
      if (block.includes('<li>') && !block.startsWith('<ul')) {
        return '<ul>' + block + '</ul>';
      }
      return `<p>${block.replace(/\n/g,' ')}</p>`;
    })
    .join('\n');
  return html;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ─── ROUTING ──────────────────────────────
let currentPage = 'home';
let currentFilter = null;
let searchQuery = '';

function navigate(page, opts = {}) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  currentPage = page;

  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) pageEl.classList.add('active');

  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');

  if (page === 'home')    renderHome();
  if (page === 'post')    renderPost(opts.id);
  if (page === 'editor')  setupEditor(opts.id || null);
  if (page === 'manage')  renderManage();
  if (page === 'about')   renderAbout();

  window.scrollTo(0, 0);
}

// ─── HOME / BLOG LIST ─────────────────────
function renderHome(filter) {
  if (filter !== undefined) currentFilter = filter;
  const posts = getPosts();
  const container = document.getElementById('posts-container');
  const countEl   = document.getElementById('post-count');

  let filtered = posts;
  if (currentFilter) {
    filtered = posts.filter(p => p.tags && p.tags.includes(currentFilter));
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.excerpt || '').toLowerCase().includes(q) ||
      (p.tags || []).some(t => t.includes(q))
    );
  }

  if (countEl) countEl.textContent = `${filtered.length} post${filtered.length !== 1 ? 's' : ''}`;

  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">󰈙</div>
        <div class="empty-text">No posts found.</div>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(post => `
    <article class="post-card" onclick="navigate('post', {id: '${post.id}'})">
      <div class="post-card-header">
        <div class="post-card-title">${escHtml(post.title)}</div>
        <div class="post-card-date">${formatDate(post.date)}</div>
      </div>
      <div class="post-card-excerpt">${escHtml(post.excerpt || '')}</div>
      <div class="post-card-footer">
        ${(post.tags || []).map(t => `<span class="tag ${post.color || ''}" onclick="event.stopPropagation(); filterByTag('${t}')">${t}</span>`).join('')}
        <span class="read-more">cat →</span>
      </div>
    </article>
  `).join('');

  renderTagCloud();
}

function filterByTag(tag) {
  if (currentFilter === tag) {
    currentFilter = null;
  } else {
    currentFilter = tag;
  }
  if (currentPage !== 'home') navigate('home');
  else renderHome();
  renderTagCloud();
}

function renderTagCloud() {
  const posts = getPosts();
  const tags = {};
  posts.forEach(p => (p.tags || []).forEach(t => { tags[t] = (tags[t] || 0) + 1; }));
  const container = document.getElementById('tag-cloud');
  if (!container) return;
  container.innerHTML = Object.entries(tags)
    .sort((a,b) => b[1]-a[1])
    .map(([t, n]) => `<a class="tag-pill${currentFilter === t ? ' active' : ''}" onclick="filterByTag('${t}')">${t} <sup>${n}</sup></a>`)
    .join('');
  document.getElementById('nav-count-posts').textContent = posts.length;
}

// ─── POST VIEW ────────────────────────────
function renderPost(id) {
  const post = getPost(id);
  if (!post) { navigate('home'); return; }

  document.getElementById('post-full-title').textContent = post.title;
  document.getElementById('post-full-date').textContent = formatDate(post.date);
  document.getElementById('post-full-tags').innerHTML = (post.tags || [])
    .map(t => `<span class="tag ${post.color||''}">${t}</span>`).join('');
  document.getElementById('post-full-readtime').textContent =
    `~${Math.max(1, Math.ceil((post.content || '').split(/\s+/).length / 200))} min read`;
  document.getElementById('post-body').innerHTML = renderMarkdown(post.content || '');
  document.getElementById('post-edit-btn').onclick = () => navigate('editor', { id: post.id });
}

// ─── EDITOR ───────────────────────────────
let editorTarget = null;

function setupEditor(id) {
  editorTarget = id;
  const post = id ? getPost(id) : null;

  document.getElementById('ed-title').value   = post ? post.title   : '';
  document.getElementById('ed-tags').value    = post ? (post.tags||[]).join(', ') : '';
  document.getElementById('ed-excerpt').value = post ? (post.excerpt||'')  : '';
  document.getElementById('ed-body').value    = post ? (post.content ||'')  : '';
  document.getElementById('ed-color').value   = post ? (post.color  ||'mauve') : 'mauve';
  document.getElementById('editor-mode-label').textContent = id ? `editing: ${id}` : 'new post';

  updatePreview();
}

function updatePreview() {
  const body = document.getElementById('ed-body').value;
  const title = document.getElementById('ed-title').value;
  const preview = document.getElementById('preview-body');
  if (!preview) return;
  preview.innerHTML = `
    <h1 style="font-size:1.2rem;font-weight:700;color:var(--text);margin-bottom:1rem;">${escHtml(title || 'Untitled')}</h1>
    <div class="post-content">${renderMarkdown(body)}</div>
  `;
}

function saveEditorPost() {
  const title   = document.getElementById('ed-title').value.trim();
  const tags    = document.getElementById('ed-tags').value.split(',').map(t=>t.trim()).filter(Boolean);
  const excerpt = document.getElementById('ed-excerpt').value.trim();
  const content = document.getElementById('ed-body').value;
  const color   = document.getElementById('ed-color').value;

  if (!title) { showNotif('Title is required', true); return; }

  const id = editorTarget || slugify(title);
  const post = {
    id,
    title,
    date: editorTarget ? (getPost(id)||{date: today()}).date : today(),
    tags,
    excerpt: excerpt || content.split('\n').find(l => l.trim() && !l.startsWith('#'))?.trim().slice(0, 160) || '',
    content,
    color
  };

  upsertPost(post);
  showNotif(`Post "${title}" saved ✓`);
  renderTagCloud();
  editorTarget = id;
  document.getElementById('editor-mode-label').textContent = `editing: ${id}`;
}

function exportPost() {
  const title   = document.getElementById('ed-title').value.trim() || 'untitled';
  const content = document.getElementById('ed-body').value;
  const tags    = document.getElementById('ed-tags').value;
  const date    = today();
  const md = `---\ntitle: ${title}\ndate: ${date}\ntags: [${tags}]\n---\n\n${content}`;
  download(`${slugify(title)}.md`, md);
  showNotif('Exported as Markdown ✓');
}

function importMarkdown() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.md,.txt';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      let text = ev.target.result;
      let title = file.name.replace(/\.md$/,'');
      let tags = '', excerpt = '';
      // parse front matter
      if (text.startsWith('---')) {
        const fm = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        if (fm) {
          const meta = fm[1];
          text = fm[2].trim();
          const tm = meta.match(/title:\s*(.+)/); if(tm) title = tm[1].trim();
          const tgm = meta.match(/tags:\s*\[(.+)\]/); if(tgm) tags = tgm[1];
          const em = meta.match(/excerpt:\s*(.+)/); if(em) excerpt = em[1].trim();
        }
      }
      navigate('editor');
      setTimeout(() => {
        document.getElementById('ed-title').value = title;
        document.getElementById('ed-tags').value = tags;
        document.getElementById('ed-excerpt').value = excerpt;
        document.getElementById('ed-body').value = text;
        editorTarget = null;
        updatePreview();
        showNotif(`Imported: ${file.name} ✓`);
      }, 100);
    };
    reader.readAsText(file);
  };
  input.click();
}

// ─── MANAGE ───────────────────────────────
function renderManage() {
  const posts = getPosts();
  const container = document.getElementById('manage-list');
  if (!container) return;

  if (posts.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-text">No posts yet. Write one!</div></div>`;
    return;
  }

  container.innerHTML = posts.map(p => `
    <div class="post-list-item">
      <div class="post-list-title">${escHtml(p.title)}</div>
      <div class="post-list-tags">
        ${(p.tags||[]).slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="post-list-date">${formatDate(p.date)}</div>
      <div class="post-list-actions">
        <button class="btn btn-ghost" style="font-size:0.68rem;padding:0.2rem 0.5rem;" onclick="navigate('post',{id:'${p.id}'})">view</button>
        <button class="btn btn-ghost" style="font-size:0.68rem;padding:0.2rem 0.5rem;" onclick="navigate('editor',{id:'${p.id}'})">edit</button>
        <button class="btn btn-danger" style="font-size:0.68rem;padding:0.2rem 0.5rem;" onclick="confirmDelete('${p.id}')">rm</button>
      </div>
    </div>
  `).join('');
}

function confirmDelete(id) {
  const post = getPost(id);
  if (!post) return;
  if (!confirm(`Delete "${post.title}"?`)) return;
  deletePost(id);
  renderManage();
  renderTagCloud();
  showNotif('Post deleted');
}

function exportAll() {
  const posts = getPosts();
  const data = JSON.stringify(posts, null, 2);
  download('riceblog-backup.json', data);
  showNotif('All posts exported ✓');
}

function importAll() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const posts = JSON.parse(ev.target.result);
        if (!Array.isArray(posts)) throw new Error();
        savePosts(posts);
        renderManage(); renderTagCloud();
        showNotif(`Imported ${posts.length} posts ✓`);
      } catch {
        showNotif('Invalid JSON file', true);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ─── ABOUT ────────────────────────────────
function renderAbout() {
  const posts = getPosts();
  const tags = new Set(posts.flatMap(p => p.tags || []));
  document.getElementById('about-post-count').textContent = posts.length;
  document.getElementById('about-tag-count').textContent = tags.size;
}

// ─── CLOCK ────────────────────────────────
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// ─── UTILS ───────────────────────────────
function slugify(s) {
  return s.toLowerCase().replace(/[^\w\s-]/g,'').replace(/\s+/g,'-').slice(0, 50);
}

function formatDate(d) {
  if (!d) return '';
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function download(filename, text) {
  const a = document.createElement('a');
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
  a.download = filename;
  a.click();
}

function showNotif(msg, isError = false) {
  let el = document.getElementById('notif');
  if (!el) {
    el = document.createElement('div');
    el.id = 'notif';
    el.className = 'notification';
    document.body.appendChild(el);
  }
  el.className = `notification${isError ? ' error' : ''}`;
  el.textContent = msg;
  requestAnimationFrame(() => el.classList.add('show'));
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3000);
}

// ─── INIT ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // search
  const si = document.getElementById('search-input');
  if (si) {
    si.addEventListener('input', e => {
      searchQuery = e.target.value;
      if (currentPage === 'home') renderHome();
    });
  }

  // editor live preview
  ['ed-body','ed-title'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updatePreview);
  });

  // tab key in editor
  const edBody = document.getElementById('ed-body');
  if (edBody) {
    edBody.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const s = edBody.selectionStart, en = edBody.selectionEnd;
        edBody.value = edBody.value.substring(0,s) + '  ' + edBody.value.substring(en);
        edBody.selectionStart = edBody.selectionEnd = s + 2;
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveEditorPost();
      }
    });
  }

  navigate('home');
});
