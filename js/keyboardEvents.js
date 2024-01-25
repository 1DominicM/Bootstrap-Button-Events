// Row 2
//Keyboard Events

// Key Down
let inputOne = document.getElementById('inputOne');
inputOne.addEventListener('keydown', function(e){
    e.preventDefault()
    inputOne.value = e.code;
});

// Key up
let inputTwo = document.getElementById('inputTwo', function(e){
    e.preventDefault()
    inputTwo.value = e.code;
});

let inputThree = document.getElementById('inputThree');
    inputOne.addEventListener('keypress', function(){
    var randomHex = Math.floor(Math.random()*16777215).toString(16);
    inputThree.style.backgroundColor = '#' + randomHex;
});

let inputFour = document.getElementById('inputFour');
    inputFour.addEventListener('keydown', function(e){
    if (e.ctrlKey && e.altKey){
        console.log('both');
    }
});
