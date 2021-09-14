
/* Facebook */

/* Plugin code generated for Facebook button */ 
   
(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));




(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));


/* Twitter */
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


// Google map
    
    function initMap() 
    {
        var myLatLng = {lat: 33.4676, lng: -117.0657};

        var map = new google.maps.Map(document.getElementById('map'), 
        {
          center: myLatLng,
          zoom: 14
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Plush!'
        });

    }

    





/* Document Ready Section */

$(document).ready(function(){

    // Smooth scrolling
    var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

    // stellar
    $('#faq').stellar();


    // tool tips
    $(function () {
    $('#item1').tooltip();
      });
    

    

	
	 // event handler on submit button
	 $("#submitbutton").on("click", function() 
    {
        // grab what user enters in contact form
		    var comment = $(".message-box").val();

		    // console log comment
		    console.log("clicked");

		    $("#visible-comment").html(comment);


        $(".message-box").hide( "slow", function() {
                    alert( "We received your message. Thank you for contacting Plush!" );
                  });


    return false;
        // no code here!
    });



    
    $(".message-box").on("keyup", function() 
      {
        console.log("keyup happened"); //here we make sure we're catching the keyup

        // in here is where the rest of our code for this lesson will go    

        
        var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable 
        console.log(charCount); //here we make sure we set it to the right value
        $("#char-count").html(charCount); //here we show a running character count to the user


        if(charCount > 50) 
          {
            // need to turn character count red
            $("#char-count").css("color", "red");

          } else 
          {
            // need it to be black
            $("#char-count").css("color", "black");


          };

        
        if(charCount = "")
        {
          // need to turn border red
            $(".message-box").css("border", "2px solid red");
        }
       

      });




    // Work/Portfolio section
      // console.log(works);
      for(var i = 0; i < works.length; ++i ) 
      {

          /*
          $("#work").append("\
            <div class='col-md-3 col-xs-6'>\
            <img class='portfolio-image img-responsive' src='" + works[i] + "''>\
            </div>");
          */
          
        
          $("#work").append("\
            <div class='col-md-3 col-xs-6'>\
              <a href='" + works[i].prog + "' class='work-img'>\
                <img class='portfolio-image img-responsive' src='" + works[i].pic + "'>\
                <span class='info' style='text-transform:uppercase;\
                  position: absolute;\
                  text-align: center;\
                  font-size: 1.5em;\
                  top: 25%; left: 6%; right: 38%; color: brown;\
                  font-family:Futura; text-transform:uppercase;\
                  font-weight: bolder;\
                  display: none;\
                  letter-spacing:0.5em; line-height:2.0;'>\
                  <p class='proj-title'>Title:<br> " + works[i].title + " </p></span>\
              </a>\
            </div>\
          ");  
          
        

          $(".work-img").mouseenter( function() 
          {
              //console.log(this);
              $(".info", this).show();
          }).mouseleave(function(){
              $(".info", this).hide();
          });


          var images = $("#work .portfolio-image"); 
          //console.log(images[2]);
          
          if(i%2 === 0)
          {
            $(images[i]).css("border", "2px solid salmon");
          } 
          else 
          {
            $(images[i]).css("border", "2px solid DodgerBlue");
          }
          
      };
          


});

































