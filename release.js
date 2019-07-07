(function() {
	
	window.init = function () {
		
		window.dda = new Vue({
			el: '#wrapper',
			data: {
				catNum: new URLSearchParams(window.location.search).get('release'),
				release: window.releases[new URLSearchParams(window.location.search).get('release')]
			},
			methods: {
				
			},
			mounted: function () {
				
				  //var urlParams = new URLSearchParams(window.location.search);
				  //this.release = urlParams.get('release');
				  document.title = this.catNum + ' - ' + this.release.artist;
			
			}
		});
		
	}
	
	/*
	urlParams fallback if IE doesn't work:
	function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	};
	*/

}());
