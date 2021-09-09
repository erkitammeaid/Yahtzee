var min = 1;
var max = 6;
var turns = 3;

$('.cube').click(function(){
  if ($(this).hasClass('held')) {
    $(this).removeClass('held');
  } else {
    $(this).addClass('held');
  }
});

$('#roll').click(function(){
  var cubes = $('.cube:not(.held)');
  cubes.each(function(){
    roll($(this));
  });
  turns--;
  
  $('#turns').text(turns);
  
  if (turns === 0) {
    $(this).unbind('click');
    $(this).attr('disabled', 'disabled');
  }
});

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

function getRandom(max, min) {
  return Math.floor(Math.random() * (max-min)) + min;
}