# Prince Gupta — Portfolio (React + Vite)

Yeh pehle wali single-file HTML portfolio ka React version hai — same design,
same colors, same animations, bas ab sab kuch clean, reusable components
mein organized hai taaki aage easily manage/edit kar sako.

## Folder Structure

```
portfolio-react/
├── public/
│   └── assets/resume/        # apna resume PDF yahan daalo
├── src/
│   ├── components/           # har section ek alag component
│   ├── data/
│   │   └── portfolioConfig.js  # <-- SAARA DATA YAHAN HAI (edit yahi karo)
│   ├── context/
│   │   └── ThemeContext.jsx  # dark/light mode logic
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── globals.css       # saara CSS (design tokens/colors bhi yahin)
│   ├── App.jsx                # sab components yahan jud'te hain
│   └── main.jsx                # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Local Setup

```bash
npm install
npm run dev
```
Browser mein `http://localhost:5173` khul jayega.

## Apni Info Kaise Daalein

1. **`src/data/portfolioConfig.js`** kholo — yahan email, GitHub link, skills,
   projects, experience, education, certifications, achievements — sab kuch
   hai. Jo bhi `PLACEHOLDER` likha hai use replace kar do.
2. **Resume PDF** → `public/assets/resume/Prince-Gupta-Resume.pdf` par daalo.
3. Design/colors change karne ho → `src/styles/globals.css` ke top pe
   `:root` aur `[data-theme="dark"]` ke CSS variables edit karo.

## Contact Form

Form abhi sirf validate karta hai, kahin submit nahi hota (static frontend hai).
Real messages bhejne ke liye `src/components/Contact.jsx` ke `handleSubmit`
function mein comment dekhna — wahan Formspree / EmailJS / apna backend
connect karne ka tareeka likha hai.

## Build for Production

```bash
npm run build
```
`dist/` folder banega — ise Vercel, Netlify, ya GitHub Pages par deploy kar
sakte ho.

## Deploy (quick steps)

- **Vercel**: GitHub par push karo → vercel.com par import karo → auto-deploy.
- **Netlify**: `npm run build` karke `dist/` folder ko Netlify drag-drop
  deploy mein daal do.
