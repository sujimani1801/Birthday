/* ============ EDIT EVERYTHING HERE ============ */
const NAME = "Adithiyaaaan❤️";                       // his name
const TITLE = "Happieeee B'dayyy " + NAME + "";
const MESSAGE = "Love youuuuuuuuu soo muchhhh da thangowwwww🌍🫂";
const QUIZ_TITLE = "How much do you love me? 💚";
const FINAL_MESSAGE = "Write your final message here. You passed with flying colours 💜";

// Party page texts + bear names
const BEAR1 = "Dudu", BEAR2 = "Bubu";
const P_TEXT = {
  blow:"From this year you will be very happy as you want pattuu😘🕯️Make a wish, then candle ah oodhunga paapom🕯️",
  wished:"Wowww Wish made! 🌟 cut the cake da vennaa🍰",
  cut:"🍰 Aprm enaku oooti vidunga cake ahh",
  feed:["Mmm mmm yum 😋💚","Yummmm! 🥰","So sweet, just like you 💜"]
};



// Memories: photo = image URL or base64 data URI ("" shows the emoji placeholder)
const MEMORIES = [
  {photo:"images/one.jpg", emoji:"📸", msg:"Our First Pic Together"},
  {photo:"images/two.jpg", emoji:"🌸", msg:"Remember our first meet??"},
  {photo:"images/three.jpg", emoji:"🍕", msg:"Our First Bike Ride"},
  {photo:"images/four.jpg", emoji:"🌙", msg:"Matching Outfits"},
  {photo:"images/five.jpg", emoji:"🎁", msg:"My Fav...."}
];

// Music per page. It starts automatically when that page opens; pages not listed stay silent.
// "birthday" (music-box Happy Birthday) and "dreamy" (soft romantic tune) are built in,
// or use your own file placed next to this page, e.g. memories:"song.mp3"
const MUSIC = { party:"audio/HBD.mp3", memories:"", background:"audio/background.mp3" };

// Reasons I love you (add up to 22; empty slots get a placeholder automatically)
const REASONS = [
  "You make every ordinary day feel special 💚",
  "Your comedies make my worst days feel better 💜",
  "You are the safest place I know 🏡",
  "You are the best thing that ever happened to me 💜",
  "You are my favorite hello and hardest goodbye 💚",
  "You make me a better person every day 💜",
  "You are my home, my heart, my everything 💚",
  "You are my only comfort zone 💜",
  "Your love 💚",
  "Your hugs 💜",
  "Your kisses 💚",
  "Your voice 💜",
  "Your care towards me 💚",
  "Your Happiness 💜",
  "The way you trust me every time 💚",
  "Not well Expressive by words but you always do by actions 💜",
  "Your Understanding 💚",
  "Our silly fights 💜",
  "The way you call meee💜",
  "The way you look at me when I am angry💚",
  "The way you pamper me Everytime💜",
  "Don't know how to express my love for you but I love you more than anything in this world💚"
];



// Open when... letters (each one has a photo + a message; photo:"" shows the emoji until you add one)
const OPEN_WHEN = [
  {label:"Open when you miss me 🥺", photo:"images/need.jpg", emoji:"🥺", text:"I know you don't miss me"},
  {label:"Open when you're sad 🫂", photo:"images/sad.jpg", emoji:"🫂", text:"Are you happy with me?"},
  {label:"Open when you're angry on me ", photo:"images/angry.jpg", emoji:"🌙", text:"Why are you angry with me?"},
  {label:"Open when you need a laugh 😂", photo:"images/laugh.jpg", emoji:"😂", text:"See your face"}
];

const SCRATCH_PRIZE = "Naneeee unaku kadachaaa periya gift thangowwwwww........enna vida unaku vera ennada venum😁💕";       // the gift under the scratch card

const GOAL = 15;                                      // hearts to catch
const GAME_WIN = "You caught my heart (again) 💚 missss youuuuuuuuuuu";

