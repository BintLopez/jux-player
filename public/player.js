SC.initialize({
  client_id: 'b6c9ed268c9b07a27f91e6f6d66e2f88'
});

var isPlaying = false;
console.log('Song is playing? ' + isPlaying);
function playPause(SC) {
	if (isPlaying) {
		obj.pause();
		console.log('playing? ' + isPlaying);
		isPlaying = false;
		return isPlaying;
	}
	else {
		SC.stream("tracks/192107303", function(sound) {
		sound.play();
		isPlaying = true;
		return isPlaying;
	})
	console.log('Song is playing --'+ isPlaying);
	}
};


$(document).ready(function() {

$('#playPauseBtn').on("click", playPause);

 

});



//playlist for Earmassage = playlists/82716482
//Babie = 192110152
//Ear Massage = 192110152
//Gypsy Green = 192109397
//reAction = 192108435
//Cookout = 192107993
// Highway Jane = 192107303
// Dawn = 192108790




//TO DELETE
	// if (sound) {
	// 	if(is_playing) {
	// 		sound.pause();
	// 		is_playing = false;
	// 	}
	// 	else {
	// 		sound.play();
	// 		is_playing = true;
	// 	}
	// } 
	// else {
		// SC.stream("/tracks/192110152", function(obj){
		// 	obj.play();
		// 	sound = obj;
		// 	is_playing = true;
		// });





    // SC.get('/tracks/192110152', function(track) {
    //     $('#songsList').html(track.title);
        //$('#songsList'.append($('<img src="artwork_url">'));
    
	// SC.stream("/tracks/293", function(sound){
	// 	sound.play();
	// });



// GOAL - FUNCTION TO SHOW ALL TRACKS BY JUXRAP
// $(document).ready(function() {
//   SC.get('/tracks', { genres: 'reggae'}, function(tracks) {
//   $(tracks).each(function(index, track) {
//       $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
//     });
//   });
// });