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
				
				  /*var w = window.innerWidth;
				  var h = window.innerHeight;
				  var divWidth = w;
				  if(w > h) divWidth = h;
				  var divHeight = h;
				  // div style
				  var divs = document.getElementsByTagName("div");
				  //bcDiv
				  divs[1].style.width = divWidth + "px";
				  //divs[1].style.height = divHeight + "px";
				  //txtDiv
				  divs[2].style.width = divWidth * 0.9 + "px";
				  //divs[2].style.height = divHeight + "px";
				  //contactDiv
				  divs[3].style.width = divWidth + "px";
				  //divs[3].style.height = divHeight + "px";*/
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
