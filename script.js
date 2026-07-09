const teams = [
  { name: "Team A", score: 0 },
  { name: "Team B", score: 0 },
  { name: "Team C", score: 0 },
  { name: "Team D", score: 0 },
  { name: "Team E", score: 0 },
];

const emojiImages = ["assets/emoji_1.png", "assets/emoji_2.png", "assets/emoji_3.png", "assets/emoji_4.png", "assets/emoji_5.png", "assets/emoji_6.png", "assets/emoji_7.png", "assets/emoji_8.png", "assets/emoji_9.png", "assets/emoji_10.png"];

const questions = [
  { type: "intro", title: "Bollywood Trivia Game", badge: "Live Show" },
  { type: "rules", title: "Tournament Rules", badge: "Rules" },

  { type: "section", title: "Round 1: Emoji Decryption", badge: "Guess the Movie" },
  ...[
    ["Team 1", emojiImages[0], "Housefull"],
    ["Team 2", emojiImages[1], "Dil Dhadakne Do"],
    ["Team 3", emojiImages[2], "Ek Tha Tiger"],
    ["Team 4", emojiImages[3], "Udta Punjab"],
    ["Team 5", emojiImages[4], "Chalte Chalte"],
    ["Team 1", emojiImages[5], "Garam Masala"],
    ["Team 2", emojiImages[6], "Mr India"],
    ["Team 3", emojiImages[7], "Dangal"],
    ["Team 4", emojiImages[8], "M S Dhoni"],
    ["Team 5", emojiImages[9], "Singham"],
  ].map((q, i) => ({ type: "emoji", title: "Round 1: Emoji Decryption", badge: `R1 | Q${i+1}`, team: q[0], image: q[1], answer: q[2] })),

  { type: "section", title: "Dialogue Delivery: Round 1", badge: "Medium Level" },
  ...[
    ["Team 1", `"Crime Master Gogo naam hai mera..."`, `"...aankhen nikal ke gotiyan khelta hun main."`, "Andaz Apna Apna"],
    ["Team 2", `"Tension lene ka nahi..."`, `"Sirf dene ka."`, "Munna Bhai M.B.B.S."],
    ["Team 3", `"Our business is our business..."`, `"...none of your business."`, "Race 3"],
    ["Team 4", `"Dosti ka ek usool hai, madam,"`, `"No sorry... no thank you."`, "Maine Pyar Kiya"],
    ["Team 5", `"Meri dictionary mein 'impossible' word hai hi nahi."`, `"Achha? Kahan se kharidi aisi bakwaas dictionary?"`, "Baadshah"],
  ].map((q, i) => ({ type: "dialogue", title: "Dialogue Delivery: Round 1", badge: `D1 | Q${i+1}`, team: q[0], clue: q[1], answer: `${q[2]}<br><span class="small-note">Movie: ${q[3]}</span>` })),

  { type: "section", title: "Dialogue Delivery: Round 2", badge: "Hard Level" },
  ...[
    ["Team 1", `"Jo main bolta hoon..."`, `"...woh main karta hoon, aur jo main nahi bolta, woh main definitely karta hoon."`, "Rowdy Rathore"],
    ["Team 2", `"Ek baar jo maine commitment kar di..."`, `"...toh main apne aap ki bhi nahi sunta."`, "Wanted"],
    ["Team 3", `"Kabhi kabhi kuch jeetne ke liye..."`, `"...kuch haarna bhi padta hai."`, "Baazigar"],
    ["Team 4", `"Success ke peeche mat bhaago..."`, `"...kaabil bano, success jhak maar ke tumhare peeche aayegi."`, "3 Idiots"],
    ["Team 5", `"Main udna chahta hoon, daudna chahta hoon..."`, `"...girna bhi chahta hoon, bas rukna nahi chahta."`, "Yeh Jawaani Hai Deewani"],
  ].map((q, i) => ({ type: "dialogue", title: "Dialogue Delivery: Round 2", badge: `D2 | Q${i+1}`, team: q[0], clue: q[1], answer: `${q[2]}<br><span class="small-note">Movie: ${q[3]}</span>` })),

  { type: "section", title: "Guess Movie from Character Pair", badge: "Character Round" },
  ...[
    ["Team 1", "Kabir & Preeti", "Kabir Singh"],
    ["Team 2", "Aditya & Geet", "Jab We Met"],
    ["Team 3", "Sid & Aisha", "Wake Up Sid"],
    ["Team 4", "Jaggu & Sarfaraz", "PK"],
    ["Team 5", "Krish & Ananya", "2 States"],
  ].map((q, i) => ({ type: "character", title: "Guess the Movie", badge: `Pair | Q${i+1}`, team: q[0], clue: q[1], answer: q[2] })),

  { type: "section", title: "Rapid Fire", badge: "One Question Per Team" },
  ...[
    ["Team 1", "Name 5 Bollywood sports movies", "Examples: Chak De India, Dangal, Lagaan, MS Dhoni, Bhaag Milkha Bhaag"],
    ["Team 2", "Name 5 movies starring Ranbir Kapoor", "Examples: Yeh Jawaani Hai Deewani ,Rockstar, Barfi!, Tamasha, Wake Up Sid"],
    ["Team 3", "Name 5 Bollywood thriller / suspense movies", "Examples: Drishyam, Kahaani, Andhadhun, Talaash, Badla"],
    ["Team 4", "Name 5 movies starring Madhuri Dixit", "Examples: Hum Aapke Hain Koun..!, Devdas, Dil To Pagal Hai, Khalnayak, Tezaab"],
    ["Team 5", "Name 5 Bollywood comedy movies", "Examples: Hera Pheri, Welcome, Dhamaal, Golmaal, Andaz Apna Apna"],
  
  ].map((q, i) => ({ type: "rapid", title: "Rapid Fire", badge: `Rapid | Q${i+1}`, team: q[0], clue: q[1], answer: q[2] })),

  { type: "section", title: "Bonus Round: Brand Celebrity Match", badge: "Wildcard" },
  ...[
    ["Open to All", "Frooti • TRESemme • Manyavar Mohey • Cadbury • Caprese", "Alia Bhatt"],
    ["Open to All", "Manyavar • Ching's Secret • Bingo! • Slice • Tata Neu", "Ranveer Singh"],
    ["Open to All", "Hyundai • Lux • BigBasket • D'Decor • Dubai Tourism", "Shah Rukh Khan"],
    ["Open to All", "Gujarat Tourism • Kalyan Jewellers • Parker • ICICI Bank • Emami Navratna", "Amitabh Bachchan"],
    ["Open to All", "Dream11 • CEAT Tyres • Gulf Oil • TVS • Orient Electric", "MS Dhoni"],
  ].map((q, i) => ({ type: "brand", title: "Guess the Celebrity", badge: `Bonus | Q${i+1}`, team: q[0], clue: q[1], answer: q[2] })),

  { type: "awards", title: "Grand Ceremony", badge: "Winners" }
];

