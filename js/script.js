// typing animation
var typed = new Typed(".typing", {
    strings: ["","UI Developer", "Web Developer", "YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
document.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

// aside
// const nav = document.querySelector(".nav"),
// navlist = nav.querySelectorAll("li"),
// totalnavlist = navlist.length,
// allSection = document.querySelectorAll(".section"),
// totalSection = allSection.length;
// for (let i = 0; i < totalnavlist; i++) {
//     const a = navlist[i].querySelector("a");
//     a.addEventListener("click", function() {
//         for (let j = 0; j < totalnavlist; j++) {
//             navlist[j].querySelector("a").classList.remove("active");
//         }
//         this.classList.add("active");
//         showSection(this);
//     })
// }
// function showSection(element) {
//     for (let i = 0; i < totalSection; i++) {
//         allSection[i].classList.remove("active");
        
//     }
//     const target = element.getAttribute("href").split("#")[1];
//     document.querySelector("#"+target).classList.add("active");
// }

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i<totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}