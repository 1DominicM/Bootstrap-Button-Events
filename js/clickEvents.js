 let btnOne = document.getElementById('click');
 btnOne.addEventListener("click", function(event) {
     event.target.style.background = "#a0b96b";
});

let btnTwo = document.getElementById('rightClick');
btnTwo.addEventListener('contextmenu' , function(e){
    e.target.style.background = "purple";
});

let btnThree = document.getElementById('mousePointer');
btnThree.addEventListener('mouseenter' , function(ev){
    ev.target.style.background = "#69fffc";
});

let btnFour = document.getElementById('doubleClick');
btnFour.addEventListener('dblclick' , function(eve){
    eve.target.style.background = "blue";
});