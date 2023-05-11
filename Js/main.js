
navbar = document.getElementById('navbar')
second = document.getElementById('second')
secondOffset = $(second).offset().top



window.addEventListener('scroll',()=>{
    if ($(window).scrollTop() >= secondOffset){
        $(navbar).css('cssText', 'background-color:black !important')
    }
    else{
        $(navbar).css('cssText', 'background-color:transparent !important')
    }
})

