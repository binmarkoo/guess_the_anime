<div align="center">

# 🎌 Guess the Anime 🎌

### *Wordle, aber für Weebs* 🕵️‍♂️

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-⚡-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Made with love](https://img.shields.io/badge/made%20with-❤️%20%26%20☕-ff69b4?style=for-the-badge)

*Errate das versteckte Anime. Eine Kategorie nach der anderen. Kein Entkommen.* 🔒

</div>

---

## 🎮 Worum geht's?

Du tippst einen Anime-Titel ein — das Spiel vergleicht ihn mit dem geheimen Ziel-Anime und verrät dir Stück für Stück, was passt und was nicht: Studio, Genre, Erscheinungsjahr und mehr. 🟩🟨🟥

Immer näher ran, bis du den richtigen erwischst. Simpel im Konzept, gemein im Detail. 😈

## ✨ Features

- 🎯 **Kategorie-Feedback** — jeder Guess zeigt dir Treffer, Teiltreffer und Nieten
- 🟩 **Visuelles Grid** — grün, gelb, rot, du kennst das Spiel
- 🔤 **Autocomplete** — kein nerviges Titel-Raten beim Tippen
- 🏆 **Win Screen** mit Stats zum Angeben
- 📱 **Responsive** — läuft auf Handy und Desktop

## 🛠️ Tech Stack

| Was | Womit |
|-----|-------|
| 💛 UI | React 19 |
| ⚡ Build | Vite |
| 🧹 Linting | ESLint |
| 📦 Daten | externer Fetch-Layer |

## 🚀 Los geht's

```bash
# 1️⃣ Schnapp dir den Code
git clone https://github.com/binmarkoo/guess_the_anime.git
cd guess_the_anime

# 2️⃣ Dependencies rein
npm install

# 3️⃣ Und ab dafür 🏃‍♂️
npm run dev
```

➡️ Öffnet sich auf `http://localhost:5173`

**Production Build gefällig?** 📦
```bash
npm run build
npm run preview
```

## 🗂️ Projektstruktur

```
src/
├── 🎮 components/game/    # Grid, Rows, Input, Win-Screen
├── 🎨 components/layout/  # Header, Tabs
├── 🧩 components/ui/      # Button, Spinner
├── 📚 data/               # Anime-Daten & Fetch
├── ⚙️ game/               # Vergleichslogik, Kategorien, Stats
└── 🪝 hooks/              # Custom Hooks
