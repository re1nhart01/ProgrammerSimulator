

window.onload = () => {
    let video = document.querySelector(".video")
    let videosrc = document.querySelector(".videosrc");
    let random = Math.floor(Math.random() * 5) + 2;
    console.log(random);
    let ArrayOfVideos = "./../videos/fun/" + random +  ".mp4"
    videosrc.src = String(ArrayOfVideos);
    video.src = String(ArrayOfVideos);

    let json =  localStorage.getItem('player')
    let playa = JSON.parse(json);
    playa.happiness += 10;
    playa.IQ -= 10;
    playa.food -= 10;
    if (playa.happiness >= 100) {
        playa.happiness = 100;
    }
    console.log(playa);
    localStorage.setItem('player', JSON.stringify(playa));
}



let video = document.querySelector(".video").addEventListener('ended', () => {
    let video_bg = document.querySelector('.video-bg');
    window.location.href = './../MainMenu.html'


});