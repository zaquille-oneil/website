$(document).ready(function(){
    //transition color from top after scrolling
  $(window).scroll(function() {
    if ($(this).scrollTop() > 60) {
      $('body').removeClass('changeColor')
    }
    if ($(this).scrollTop() < 60) {
      $('body').addClass('changeColor')
    }
  });

      // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash//.substring(1,this.hash.length);
      //console.log(hash)
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 480, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('body').bind('beforeunload',function(){
    $('body').removeClass('changeColor')
  });

});