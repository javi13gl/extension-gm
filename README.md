# extension-gm

A simple browser extension that displays a personalized greeting and, when you click a button, reveals the current day of the week with a smooth fade‑in animation. Switch between **English (EN)** and **Norwegian (NS)** at any time—perfect for learning Norwegian while you use it.

---

## Key Features

* **Dynamic greeting** based on local time:

  * **Good morning** (6:00–11:59)
  * **Good afternoon** (12:00–17:59)
  * **Good evening** (18:00–5:59)
* **Animated day display**: click “Today is… / I dag er…” to reveal the day of the week.
* **Language toggle** (EN / NS) in the top‑right corner.

---

## File Structure

```
ext-gm/
│
├── manifest.json       # Extension metadata and config
├── popup.html          # HTML structure and CSS styles
├── popup.js            # JavaScript for greeting, language, and animation
└── icons/              # Icons at 16×16, 48×48, and 128×128 px
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## Installation & Testing

1. Download or clone this repository to your local machine.
2. Open your browser’s extensions page:

   * **Chrome:** `chrome://extensions`
   * **Edge:** `edge://extensions`
3. Enable **Developer mode** (toggle in the top‑right).
4. Click **Load unpacked** and select the `ext-gm/` folder.
5. Click the extension icon in the toolbar to open the popup.

---

## How to Use

1. **Initial greeting:** Automatically shows a time‑appropriate greeting with emoji.
2. **Switch language:** Click **EN** or **NS** to change all interface text to English or Norwegian.
3. **Reveal day:** Click the “Today is…” (EN) or “I dag er…” (NS) button to display the current weekday, complete with a fade‑in effect.

---

*Use this extension to get your daily greeting and discover the day of the week—while you learn Norwegian!*
