$(function(){
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

  // keep track of number of clicks
  num_clicks++;

  //activate tile
  activate_tile(tile);
  // maybe more here?

  if (is_two_selected() && is_current_selection_a_match()) {
    // implement
  }
  alert('clicked!');
}


function is_two_selected(){
  // implement
  return false;
}

function is_current_selection_a_match(){
  // implement
  return false;
}

function deactivate_tiles() {
  // deactivates ALL tiles
  //implement
}

function activate_tile(tile){
  tile.addClass('active');
  selected.push(tile);
}

function is_game_over(){
  //implement
}

function handle_win(){
  // implement
  // perhaps display 'congrats' panle?! reset board?
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
