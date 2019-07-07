(function() {
	
	// poss refactor to SPA w vue-router and /release/001 urls
	
	window.init = function () {
		
		window.dda = new Vue({
			el: '#wrapper',
			data: {
				releases: window.releases
			},
			methods: {
				
			},
			mounted: function () {
				  
			}
		});

	}

})();
