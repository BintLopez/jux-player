SC.initialize({
  client_id: 'b6c9ed268c9b07a27f91e6f6d66e2f88'
});

angular.module('playerApp', [])

.controller('playerCtrl', function($scope) {
	$scope.tracks = [
		{id:'192110152', title: 'Ear Massage'}, 
		{id: '192109397', title: 'Gypsy Green'}, 
		{id: '192108435', title: 'reAction'}, 
		{id: '192107993', title: 'Cookout'}, 
		{id: '192107303', title: 'Highway Jane'}, 
		{id: '192108790', title: 'Dawn'}];

	$scope.playBtn = function(trackId) {
		var trackName = "/tracks/"+trackId;
		SC.stream(trackName, function(sound){
			SC.sound = sound;
			sound.play();
		});
	};
	$scope.pauseBtn = function(trackId) {
		SC.stream(function(sound) {
			SC.sound = sound;
			sound.stop("/tracks/"+trackId);
		});
		
//playState --     Numeric value indicating the current playing state of the sound.
// 0 = stopped/uninitialised
//1 = playing or buffering sound (play has been called, waiting for data etc.)
	};
	$scope.playPause = 'play'
	var is_playing = false, sound;
	$scope.player = function(trackId){
    if( sound ) {
        if(is_playing) {
            sound.pause();
            is_playing = false;
            $scope.playPause = 'play';
        } else {
            sound.play();
            is_playing = true;
            $scope.playPause = 'pause';
        }
    } else {

    	var trackName = "/tracks/"+trackId;
        SC.stream(trackName, function(obj){
            obj.play();
            sound = obj;
            is_playing = true;
            $scope.playPause = 'pause';
        });
    }
}
});