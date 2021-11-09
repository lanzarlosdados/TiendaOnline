var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click',function(){
    nav.classList.toggle("mostrar");
});

var btnStar = document.querySelectorAll('.star');

btnStar.forEach(btn =>{
    btn.addEventListener('click',function(){
        btn.classList.toggle('pintar');
    })
})