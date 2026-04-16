# <div align="center">Pretend</div>

<div align="center">
<strong>The Ultimate Offline Party Game of Deception</strong>
<br />
<i>Find the odd one out. Trust no one.</i>
</div>

<br />

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)

<br />

<img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4c7f12147253507.62c08a9a8c1f9.png" width="180" height="180" style="border-radius: 40px" />

<br />
<br />

**One Phone. Many Secrets. Endless Fun.**
<br />
*A Premium Social Deduction Experience with High-Contrast Neo Noir Aesthetics.*
<br />
<br />
🌐 <strong>Visit Our Official Site: <a href="https://pretend.theatom.lk">pretend.theatom.lk</a></strong> &nbsp;|&nbsp; <a href="https://theatom.lk">theatom.lk</a>

</div>

---

> [!NOTE]  
> **Source Code Restricted**: This repository serves as a professional showcase and redirect for the **Pretend** project. The full source code is private and protected by copyright. For more details or to play the game, visit the official site.

---

## 🎮 Game Modes

Pretend features **8 distinct ways to play**, all optimized for a single-phone "pass and play" experience:

### 2+ Players

| Mode | Description |
|------|-------------|
| 🎭 **Charades** | Classic act-it-out game! Tilt phone down for correct, up to pass. Device motion controls. |
| 🎬 **Director's Cut** | One player is the Director who knows the movie. Others ask yes/no questions to guess. |
| 💣 **Time Bomb** | Quick-fire word association under pressure. Don't be the one holding the bomb! |
| 🌊 **Wavelength** | A telepathy game! A Psychic gives a clue to a target on a spectrum. Players discuss and dial in the perfect position. |

### 3+ Players

| Mode | Description |
|------|-------------|
| 🕵️ **Classic Imposter** | Crewmates get a secret word, Imposter gets a vague clue. Find the impostor! |
| 🔍 **Undercover** | Everyone gets a word, but one player has a slightly different word. Spot the difference! |
| 🧠 **Mind Sync** | Everyone answers a question, but one player got a different question. Find the outlier! |

### 4+ Players

| Mode | Description |
|------|-------------|
| 🚨 **Thief & Police** | One Police, one Thief, rest are Civilians. Police & Civilians get the same word, Thief gets a different one. Police must identify the Thief! |

---

## 🚨 NEW: Thief & Police Mode

A unique social deduction game requiring 4+ players:

**Roles:**
- **Police** (1 player) - Gets the crewmate word, must find the Thief
- **Thief** (1 player) - Gets a different but related word, must blend in
- **Civilians** (remaining players) - Get the same word as Police, help catch the Thief

**Flow:**
1. Each player sees their role (Police/Thief/Civilian) and their word
2. 5-minute discussion with clues
3. Police makes the arrest decision
4. Instant reveal: Caught or Escaped!

**Scoring:**
| Outcome | Police | Thief | Civilians |
|---------|--------|-------|-----------|
| Thief Caught | +1 | 0 | +1 each |
| Thief Escaped | 0 | +2 | 0 |

---

## 🌊 NEW: Wavelength Mode

A cooperative game of telepathy and empathy for 2+ players:

**How it Works:**
1. **The Psychic** sees a target position on a spectrum (e.g., Hot vs Cold).
2. They give a **one-word clue** that fits that specific position.
3. **The Guessers** discuss and turn the dial to where they think the target is.
4. **Reveal!** Score points based on how close users got to the bullseye.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Neo Noir UI** | Sleek black-and-white design with elegant candlelight gold accents. |
| **Pass & Play** | Designed for 2-10 players on a single device — no internet required. |
| **Multi-Round Logic** | Modern "Among Us" style elimination. Play until a team actually wins. |
| **Smart Instructions** | Simplified mode selection with on-demand "How to Play" overlays. |
| **Extensive Themes** | 13+ curated categories including Movies, Food, Sports, and more. |
| **Haptic Immersion** | Tactile feedback for every interaction, from reveals to votes. |
| **Device Motion** | Charades mode uses phone tilt for hands-free correct/pass actions. |

---

## 🛠️ Technical Stack

- **React Native & Expo** - Cross-platform core with native speed
- **Zustand State** - Lightweight and predictable game logic management
- **Reanimated** - Fluid 60fps transitions and interactive reveal animations
- **Expo Sensors** - Device motion for Charades tilt detection
- **Dynamic Themes** - Scalable JSON-based word pairing system

---

## 📂 Project Structure

```bash
Pretend/
├── app/                    # Expo Router Screens
│   ├── index.tsx           # Home Screen
│   ├── select-mode.tsx     # Mode Selection (2+, 3+, 4+ player sections)
│   ├── add-players.tsx     # Player Management
│   ├── role-reveal.tsx     # Secret Role Distribution
│   ├── discussion.tsx      # Timer & Discussion Phase
│   ├── police-arrest.tsx   # Thief & Police Voting
│   ├── results.tsx         # Scoring & Results
│   └── charades/           # Charades Mode Screens
├── store/
│   └── gameStore.ts        # Game State & Logic
├── data/
│   ├── themes/             # Classic Mode Word Lists
│   ├── undercover/         # Paired Word Data
│   └── charades.ts         # Charades Words
├── components/             # Reusable UI Components
├── types/
│   └── game.ts             # TypeScript Definitions
└── assets/                 # Brand Assets
```

---

## 🚀 Infrastructure Showcase

### Redirect Management

```bash
# Clone the redirect repository
git clone https://github.com/zakisheriff/Pretend-Redirect.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

### How to Visit

1. **Visit Domain** - Head over to [pretend.theatom.lk](https://pretend.theatom.lk)
2. **Access App** - The site acts as a gateway to the primary game services.

---

<div align="center">

### 🎭 Trust No One. Pretend Everything.

Made by **Zaki Sheriff**

[⭐ Star this repo](https://github.com/zakisheriff/Pretend) if you're ready to find the imposter!

</div>
