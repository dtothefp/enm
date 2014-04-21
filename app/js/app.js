// var app = (function(document, $) {

//   'use strict';
//   var docElem = document.documentElement,

//     _userAgentInit = function() {
//       docElem.setAttribute('data-useragent', navigator.userAgent);
//     },
//     _init = function() {
//       $(document).foundation();
//       _userAgentInit();
//     };

//   return {
//     init: _init
//   };

// })(document, jQuery);

// (function() {

//   'use strict';
//   app.init();

// })();

// $(".right li").on("click", function(e) {
//   $(".active").removeClass("active");
//   $(this).addClass("active");
// });

window.onload = function() {

  (function(){
    var child;
    $('.spotlight-pic').on({
        mouseenter: function(e) {
          child = $('.member-title').children()[Number($(this).data().position)];
          $(child).fadeIn();
        },
        mouseleave: function() {
          $(child).fadeOut();
        }
    });
  }());

  // ******** Create Nav Highlighting on Scroll *********
  var a = $('nav.top-bar').find('a');
  var scrollItems;
  scrollItems = a.map(function() {
    // get the element that corresponds to the href
    var $link = $($(this).attr('href'));
    // check that is has a lenght, i.e. href has a corresponing element
    if ($link.length) {
      return $link;
    }
  });
  var lastId;

  function bindScroll() {
    var current = scrollItems.map(function(){
      // find all elments that are above the nav bar
      if ( $(this).offset().top <= $(window).scrollTop() + $('nav.top-bar').height() * 2 ) {
        return this;
      }
    });
    // get the current element just above the navbar
    current = current[current.length -1];
    // get the ID
    var id = current && current.length ? current[0].id : '';
    if (id.length) {
      if (id != lastId) {
        $('nav li.active').removeClass('active');
      }
      $('a[href=#' + id + ']').parent().addClass('active');
    }
    lastId = id;
  }
  $(window).on('scroll', bindScroll);
}

// var navHeight = $(".top-bar").height();

// var lastId,
//     topMenu = $(".sticky"),
//     topMenuHeight = topMenu.outerHeight()+15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });
// debugger;

// var items = scrollItems.map(function(){
//   return {
//     position: $(this).position().top,
//     id: $(this).attr("id")
//   };
// })

// $(window).scroll(function(e) {

// });
// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;

//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";

//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href=#"+id+"]").parent().addClass("active");
//    }
// });

// var showNav = true;
// var navMoving = true;
// function moveHeader(elm) {
//  var scrolled = window.scrollY;
//  var nav = document.querySelector("nav");
//  if (scrolled <= 50) {
//    nav.style.WebkitTransform = nav.style.transform = "translate3d(0, -" + scrolled + "px, 0)";
//  }
//  elm.style.WebkitTransform = elm.style.transform = "translate3d(0, -" + scrolled + "px, 0)";
//  // if ((scrolled - $(elm).position().top)  >= elm.offsetHeight) {
//  //  nav.style.WebkitTransform = nav.style.transform = "translate3d(0, 0, 0)";
//  // }
// }

// function pushBody(elm, nextElm) {
//  var scrolled = window.scrollY;
//  if (scrolled < window.innerHeight + elm.offsetHeight) {
//    elm.style.WebkitTransform = elm.style.transform = "translate3d(0, " + scrolled + "px, 0)";
//    var endScroll = scrolled;
//  } else {
//    elm.style.WebkitTransform = elm.style.transform = "translate3d(0, 0px, 0)";
//    // nextElm.style.marginTop = "0px";
//  }
//  var lastScrolled = scrolled;
// }

// window.onload = function() {
  // window.scrollTo(0,0);
  // var headerElm = document.getElementById('head');
  // var nextElm = document.getElementById("services");
  // var adjustedElm = document.querySelector(".adjusted-content");
  // adjustedElm.style.marginTop = (headerElm.offsetHeight + nextElm.offsetHeight) + "px";
  // // nextElm.style.marginTop = headerElm.offsetHeight + "px";
  // // window.addEventListener('resize', function() {
  // //   nextElm.style.marginTop = headerElm.offsetHeight + "px";
  // // });
  // var staticDiv, dynamicDiv;
  // window.onscroll = function() {
  //  moveHeader(headerElm);
  //  // pushBody(nextElm, adjustedElm);
  //  staticDiv = $(nextElm).offset().top + $(nextElm).height();
  //  dynamicDiv = $(adjustedElm).offset().top;
  //  if (staticDiv >= dynamicDiv) {
  //    $(nextElm).fadeOut();
  //  } else {
  //    $(nextElm).fadeIn();
  //  }
  // }
  // var s = skrollr.init({});
// }
