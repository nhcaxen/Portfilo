// Smooth reveal animation

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// Right menu hover glow

const links = document.querySelectorAll(".right-menu a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.textShadow = "0 0 15px #008cff";
    });

    link.addEventListener("mouseleave", () => {
        link.style.textShadow = "none";
    });
});


// Character floating effect

const character = document.querySelector(".character");

let position = 0;
let direction = 1;

setInterval(() => {
    position += direction * 0.5;

    if (position > 10) direction = -1;
    if (position < -10) direction = 1;

    character.style.transform =
        `translateX(-50%) translateY(${position}px)`;
}, 30);
