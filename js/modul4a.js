{
    const welcome = () => {
        console.log("Hello!");
    }
    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton")
        changeBackgroundButton.addEventListener("click", toggleBackground);
    }
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".js-nextColorName");
        body.classList.toggle("body--dark");
        nextColorName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
    }
    welcome();
    init();



}
