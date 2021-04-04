
window.onload = () => {
    let video = document.querySelector(".video")
    let videosrc = document.querySelector(".videosrc");
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    let ArrayOfVideos = "./../videos/food/" + random +  ".mp4"
    videosrc.src = String(ArrayOfVideos);
    video.src = String(ArrayOfVideos);

 let json =  localStorage.getItem('player')
    let playa = JSON.parse(json);
playa.food += 10;
if (playa.food >= 100) {
    playa.food = 100;
}
    console.log(playa);

localStorage.setItem('player', JSON.stringify(playa));
}



let video = document.querySelector(".video").addEventListener('ended', () => {
    let video_bg = document.querySelector('.video-bg');
window.location.href = './../MainMenu.html'


});