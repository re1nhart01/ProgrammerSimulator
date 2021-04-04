let playerobj = localStorage.getItem('player');
let playerobjnotjson = JSON.parse(playerobj);
console.log(playerobjnotjson);

/*---------------------------------------------------*/
function start() {
 let video = document.querySelector(".video").addEventListener('ended', () => {
  let video_bg = document.querySelector('.video-bg');
  let button1 = document.createElement('button');
  let button2 = document.createElement('button');
  let p = document.createElement('p');
  button1.innerHTML = 'Идти в ПГК'
  button2.innerHTML = 'Спать'
  p.innerHTML = playerobjnotjson.name + ', вы проснулись'
  button1.classList.add('button1');
  button2.classList.add('button2');
  p.classList.add('p')
  video_bg.append(p, button1, button2);




  button1 = document.querySelector('.button1').addEventListener('click', () => {
   let button54 = document.querySelector('.button1');
   let button27 = document.querySelector('.button2');
   let interval = setInterval(() => {


    if (video.style.opacity >= 0) {
video.style.opacity -= 0.1
    } else {
     p.remove();
     button54.remove();
     button27.remove();
     clearInterval(interval);
    }
   },500);
   let video = document.querySelector(".video");
   video.src = 'videos/dver.mp4';
   let interval2 = setInterval(() => {
    if (video.style.opacity <= 1.1) {
     video.style.opacity += 0.1;
    } else {
     p.remove();
     button54.remove();
     button27.remove();
     clearInterval(interval2);
    }
   }, 500);
  setTimeout(() => {
   video.src = 'videos/oleg_logitsa.mp4'
   setTimeout(() => {
    confirm('Дверь заперта');
   },500);



   video.src = 'videos/oleg_logitsa.mp4'
   setTimeout(() => {
    video.pause();
   },4000)
   let mainterval2 = setInterval(() => {
    if (video.style.opacity <= 1.1) {
     video.style.opacity += 0;

    } else {
     clearInterval(mainterval2);
    }
   }, 500)
  },800)
   setTimeout(() => {
    video.pause();
    video.src = 'videos/oleg_logitsa.mp4'
   },700)


   setTimeout(() => {
    window.location.href = 'MainMenu.html'
   },2000)


  });


  button2 = document.querySelector('.button2').addEventListener('click', () => {
   let video = document.querySelector(".video");
   let mainterval = setInterval(() => {
    let button54 = document.querySelector('.button1');
    let button27 = document.querySelector('.button2');
    let p54 = document.querySelector('.p');

    console.log('qwdqdqw');
    if (video.style.opacity >= 0) {
     video.style.opacity -= 0.1;
     button54.style.opacity -= 0.1;
     button27.style.opacity -= 0.1;
     p54.style.opacity -= 0.1;
    } else {
     clearInterval(mainterval);
     p54.remove();
     button54.remove();
     button27.remove();
    }
   }, 500);
   video.src = 'videos/oleg_logitsa.mp4'
   setTimeout(() => {
    video.pause();
   },4000)
   let mainterval2 = setInterval(() => {
    if (video.style.opacity <= 1.1) {
     video.style.opacity += 0;

    } else {
     clearInterval(mainterval2);
    }
   }, 500)
   playerobjnotjson.happiness += 10;
   if (playerobjnotjson.happiness >= 100) {
    playerobjnotjson.happiness = 100;
   }
   hapiness.innerHTML = "Счастье: " + playerobjnotjson.happiness;
    let jsoned = JSON.stringify(playerobjnotjson);
   localStorage.setItem('player', jsoned);
   console.log(localStorage);

   setTimeout(() => {
    window.location.href = 'MainMenu.html'
   },2000)
  });

 });
};



 /*---------------------------------------------------*/
 let day = document.querySelector(".day");
 let hp = document.querySelector(".hp");
 let iq = document.querySelector(".iq");
 let hapiness = document.querySelector(".hapiness");
 let food = document.querySelector(".food");

 window.onload = () => {
  day.innerHTML = "День: " + playerobjnotjson.day;
  hp.innerHTML = "HP: " + playerobjnotjson.HP;
  iq.innerHTML = "IQ: " + playerobjnotjson.IQ;
  hapiness.innerHTML = "Счастье: " + playerobjnotjson.happiness;
  food.innerHTML = "Еда: " + playerobjnotjson.food;
  start();
 }





