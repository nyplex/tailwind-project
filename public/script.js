const burger = document.getElementById("burger")
const menu = document.getElementById("menu")

burger.addEventListener("click", (e) => {
    if(menu.classList.contains("hidden")) {
        menu.classList.remove("hidden")
    }else{
        menu.classList.add("hidden")
    }
})