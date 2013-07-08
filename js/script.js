(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      $this.remove(childElem);  

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

  });    
}
})(jQuery);



$(function(){


$('#board').randomize('.tile');
'use strict';

//var $events = $('body');
var tiles = $('.tile');
var selected = [];  //keeps track of selected tiles
var num_clicks = 0;

// handles click on tile
// FINISH
function handle_click(){
  // which tile?
  var tile = $(this);

  // don't do anything if just clicked or already matched
  if (tile.hasClass('active') || tile.hasClass('matched')) {
      // we're done
      return false;
  }

  if (is_two_selected()) {
    deactivate_tiles();
  }
  // keep track of number of clicks
  num_clicks++;

  //activate tile
  activate_tile(tile);
  // maybe more here?

  if (is_two_selected() && is_current_selection_a_match()) {
    $('.tile.active').addClass('matched');
  }
  console.log('clicked!');
  if (is_game_over()) {
    handle_win();
  }
}


function is_two_selected(){
  if ( $('.tile.active').length == 2){
    return true;
  }
  else {
    return false;
  }
}

// short version of function is_two_selected(){
//  return $('.tile.active').length == 2){
// }

function is_current_selection_a_match(){
  if ($('.tile.active img').first().attr('src') === $('.tile.active img').last().attr('src')){
  return true;
  }
  else {
  return false;
  }
}

// An alternative way to match based on index
// var pic1= selected[0].find('img'.attr('src');

function deactivate_tiles() {
  $('.tile').removeClass('active');
}

function activate_tile(tile){
  tile.addClass('active');
  selected.push(tile);
}

function is_game_over(){
  if ($('.tile.matched').length === $('.tile').length) {
    console.log('GAME OVER!!');
    return true;
  }
  else {
    console.log('game not over :-(');
  }
}

function handle_win(){
  // implement
  alert("Congratulations! You solved it in " + num_clicks + " clicks!");
  $('.tile.matched').removeClass('matched').removeClass('active');
    //javascript;
  url = 'http://soundbible.com/grab.php?id=1003&type=mp3';
  document.getElementById("sound").innerHTML="<embed src='"+url+"' hidden=true autostart=true loop=false>";
}

// register event handler for tiles
$.each(tiles, function(index, tile) {
  var tile = $(tile);
  tile.on('click', handle_click);
});



// NOTES
// if clicked, apply 'active' style
// if clicked, disable it

// if two images clicked,
//compare if they are the same
//if so , we have a match
// -> for both, apply 'matched' style
//    and disable
//if not
// -> reset tiles to 'hidden' style

// the game is over when all tiles are matched
// show 'Congrats' and reset board,
});