var arr = document.querySelectorAll('#dice');

function rng() {
    arr.forEach( function(el){
  var x = Math.floor((Math.random() * 6) + 1);
  el.innerText = x ;
});
}


