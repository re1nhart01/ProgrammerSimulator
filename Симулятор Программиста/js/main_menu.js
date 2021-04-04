let playerobj = localStorage.getItem('player');
let playerobjnotjson = JSON.parse(playerobj);
console.log(playerobjnotjson);





let video = document.querySelector(".video").addEventListener('ended', () => {
    let video_bg = document.querySelector('.video-bg');
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    let button3 = document.createElement('button');
    let button4 = document.createElement('button');
    let p = document.createElement('p');
    let video = document.querySelector('.video');
    button1.innerHTML = 'Учеба'
    button2.innerHTML = 'Развлечения'
    button3.innerHTML = 'Еда'
    button4.innerHTML = 'Спорт'
    p.innerHTML = 'Ваши действия'
    button1.classList.add('button1');
    button2.classList.add('button2');
    button3.classList.add('button3');
    button4.classList.add('button4');
    button1.classList.add('btn1');
    button2.classList.add('btn2');
    p.classList.add('p');
    p.classList.add('pl');
    video_bg.append(p, button1, button2, button3, button4);
    let video1 = document.querySelector('.video');

    button1.addEventListener('click', () => {
        playerobjnotjson.Actions++;
        localStorage.setItem('player', JSON.stringify(playerobjnotjson));
        window.location.href = 'Actions/study.html'
        setTimeout(() => {

        }, 1000)
    })
    button2.addEventListener('click', () => {
        playerobjnotjson.Actions++;
        localStorage.setItem('player', JSON.stringify(playerobjnotjson));
        setTimeout(() => {
            window.location.href = 'Actions/fun.html'
        }, 1000)
    })
    button3.addEventListener('click', () => {
        playerobjnotjson.Actions++;
        localStorage.setItem('player', JSON.stringify(playerobjnotjson));
        setTimeout(() => {
            window.location.href = 'Actions/food.html'
        }, 1000)
    })
    button4.addEventListener('click', () => {
        playerobjnotjson.Actions++;
        localStorage.setItem('player', JSON.stringify(playerobjnotjson));
        setTimeout(() => {
            window.location.href = 'Actions/sport.html'
        }, 1000)
    })
    day.innerHTML = "День: " + playerobjnotjson.day;
    hp.innerHTML = "HP: " + playerobjnotjson.HP;
    iq.innerHTML = "IQ: " + playerobjnotjson.IQ;
    hapiness.innerHTML = "Счастье: " + playerobjnotjson.happiness;
    food.innerHTML = "Еда: " + playerobjnotjson.food;
});




let day = document.querySelector(".day");
let hp = document.querySelector(".hp");
let iq = document.querySelector(".iq");
let hapiness = document.querySelector(".hapiness");
let food = document.querySelector(".food");





window.onload = () => {
    if(playerobjnotjson.Actions >= playerobjnotjson.MaxActions ) {
        let video = document.querySelector('.video');
        playerobjnotjson.day++;
        playerobjnotjson.Actions = 0;
         localStorage.setItem('player', JSON.stringify(playerobjnotjson));
    }

if(playerobjnotjson.day == 8) {
    let audio = document.querySelector(".audio");
    audio.play();
}


    if (playerobjnotjson.day == 8) {
alert(playerobjnotjson.name +  ' ,для вас начался судьбоносный день');
window.location.href = 'Actions/day8.html'
    }


    let video = document.querySelector('.video');
    console.log(video.duration)
    video.src = "videos/oleg_selzapc.mp4"
    day.innerHTML = "День: " + playerobjnotjson.day;
    hp.innerHTML = "HP: " + playerobjnotjson.HP;
    iq.innerHTML = "IQ: " + playerobjnotjson.IQ;
    hapiness.innerHTML = "Счастье: " + playerobjnotjson.happiness;
    food.innerHTML = "Еда: " + playerobjnotjson.food;
    if (playerobjnotjson.HP <= 0) {
        alert('Вы проиграли');
        document.location.href = 'GameMenu.html'
    }
    if (playerobjnotjson.IQ <= 0) {
        playerobjnotjson.HP -= 10;
        playerobjnotjson.IQ = 0;
    }
    if (playerobjnotjson.happiness <= 0) {
        playerobjnotjson.HP -= 10;
        playerobjnotjson.happiness = 0;
    }
    if (playerobjnotjson.food <= 0) {
        playerobjnotjson.HP -= 10;
        playerobjnotjson.food = 0;
    }


    let x;

    let random = Math.floor(Math.random() * 4)
    console.log(random);
    if (random == 0) {
        let eventrnd = Math.floor(Math.random() * 2)
        console.log(eventrnd);
        if (eventrnd == 0) {
            let a = 1;
            if (a == 1) {
                x = 7800;
            }
            let ArrayOfVideos = "videos/events/positive/" + a + ".mp4"
            video.src = String(ArrayOfVideos);
            setTimeout(() => {
                video.pause();
                video.src = "videos/oleg_selzapc.mp4"
                playerobjnotjson.happiness += 20;
                playerobjnotjson.food += 20;
                localStorage.setItem('player', JSON.stringify(playerobjnotjson));
                console.log(playerobjnotjson);
            }, x)



        } else {
            ///
            if (eventrnd == 1) {
                x = 2800;
            } else if (eventrnd == 2) {
                x = 2800;
            }
            ///
            let ArrayOfVideos = "videos/events/negative/" + eventrnd + ".mp4"
            video.src = String(ArrayOfVideos);
            setTimeout(() => {
                video.pause();
                video.src = "videos/oleg_selzapc.mp4"
                playerobjnotjson.HP -= 15;
               hp -=15;
                localStorage.setItem('player', JSON.stringify(playerobjnotjson));
                console.log(playerobjnotjson);
            }, x);

            day.innerHTML = "День: " + playerobjnotjson.day;
            hp.innerHTML = "HP: " + playerobjnotjson.HP;
            iq.innerHTML = "IQ: " + playerobjnotjson.IQ;
            hapiness.innerHTML = "Счастье: " + playerobjnotjson.happiness;
            food.innerHTML = "Еда: " + playerobjnotjson.food;

        }
    }


    localStorage.setItem('player', JSON.stringify(playerobjnotjson));


}




