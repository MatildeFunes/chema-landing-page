// SCROLL SUAVE HERO AL CONTENIDO

const btnHero = document.querySelector('.btn-hero');

if (btnHero) {
    btnHero.addEventListener('click', () => {
    const target = document.querySelector('#contenido');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
});
}

//Para que los videos se reproduzcan uno por uno
    const videos = document.querySelectorAll(".feria-video");
    let currentVideo = 0;

// Reproduce el primer video
    videos[currentVideo].play();

    videos.forEach((video, index) => {
    video.addEventListener("ended", () => {
        video.classList.remove("active");

        currentVideo = (index + 1) % videos.length;

        videos[currentVideo].classList.add("active");
        videos[currentVideo].play();
    });
});





