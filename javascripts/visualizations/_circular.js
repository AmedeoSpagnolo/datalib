;class Circular extends Visualization{

  // update options
  update_options (opt = {}) {
    this.options = $.extend({
      "diameter":           800,
      "label":              true,
      "level":              true,
      "bars_length":        150,
      "bars_width":         3,
      "strokewidth":        1,
    }, this.options)
  }

  // update default dataset
  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = [
        {
          "name": "node1",
          "size": 29,
           "imports": {
              "node2": 959
          }
        },
        {
          "name": "node2",
          "size": 9,
           "imports": {
              "node1": 129,
              "node3": 19
          }
        },
        {
          "name": "node3",
          "size": 19,
           "imports": {
              "node1": 29
          }
        }
      ]
    }
  }

  // visualization
  draw_visualization (size, vm) {
    var svg       = vm.wrap,
        dataset   = vm.data,
        width     = size[0],
        height    = size[1];

    // draw
    var diameter = vm.diameter,
        radius = diameter / 2,
        innerRadius = radius - 120;

    var cluster = d3.layout.cluster()
        .size([360, innerRadius])
        .sort(null)
        .value(function(d) { return d.size; });

    var bundle = d3.layout.bundle();

    var line = d3.svg.line.radial()
        .interpolate("bundle")
        .tension(.85)
        .radius(function(d) { return d.y })
        .angle(function(d) { return d.x / 180 * Math.PI });

    var svg = vm.wrap.append("g")
                .attr("transform", "translate(" + (vm.width/2 - vm.margin_left ) + "," + (vm.height/2 - vm.margin_top ) + ")");

    var link = svg.append("g").attr("class", "links").selectAll(".link"),
        node = svg.append("g").attr("class", "nodes").selectAll(".node");

    var classes = vm.data

    var nodes = cluster.nodes(packageHierarchy(classes)),
        links = packageImports(nodes);

    var normalize_this_max_tmp = []
    _.forEach(_.map(vm.data, 'imports'), function (as){
      _.forEach(as, function (aq) {
        normalize_this_max_tmp.push(aq);
      })
    })

    var normalize_this_max = d3.max(normalize_this_max_tmp)
    var normalize_this = d3.scale.linear()
      .domain([0, normalize_this_max])
      .range([0, 1])

    link = link
        .data(bundle(links))
      .enter().append("path")
        .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
        .attr("class", "link")
        .attr("d", line)
        .style("stroke", "steelblue")
        .style("stroke-width", function(d){
          // * vm.strokewidth
          return (normalize_this(d.source.imports[d.target.name])+.1) * 4
        })
        .style("stroke-opacity", function(d){
          // return 1
          return normalize_this(d.source.imports[d.target.name]) + .4
        })
        .style("fill", "none")
        .style("pointer-events", "none");

    var single_node = node.data(nodes.filter(function(n) { return !n.children; }))
      .enter().append("g")
      .attr("class", "node")
      .attr("dy", ".31em")
      .attr("transform", function(d) {
        return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" :  "rotate(180)");
      })

    if (vm.label) {
      single_node.append("text")
        .style("text-anchor", function(d) { return d.x < 180 ? "start" : "end" })
        .style("fill", "gray")
        .style("font-size", "10px")
        .text(function(d) { return d.key })
        .on("mouseover", mouseovered)
        .on("mouseout", mouseouted);
    }

    if (vm.level) {

      var _max = d3.max(classes, function(d) { return d.size; })

      var norm = d3.scale.linear()
        .domain([0, _max])
        .range([0 , vm.bars_length])

      single_node.append("rect")
          .attr("x", 0)
          .attr("y", 0)
          .style("fill", "gray")
          .attr("height", vm.bars_width )
          .attr("width",  function (d) { return norm(d.size) })
          .attr("transform", function(d){
            return d.x < 180 ? "translate(0,5)" : "translate(" + (-norm(d.size)) + ",5)"
          })
    }

    function mouseovered(d) {
      node
          .each(function(n) { n.target = n.source = false; });

      link
          .classed("link--target", function(l) { if (l.target === d) return l.source.source = true; })
          .classed("link--source", function(l) { if (l.source === d) return l.target.target = true; })
        .filter(function(l) { return l.target === d || l.source === d; })
          .each(function() { this.parentNode.appendChild(this); });

      node
          .classed("node--target", function(n) { return n.target; })
          .classed("node--source", function(n) { return n.source; });
    }

    function mouseouted(d) {
      link
          .classed("link--target", false)
          .classed("link--source", false);

      node
          .classed("node--target", false)
          .classed("node--source", false);
    }

    d3.select(self.frameElement).style("height", diameter + "px");

    // Lazily construct the package hierarchy from class names.
    function packageHierarchy(classes) {
      var map = {};

      function find(name, data) {
        var node = map[name], i;
        if (!node) {
          node = map[name] = data || {name: name, children: []};
          if (name.length) {
            node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
            node.parent.children.push(node);
            node.key = name.substring(i + 1);
          }
        }
        return node;
      }

      classes.forEach(function(d) {
        find(d.name, d);
      });

      return map[""];
    }

    // Return a list of imports for the given array of nodes.
    function packageImports(nodes) {
      var map = {},
          imports = [];

      // Compute a map from name to node.
      nodes.forEach(function(d) {
        map[d.name] = d;
      });

      // For each import, construct a link from the source to target node.
      nodes.forEach(function(d) {
        if (d.imports) for (var key in d.imports){
          imports.push({source: map[d.name], target: map[key]});
        };
      });

      return imports;
    }
  }
}

//
// .node:hover,
// .node--source,
// .node--target {
//   font-weight: 700;
// }
//
// .node--source {
//   fill: #2ca02c;
// }
//
// .node--target {
//   fill: #d62728;
// }
//
// .link--source,
// .link--target {
//   stroke-opacity: 1;
//   stroke-width: 2px;
// }
//
// .link--source {
//   stroke: #d62728;
// }
//
// .link--target {
//   stroke: #2ca02c;
// }
