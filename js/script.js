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

  if (is_two_selected()) {
    deactivate_tiles();
  }
  // keep track of number of clicks
  num_clicks++;

  //activate tile
  activate_tile(tile);

  if (is_two_selected() && is_current_selection_a_match()) {
    // implement:
    // Set both tiles to 'matched' (e.g. add class 'matched')
    // if game is over, display 'congrats'
  }
}


function is_two_selected(){
  // implement
  // Perhaps check length of variable 'selected'?
  return false;
}

function is_current_selection_a_match(){
  // implement
  // Check if images of the selected tiles are the same
  return false;
}

function deactivate_tiles() {
  //implement
  // remove 'activate' class from all tiles
}

function activate_tile(tile){
  tile.addClass('active');
  selected.push(tile);
}

function is_game_over(){
  //implement
  //is number of 'matched' tiles same as number of tiles?
}

function handle_win(){
  // implement
  // display 'congrats' panel with number of clicks
  // reset board
}

// register event handler for tiles
$.each(tiles, function(index, tile) {
  var tile = $(tile);
  tile.on('click', handle_click);
});

});