let current = 0;
let timeLeft = 60;
let interval = null;
let isRunning = false;
const circumference = 2 * Math.PI * 48;

const title = document.getElementById("slideTitle");
const badge = document.getElementById("slideBadge");
const pill = document.getElementById("roundPill");
const content = document.getElementById("slideContent");
const timerText = document.getElementById("timerText");
const ring = document.getElementById("ringProgress");
const scoreboard = document.getElementById("scoreboard");

ring.style.strokeDasharray = circumference;

function renderScoreboard() {
  scoreboard.innerHTML = teams.map((t, i) => `
    <div class="team-card">
      <div class="team-row">
        <div class="team-name">${t.name}</div>
        <div class="team-score">${t.score}</div>
      </div>
      <div class="score-actions">
        <button onclick="addScore(${i}, 10)">+10</button>
        <button onclick="addScore(${i}, 5)">+5</button>
        <button onclick="addScore(${i}, -5)">-5</button>
      </div>
    </div>
  `).join("");
}

function addScore(i, value) {
  teams[i].score += value;
  renderScoreboard();
  saveState();
}

function saveState() {
  localStorage.setItem("bollywoodScoresV2", JSON.stringify(teams));
  localStorage.setItem("bollywoodSlideV2", String(current));
}

function loadState() {
  const saved = localStorage.getItem("bollywoodScoresV2");
  if (saved) {
    const parsed = JSON.parse(saved);
    parsed.forEach((t, i) => teams[i].score = t.score || 0);
  }
}

function updateTimer() {
  timerText.textContent = timeLeft;
  const offset = circumference * (1 - timeLeft / 60);
  ring.style.strokeDashoffset = offset;
  if (timeLeft <= 10) {
    timerText.style.color = "#ff4d5e";
    ring.style.stroke = "#ff4d5e";
  } else {
    timerText.style.color = "white";
    ring.style.stroke = "#ffd700";
  }
}

function startTimer() {
  clearInterval(interval);
  isRunning = true;
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) pauseTimer();
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer(autoStart = false) {
  pauseTimer();
  timeLeft = 60;
  updateTimer();
  if (autoStart) startTimer();
}

function revealAnswer() {
  const ans = document.getElementById("answerBox");
  if (ans) ans.classList.add("show");
}