// Secret messages: tap the bears, the big hearts, or the title 5 times
const EGGS = {
  bear1:["Bubu says: happy birthday Chlow! 🐻💚","bubu is sending you birthday a hug 🤗"],
  bear2:["Bubu says: I love you the most 💜","Dudu wants more cake 🍰"],
  heart:["Love uuuuuu 💚","I love you more than yesterday 💜","Keep tapping, who knows what happens 👀"],
  ask:["Don't even think about pressing No 😤"],
  title:"🎉 SECRET UNLOCKED! You tapped the title 5 times. Write your secret here 💌"
};

// Sounds for the "Will you be mine?" page. Leave "" for built-in cartoon sounds,
// or use real recordings placed next to this page, e.g. yes:"laugh.mp3", no:"cry.mp3"
const SOUNDS = { yes:"audio/laugh.mp3", no:"audio/cry.mp3" };

// Secret lock at the start
const LOCK_CODE = "1803";
const LOCK_HINT = "Hint: our special date 💚";

// "Reply to me": opens WhatsApp with his reply typed in. REPLY_PHONE = country code + number,
// digits only, e.g. "919876543210". If left empty, WhatsApp lets him pick the contact.
const REPLY_PHONE = "";
const REPLY_INTRO = "💌 Reply from my birthday page: ";
const REPLY_CHIPS = ["I loved it 🥹💚","You made me cry 😭","Best birthday ever 🎂","Come here, I need a hug 🫂"];

const ASK = "Will you be mine forever? 🥺";
const ASK_YES = "YAY!! Forever it is 💚💜🎉";
const LETTER = "My dearest " + NAME + ",\n\nNamma First Meet Oct 3 Un B'day I Think It was 2022 crct ah therila...Appo Rendu perum romba chinna pulla school padichom aana ippo na clge neeega wrk years takkunu poitu.\nAana ivlo naal kalichi ippothan namma rendu perum oruthavaga oruthavaga olunga purinji irukom nu nenakiren chinna pulla thanama sanda podama...\nLast year intha time neega romba stresed ahh down ah irunthinga aana ippo oru aaluvuku happy ah irukiganu namburen...\n idhe pola eppavum happy ah irunga nanu sanda lam poda maten ungala purinji kittu eppovum unga kuda irupen....intha year en thango kuda na irukanum bday celebrate pannnanum nu aasa patten ungaluku theriyahu aaana en situation edhume ennala panna mudila......I hope next year enaku pudicha pola ungala na pathupen love u chlowww...miss youuu sooooo muchhh 🫂\n\nHappy 22nd birthday 💜\n\nForever yours 💚";
/* ============ END OF EDITABLE PART ============ */

const $ = id => document.getElementById(id);
const rnd = (a,b) => Math.random()*(b-a)+a;

$('title').textContent = TITLE; $('msg').textContent = MESSAGE;
$('askq').textContent = ASK; $('letter').textContent = LETTER;
$('n1').textContent = BEAR1; $('n2').textContent = BEAR2;

/* floating background hearts */
(function(){
  const box = $('hearts');
  for(let i=0;i<28;i++){
    const s = document.createElement('span'); s.className='fh';
    s.textContent = Math.random()<.5?'💚':'💜';
    s.style.cssText = `left:${rnd(0,100)}%;font-size:${rnd(14,40)}px;animation-duration:${rnd(12,28)}s;animation-delay:${-rnd(0,28)}s`;
    box.appendChild(s);
  }
})();

/* confetti hearts */
function burst(n=45){
  const c = $('confetti'), e = ['💚','💜','💖','✨','🎉'];
  for(let i=0;i<n;i++){
    const s = document.createElement('span');
    s.textContent = e[Math.floor(rnd(0,e.length))];
    s.style.cssText = `position:absolute;left:50%;top:55%;font-size:${rnd(18,34)}px;transition:transform 1.6s cubic-bezier(.1,.7,.3,1),opacity 1.6s;`;
    c.appendChild(s);
    requestAnimationFrame(()=>{requestAnimationFrame(()=>{
      s.style.transform = `translate(${rnd(-45,45)}vw,${rnd(-60,40)}vh) rotate(${rnd(-360,360)}deg)`;
      s.style.opacity = 0;
    })});
    setTimeout(()=>s.remove(),1800);
  }
}



