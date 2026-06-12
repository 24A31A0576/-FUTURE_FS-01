# 🌟 Sangeetha Gottala — Personal Portfolio Website

A modern, professional, fully responsive portfolio website for **Sangeetha Gottala**, Computer Science Engineering student at Pragati Engineering College, Surampalem.

---

## 📋 Features

| Feature | Details |
|---|---|
| 🌙 Dark / Light Mode | Toggle with persistent localStorage |
| ✨ Particle Background | Animated canvas with connected dots |
| ⌨️ Typing Animation | Dynamic role switcher |
| 📊 Animated Skill Bars | Triggered on scroll |
| 📈 Counter Animation | Stats count up on scroll entry |
| 🎞️ AOS Animations | Scroll-triggered reveals |
| 📱 Fully Responsive | Mobile, tablet, desktop |
| 🧭 Smooth Scroll | Anchor-based navigation |
| 📬 Contact Form | Client-side validation |
| 📉 Scroll Progress | Top progress bar |
| 🔝 Back to Top | Floating button |
| 🚀 GitHub Stats | Live stats via github-readme-stats |

---

## 🗂️ File Structure

```
portfolio/
├── index.html          ← Main HTML (all sections)
├── css/
│   └── style.css       ← All styles (tokens, components, responsive)
├── js/
│   └── main.js         ← Particles, typing, AOS, form, theme, counters
├── assets/
│   ├── images/         ← Profile photo placeholder (add your photo here)
│   └── icons/          ← Custom icons (optional)
└── README.md
```

---

## 🚀 Quick Start

### Option 1 — Open Directly
Just double-click `index.html` in your file manager. No build step required.

### Option 2 — Local Dev Server (Recommended)
```bash
# Using Python (built-in)
python -m http.server 8080
# Visit http://localhost:8080

# OR using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## 🖼️ Adding Your Profile Photo

1. Place your photo at `assets/images/profile.jpg`
2. In `index.html`, find the `.avatar-inner` div and replace:
```html
<div class="avatar-initials">SG</div>
```
with:
```html
<img src="assets/images/profile.jpg" alt="Sangeetha Gottala" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />
```

---

## 📄 Resume Download

1. Place your resume PDF at `assets/Sangeetha_Gottala_Resume.pdf`
2. The "Download Resume" button in the hero section is already linked to this path.

---

## 🌐 Deployment

### GitHub Pages (Free)
```bash
# 1. Create a GitHub repository named: yourusername.github.io
# 2. Push all portfolio files to the main branch
# 3. Go to Settings → Pages → Branch: main → / (root)
# 4. Visit https://yourusername.github.io
```

### Netlify (Free, Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag the entire `portfolio` folder into the deploy zone
3. Get a live URL instantly

### Vercel (Free)
```bash
npm i -g vercel
cd portfolio
vercel
```

---

## ✏️ Customisation

### Update Personal Info
Edit `index.html`:
- **Hero Section**: Name, bio, social links
- **About Section**: Personal summary, career objective
- **Projects Section**: Project cards with your real GitHub repos
- **Contact Section**: Email address

### Update Colors
Edit `:root` in `css/style.css`:
```css
--accent:   #a78bfa;   /* Main violet accent */
--accent-2: #38bdf8;   /* Sky blue secondary */
--accent-3: #34d399;   /* Emerald green tertiary */
```

### Add Real GitHub Projects
Replace project cards in the Projects section with your actual repos.
Update the GitHub links to point to specific repos.

---

## 📊 GitHub Stats (Powered by)

Stats images are fetched from:
- [github-readme-stats.vercel.app](https://github.com/anuraghazra/github-readme-stats)
- [streak-stats.demolab.com](https://github.com/DenverCoder1/github-readme-streak-stats)

They auto-display your real GitHub data based on username `24A31A0576`.
If stats don't load, a styled fallback is shown automatically.

---

## 🔗 Social Links

Update these in `index.html` (search for `href="https://github.com/..."`):

| Platform | URL |
|---|---|
| LinkedIn | `https://www.linkedin.com/in/sangeetha-g-5860a032b` |
| GitHub | `https://github.com/24A31A0576` |
| Email | `mailto:sangeethagottala@gmail.com` |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure, SEO meta tags
- **CSS3** — Custom properties, Grid, Flexbox, Glassmorphism, Animations
- **Vanilla JavaScript** — No framework, fast loading
- **AOS** — Animate On Scroll (CDN)
- **Font Awesome 6** — Icons (CDN)
- **Google Fonts** — Space Grotesk, JetBrains Mono, Inter

---

## 📝 License

Free to use for personal portfolio. Attribution appreciated!

---

*Built with ❤️ and lots of ☕ by Sangeetha Gottala*
