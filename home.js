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
				  /*var w = window.innerWidth,
				  h = window.innerHeight;
				  var divWidth = w;
				  if(w > h) divWidth = h;
				  var divHeight = h;
				  // div style
				  var divs = document.getElementById('wrapper').getElementsByTagName("div");
				  // logoDiv
				  divs[0].style.width = divWidth + "px";
				  // txtDiv
				  divs[1].style.width = divWidth + "px";
				  // divs[1].style.height = divHeight + "px";
				  // divs[1].style.height = divHeight * 0.8 + "px";
				  // releaseDiv
				  divs[2].style.width = divWidth + "px";
				  // divs[2].style.height = divHeight * 0.666 + "px";
				  // contactDiv
				  divs[3].style.width = divWidth + "px";*/
			}
		});

	}

  // var drawVertRules = function () {
    /*var c = document.getElementById("bg");
    c.width = w;
    c.height = h;
    var ctx = c.getContext("2d");
    var xv = (w - divWidth) / 2;
    var yv = divHeight / 6;
    var ov = 45;
    // ctx.moveTo(xv, 0);
    // ctx.lineTo(xv, c.height);
    ctx.moveTo(xv - ov, yv);
    ctx.lineTo(xv - ov, yv * 5);
    ctx.moveTo(xv + divWidth + ov, yv);
    ctx.lineTo(xv + divWidth + ov, yv * 5);
    ctx.strokeStyle = "#C76363";  //this? black? transparent grey??
    ctx.stroke();
    console.log(c.width + " * " + c.height + " , left rule pos: " + xv);*/
  // }

  // drawVertRules();

  // window.onresize = drawVertRules;

})();
