$(function() {

//form to search spotify API
var $spotifySearch = $('#spotify-search');

//form input for track
var $track = $('#track');
var $artist = $('#artist');

//element to hold results from spotify AP1
var $results = $('#results');

var $qsTemplate = _.template($('#qsTemplate').html());

$spotifySearch.on('submit', function(event) {
    event.preventDefault();
    console.log('form submit!');
    var $querystring = 'https://api.spotify.com/v1/search?type=track&q=' + $track.val(); 
    var $queryArtist = 'https://api.spotify.com/v1/search?type=artist&q=' + $artist.val();

$.get(
  $querystring,
  function(data) {
    console.log(data.tracks.items);
    var songs = data.tracks.items;
    _.each(songs, function(song, index) {
        $("#results").append( "<p>" + song.name + "</p>");
    
         var artists = data.artists.items;
    _.each(artists, function(artist, index) {
        $("#results").append( "<p>" + artist.name + "</p>");
    });
    });

   

});

});

});