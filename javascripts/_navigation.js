;$( document ).ready(function() {

  // init
  $('[nav-target]').addClass("visible")

  // buttons
  $('.nav_item').on('click', function(){
    var tmp = $(this).attr('id')
    console.log(tmp);
    $('[nav-target]').removeClass("visible")
    $('[nav-target=' + tmp + ']').addClass("visible")
  })

})
