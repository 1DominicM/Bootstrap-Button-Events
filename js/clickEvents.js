// let btnOne = document.getElementById('click');
// btnOne.addEventListener("click", function(e) {
//     event.target.style.background = "#a0b96b";
// });

let btnTwo = document.getElementById('rightClick');
btnTwo.addEventListener('contextmenu' , function(e){
    e.target.style.background = "#a0b96b";
});

let btnThree = document.getElementById('mousePointer');
btnThree.addEventListener('mouseenter' , function(ev){
    ev.target.style.background = "#69fffc";
});