/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 600);

    }, 1800);
});


/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const text = "Happy Anniversary ❤️";

const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,120);

    }

}

typeWriter();


/* ==========================================
   LOVE LETTER
========================================== */

const modal = document.getElementById("letterModal");

const openBtn = document.getElementById("openLetter");

const closeBtn = document.getElementById("close");

openBtn.onclick = ()=>{

    modal.style.display="flex";

    createConfetti();
    firework();

}

closeBtn.onclick = ()=>{

    modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

}


/* ==========================================
   GIFT BOX
========================================== */

const gift=document.getElementById("giftBox");

const giftText=document.getElementById("giftText");

gift.onclick=()=>{

gift.style.transform="scale(1.3) rotate(20deg)";

giftText.style.display="block";

createConfetti();

}


/* ==========================================
   MUSIC
========================================== */

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸️";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

}


/* ==========================================
   LOVE COUNTER
========================================== */

// tanggal jadian

const startDate=new Date("2026-06-26T00:00:00");

function updateCounter(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor(
(diff%(1000*60*60*24))/(1000*60*60)
);

const minutes=Math.floor(
(diff%(1000*60*60))/(1000*60)
);

const seconds=Math.floor(
(diff%(1000*60))/1000
);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

updateCounter();

setInterval(updateCounter,1000);


/* ==========================================
   FLOATING HEARTS
========================================== */

const container=document.getElementById("heart-container");

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.opacity=Math.random();

heart.style.animation="floatHeart "+(5+Math.random()*5)+"s linear";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,300);


/* ==========================================
   FLOAT HEART ANIMATION
========================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:translateY(0) rotate(0deg);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);


/* ==========================================
   CURSOR HEART TRAIL
========================================== */

document.addEventListener("mousemove",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="💕";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize="18px";

heart.style.zIndex="99999";

heart.style.transition="1s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-50px) scale(2)";

heart.style.opacity="0";

},10);

setTimeout(()=>{

heart.remove();

},1000);

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(
".timeline-item,.gallery img,.gift,.counter-section"
).forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(60px)";

el.style.transition="1s";

observer.observe(el);

});


/* ==========================================
   SIMPLE CONFETTI
========================================== */

function createConfetti(){

for(let i=0;i<80;i++){

const conf=document.createElement("div");

conf.innerHTML=["❤️","💖","💕","💗","✨"][Math.floor(Math.random()*5)];

conf.style.position="fixed";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-20px";

conf.style.fontSize=(15+Math.random()*20)+"px";

conf.style.zIndex="9999";

conf.style.transition="4s linear";

document.body.appendChild(conf);

setTimeout(()=>{

conf.style.transform=
`translateY(${window.innerHeight+200}px)
rotate(${Math.random()*720}deg)`;

},20);

setTimeout(()=>{

conf.remove();

},4500);

}

}


/* ==========================================
   AUTO CONFETTI
========================================== */

setTimeout(()=>{

createConfetti();

},2500);


/* ==========================================
   GALLERY AUTO ZOOM
========================================== */

const images=document.querySelectorAll(".gallery img");

let active=0;

setInterval(()=>{

images.forEach(img=>{

img.style.transform="scale(1)";

img.style.filter="brightness(1)";

});

images[active].style.transform="scale(1.08)";

images[active].style.filter="brightness(1.1)";

active++;

if(active>=images.length){

active=0;

}

},2500);


/* ==========================================
   HERO PARALLAX
========================================== */

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=window.scrollY*0.4+"px";

});


/* ==========================================
   RANDOM LOVE MESSAGE
========================================== */

const messages=[

"❤️ Aku sayang kamu",

"💕 Terima kasih sudah hadir",

"💖 Kamu rumahku",

"🥰 Semoga kita selamanya",

"🌹 Happy Anniversary"

];

setInterval(()=>{

const msg=document.createElement("div");

msg.innerHTML=
messages[Math.floor(Math.random()*messages.length)];

msg.style.position="fixed";

msg.style.left=(20+Math.random()*60)+"vw";

msg.style.bottom="20px";

msg.style.padding="10px 20px";

msg.style.background="white";

msg.style.borderRadius="50px";

msg.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";

msg.style.zIndex="999";

msg.style.transition="4s";

document.body.appendChild(msg);

setTimeout(()=>{

msg.style.bottom="250px";

msg.style.opacity="0";

},100);

setTimeout(()=>{

msg.remove();

},4000);

},10000);

/* ======================================
LOVE METER
======================================*/

setTimeout(()=>{

document.getElementById("loveFill").style.width="100%";

},1500);


/* ======================================
STARS
======================================*/

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.innerHTML="✦";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*2+"s";

star.style.fontSize=(8+Math.random()*10)+"px";

stars.appendChild(star);

}


/* ======================================
SAKURA
======================================*/

const sakuraContainer=document.getElementById("sakura-container");

