;function fix_dates() {

  $('.date').each(function(i, el){
    dt = $(el).html()
    nf = moment.unix(dt).format("MMMM D, YYYY")
    $(el).html(nf)
  })

}
