const browse = document.getElementById("browse");

browse.addEventListener('click',function(e){
    console.log(e);
    const collapseItem = document.getElementById('collapseItem');
    collapseItem.classList.toggle('collapsed');
    const main = document.getElementById("main");
    main.classList.toggle("collapsedMain");
});

function adjustPageSize() {
    var width = window.innerWidth;

    if (width >= 992 && width <= 1600) {
        document.body.style.transform = "scale(0.9)"; 
        document.body.style.transformOrigin = "top left";
    } 
    else if (width >= 700 && width <= 767) {
        document.body.style.transform = "scale(0.8)"; 
        document.body.style.transformOrigin = "top left";
    } 
    else if (width >= 600 && width < 700) {
        document.body.style.transform = "scale(0.75)"; 
        document.body.style.transformOrigin = "top left"; 
    } 
    else if (width <= 600) {
        document.body.style.transform = "scale(0.5)"; 
        document.body.style.transformOrigin = "top left"; 
    }
}
window.addEventListener('resize', adjustPageSize);

window.onload = adjustPageSize;
