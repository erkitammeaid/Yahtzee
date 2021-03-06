var turns = 3;

$('.dice1').click(function(){
  if ($(this).hasClass('held')) {
    $(this).removeClass('held');
  } else {
    $(this).addClass('held');
  }
});

$('.dice2').click(function(){
    if ($(this).hasClass('held')) {
      $(this).removeClass('held');
    } else {
      $(this).addClass('held');
    }
  });

  $('.dice3').click(function(){
    if ($(this).hasClass('held')) {
      $(this).removeClass('held');
    } else {
      $(this).addClass('held');
    }
  });

  $('.dice4').click(function(){
    if ($(this).hasClass('held')) {
      $(this).removeClass('held');
    } else {
      $(this).addClass('held');
    }
  });

  $('.dice5').click(function(){
    if ($(this).hasClass('held')) {
      $(this).removeClass('held');
    } else {
      $(this).addClass('held');
    }
  });

$('#roll').click(function(){
  var cubes = $('#diceid:not(.held)');
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