/* ---------- page-by-page navigation ---------- */
const PAGES = ['home','party','memories','reasons','game','scratch','ask','openwhen','letterpage','reply'];
let pi = 0;
PAGES.forEach(()=>{ const d=document.createElement('i'); d.className='nd'; $('ndots').appendChild(d); });
function setPage(i){

  // Stop Yes/No sound when leaving the Ask page
  stopAskSound();

  pi = Math.max(0,Math.min(PAGES.length-1,i));

  document.querySelectorAll('.page').forEach(x =>
    x.classList.toggle('active',x.id===PAGES[pi])
  );

  [...$('ndots').children].forEach((d,k) =>
    d.classList.toggle('on',k===pi)
  );

  $('back').style.visibility = pi===0 ? 'hidden' : 'visible';

  $('next').textContent =
    pi===PAGES.length-1 ? 'Start over 🔁' : 'Next ›';

  document.querySelector('main').scrollTo(0,0);

  if(PAGES[pi]==='scratch') initScratch();

  applyMusic();
}
function nextPage(){ setPage(pi===PAGES.length-1 ? 0 : pi+1); }
function prevPage(){ setPage(pi-1); }
setPage(0);

/* ---------- PARTY: candles -> cut -> feed ---------- */
let pst = 0, busy = false;
function pUI(){
  $('pbtn').textContent = ['ooodhu adhiii 💨','Cut the cake 🔪','suji kitta po😚','One more peice 🍰'][pst];
  $('prst').style.display = pst>=1 ? 'inline-block' : 'none';
  $('scene1').style.display = pst<3 ? 'block' : 'none';
  $('scene2').style.display = pst>=3 ? 'block' : 'none';
}
function pMsg(t){ $('pmsg').textContent = t; }
function pAct(){
  if(pst===0){ $('cake').classList.add('out'); burst(25); pst=1; pMsg(P_TEXT.wished); }
  else if(pst===1){ $('cake').classList.add('cut'); pst=2; pMsg(P_TEXT.cut); }
  else if(pst===2){ pst=3; pMsg(''); setTimeout(feed,500); }
  else feed();
  pUI();
}
function pReset(){
  $('cake').classList.remove('out','cut'); pst=0; busy=false; resetFood();
  $('b2').classList.remove('open','chew','blush'); pMsg(P_TEXT.blow); pUI();
}
function resetFood(){
  const f=$('food'); f.style.transition='none'; f.classList.remove('go','gone'); void f.offsetWidth; f.style.transition='';
}
function feed(){
  if(busy) return; busy=true; resetFood(); const b2=$('b2'), f=$('food');
  pMsg('Vaaya Thora dii... 😮');
  setTimeout(()=>{ b2.classList.add('open'); f.classList.add('go'); },200);
  setTimeout(()=>{
    f.classList.add('gone'); b2.classList.remove('open'); b2.classList.add('chew','blush');
    pMsg(P_TEXT.feed[Math.floor(rnd(0,P_TEXT.feed.length))]); burst(22);
  },1200);
  setTimeout(()=>{ b2.classList.remove('chew'); resetFood(); busy=false; },2400);
}
pMsg(P_TEXT.blow); pUI();


/* ---------- POLAROID STACK ---------- */
const stack = $('stack'), cards = [], order = [], TILT = [0,-5,4,-3,3];
MEMORIES.forEach((m,i)=>{
  const c = document.createElement('div'); c.className = 'pol';
  const p = document.createElement('div'); p.className = 'photo';
  if(m.photo){ const im = document.createElement('img'); im.src = m.photo; im.alt = ''; im.draggable = false; im.onerror = ()=>{p.textContent = m.emoji||'💚'}; p.appendChild(im); }
  else p.textContent = m.emoji || '💚';
  const cap = document.createElement('div'); cap.className = 'cap'; cap.textContent = m.msg;
  c.append(p,cap); stack.appendChild(c); cards.push(c); order.push(i);
});
function layout(){
  order.forEach((idx,p)=>{
    const c = cards[idx];
    c.style.zIndex = 100-p; c.style.opacity = p<3 ? 1 : 0;
    c.style.transform = `translate(${p*(p%2?7:-7)}px,${p*9}px) rotate(${TILT[p%5]}deg) scale(${1-p*.04})`;
  });
  $('mcount').textContent = `${order[0]+1} of ${MEMORIES.length}`;
}
function flip(dir){
  const c = cards[order[0]]; c.style.transition = '';
  c.style.transform = `translate(${dir*120}vw,20px) rotate(${dir*25}deg)`; c.style.opacity = 0;
  setTimeout(()=>{ order.push(order.shift()); layout(); }, 320);
}
let dx0 = null, dx = 0;
stack.addEventListener('pointerdown',e=>{ dx0 = e.clientX; dx = 0; stack.setPointerCapture(e.pointerId); cards[order[0]].style.transition = 'none'; });
stack.addEventListener('pointermove',e=>{
  if(dx0===null) return; dx = e.clientX - dx0;
  cards[order[0]].style.transform = `translate(${dx}px,0) rotate(${dx/14}deg)`;
});
stack.addEventListener('pointerup',()=>{
  if(dx0===null) return; const d = dx; dx0 = null;
  cards[order[0]].style.transition = '';
  if(Math.abs(d)>70) flip(d>0?1:-1);
  else if(Math.abs(d)<6) flip(1);   // simple tap
  else layout();
});
layout();

