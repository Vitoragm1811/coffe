
const buttonTop = document.querySelector("#back-to-top");
    buttonTop.addEventListener("click",()=>{
        window.scrollTo(0,0);
    })



const menu = document.querySelectorAll('.bar-link');
function removeActive() {
    menu.forEach(function (link) {
        const classLink = link.classList;
        classLink.remove('active');
         

        
    });
}
menu.forEach(function (link) {
    link.addEventListener('click', function (event) {
        removeActive();
        event.target.classList.add('active');
    });
});