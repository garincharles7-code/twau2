const first = document.querySelector(".first-sec");
const second = document.querySelector(".second-sec");
const bgVideo = document.querySelector(".bg-video");
const trailer = document.querySelector(".intro-video");
const container = document.querySelector(".conContainer");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    
    const trailerBottom = trailer.offsetTop + trailer.offsetHeight - 800;
    const containerTop = second.offsetTop - 800;
    const secondphar = containerTop - 100;
    

    first.style.opacity = Math.max(0, 1 - scroll / 1200);

    const fadeIn = Math.max(
        0,
        Math.min(1, (scroll - trailerBottom) / 1000)
    );

    const fadeOut = Math.max(
        0,
        Math.min(1, (scroll - containerTop) / 1000)
    );

    bgVideo.style.opacity = fadeIn * (1 - fadeOut);
    
    
    second.style.opacity = Math.max(
        0,
        Math.min(1, (scroll - secondphar) / 1000)
    );  
});

window.dispatchEvent(new Event("scroll"));
