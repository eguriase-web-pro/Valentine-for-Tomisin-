let noClickCount = 0;
const messages = [
    "Are you sure?",
    "Really sure?",
    "Think about it...",
    "Please reconsider",
    "Last chance!"
];

function yesClick() {
    const m = document.getElementById('msg');
    m.style.display = 'block';
    m.style.color = '#e03131';
    m.innerHTML = 'Yayyy 🥹❤️ I cant wait to spend Valentine with you, Tomisin.';
    createConfetti();
}

function noClick() {
    const noBtn = document.getElementById('noBtn');
    const m = document.getElementById('msg');
    if (noClickCount < messages.length) {
        m.style.display = 'block';
        m.style.color = '#495057';
        m.innerHTML = messages[noClickCount];
        noClickCount++;
    } else {
        m.style.display = 'block';
        m.style.color = '#495057';
        m.innerHTML = 'Still love you regardless 🤍';
    }
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}