/* ---------- MUSIC (changes with the page) ---------- */
var unlocked=false, muted=false, cur=null, bus=null, trk=null, nextT=0, actx=null, curAud=null, auds={};
var TUNES = {};
(function(){
  // Happy Birthday (music box)
  const bd=[[392,.75],[392,.25],[440,1],[392,1],[523.25,1],[494,2],
            [392,.75],[392,.25],[440,1],[392,1],[587.33,1],[523.25,2],
            [392,.75],[392,.25],[784,1],[659.25,1],[523.25,1],[494,1],[440,1],
            [698.46,.75],[698.46,.25],[659.25,1],[523.25,1],[587.33,1],[523.25,2]];
  let b=0; const ev=[];
  bd.forEach(([f,d])=>{ ev.push([f,b,d,.16]); b+=d; });
  TUNES.birthday={ev,len:b+2,beat:.6,ring:.7};
  // Dreamy: slow arpeggios (C - G - Am - F) with a soft melody on top
  const ch=[[261.63,329.63,392,523.25],[196,246.94,293.66,392],[220,261.63,329.63,440],[174.61,220,261.63,349.23]];
  const d=[];
  ch.forEach((c,i)=>[0,1,2,3,2,1,2,3].forEach((k,j)=>d.push([c[k],i*4+j*.5,.5,.09])));
  [[0,2,659.25],[2,2,784],[4,3,587.33],[8,2,523.25],[10,2,659.25],[12,2,698.46],[14,2,659.25]]
    .forEach(([st,du,f])=>d.push([f,st,du,.12]));
  TUNES.dreamy={ev:d,len:16,beat:.7,ring:1.3};
})();
function note(f,t,du,v,ring){
  [[1,v],[2,v*.3]].forEach(([m,g])=>{
    const o=actx.createOscillator(), e=actx.createGain();
    o.type='sine'; o.frequency.value=f*m;
    e.gain.setValueAtTime(0,t); e.gain.linearRampToValueAtTime(g,t+.01);
    e.gain.exponentialRampToValueAtTime(.001,t+du+ring);
    o.connect(e); e.connect(bus); o.start(t); o.stop(t+du+ring+.1);
  });
}
function sched(){
  const T=TUNES[trk], t0=Math.max(nextT,actx.currentTime+.1);
  T.ev.forEach(([f,b,du,v])=>note(f,t0+b*T.beat,du*T.beat,v,T.ring));
  nextT=t0+T.len*T.beat;
}
setInterval(()=>{ if(bus && !muted && actx.currentTime>nextT-2) sched(); },400);
function stopCur(){
  if(bus){ const o=bus; o.gain.setTargetAtTime(0,actx.currentTime,.15); setTimeout(()=>o.disconnect(),1500); bus=null; }
  if(curAud){ curAud.pause(); curAud=null; }
}
function applyMusic(){
  if(!unlocked) return;
  const src=MUSIC[PAGES[pi]]||null;
  if(src!==cur){
    stopCur(); cur=src;
    if(src){
      if(TUNES[src]){ bus=actx.createGain(); bus.connect(actx.destination); trk=src; nextT=0; sched(); }
      else{
        curAud=auds[src]=auds[src]||Object.assign(new Audio(src),{loop:true,volume:.6});
        curAud.currentTime=0; if(!muted) curAud.play().catch(()=>{});
      }
    }
  }
  musicUI();
}
function musicUI(){
  const b=$('music');
  b.textContent = !unlocked ? '🎵' : muted ? '🔇' : '🔊';
  b.classList.toggle('on', unlocked && !muted && !!cur);
}
function unlock(){
  if(unlocked) return; unlocked=true;
  actx=new (window.AudioContext||window.webkitAudioContext)(); actx.resume();
  // iOS: let each audio file be "touched" during this first tap so it can play later on its own
  Object.values(MUSIC).filter(x=>!TUNES[x]).forEach(u=>{
    const a=auds[u]=auds[u]||Object.assign(new Audio(u),{loop:true,volume:.6});
    a.play().then(()=>a.pause()).catch(()=>{});
  });
  Object.entries(SOUNDS).forEach(([k,u])=>{
    if(!u) return; const a=sfxA[k]=sfxA[k]||new Audio(u);
    a.play().then(()=>a.pause()).catch(()=>{});
  });
  applyMusic();
}
function toggleMusic(){
  if(!unlocked){ unlock(); return; }
  muted=!muted;
  if(muted){ actx.suspend(); if(curAud) curAud.pause(); }
  else{ actx.resume(); if(curAud) curAud.play().catch(()=>{}); }
  musicUI();
}
// browsers block autoplay, so the music unlocks on his first tap (the Start button)
document.addEventListener('pointerdown',e=>{ if(!e.target.closest('#music')) unlock(); });
musicUI();

