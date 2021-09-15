function rng() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("dice").innerHTML = x;
}