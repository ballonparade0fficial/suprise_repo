// ============================================================
// Background ambience: stars, gold dust, falling petals,
// and flying flowers drifting across the whole screen.
// ============================================================

// Stars
const starsEl = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const sz = Math.random() * 2.5 + 0.5;
  s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}vw;top:${Math.random()*100}vh;animation-duration:${2+Math.random()*5}s;animation-delay:${Math.random()*6}s`;
  starsEl.appendChild(s);
}

// Gold dust rising
for (let i = 0; i < 35; i++) {
  const d = document.createElement('div');
  d.className = 'gold-dust';
  const sz = Math.random() * 4 + 2;
  const colors = ['#d4af37', '#f4c842', '#fff8dc', '#b8860b', '#ffd700'];
  d.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}vw;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${10+Math.random()*15}s;animation-delay:${Math.random()*14}s;opacity:0`;
  document.body.appendChild(d);
}

// Floating petals (rising, spinning)
const petalEmojis = ['🌸', '🌺', '🌹', '🌷', '✿'];
for (let i = 0; i < 18; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
  p.style.cssText = `left:${Math.random()*100}vw;top:-60px;font-size:${12+Math.random()*14}px;animation-duration:${12+Math.random()*14}s;animation-delay:${Math.random()*15}s;opacity:0`;
  document.body.appendChild(p);
}

// NEW: flying flowers that drift diagonally across the whole screen,
// spinning as they go — separate from the rising petals above.
// Safe to delete this whole block if you'd rather not have them.
const flyingEmojis = ['🌼', '🌻', '💐', '🌹', '🌸', '✨'];
for (let i = 0; i < 10; i++) {
  const f = document.createElement('div');
  f.className = 'flying-flower';
  f.textContent = flyingEmojis[Math.floor(Math.random() * flyingEmojis.length)];
  f.style.cssText = `top:${Math.random()*90}vh;font-size:${16+Math.random()*16}px;animation-duration:${16+Math.random()*14}s;animation-delay:${Math.random()*20}s;opacity:0`;
  document.body.appendChild(f);
}

// ============================================================
// Gift box open → confetti burst + modal with bouquet
// ============================================================

function spawnBurst(x, y) {
  const items = ['🌸', '🌺', '🌷', '💫', '✨', '🌹', '🎓', '🎊', '⭐', '💛', '🥂'];
  for (let i = 0; i < 22; i++) {
    const b = document.createElement('div');
    b.className = 'burst';
    b.textContent = items[Math.floor(Math.random() * items.length)];
    const angle = (i / 22) * 360;
    const dist = 90 + Math.random() * 150;
    const tx = Math.cos(angle * Math.PI / 180) * dist + 'px';
    const ty = (Math.sin(angle * Math.PI / 180) * dist - 60) + 'px';
    b.style.cssText = `left:${x}px;top:${y}px;--tx:${tx};--ty:${ty};animation-duration:${0.9+Math.random()*0.7}s;font-size:${20+Math.random()*16}px;position:fixed;pointer-events:none;z-index:200`;
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 1800);
  }
}

function spawnConfetti() {
  const colors = ['#d4af37', '#f4c842', '#e91e63', '#ab47bc', '#7c4dff', '#f06292', '#ce93d8', '#80cbc4', '#fff8dc', '#ff80ab'];
  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti';
      const w = 6 + Math.random() * 10;
      const h = 4 + Math.random() * 10;
      c.style.cssText = `left:${Math.random()*100}vw;top:-14px;width:${w}px;height:${h}px;background:${colors[Math.floor(Math.random()*colors.length)]};transform:rotate(${Math.random()*360}deg);border-radius:${Math.random()>0.5?'50%':'2px'};animation-duration:${2.5+Math.random()*3.5}s;animation-delay:${Math.random()*0.8}s`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }, i * 30);
  }
}

function spawnHearts() {
  const positions = [0.15, 0.28, 0.42, 0.55, 0.68, 0.82];
  const items = ['💖', '💝', '💕', '🌸', '💗', '✨'];
  positions.forEach((xp, i) => {
    setTimeout(() => {
      const h = document.createElement('div');
      h.className = 'heart-float';
      h.textContent = items[i];
      h.style.cssText = `left:${xp*100}vw;top:65vh;font-size:${22+Math.random()*10}px;animation-duration:${2.5+Math.random()}s;animation-delay:${i*0.12}s`;
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 4000);
    }, i * 100);
  });
}

function openGift(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  spawnBurst(cx, cy);
  spawnConfetti();
  setTimeout(() => {
    document.getElementById('modal').classList.add('show');
    spawnHearts();
  }, 350);
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}
