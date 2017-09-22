;class Sankey extends Visualization{

  // update options
  update_options (opt = {}) {
    this.options = $.extend({
      'label':              true,
    }, this.options)
  }

  // update default dataset
  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = {
        "nodes":[
          {"node":0,"name":"node0"},
          {"node":1,"name":"node1"},
          {"node":2,"name":"node2"},
          {"node":3,"name":"node3"},
          {"node":4,"name":"node4"},
          {"node":5,"name":"node5"}
        ],
        "links":[
          {"source":0,"target":2,"value":2},
          {"source":1,"target":2,"value":2},
          {"source":1,"target":3,"value":2},
          {"source":0,"target":4,"value":2},
          {"source":2,"target":3,"value":2},
          {"source":2,"target":4,"value":2},
          {"source":3,"target":4,"value":4},
          {"source":3,"target":5,"value":2}
        ]
      }
    }
  }

  // visaulization
  draw_visualization (size, vm) {
    var units = "Widgets";
    var width = vm.width - vm.margin_left - vm.margin_right,
        height = vm.height - vm.margin_bottom - vm.margin_top

    var formatNumber = d3.format(",.0f"),    // zero decimal places
        format = function(d) { return formatNumber(d) + " " + units; },
        color = d3.scale.category20();

    // append the svg canvas to the page
    var svg = vm.wrap

    // Set the sankey diagram properties
    var sankey = d3.sankey()
        .nodeWidth(36)
        .nodePadding(40)
        .size([width, height]);

    var path = sankey.link();

    // load the data
    var graph = vm.data

    sankey
        .nodes(graph.nodes)
        .links(graph.links)
        .layout(32);

  // add in the links
    var link = svg.append("g").selectAll(".link")
        .data(graph.links)
      .enter().append("path")
        .attr("class", "link")
        .attr("d", path)
        .style("stroke-width", function(d) { return Math.max(1, d.dy); })
        .style("fill", "none")
        .style("stroke", "#000")
        .style("stroke-opacity", .2)
        .sort(function(a, b) { return b.dy - a.dy; });

  // add the link titles
    link.append("title")
          .text(function(d) {
      		return d.source.name + " → " +
                  d.target.name + "\n" + format(d.value); });

  // add in the nodes
    var node = svg.append("g").selectAll(".node")
        .data(graph.nodes)
      .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
  		  return "translate(" + d.x + "," + d.y + ")"; })
      // .call(d3.behavior.drag()
      //   .origin(function(d) { return d; })
      //   .on("dragstart", function() {
  		//   this.parentNode.appendChild(this); })
      //   .on("drag", dragmove)
      // );

  // add the rectangles for the nodes
    node.append("rect")
        .attr("height", function(d) { return d.dy; })
        .attr("width", sankey.nodeWidth())
        .style("fill", 'gray')
        .style("stroke", 'none')
      .append("title")
        .text(function(d) {
  		  return d.name + "\n" + format(d.value); });

  // add in the title for the nodes
  if (vm.label) {
    node.append("text")
        .attr("x", -6)
        .attr("y", function(d) { return d.dy / 2; })
        .attr("dy", ".35em")
        .attr("text-anchor", "end")
        .attr("transform", null)
        .text(function(d) { return d.name; })
      .filter(function(d) { return d.x < width / 2; })
        .attr("x", 6 + sankey.nodeWidth())
        .attr("text-anchor", "start");
    }

  // the function for moving the nodes
    function dragmove(d) {
      d3.select(this).attr("transform",
          "translate(" + d.x + "," + (
                  d.y = Math.max(0, Math.min(height - d.dy, event.y))
              ) + ")");
      sankey.relayout();
      link.attr("d", path);
    }
  }
}
