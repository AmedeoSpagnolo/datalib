;class Dots extends Visualization{

  // update options
  update_options (opt = {}) {
    this.options = $.extend({
      'link_distance':      20,
      'label':              true,
    }, this.options)
  }

  // update default dataset
  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = [
          {"source": "A1", "target": "A2"},
          {"source": "A2", "target": "A3"},
          {"source": "A2", "target": "A4"},
          {"source": "A1", "target": "A5"},
          {"source": "A1", "target": "A6"},
          {"source": "A2", "target": "A3"},
        ]
    }
  }

  // visaulization
  draw_visualization (size, vm) {

    var width = size[0],
        height = size[1];

    var svg = vm.wrap;

    var force = d3.layout.force()
        .size([width, height]);

    var links = vm.data;

    var nodesByName = {};

    // Create nodes for each unique source and target.
    links.forEach(function(link) {
      link.source = nodeByName(link.source);
      link.target = nodeByName(link.target);
    });

    // Extract the array of nodes from the map by name.
    var nodes = d3.values(nodesByName);

    // Create the link lines.
    var link = svg.append("g").attr("class", "links")
      .selectAll(".link")
        .data(links)
      .enter().append("line")
        .attr("class", "link")
        .style("stroke", "gray");

    // Create the node circles.
    var node = svg.append("g").attr("class", "nodes")
      .selectAll(".node")
        .data(nodes)
      .enter().append("circle")
        .attr("class", "node")
        .attr("r", 4.5)
        .style("stroke", "none")
        .style("fill", "#58595b")
        .call(force.drag);


    if (vm.label == true) {
      var text = svg.append("g").attr("class", "texts")
        .selectAll(".text")
          .data(nodes)
        .enter().append("text")
          .attr("class", "text")
          .text(function(d){
            return d.name
          })
          .style("fill", "#58595b");
    }

    // Start the force layout.
    force
        .nodes(nodes)
        .links(links)
        .linkDistance(vm.link_distance)
        .on("tick", tick)
        .start();

    function tick() {
      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });
      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
      if (vm.label == true) {
        text.attr("x", function(d) { return d.x + 5; })
            .attr("y", function(d) { return d.y + 5; });
      }
    }

    function nodeByName(name) {
      return nodesByName[name] || (nodesByName[name] = {name: name});
    }

  }

}
