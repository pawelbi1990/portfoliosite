// variables

// techbuttons

//techicons animations
$(document).ready(function(){
  $("#htmlicon").click(function(){
    $(".htmlp").toggle();
    $(".techhtml").toggleClass("widetechbutton");
    $("#htmlicon").toggleClass("bigtechimage");
    $(".techcss").toggleClass("hide");
    $(".techjs").toggleClass("hide");
    $(".techpython").toggleClass("hide");
    $(".secondenter").toggleClass("hide");
    $(".secondpagetext").toggleClass("hide");
    $("*").toggleClass("imorange");

  });
});

$(document).ready(function(){
  $("#cssicon").click(function(){
    $(".cssp").toggle();
    $(".techcss").toggleClass("widetechbutton");
    $("#cssicon").toggleClass("bigtechimage");
    $(".techhtml").toggleClass("hide");
    $(".techjs").toggleClass("hide");
    $(".techpython").toggleClass("hide");
    $(".secondenter").toggleClass("hide");
    $(".secondpagetext").toggleClass("hide");
    $("*").toggleClass("imblue");

  });
});

$(document).ready(function(){
  $("#jsicon").click(function(){
    $(".jsp").toggle();
    $(".techjs").toggleClass("widetechbutton");
    $("#jsicon").toggleClass("bigtechimage");
    $(".techcss").toggleClass("hide");
    $(".techhtml").toggleClass("hide");
    $(".techpython").toggleClass("hide");
    $(".secondenter").toggleClass("hide");
    $(".secondpagetext").toggleClass("hide");
    $("*").toggleClass("imyellow");

  });
});

$(document).ready(function(){
  $("#pythonicon").click(function(){
    $(".pythonp").toggle();
    $(".techpython").toggleClass("widetechbutton");
    $("#pythonicon").toggleClass("bigtechimage");
    $(".techcss").toggleClass("hide");
    $(".techjs").toggleClass("hide");
    $(".techhtml").toggleClass("hide");
    $(".secondenter").toggleClass("hide");
    $(".secondpagetext").toggleClass("hide");
    $("*").toggleClass("imgrey");

  });
});


$(document).ready(function(){
  $("#htmlicon").hover(function(){
    $("#htmlicon").toggleClass("bigtechimage");
    $("#cssicon").toggleClass("smalltechimage");
    $("#jsicon").toggleClass("smalltechimage");
    $("#pythonicon").toggleClass("smalltechimage");
  });
});

$(document).ready(function(){
  $("#cssicon").hover(function(){
    $("#cssicon").toggleClass("bigtechimage");
    $("#htmlicon").toggleClass("smalltechimage");
    $("#jsicon").toggleClass("smalltechimage");
    $("#pythonicon").toggleClass("smalltechimage");
  });
});

$(document).ready(function(){
  $("#jsicon").hover(function(){
    $("#jsicon").toggleClass("bigtechimage");
    $("#cssicon").toggleClass("smalltechimage");
    $("#htmlicon").toggleClass("smalltechimage");
    $("#pythonicon").toggleClass("smalltechimage");
  });
});

$(document).ready(function(){
  $("#pythonicon").hover(function(){
    $("#pythonicon").toggleClass("bigtechimage");
    $("#cssicon").toggleClass("smalltechimage");
    $("#jsicon").toggleClass("smalltechimage");
    $("#htmlicon").toggleClass("smalltechimage");
  });
});


//navbar click animations
$(document).ready(function (){
            $("#enter").click(function (){
                $('html, body').animate({
                    scrollTop: $(".secondpagetext").offset().top
                }, 1000);
            });
        });

$(document).ready(function (){
            $(".secondenter").click(function (){
                $('html, body').animate({
                      scrollTop: $(".thirdpagetext").offset().top
                    }, 1000);
                    });
                });


                $(document).ready(function (){
                            $(".thirdenter").click(function (){
                                $('html, body').animate({
                                    scrollTop: $(".contactform").offset().top
                                }, 1000);
                            });
                        });


                        $(document).ready(function (){
                          $(".homepage").click(function (){
                              $('html, body').animate({
                                  scrollTop: $(".firstpagetext").offset().top
                              }, 1000);
                          });
                      });
                      $(document).ready(function (){
            $(".myskills").click(function (){
                $('html, body').animate({
                    scrollTop: $(".secondpagetext").offset().top
                }, 1000);
            });
        });

        $(document).ready(function (){
          $(".myprojects").click(function (){
              $('html, body').animate({
                  scrollTop: $(".thirdpagetext").offset().top
              }, 1000);
          });
      });

      $(document).ready(function (){
        $(".contact").click(function (){
            $('html, body').animate({
                scrollTop: $(".contactform").offset().top
            }, 1000);
        });
    });

//sidemenu

//github linkedin animations


$(document).ready(function(){
  $("#github").hover(function(){
    $("#github").toggleClass("biggitlin");
  });
});

$(document).ready(function(){
  $("#linkedin").hover(function(){
    $("#linkedin").toggleClass("biggitlin");
  });
});












// function scrollDown(){
//   // this func hides first page and shows second page
//   window.scrollBy({
//   top: height,
//   left: 0,
//   behavior: 'smooth'
// });
// };




//MAIN PAGE JS:
function showSideMenu(){
  // Thic func shows side menu on mainpage
  document.getElementById("sidemenu").style.width = "30%";
};

function hideSideMenu(){
  // This func hides side menu on mainpage
  document.getElementById("sidemenu").style.width = "0%";
};

// show sidemenu