// ---------- CONTINUOUS BACKGROUND MUSIC ----------

let backgroundMusic = new Audio("audio/background.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.25;

// Start music after the user's first interaction
function startBackgroundMusic() {
  backgroundMusic.play().catch(() => {});
  
  document.removeEventListener("click", startBackgroundMusic);
  document.removeEventListener("touchstart", startBackgroundMusic);
}

document.addEventListener("click", startBackgroundMusic);
document.addEventListener("touchstart", startBackgroundMusic);

/* ---------- TOAST + SECRETS ---------- */
var tt, cyc = {}, tc = 0;
function toast(t){ const e=$('toast'); e.textContent=t; e.classList.add('show'); clearTimeout(tt); tt=setTimeout(()=>e.classList.remove('show'),2800); }
function pickE(k){ cyc[k]=(cyc[k]||0)+1; return EGGS[k][(cyc[k]-1)%EGGS[k].length]; }
[['b1','bear1'],['b2','bear2']].forEach(([id,k])=>{ $(id).classList.add('tap'); $(id).addEventListener('click',()=>{ toast(pickE(k)); burst(8); }); });
const hh = document.querySelector('#home .bigheart'); hh.classList.add('tap'); hh.addEventListener('click',()=>{ toast(pickE('heart')); burst(8); });
const ah = document.querySelector('#ask .bigheart'); ah.classList.add('tap'); ah.addEventListener('click',()=>toast(pickE('ask')));
$('title').addEventListener('click',()=>{ tc++; if(tc===5){ tc=0; toast(EGGS.title); burst(80); } });



/* ---------- 22 REASONS ---------- */
for(let i=REASONS.length;i<22;i++) REASONS.push("Reason #"+(i+1)+": write yours here 💚");
$('rtitle').textContent = REASONS.length+" reasons I love you 💚";
const seenR = new Set(); $('rcount').textContent = "0 of "+REASONS.length+" opened";
REASONS.forEach((t,i)=>{
  const b=document.createElement('button'); b.className='rt'; b.textContent=i+1;
  b.onclick=()=>{
    $('rtext').textContent=t; b.classList.add('seen'); seenR.add(i);
    $('rcount').textContent=seenR.size+" of "+REASONS.length+" opened";
    burst(seenR.size===REASONS.length ? 80 : 6);
  };
  $('rgrid').appendChild(b);
});

/* ---------- CATCH THE HEARTS ---------- */
var gScore=0, gOn=false, gTimer=null;
$('ghint').textContent = "Tap "+GOAL+" hearts before they escape";
function gUI(){ $('gscore').textContent = "💖 "+gScore+" / "+GOAL; }
function gStart(){
  gScore=0; gOn=true; gUI();
  $('garea').querySelectorAll('.gh').forEach(x=>x.remove());
  $('gwin').style.display='none'; $('gbtn').style.display='none';
  clearInterval(gTimer); gTimer=setInterval(spawn,650);
}
function spawn(){
  if(!gOn || PAGES[pi]!=='game') return;
  const a=$('garea'), h=document.createElement('span'); h.className='gh';
  h.textContent=['💚','💜','💖'][Math.floor(rnd(0,3))];
  h.style.left=rnd(4,Math.max(8,a.clientWidth-44))+'px'; h.style.animationDuration=rnd(2.6,4.2)+'s';
  h.addEventListener('pointerdown',()=>{
    if(h.classList.contains('pop')) return;
    h.style.animationPlayState='paused'; h.classList.add('pop'); setTimeout(()=>h.remove(),260);
    gScore++; gUI(); if(gScore>=GOAL) gWin();
  });
  h.addEventListener('animationend',()=>h.remove());
  a.appendChild(h);
}
function gWin(){
  gOn=false; clearInterval(gTimer);
  $('garea').querySelectorAll('.gh').forEach(x=>x.remove());
  $('gwintext').textContent=GAME_WIN; $('gwin').style.display='block';
  $('gbtn').textContent='Play again 🔁'; $('gbtn').style.display='inline-block'; burst(70);
}
gUI();

/* ---------- SCRATCH CARD ---------- */
var scInit=false, scDone=false;
$('scprize').textContent = SCRATCH_PRIZE;
function initScratch(){
  if(scInit) return; scInit=true;
  const box=$('scbox'), cv=$('sc'), w=box.clientWidth, h=box.clientHeight;
  cv.width=w; cv.height=h; const g=cv.getContext('2d');
  const gr=g.createLinearGradient(0,0,w,h); gr.addColorStop(0,'#b995ea'); gr.addColorStop(1,'#7fd8a0');
  g.fillStyle=gr; g.fillRect(0,0,w,h);
  g.fillStyle='rgba(255,255,255,.9)'; g.font="700 20px Quicksand,sans-serif"; g.textAlign='center'; g.fillText('Scratch here 💚',w/2,h/2+7);
  g.globalCompositeOperation='destination-out';
  let down=false, n=0;
  const move=e=>{
    if(!down||scDone) return;
    const r=cv.getBoundingClientRect(); g.beginPath(); g.arc(e.clientX-r.left,e.clientY-r.top,20,0,7); g.fill();
    if(++n%6) return;
    const d=g.getImageData(0,0,w,h).data; let c=0,t=0;
    for(let i=3;i<d.length;i+=64){ t++; if(d[i]===0) c++; }
    if(c/t>.5){ scDone=true; cv.style.transition='opacity .6s'; cv.style.opacity=0; burst(60); }
  };
  cv.addEventListener('pointerdown',e=>{ down=true; cv.setPointerCapture(e.pointerId); move(e); });
  cv.addEventListener('pointermove',move);
  cv.addEventListener('pointerup',()=>{ down=false; });
}

/* ---------- OPEN WHEN LETTERS ---------- */
OPEN_WHEN.forEach(o=>{
  const w=document.createElement('div'); w.className='card owitem';
  w.innerHTML='<button class="owbtn"><span class="oe">✉️</span><span class="ol"></span></button><div class="owtext"><div class="owpol"><div class="owph"></div></div><div class="owmsg"></div></div>';
  w.querySelector('.ol').textContent=o.label; w.querySelector('.owmsg').textContent=o.text;
  const ph=w.querySelector('.owph');
  if(o.photo){ const im=document.createElement('img'); im.src=o.photo; im.alt=''; im.onerror=()=>{ph.textContent=o.emoji||'💚'}; ph.appendChild(im); }
  else ph.textContent=o.emoji||'💚';
  w.querySelector('.owbtn').onclick=()=>{
    const was=w.classList.contains('open');
    document.querySelectorAll('.owitem').forEach(x=>{ x.classList.remove('open'); x.querySelector('.oe').textContent='✉️'; });
    if(!was){ w.classList.add('open'); w.querySelector('.oe').textContent='💌'; burst(12); }
  };
  $('owlist').appendChild(w);
});

/* ---------- SECRET LOCK ---------- */

var lk = '';
['1','2','3','4','5','6','7','8','9','','0','⌫'].forEach(k=>{
  if(!k){ $('keys').appendChild(document.createElement('div')); return; }
  const b=document.createElement('button'); b.className='key'; b.textContent=k; b.onclick=()=>lockKey(k); $('keys').appendChild(b);
});
function lockUI(){ [...$('ldots').children].forEach((d,i)=>d.classList.toggle('on',i<lk.length)); }
function lockKey(k){
  if($('lock').classList.contains('gone')) return;
  if(k==='⌫') lk=lk.slice(0,-1); else if(lk.length<LOCK_CODE.length) lk+=k;
  lockUI();
  if(lk.length===LOCK_CODE.length){
    if(lk===LOCK_CODE){
      $('lmsg').textContent='Unlocked 💚';
      setTimeout(()=>{ $('lock').classList.add('gone'); },350);
      setTimeout(()=>{ $('lock').style.display='none'; burst(50); },1000);
    } else {
      $('lockcard').classList.add('bad'); $('lmsg').textContent='Wrong code 🙈 '+LOCK_HINT;
      setTimeout(()=>{ $('lockcard').classList.remove('bad'); lk=''; lockUI(); },500);
    }
  }
}
document.addEventListener('keydown',e=>{
  if(/^\d$/.test(e.key)) lockKey(e.key); else if(e.key==='Backspace') lockKey('⌫');
});


/* ---------- REPLY TO ME (WhatsApp) ---------- */
REPLY_CHIPS.forEach(t=>{
  const c=document.createElement('button'); c.className='chip'; c.textContent=t;
  c.onclick=()=>{ $('rtxt').value=t; }; $('chips').appendChild(c);
});
function sendReply(){
  const t=$('rtxt').value.trim()||REPLY_CHIPS[0];
  const url='https://wa.me/'+REPLY_PHONE.replace(/\D/g,'')+'?text='+encodeURIComponent(REPLY_INTRO+t);
  burst(30); window.open(url,'_blank');
}

/* ---------- YES / NO SOUNDS ---------- */

var sfxA = {};

function playSfx(k){

  const file = SOUNDS[k];

  if(!file){
    console.log("No audio file set for:", k);
    return;
  }

  // Create audio only once
  if(!sfxA[k]){
    sfxA[k] = new Audio();
    sfxA[k].src = file;
    sfxA[k].preload = "auto";
  }

  const audio = sfxA[k];

  audio.pause();
  audio.currentTime = 0;

  audio.play()
    .then(()=>{
      console.log("Playing:", file);
    })
    .catch((error)=>{
      console.error("Audio failed:", file, error);
    });
}

function yesClick(){

  // Stop No audio
  if(sfxA.no){
    sfxA.no.pause();
    sfxA.no.currentTime = 0;
  }

  $('askres').textContent = ASK_YES;

  burst(60);

  playSfx('yes');

  clearTimeout(window.askMessageTimer);

  window.askMessageTimer = setTimeout(()=>{
    $('askres').textContent = '';
  },2500);
}


function noClick(){

  // Stop Yes audio
  if(sfxA.yes){
    sfxA.yes.pause();
    sfxA.yes.currentTime = 0;
  }

  // Play No audio
  playSfx('no');

  // Show message
  $('askres').textContent = "HEY! 😤💔 NO SOLLAVE KUDATHU!";

  clearTimeout(window.askMessageTimer);

  window.askMessageTimer = setTimeout(()=>{
    $('askres').textContent = '';
  },2500);
}

function stopAskSound(){

  // sfxA may not be initialized during first page load
  if(!sfxA) return;

  if(sfxA.yes){
    sfxA.yes.pause();
    sfxA.yes.currentTime = 0;
  }

  if(sfxA.no){
    sfxA.no.pause();
    sfxA.no.currentTime = 0;
  }
}



/* ---------- sealed love letter ---------- */
function openLetter(){
  $('env').style.display='none'; $('taphint').style.display='none';
  $('letter').classList.add('open'); burst(25);
}