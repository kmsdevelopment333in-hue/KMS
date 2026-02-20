const moods = [
  { key: "happy", label: "Happy", fx: "💖" },
  { key: "shy", label: "Shy", fx: "🌸" },
  { key: "thinking", label: "Thinking", fx: "💭" },
  { key: "excited", label: "Excited", fx: "✨" },
  { key: "sad", label: "Soft Sad", fx: "🫶" }
];

const styles = [
  { label: "Office Elegant", hair: "#32283b", coat: "#17151e", bgA: "#f8d8ea", bgB: "#e7f2ff" },
  { label: "Pastel Dream", hair: "#6c4f6b", coat: "#7f7bff", bgA: "#ffe6f5", bgB: "#def4ff" },
  { label: "Night Neon", hair: "#1a2746", coat: "#2a2dcf", bgA: "#dce6ff", bgB: "#ffdff8" },
  { label: "Warm Sunset", hair: "#5a3932", coat: "#d3585f", bgA: "#fff0dd", bgB: "#ffe5f3" }
];

const cuteReplies = [
  "I am listening, cutie. You are doing great today 💗",
  "Aww, your voice is adorable. I am right here with you 🌷",
  "Hehe, I got it! Let us do this one tiny step at a time ✨",
  "You are safe with me. Breathe in... breathe out... we got this 🫧",
  "Yay! I believe in you so much. Keep going, sweet soul 🌸"
];

const moodKeywords = {
  excited: ["yes", "great", "awesome", "win", "happy"],
  sad: ["sad", "down", "cry", "upset", "bad"],
  thinking: ["how", "why", "what", "plan", "idea"],
  shy: ["nervous", "shy", "embarrassed", "awkward"]
};

const root = document.documentElement;
const avatarCard = document.getElementById("avatarCard");
const moodLabel = document.getElementById("moodLabel");
const styleLabel = document.getElementById("styleLabel");
const listenLabel = document.getElementById("listenLabel");
const emotionFx = document.getElementById("emotionFx");
const voiceWave = document.getElementById("voiceWave");
const chatInput = document.getElementById("chatInput");
const chatLog = document.getElementById("chatLog");
const listenBtn = document.getElementById("listenBtn");

let moodIndex = 0;
let styleIndex = 0;
let listening = false;
let speaking = false;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

function updateVoiceWave() {
  if (listening || speaking) {
    voiceWave.classList.add("on");
  } else {
    voiceWave.classList.remove("on");
  }
}

function setListeningState(value) {
  listening = value;
  listenLabel.textContent = listening ? "On" : "Off";
  listenBtn.textContent = listening ? "🛑 Stop listening" : "🎤 Start listening";
  updateVoiceWave();
}

if (recognition) {
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript;
    addMessage("user", text);
    replyToUser(text, true);
  };

  recognition.onerror = (e) => {
    addMessage("ai", `Mic issue: ${e.error}. You can still type and I will answer in cute voice 💞`);
    setListeningState(false);
  };

  recognition.onend = () => {
    setListeningState(false);
  };
}

function applyMood() {
  const mood = moods[moodIndex];
  avatarCard.className = `avatar-card mood-${mood.key}`;
  moodLabel.textContent = mood.label;
  emotionFx.textContent = mood.fx;
}

function applyStyle() {
  const style = styles[styleIndex];
  root.style.setProperty("--hair", style.hair);
  root.style.setProperty("--coat", style.coat);
  root.style.setProperty("--bg-a", style.bgA);
  root.style.setProperty("--bg-b", style.bgB);
  styleLabel.textContent = style.label;
}

function detectMoodFromText(text) {
  const input = text.toLowerCase();
  for (const [mood, words] of Object.entries(moodKeywords)) {
    if (words.some((w) => input.includes(w))) {
      const idx = moods.findIndex((m) => m.key === mood);
      if (idx >= 0) {
        moodIndex = idx;
      }
      return;
    }
  }
  moodIndex = (moodIndex + 1) % moods.length;
}

function addMessage(role, text) {
  const item = document.createElement("article");
  item.className = `msg ${role}`;
  item.textContent = `${role === "user" ? "You" : "Aditee AI"}: ${text}`;
  chatLog.prepend(item);
}

function randomReply() {
  return cuteReplies[Math.floor(Math.random() * cuteReplies.length)];
}

function buildCuteAnswer(inputText) {
  const cleanInput = inputText.trim();
  return `${randomReply()} You said: "${cleanInput}".`;
}

function speakCute(text) {
  if (!window.speechSynthesis) {
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1.08;
  utter.pitch = 1.4;
  utter.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((v) => /female|samantha|zira|aria|luna|google us english/i.test(v.name));
  if (preferred) {
    utter.voice = preferred;
  }

  utter.onstart = () => {
    speaking = true;
    updateVoiceWave();
  };
  utter.onend = () => {
    speaking = false;
    updateVoiceWave();
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function replyToUser(text, fromVoice = false) {
  detectMoodFromText(text);
  applyMood();
  const reply = buildCuteAnswer(text);
  addMessage("ai", fromVoice ? `🎙️ ${reply}` : reply);
  speakCute(reply);
}

function startListening() {
  if (!recognition) {
    addMessage("ai", "Voice listening is not supported here. Type your message and I will answer in cute voice 💞");
    return;
  }
  try {
    recognition.start();
    setListeningState(true);
    speakCute("I am listening now, cutie. Please speak and I will answer in my cute voice!");
  } catch {
    addMessage("ai", "Mic is already active. Please speak now 🎤");
  }
}

function stopListening() {
  if (!recognition) {
    return;
  }
  recognition.stop();
  setListeningState(false);
}

document.getElementById("styleBtn").addEventListener("click", () => {
  styleIndex = (styleIndex + 1) % styles.length;
  applyStyle();
  speakCute(`New style applied: ${styles[styleIndex].label}. You look amazing too!`);
});

document.getElementById("moodBtn").addEventListener("click", () => {
  moodIndex = (moodIndex + 1) % moods.length;
  applyMood();
});

listenBtn.addEventListener("click", () => {
  if (listening) {
    stopListening();
  } else {
    startListening();
  }
});

document.getElementById("speakBtn").addEventListener("click", () => {
  const msg = "Hi cutie! I am Aditee AI. I can listen to your voice and answer with a cute voice reply 💕";
  addMessage("ai", msg);
  speakCute(msg);
});

document.getElementById("sendBtn").addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (!text) return;
  addMessage("user", text);
  chatInput.value = "";
  replyToUser(text);
});

applyMood();
applyStyle();
addMessage("ai", "Hi! I am Aditee AI. Press Start listening and I will hear you, then answer in a cute voice 💕");
