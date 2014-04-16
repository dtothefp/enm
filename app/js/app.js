var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();

var showNav = true;
var navMoving = true;
function moveHeader(elm) {
	var scrolled = window.scrollY;
	var nav = document.querySelector("nav");
	if (scrolled <= 50) {
		nav.style.WebkitTransform = nav.style.transform = "translate3d(0, -" + scrolled + "px, 0)";
	}
	elm.style.WebkitTransform = elm.style.transform = "translate3d(0, -" + scrolled + "px, 0)";
	// if ((scrolled - $(elm).position().top)  >= elm.offsetHeight) {
	// 	nav.style.WebkitTransform = nav.style.transform = "translate3d(0, 0, 0)";
	// }
}

// function pushBody(elm, nextElm) {
// 	var scrolled = window.scrollY;
// 	if (scrolled < window.innerHeight + elm.offsetHeight) {
// 		elm.style.WebkitTransform = elm.style.transform = "translate3d(0, " + scrolled + "px, 0)";
// 		var endScroll = scrolled;
// 	} else {
// 		elm.style.WebkitTransform = elm.style.transform = "translate3d(0, 0px, 0)";
// 		// nextElm.style.marginTop = "0px";
// 	}
// 	var lastScrolled = scrolled;
// }

window.onload = function() {
	window.scrollTo(0,0);
	var headerElm = document.getElementById('head');
	var nextElm = document.getElementById("services");
	var adjustedElm = document.querySelector(".adjusted-content");
	adjustedElm.style.marginTop = (headerElm.offsetHeight + nextElm.offsetHeight) + "px";
	// nextElm.style.marginTop = headerElm.offsetHeight + "px";
	// window.addEventListener('resize', function() {
	// 	nextElm.style.marginTop = headerElm.offsetHeight + "px";
	// });
	var staticDiv, dynamicDiv;
	window.onscroll = function() {
		moveHeader(headerElm);
		// pushBody(nextElm, adjustedElm);
		staticDiv = $(nextElm).offset().top + $(nextElm).height();
		dynamicDiv = $(adjustedElm).offset().top;
		if (staticDiv >= dynamicDiv) {
			$(nextElm).fadeOut();
		} else {
			$(nextElm).fadeIn();
		}
	}
	var s = skrollr.init({});
}
