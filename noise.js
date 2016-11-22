var playNote = function(note){

  note.load();
  note.play();
};

$(document).ready( function() {
  //for clicking
  $('.note').on("click",function() {
    var sound = $(this).html();
    var note = $('#' + sound + 'Audio')[0];
    // notes.load();
    // notes.play();
    playNote(note);
  });

//for keyboard functionality
  $('body').keydown(function(event) {
    var noise = $('#' + event.key + 'Audio')[0];
    // noise.load();
    // noise.play();
    playNote(noise);
  });
  });
