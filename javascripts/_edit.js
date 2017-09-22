;$( document ).ready(function() {

  function toggle (el) {
    if ($(el).hasClass("visible")){
      $(el).removeClass("visible")
    } else {
      $(el).addClass("visible")
    }
  }

  $('[edit]').on('click', function(){
    var el = "[edit-id='" + $(this).attr('edit') + "']"
    toggle(el);
  })

})
