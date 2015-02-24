SC.initialize({
  client_id: 'b6c9ed268c9b07a27f91e6f6d66e2f88'
});

var isPlaying = false;
console.log('Song is playing? ' + isPlaying);
function playPause() {
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
