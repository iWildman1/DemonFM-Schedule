function closeMenu(){$(".dropdown").removeClass("fadeInDown animated"),$(".dropdown").addClass("fadeOutUp animated"),$(".dropdown-icon").removeClass("rotate-handle"),setTimeout(function(){$(".dropdown").removeClass("fadeOutUp animated").css("display","none")},300)}function jumpSticky(){console.log("Sticky!")}var jumpBreakpoint=450;$(document).ready(function(){$(".dropdown-handle").click(function(){$(".dropdown").hasClass("fadeInDown")?($(".dropdown").removeClass("fadeInDown animated"),$(".dropdown").addClass("fadeOutUp animated"),$(".dropdown-icon").removeClass("rotate-handle"),setTimeout(function(){$(".dropdown").removeClass("fadeOutUp animated").css("display","none")},300)):($(".dropdown").css("display","block").addClass("fadeInDown animated"),$(".dropdown-icon").addClass("rotate-handle"))}),$("#dropdown-ul > li").click(function(){var o=$(this).text();$("#dropdown-text").text(o),closeMenu()}),$(document).scroll(function(){var o=$(this).scrollTop();o>jumpBreakpoint?$(".jump-container").css("position","fixed").css("top","100px"):$(".jump-container").css("position","relative").css("top","0")})});