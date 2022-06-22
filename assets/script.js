//prevent right click
document.addEventListener("contextmenu", event => event.preventDefault());

//bg canvas
VANTA.WAVES({
    el: ".bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3a3ab3,
    waveSpeed: 0.50,
    zoom: 0.65
})

//links
document.getElementById("github").addEventListener("click", () => window.location.href = "https://github.com/HumitaFN")
document.getElementById("youtube").addEventListener("click", () => window.location.href = "https://www.youtube.com/channel/UCM8BajvghRokd36mESQQ-FQ")
document.getElementById("discord").addEventListener("click", () => window.location.href = "https://discord.gg/cygU8CAx86")
document.getElementById("twitch").addEventListener("click", () => window.location.href = "https://www.twitch.tv/fnhumita")
document.getElementById("twitter").addEventListener("click", () => window.location.href = "https://twitter.com/Hum1ta")

//img automation
document.querySelectorAll("img").forEach(e => {
    e.src = `assets/logos/${e.id}.png`
    e.alt = e.id
    e.addEventListener("mouseover", () => e.style.filter = "invert(0)")
    e.addEventListener("mouseout", () => e.style.filter = "invert(1)")
})
