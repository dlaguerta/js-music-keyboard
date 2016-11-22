
$(document).ready( function() {
  //for clicking
  $('.note').on("click",function() {
    // if (event.key == 'e' || event.which == 32) {
    // audioNotes();
    var sound = $(this).html();
    var notes = $('#' + sound + 'Audio')[0];
    notes.play();
  });

  // var playNote = function(event) {
  //   var sound = $(this).html();
  //   alert(sound);
  //   var note = $('#' + sound + 'Audio')[0];
  //   // var note = $('#cAudio')[0];
  //   return note.play();
  // };

  $('body').keydown(function(event) {
    var noise = $('#' + event.key + 'Audio')[0];
    noise.play();
        // alert(event.key);
  });
  });


      // if (event.key == 'e'|| event.key == 'a'|| event.key == 'b'|| event.which == 13)
  // $('.note').on("click",function() {
  //   var sound = $(this).html();
  //   var notes = $('#' + sound + 'Audio')[0];
  //     notes.play();
  //
  //   if
  // });
