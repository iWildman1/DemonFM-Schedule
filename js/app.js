var jumpBreakpoint = 450;
var dateChooserBreakpoint = 1400;
var allowDateMove = true;

$(document).ready(function() {
  $(".jump-container").affix({
    offset: {
      top: function() {
        
        if ($(document).width() > 1400) {
          $(".jump-container").css("top", "300px");
          return 300;
        } else {
          $(".jump-container").css("top", "100px");
          return 500;
        }
      }
    }
  })
  
  $(window).resize(function() {
    width = $(document).width();
    
    if (width < 1400) {
      $(".jump-container").data('bs.affix').options.offset = 500;
      $(".jump-container").css("top", "100px");
    } else {
      $(".jump-container").data('bs.affix').options.offset = 300;
      $(".jump-container").css("top", "300px");
    }
  })
  
  $(".date-chooser").affix({
    offset: {
      top: function() {
        if ($(document).width() > 1400) {
          return 300;
        }
      }
    }
  })
  
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
  });
  
  $("#dropdown-ul > li").click(function() {
    var newSelection = $(this).text();
    $('#dropdown-text').text(newSelection);
    closeMenu();
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

$(document).scroll(function() {
  height = $(document).scrollTop();
  
  if (height < 100 && $(".navbar").hasClass("navbar-darken")) {
    $(".navbar").removeClass("navbar-darken");
  } else if (height > 100 && !$(".navbar").hasClass("navbar-darked")) {
    $(".navbar").addClass("navbar-darken");
  }
});