function renderSlide() {
  pauseTimer();
  const q = questions[current];
  title.innerHTML = q.title.replace(/(Mania|Rules|Round|Ceremony|Delivery|Celebrity|Movie|Fire)/g, '<span>$1</span>');
  badge.textContent = q.badge || "Live Show";
  pill.textContent = `${current + 1} / ${questions.length}`;

  if (q.type === "intro") {
    content.innerHTML = `
      <div>
        <div class="big-title">Bollywood Mania</div>
        <div class="subtitle">The Ultimate Cinematic Trivia Showdown</div>
        <p class="small-note">Use the right-side HUD for timer, scoring and navigation.</p>
      </div>`;
    resetTimer(false);
  } else if (q.type === "rules") {
    content.innerHTML = `
      <div class="rules-grid">
        <div class="rule-box">
          <h3>🎮 Structure</h3>
          <ul>
            <li>Total of 5 competitive teams.</li>
            <li>4 main rounds and 1 bonus round.</li>
            <li>Each question gets 60 seconds.</li>
            <li>Answers can be revealed anytime by the host.</li>
          </ul>
        </div>
        <div class="rule-box">
          <h3>⭐ Scoring</h3>
          <ul>
            <li>+10 points for direct correct answer.</li>
            <li>+5 points for passed correct answer.</li>
            <li>-5 points for incorrect attempt.</li>
            <li>Highest score wins the award show finale.</li>
          </ul>
        </div>
      </div>`;
    resetTimer(false);
  } else if (q.type === "section") {
    content.innerHTML = `
      <div>
        <div class="big-title">${q.title}</div>
        <div class="subtitle">Ready for the next blockbuster round?</div>
      </div>`;
    resetTimer(false);
  } else if (q.type === "emoji") {
    content.innerHTML = `
      <div class="question-box">
        <div class="team-label">${q.team}</div>
        <img class="emoji-image" src="${q.image}" alt="Emoji clue from PPT" />
        <button class="answer-btn" id="revealBtn" onclick="revealAnswer()">Reveal Answer</button>
        <div class="answer-box" id="answerBox">Answer: <b>${q.answer}</b></div>
      </div>`;
    resetTimer(true);
  } else if (q.type === "dialogue") {
    content.innerHTML = `
      <div class="question-box">
        <div class="team-label">${q.team}</div>
        <div class="dialogue">${q.clue}</div>
        <button class="answer-btn" id="revealBtn" onclick="revealAnswer()">Reveal Answer</button>
        <div class="answer-box" id="answerBox">${q.answer}</div>
      </div>`;
    resetTimer(true);
  } else if (q.type === "character") {
    content.innerHTML = `
      <div class="question-box">
        <div class="team-label">${q.team}</div>
        <div class="character-pair">🎭 ${q.clue}</div>
        <button class="answer-btn" id="revealBtn" onclick="revealAnswer()">Reveal Movie</button>
        <div class="answer-box" id="answerBox">Movie: <b>${q.answer}</b></div>
      </div>`;
    resetTimer(true);
  } else if (q.type === "rapid") {
    content.innerHTML = `
      <div class="question-box">
        <div class="team-label">${q.team}</div>
        <div class="rapid-task">${q.clue}</div>
        <button class="answer-btn" id="revealBtn" onclick="revealAnswer()">Show Sample Answer</button>
        <div class="answer-box" id="answerBox">${q.answer}</div>
      </div>`;
    resetTimer(true);
  } else if (q.type === "brand") {
    content.innerHTML = `
      <div class="question-box">
        <div class="team-label">${q.team}</div>
        <div class="brand-list">🏷️ ${q.clue.replaceAll(" • ", "<br>🏷️ ")}</div>
        <button class="answer-btn" id="revealBtn" onclick="revealAnswer()">Reveal Celebrity</button>
        <div class="answer-box" id="answerBox">Celebrity: <b>${q.answer}</b></div>
      </div>`;
    resetTimer(true);
  } else if (q.type === "awards") {
    const sorted = [...teams].sort((a,b) => b.score - a.score);
    content.innerHTML = `
      <div class="confetti"></div>
      <div class="awards">
        <div class="big-title">🏆 Champions 🏆</div>
        <div class="subtitle">Bollywood Trivia Showdown Results</div>
        <div class="podium">
          <div class="podium-card second"><h3>${sorted[1]?.name || "Team B"}</h3><b>${sorted[1]?.score || 0} pts</b><div class="rank">II</div></div>
          <div class="podium-card"><h3>${sorted[0]?.name || "Team A"}</h3><b>${sorted[0]?.score || 0} pts</b><div class="rank">I</div></div>
          <div class="podium-card third"><h3>${sorted[2]?.name || "Team C"}</h3><b>${sorted[2]?.score || 0} pts</b><div class="rank">III</div></div>
        </div>
        <p class="small-note gold">Congratulations to all the competitors!</p>
      </div>`;
    resetTimer(false);
  }
  saveState();
}

document.getElementById("nextBtn").onclick = () => {
  current = Math.min(current + 1, questions.length - 1);
  renderSlide();
};
document.getElementById("prevBtn").onclick = () => {
  current = Math.max(current - 1, 0);
  renderSlide();
};
document.getElementById("pauseBtn").onclick = pauseTimer;
document.getElementById("startBtn").onclick = startTimer;
document.getElementById("resetBtn").onclick = () => resetTimer(true);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") document.getElementById("nextBtn").click();
  if (e.key === "ArrowLeft") document.getElementById("prevBtn").click();
  if (e.key === " ") { e.preventDefault(); isRunning ? pauseTimer() : startTimer(); }
  if (e.key.toLowerCase() === "r") resetTimer(true);
  if (e.key.toLowerCase() === "a") revealAnswer();
});

loadState();
renderScoreboard();
renderSlide();
