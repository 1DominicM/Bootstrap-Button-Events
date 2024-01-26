// Row 2
//Keyboard Events

// Key Down
let inputOne = document.getElementById('inputOne');
inputOne.addEventListener('keydown', function(eventtttt){
    eventtttt.preventDefault()
    eventtttt.target.style.background = "red";
});

// Key up
let inputTwo = document.getElementById('inputTwo');
inputTwo.addEventListener('keyup', function(eventttt){
    eventttt.preventDefault()
    eventttt.target.style.background = "green";
});

// Key Press
let inputThree = document.getElementById('inputThree');
inputThree.addEventListener('keypress', function(eventtt){
    eventtt.preventDefault()
    eventtt.target.style.background = "purple";
});

// Alt Key
let inputFour = document.getElementById('inputFour');
inputFour.addEventListener('keydown', function(eventt){
    if(eventt.shiftKey)
    eventt.target.style.background = "blue";
});