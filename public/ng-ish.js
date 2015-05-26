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
	$scope.pauseBtn = function() {
		SC.sound.pause();
	};
});

