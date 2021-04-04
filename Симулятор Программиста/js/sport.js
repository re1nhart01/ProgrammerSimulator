



window.onload = () => {
    let video = document.querySelector(".video")
    let videosrc = document.querySelector(".videosrc");
    let random = Math.floor(Math.random() * 1) + 1;
    console.log(random);
    let ArrayOfVideos = "./../videos/sport/" + random +  ".mp4"
    videosrc.src = String(ArrayOfVideos);
    video.src = String(ArrayOfVideos);

    let json =  localStorage.getItem('player')
    let playa = JSON.parse(json);
    playa.HP += 10;
    playa.food -= 15;
    if (playa.HP >= 100) {
        playa.HP = 100;
    }
    console.log(playa);
    localStorage.setItem('player', JSON.stringify(playa));
}



let video = document.querySelector(".video").addEventListener('ended', () => {
    let video_bg = document.querySelector('.video-bg');
    window.location.href = './../MainMenu.html'


});