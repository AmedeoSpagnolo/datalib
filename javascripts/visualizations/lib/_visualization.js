;class Visualization {

  constructor(dataset = null, options = {}) {
    this.options = $.extend({
      'svg':                {},
      'wrap':               {},
      'data':               dataset,
      'target':             'body',
      'name':               'visualization',
      'bgcolor':            'transparent',
      'width':              400,
      'height':             200,
      'margin_top':         30,
      'margin_right':       30,
      'margin_bottom':      30,
      'margin_left':        30
    }, options)
  }

  update_options (opt = {}) {
    this.options = $.extend(this.options, opt)
  }

  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = dat
    }
  }

  init (el = this.options['target']) {
    this.update_options()
    this.update_data()
    var vm = this.options
    vm.target = el
    vm.width = $(vm['target']).width()
    vm.svg = d3.select(el).append("svg").style('background-color', 'red');
    vm.wrap = vm.svg.append('g').attr('class', 'svg_wrap');
    this.draw()
  }

  destroy () {
    this.options.svg.remove()
  }

  soft_destroy () {
    this.options.wrap.select('g').remove()
  }

  update_general_options () {
    var vm = this.options
    vm.svg
      .style('background-color', vm.bgcolor)
      .attr('width', vm.width)
      .attr('height', vm.height)
      .attr('id', vm.name);
    vm.wrap
      .attr('transform', 'translate('+vm.margin_top+','+vm.margin_left+')');
  }

  draw (opt = {}) {
    this.options = $.extend(this.options, opt)
    var vm = this.options
    if (vm.wrap) { this.soft_destroy() }
    var w = vm.width - vm.margin_left - vm.margin_right
    var h = vm.height - vm.margin_top - vm.margin_bottom
    this.update_general_options()
    this.draw_visualization([w,h], vm)
  }

  draw_visualization (size, vm) {
    // rewrite this method
  }

}
