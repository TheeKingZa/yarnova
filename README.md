# Yarnova – A New Thread of Living

Yarnova is a lifestyle brand blending creativity, wellness, and intentional living.  
This repository contains the code for the official Yarnova website, built using:

- HTML  
- CSS  
- JavaScript  
- GitHub Pages (gh-pages branch)  
- Custom deployment script (`deploy.sh`)

Live site:  
👉 https://theekingza.github.io/yarnova/

---

## 🌿 Project Overview

Yarnova combines handcrafted crochet products, wellness drops (APLGO), and curated gift sets.  
The website is designed to be lightweight, fast, and easy to maintain — ideal for static hosting on GitHub Pages.

---

## 📁 Project Structure
```
yarnova/
├── assets/
│ ├── css/
│ ├── js/
│ ├── images/
│ └── ...
├── index.html
├── deploy.sh
└── README.md
```


- `assets/css/` – styling  
- `assets/js/` – scripts (e.g., date.js, menu toggle)  
- `assets/images/` – product and brand images  
- `deploy.sh` – script to push updates to GitHub Pages  

---

## 🚀 Deployment

This project uses GitHub Pages for hosting.  
The **master** branch is your development branch.  
The **gh-pages** branch is your production/live site branch.

### 1. Deploying

Run:
./depoy.sh


You will be asked to enter a commit message:
Enter commit message (leave empty for default):


- If you type a message → that message is used  
- If you press Enter → default message is used  

### 2. What the script does

- Checks for uncommitted changes  
- Asks for a commit message  
- Ensures the `gh-pages` branch exists  
- Copies all website files into `gh-pages`  
- Pushes everything live  
- Deletes temporary branches  
- Returns you to `master`  

### 3. Your site will be available at:

👉 https://theekingza.github.io/yarnova/

---

## 🎨 Branding & Design

**Yarnova Visual Identity**

- Warm cream / off‑white  
- Soft sage or olive  
- Muted terracotta or caramel  
- Charcoal  
- Minimal, modern, Instagram‑friendly layout

Sections included:

- Hero  
- Shop  
- Gift Sets  
- Wellness (APLGO Collection)  
- About  
- Contact  

---

## 🧶 Features

- Mobile‑friendly responsive layout  
- Clean CSS grid-based product displays  
- Automatic year update through `date.js`  
- Interactive navigation + hamburger menu  
- APLGO collections with product cards  
- Handmade aesthetic aligned with Yarnova's brand  

---

## 📦 Future Enhancements

Planned improvements include:

- Product modal popups  
- Integrated contact form  
- Newsletter signup  
- Image optimization  
- JSON‑based product rendering  
- Dark/light mode theme  

---

## 💬 Contact

For inquiries, updates, or contributions:

**Email:** proceedingmc@gmail.com   

---

## 📝 License

This project is maintained by **@theekingza**.  
Content, design, and brand assets are copyright © Yarnova.
