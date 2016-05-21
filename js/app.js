var jumpBreakpoint = 450;

$(document).ready(function() {
  $('.dropdown-handle').click(function() {
    if ($('.dropdown').hasClass("fadeInDown")) {
      $('.dropdown').removeClass("fadeInDown animated");
      $('.dropdown').addClass("fadeOutUp animated");
      $('.dropdown-icon').removeClass("rotate-handle");
      setTimeout(function() {
        $('.dropdown').removeClass("fadeOutUp animated").css("display", "none");
      }, 300);
    } else {
      $('.dropdown').css("display", "block").addClass("fadeInDown animated");
      $('.dropdown-icon').addClass("rotate-handle");
    }
  })

  $("#dropdown-ul > li").click(function() {
    var newSelection = $(this).text();
    $('#dropdown-text').text(newSelection);
    closeMenu();
  })

  $(document).scroll(function() {
    var scrollHeight = $(this).scrollTop();

    if (scrollHeight > jumpBreakpoint) {
      $('.jump-container').css("position", "fixed").css("top", "100px")
    } else {
      $('.jump-container').css("position", "relative").css("top", "0");
    }
  })
})

function closeMenu() {
  $('.dropdown').removeClass("fadeInDown animated");
  $('.dropdown').addClass("fadeOutUp animated");
  $('.dropdown-icon').removeClass("rotate-handle");
  setTimeout(function() {
    $('.dropdown').removeClass("fadeOutUp animated").css("display", "none");
  }, 300);
}

function jumpSticky() {
  console.log("Sticky!");
}
