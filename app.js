
function roll() {
    const rng1 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice1").setAttribute("src", rng1 + ".png");
    const rng2 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice2").setAttribute("src", rng2 + ".png");
    const rng3 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice3").setAttribute("src", rng3 + ".png");
    const rng4 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice4").setAttribute("src", rng4 + ".png");
    const rng5 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dice5").setAttribute("src", rng5 + ".png");
}
function selectDice() {
    document.getElementById("dice1").innerhtml = 'pede';
}



function changeColor(color){
    document.getElementById("diceid1").style.background = color;
}

function changeColor(color){
    document.getElementById("diceid2").style.background = color;
}

function changeColor(color){
    document.getElementById("diceid3").style.background = color;
}

function changeColor(color){
    document.getElementById("diceid4").style.background = color;
}

function changeColor(color){
    document.getElementById("diceid5").style.background = color;
}
