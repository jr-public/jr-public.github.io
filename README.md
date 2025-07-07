# Jorge Matías Ruiz Guzmán · Senior PHP Backend Developer
[![GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-blue.svg?logo=github)](https://jr-public.github.io)
[![Build & Deploy](https://github.com/jr-public/jr-public.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/jr-public/jr-public.github.io/actions/workflows/main.yml)

Welcome to my **professional portfolio website**, made with [https://techfolios.github.io](https://techfolios.github.io) and some tinkering with [Jekyll](https://jekyllrb.com/). Deployed using a fully automated CI/CD pipeline via **GitHub Actions** and **GitHub Pages**.

🔗 **Live Site:** [jr-public.github.io](https://jr-public.github.io)  
📂 **Source Code:** [github.com/jr-public/jr-public.github.io](https://github.com/jr-public/jr-public.github.io)

---

## 🛠️ Tech Stack

| Tool / Service     | Description                    |
|--------------------|--------------------------------|
| **Jekyll**         | Static site generation         |
| **Bootstrap**      | Responsive frontend styling    |
| **GitHub Actions** | CI/CD automation               |
| **GitHub Pages**   | Hosting & deployment           |

---

## 🧭 Project Structure

<details>
<summary>Click to expand</summary>

```text
.
├── _config.yml
├── _data/                   # Bio, skills, and social links
│   ├── bio.json
│   ├── skills.yml
│   └── socials.yml
├── _includes/               # Partial templates
│   ├── about/
│   ├── projects/
│   └── header.html
├── _layouts/                # Layout templates
│   ├── default.html
│   └── home.html
├── projects/                # Project index + pages
│   ├── index.html
│   └── *.md
├── css/
│   └── techfolio-theme/
├── .github/
│   └── workflows/           # GitHub Actions CI/CD
└── index.html				 # Site homepage
```
</details>

---

## 🧪 Local Development

To run the site locally:

```bash
# 1. Clone the repository
git clone https://github.com/jr-public/jr-public.github.io.git
cd jr-public.github.io

# 2. Install Jekyll and dependencies
gem install bundler jekyll
bundle install

# 3. Serve the site locally
bundle exec jekyll serve

# 4. Open in your browser
http://localhost:4000
```

---