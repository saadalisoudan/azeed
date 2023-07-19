$(document).ready(function () {
  "use strict";

  $("#dropcontainer input[type='file']").on("change", function (e) {
    console.log('-------------------', e);

    const reader = new FileReader();
    if (
      event.target.files &&
      event.target.files.length &&
      event.target.files.length === 1
    ) {
      const [file] = event.target.files;
      if (file.type.includes('image')) {
        var input = this;
        let reader = new FileReader();

        reader.onload = function (e) {
          $('#img-view').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
  });

  $("#dropaddresscontainer input[id='images2']").on("change", function (e) {
    const reader = new FileReader();
    if (
      event.target.files &&
      event.target.files.length &&
      event.target.files.length === 1
    ) {
      const [file] = event.target.files;
      if (file.type.includes('image')) {
        var input = this;
        let reader = new FileReader();

        reader.onload = function (e) {
          $('#img-view2').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
  });

  $("#dropworkcontainer input[id='images3']").on("change", function (e) {
    console.log('=================');

    const reader = new FileReader();
    if (
      event.target.files &&
      event.target.files.length &&
      event.target.files.length === 1
    ) {
      const [file] = event.target.files;
      if (file.type.includes('image')) {
        var input = this;
        let reader = new FileReader();

        reader.onload = function (e) {
          $('#img-view3').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
  });
  /*======== 2. MOBILE OVERLAY ========*/
  if ($(window).width() < 768) {
    $(".sidebar-toggle").on("click", function () {
      $("body").css("overflow", "hidden");
      $("body").prepend('<div class="mobile-sticky-body-overlay"></div>');
    });

    $(document).on("click", ".mobile-sticky-body-overlay", function (e) {
      $(this).remove();
      $("#body")
        .removeClass("sidebar-mobile-in")
        .addClass("sidebar-mobile-out");
      $("body").css("overflow", "auto");
    });
  }

  /*======== 3. SIDEBAR MENU ========*/
  $(".sidebar .nav > .has-sub > a").click(function () {
    $(this).parent().siblings().removeClass("expand");
    $(this).parent().toggleClass("expand");
  });

  $(".sidebar .nav > .has-sub .has-sub > a").click(function () {
    $(this).parent().toggleClass("expand");
  });

  /*======== 4. SIDEBAR TOGGLE FOR MOBILE ========*/
  if ($(window).width() < 768) {
    $(document).on("click", ".sidebar-toggle", function (e) {
      e.preventDefault();
      var min = "sidebar-mobile-in",
        min_out = "sidebar-mobile-out",
        body = "#body";
      $(body).hasClass(min)
        ? $(body).removeClass(min).addClass(min_out)
        : $(body).addClass(min).removeClass(min_out);
    });
  }

  /*======== 5. SIDEBAR TOGGLE FOR VARIOUS SIDEBAR LAYOUT ========*/
  var body = $("#body");
  if ($(window).width() >= 768) {
    if (body.hasClass("sidebar-mobile-in sidebar-mobile-out")) {
      body.removeClass("sidebar-mobile-in sidebar-mobile-out");
    }

    window.isMinified = false;
    window.isCollapsed = false;

    $("#sidebar-toggler").on("click", function () {
      if (
        body.hasClass("sidebar-fixed-offcanvas") ||
        body.hasClass("sidebar-static-offcanvas")
      ) {
        $(this)
          .addClass("sidebar-offcanvas-toggle")
          .removeClass("sidebar-toggle");
        if (window.isCollapsed === false) {
          body.addClass("sidebar-collapse");
          window.isCollapsed = true;
          window.isMinified = false;
        } else {
          body.removeClass("sidebar-collapse");
          body.addClass("sidebar-collapse-out");
          setTimeout(function () {
            body.removeClass("sidebar-collapse-out");
          }, 300);
          window.isCollapsed = false;
        }
      }

      if (body.hasClass("sidebar-fixed") || body.hasClass("sidebar-static")) {
        $(this)
          .addClass("sidebar-toggle")
          .removeClass("sidebar-offcanvas-toggle");
        if (window.isMinified === false) {
          body
            .removeClass("sidebar-collapse sidebar-minified-out")
            .addClass("sidebar-minified");
          window.isMinified = true;
          window.isCollapsed = false;
        } else {
          body.removeClass("sidebar-minified");
          body.addClass("sidebar-minified-out");
          window.isMinified = false;
        }
      }
    });
  }

  if ($(window).width() >= 768 && $(window).width() < 992) {
    if (body.hasClass("sidebar-fixed") || body.hasClass("sidebar-static")) {
      body
        .removeClass("sidebar-collapse sidebar-minified-out")
        .addClass("sidebar-minified");
      window.isMinified = true;
    }
  }

  /*======== 7. RIGHT SIDEBAR ========*/
  if ($(window).width() < 1025) {
    body.addClass("right-sidebar-toggoler-out");

    var btnRightSidebarToggler = $(".btn-right-sidebar-toggler");

    btnRightSidebarToggler.on("click", function () {
      if (!body.hasClass("right-sidebar-toggoler-out")) {
        body
          .addClass("right-sidebar-toggoler-out")
          .removeClass("right-sidebar-toggoler-in");
      } else {
        body
          .addClass("right-sidebar-toggoler-in")
          .removeClass("right-sidebar-toggoler-out");
      }
    });
  }

  var navRightSidebarLink = $(".nav-right-sidebar .nav-link");

  navRightSidebarLink.on("click", function () {
    if (!body.hasClass("right-sidebar-in")) {
      body.addClass("right-sidebar-in").removeClass("right-sidebar-out");
    } else if ($(this).hasClass("show")) {
      body.addClass("right-sidebar-out").removeClass("right-sidebar-in");
    }
  });

  var cardClosebutton = $(".card-right-sidebar .close");
  cardClosebutton.on("click", function () {
    body.removeClass("right-sidebar-in").addClass("right-sidebar-out");
  });
  /*======== 11. NAVBAR TRANSPARENT SCROLL ========*/
  var body = $("#body");
  var navbar = $("#navbar");
  $(window).scroll(function () {
    if (
      body.hasClass("navbar-fixed") &&
      $(this).width() > 765 &&
      navbar.hasClass("navbar-transparent")
    ) {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        navbar.addClass("navbar-light").addClass("navbar-transparent");
      } else {
        navbar.removeClass("navbar-light").addClass("navbar-transparent");
      }
    }
  });

  for (let i = 1; i < 8; i++) {
    $("#customCheck" + i).on('change', function (e) {
      $(this).attr("checked", e.target.checked)
      $(this).parent().toggleClass('active')

      if(e.target.checked)
      $(this).parent().append('<i class="mdi mdi-check float-right"></i>')
      else
      $(this).parent().find('i').remove()

      // $(this).parent().append.css( "display", "none" )
    });
  }
});
