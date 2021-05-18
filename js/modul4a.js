console.log("Hello!");
{
let nextColorName = document.querySelector(".js-nextColorName");
let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    if (body.classList.contains("body--dark")) {
        nextColorName.innerText = "jasne";
    } else {
        nextColorName.innerText = "ciemne";
    }
})
}
