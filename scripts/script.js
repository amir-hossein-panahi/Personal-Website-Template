// PROJECT



let mini_menu = document.querySelector(".mini-menu");
let header_menu = document.querySelector(".header-menu");
let icons = document.querySelector(".icons");
let close_btn = document.querySelector(".close-icon");
let new_icon = document.querySelector(".new-icon");


mini_menu.addEventListener("click",function(){
    if(this.classList.contains("mini-menu")) {
        header_menu.style.left = 0;
        icons.style.left = 0;
    }}
);


close_btn.addEventListener("click",function(){
    if (this.classList.contains("close-icon")) {
        header_menu.style.left = "-160px";
        icons.style.left = "-160px";
    }}
);


new_icon.addEventListener("click",function(){
    if (this.classList.contains("new-icon")) {
        icons.style.left = "-160px";
    }}
);