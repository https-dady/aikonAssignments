lucide.createIcons()

const toggle = document.getElementById("menuToggle")
const menu = document.getElementById("navMenu")
const overlay = document.getElementById("menuOverlay")

toggle.onclick = () => {
menu.classList.toggle("show")
toggle.classList.toggle("active")
overlay.classList.toggle("show")
}

function closeMenu(){
menu.classList.remove("show")
toggle.classList.remove("active")
overlay.classList.remove("show")
}

document.querySelectorAll("#navMenu a").forEach(link=>{
link.addEventListener("click",closeMenu)
})

overlay.onclick = closeMenu