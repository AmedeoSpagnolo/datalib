;class Histogram extends Visualization{

  // update options
  update_options (opt = {}) {
    this.options = $.extend({
      'gap':                10,
      'sort':               true,
    }, this.options)
  }

  // update default dataset
  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = [
        {"label": "a", "value": 10},
        {"label": "b", "value": 20},
        {"label": "c", "value": 30},
      ]
    }
  }

  // visaulization
  draw_visualization (size, vm) {
    var svg       = vm.wrap,
        dataset   = vm.data,
        width     = size[0],
        height    = size[1];

    // draw
    var max = d3.max(dataset, function(d) { return d.value; })
    var len = dataset.length

    if (vm.sort == true) {
      dataset = _.sortBy(dataset, "value", ['asc'])
    }

    var amount_min = d3.min(dataset, function(d) { return d.value })
    var amount_max = d3.max(dataset, function(d) { return d.value })

    // console.(amount_min);
    // console.(amount_max);

    var colorscale = d3.scale.quantize()
      .domain([amount_min,amount_max])
      .range(["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]);

    var y = d3.scale.linear()
      .domain([0, max])
      .range([0 , height]);

    var bar = svg.selectAll("g")
        .data(dataset).enter()
      .append("g")
        .attr("transform", function(d, i) { return "translate(" + (width / len) * i + ",0)" });

    bar.append("rect")
      .attr("x", function () { return vm.gap / 2})
      // .style('fill', 'gray')
      .attr("y", function(d) { return height - y(d.value) })
      .attr("width",  width / len - vm.gap )
      .attr("height", function(d) { return y(d.value) })
      .attr("fill", function(d){return colorscale(d.value)});

    bar.append("text")
      .text(function(d){ return d.label})
      .attr("x", function () { return vm.gap / 2})
      .attr("y", function(d) { return height + 20})

  }

}












// draw axis
// this.draw_axis()

// draw viz
// this.draw_viz()

// // x max and min
// this.max = d3.max(dataset, function(d) { return d.x; })
// vm.min = d3.min(dataset, function(d) { return d.x; })

// // xAxis normalization

//
// // d3 normalization
// var formatPercent = d3.format(".1%");

// // xAxis options
// var xAxis = d3.svg.axis()
//   .scale(x)
//   .ticks(10) // number of ticks in x-axis
//   // // .tickValues([100, 200, 300]) // array of ticks in x-axis
//   // .style('fill': 'none')
//   // .style('stroke': '#000')
//   // .style('shape-rendering': 'crispEdges')
//   .orient("bottom");
//
// // axis
// vm.svg_xAxis
//   .attr("transform", "translate(0," + widtheight + ")")
//   .call(xAxis);

// // data
// var n = d3.sum(dataset, function(d) { return d.y = d.value + d.b; });

// y.domain([0, d3.max(dataset, function(d) { return d.y; })]);

// var bar = vm.svg.insert("g", ".axis")
//     .attr("class", "bar")
//   .selectAll("g")
//     .data(dataset)
//   .enter().append("g")
//     .attr("transform", function(d) { return "translate(" + x(d.x) + ",0)"; });

// bar.filter(function(d) { return d.y / n >= .0095; }).append("text")
//     .attr("dy", ".35em")
//     .attr("transform", function(d) { return "translate(" + x(dataset[0].dx) / 2 + "," + (y(d.y) + 6) + ")rotate(-90)"; })
//     .text(function(d) { return formatPercent(d.y / n); });