function createSakura(){

const sakura=document.createElement("div");

sakura.className="sakura";

sakura.innerHTML="🌸";

sakura.style.left=Math.random()*100+"vw";

sakura.style.fontSize=(16+Math.random()*18)+"px";

sakura.style.animationDuration=(6+Math.random()*5)+"s";

sakuraContainer.appendChild(sakura);

setTimeout(()=>{

sakura.remove();

},11000);

}

setInterval(createSakura,350);


/* ======================================
CLOUDS
======================================*/

const cloudBox=document.getElementById("clouds");

for(let i=0;i<6;i++){

const cloud=document.createElement("div");

cloud.className="cloud";

cloud.innerHTML="☁️";

cloud.style.top=(5+i*12)+"%";

cloud.style.animationDuration=(35+Math.random()*20)+"s";

cloud.style.animationDelay=(Math.random()*10)+"s";

cloudBox.appendChild(cloud);

}


/* ======================================
TIMELINE ANIMATION
======================================*/

const timelineItems=document.querySelectorAll(".timeline-item");

const timelineObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.transform="translateX(0)";

entry.target.style.opacity="1";

}

});

});

timelineItems.forEach((item,index)=>{

item.style.opacity="0";

item.style.transition="1s";

item.style.transform=index%2===0
?"translateX(-120px)"
:"translateX(120px)";

timelineObserver.observe(item);

});
/* =====================================
PASSWORD
===================================== */

const enterBtn=document.getElementById("enterWebsite");

enterBtn.onclick=()=>{

const pass=document
.getElementById("passwordInput")
.value;

if(pass==="26062026"){

document.getElementById("passwordScreen")
.style.display="none";

createConfetti();

}else{

document.getElementById("wrongPassword")
.innerHTML="Tanggalnya masih salah ❤️";

}

}


/* =====================================
COUNTDOWN NEXT ANNIVERSARY
===================================== */

const nextAnniversary=new Date("2027-06-26T00:00:00");

function anniversaryCountdown(){

const now=new Date();

const diff=nextAnniversary-now;

const day=Math.floor(diff/(1000*60*60*24));

const hour=Math.floor(
(diff%(1000*60*60*24))/(1000*60*60)
);

const minute=Math.floor(
(diff%(1000*60*60))/(1000*60)
);

const second=Math.floor(
(diff%(1000*60))/1000
);

document.getElementById("nextDay").innerHTML=day;
document.getElementById("nextHour").innerHTML=hour;
document.getElementById("nextMinute").innerHTML=minute;
document.getElementById("nextSecond").innerHTML=second;

}

anniversaryCountdown();

setInterval(anniversaryCountdown,1000);
/* =====================================
FIREWORKS
===================================== */

function firework(){

for(let i=0;i<120;i++){

const dot=document.createElement("div");

dot.style.position="fixed";

dot.style.left="50%";

dot.style.top="50%";

dot.style.width="8px";

dot.style.height="8px";

dot.style.borderRadius="50%";

dot.style.background=
`hsl(${Math.random()*360},100%,60%)`;

dot.style.pointerEvents="none";

dot.style.zIndex="99999";

document.body.appendChild(dot);

const angle=Math.random()*360;

const distance=150+Math.random()*250;

const x=Math.cos(angle*Math.PI/180)*distance;

const y=Math.sin(angle*Math.PI/180)*distance;

dot.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:`translate(${x}px,${y}px)`,

opacity:0

}

],{

duration:1800

});

setTimeout(()=>{

dot.remove();

},1800);

}

}
/* =====================================
ROSE RAIN
===================================== */

function roseRain(){

const rose=document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="fixed";

rose.style.left=Math.random()*100+"vw";

rose.style.top="-50px";

rose.style.fontSize=(20+Math.random()*20)+"px";

rose.style.transition="8s linear";

rose.style.pointerEvents="none";

document.body.appendChild(rose);

setTimeout(()=>{

rose.style.transform=
`translateY(${window.innerHeight+100}px)
rotate(${Math.random()*720}deg)`;

},50);

setTimeout(()=>{

rose.remove();

},8500);

}

setInterval(()=>{

if(playing){

roseRain();

}

},400);
/* ======================================
BOOK
====================================== */

const pages=document.querySelectorAll(".page");

let currentPage=0;

document.getElementById("nextPage").onclick=()=>{

pages[currentPage].classList.remove("active");

currentPage++;

if(currentPage>=pages.length){

currentPage=0;

}

pages[currentPage].classList.add("active");

}


/* ======================================
GAME
====================================== */

const game=document.getElementById("gameArea");

let score=0;

function createGameHeart(){

const heart=document.createElement("div");

heart.className="heartGame";

heart.innerHTML="❤️";

heart.style.left=Math.random()*90+"%";

heart.style.top=Math.random()*85+"%";

game.appendChild(heart);

heart.onclick=()=>{

score++;

document.getElementById("score").innerHTML=
"Score : "+score;

heart.remove();

createGameHeart();

}

}

for(let i=0;i<6;i++){

createGameHeart();

}