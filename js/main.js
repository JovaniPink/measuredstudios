(function($) {
  "use strict"; // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on("click", "a.page-scroll", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50
        },
        1250,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $("body").scrollspy({
    target: ".navbar-fixed-top",
    offset: 100
  });

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggle:visible").click();
  });

  // Offset for Main Navigation
  $("#mainNav").affix({
    offset: {
      top: 50
    }
  });

  $("#login-form-link").click(function(event) {
    $("#login-form")
      .delay(100)
      .fadeIn(100);
    $("#register-form").fadeOut(100);
    $("#register-form-link").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  $("#register-form-link").click(function(event) {
    $("#register-form")
      .delay(100)
      .fadeIn(100);
    $("#login-form").fadeOut(100);
    $("#login-form-link").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
})(jQuery); // End of use strict
