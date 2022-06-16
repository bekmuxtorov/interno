let menuImgJs = document.querySelector('.menu-img'),
    menuItemsJs = document.querySelector(".menu-items")

menuItemsJs.style.display = "none";

function menu() {
    if (menuItemsJs.style.display =="none") {
        menuItemsJs.style.display = "block"
    }
    else{
        menuItemsJs.style.display = "none"
    }
}

const blogItems = document.querySelectorAll(".blog-item");

function  joylash() {
    for(let i = 0; i <= blogItems.length; i++) {
        if((i+1)%3 != 0){
            blogItems[i].style.margin = "0 20px 0 0"
        }
    }
}
// joylash()






    




