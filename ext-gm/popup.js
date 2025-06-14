// popup.js

const LANG_KEY = 'lang';

const languages = {
  EN: {
    morning: 'Good morning',
    morningEmoji: '🌞',
    afternoon: 'Good afternoon',
    afternoonEmoji: '🌇',
    evening: 'Good evening',
    eveningEmoji: '🌙',
    todayIs: 'Today is…',
    days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  },
  NS: {
    morning: 'God morgen',
    morningEmoji: '🌞',
    afternoon: 'God ettermiddag',
    afternoonEmoji: '🌇',
    evening: 'God kveld',
    eveningEmoji: '🌙',
    todayIs: 'I dag er…',
    days: ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag']
  }
};

function getLanguage() {
  return localStorage.getItem(LANG_KEY) || 'EN';
}

function setLanguage(lang) {
  localStorage.setItem(LANG_KEY, lang);
  updateUI(lang);
}

function showDay(lang) {
  const daysArr = languages[lang].days;
  const todayIndex = new Date().getDay();
  const dayName = daysArr[todayIndex];
  dayText.textContent = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  dayBtn.hidden = true;
  dayText.hidden = false;
}

function updateUI(lang) {
  btnEn.classList.toggle('active', lang === 'EN');
  btnNs.classList.toggle('active', lang === 'NS');

  const now = new Date();
  const hour = now.getHours();
  let greet, emoji;

  if (hour >= 6 && hour < 12) {
    greet = languages[lang].morning;
    emoji = languages[lang].morningEmoji;
  } else if (hour >= 12 && hour < 18) {
    greet = languages[lang].afternoon;
    emoji = languages[lang].afternoonEmoji;
  } else {
    greet = languages[lang].evening;
    emoji = languages[lang].eveningEmoji;
  }

  heading.textContent = `${greet} ${emoji}`;
  dayBtn.textContent = languages[lang].todayIs;

  // If the day is already displayed, update it
  if (!dayText.hidden) {
    showDay(lang);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.btnEn = document.getElementById('btnEn');
  window.btnNs = document.getElementById('btnNs');
  window.heading = document.getElementById('greeting');
  window.dayBtn = document.getElementById('dayBtn');
  window.dayText = document.getElementById('dayText');

  const lang = getLanguage();
  updateUI(lang);

  btnEn.addEventListener('click', () => setLanguage('EN'));
  btnNs.addEventListener('click', () => setLanguage('NS'));

  dayBtn.addEventListener('click', () => showDay(getLanguage()));
});