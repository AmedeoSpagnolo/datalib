;class Timeline extends Visualization{

  // update options
  update_options (opt = {}) {
    this.options = $.extend({
      'spacing':      400,
    }, this.options)
  }

  // update default dataset
  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = [
         {
            "Category":"travel",
            "Index":"1.0",
            "Medium":"Website",
            "Topic":"Hotel & travel trends in 2017",
            "Date":"24/03/2017",
            "Content":"blog",
            "Objective":"Awareness",
            "Content brief":"Economic factors & terrorism"
         },
         {
            "Category":"hospitality",
            "Index":"1.1",
            "Medium":"Linkedin + Twitter",
            "Topic":"Hotel trends in 2017 by our Founder",
            "Date":"25/03/2017",
            "Content":"social post",
            "Objective":"Awareness",
            "Content brief":"Short teaser on hotel trends"
         },
         {
            "Category":"hospitality",
            "Index":"1.2",
            "Medium":"Hubspot + Mail chimp",
            "Topic":"Email Newsletter| Hotel trend in 2017",
            "Date":"30/03/2017",
            "Content":"Email",
            "Objective":"Awareness",
            "Content brief":"Explaination on the blog content"
         },
         {
            "Category":"hospitality",
            "Index":"2.0",
            "Medium":"Website",
            "Topic":"Creating Loyalty in a Fragmented World",
            "Date":"7/04/2017",
            "Content":"blog",
            "Objective":"Subscribe to blogs",
            "Content brief":"Guest Satisfaction"
         },
         {
            "Category":"hospitality",
            "Index":"2.1",
            "Medium":"Linkedin + Twitter",
            "Topic":"Guest Satisfaction in Fragmented World",
            "Date":"11/04/2017",
            "Content":"social post",
            "Objective":"Awareness",
            "Content brief":"Guest Satisfaction"
         },
         {
            "Category":"hospitality",
            "Index":"2.2",
            "Medium":"Hubspot + Mail chimp",
            "Topic":"Email | Guest Satisfaction in Fragmented World",
            "Date":"10/04/2017",
            "Content":"Email",
            "Objective":"Awareness",
            "Content brief":"Explaination on the blog content"
         },
         {
            "Category":"tourism",
            "Index":"3.0",
            "Medium":"Website",
            "Topic":"handy case solution ",
            "Date":"17/03/2017",
            "Content":"blog",
            "Objective":"Awareness",
            "Content brief":"handy case study brief"
         },
         {
            "Category":"hospitality",
            "Index":"3.1",
            "Medium":"Link to download",
            "Topic":"hotel icon case study download",
            "Date":"17/03/2017",
            "Content":"PDF",
            "Objective":"Consideration",
            "Content brief":"pdf document"
         },
         {
            "Category":"hospitality",
            "Index":"3.2",
            "Medium":"Linkedin + Twitter",
            "Topic":"Hotel icon case on Guest engagement",
            "Date":"20/03/2017",
            "Content":"Link",
            "Objective":"Consideration",
            "Content brief":"Guest Satisfaction"
         },
        //  {
        //     "Category":"hospitality",
        //     "Index":"3.3",
        //     "Medium":"Hubspot + Mail chimp",
        //     "Topic":"Email Case study Hotel Icon",
        //     "Date":"20/03/2017",
        //     "Content":"Email",
        //     "Objective":"Consideration",
        //     "Content brief":"Hotel icon email"
        //  },
         {
            "Category":"hospitality",
            "Index":"4.0",
            "Medium":"Website",
            "Topic":"Revving up RevPAR",
            "Date":"31/03/2017",
            "Content":"blog",
            "Objective":"Subscribe to blogs",
            "Content brief":"Rev Par challenges in the industry"
         },
         {
            "Category":"hospitality",
            "Index":"4.1",
            "Medium":"Linkedin + Twitter",
            "Topic":"Generating Revenue in challenging industry",
            "Date":"14/04/2017",
            "Content":"Link",
            "Objective":"Awareness",
            "Content brief":"Rev Par"
         },
         {
            "Category":"hospitality",
            "Index":"4.2",
            "Medium":"Hubspot + Mail chimp",
            "Topic":"Email |Revving up RevPAR",
            "Date":"17/04/2017",
            "Content":"Email",
            "Objective":"Awareness",
            "Content brief":"Rev Par"
         },
         {
            "Category":"tourism",
            "Index":"5.0",
            "Medium":"Website",
            "Topic":"Boosting city's Economic growth with Tourism",
            "Date":"3/05/2017",
            "Content":"blog",
            "Objective":"Awareness",
            "Content brief":"Toursim in Japan"
         },
         {
            "Category":"tourism",
            "Index":"5.1",
            "Medium":"Linkedin + Twitter",
            "Topic":"Tourism & Growth",
            "Date":"4/05/2017",
            "Content":"Link",
            "Objective":"Awareness",
            "Content brief":"Travel tourism"
         },
         {
            "Category":"tourism",
            "Index":"5.2",
            "Medium":"Hubspot + Mail chimp",
            "Topic":"Email| Tourism Growth",
            "Date":"8/05/2017",
            "Content":"Email",
            "Objective":"Awareness",
            "Content brief":"Travel tourism"
         },
        //  {
        //     "Category":"hospitality",
        //     "Index":"6.0",
        //     "Medium":"Website",
        //     "Topic":"Struggles of differentiation",
        //     "Date":"13/04/2017",
        //     "Content":"blog",
        //     "Objective":"Subscribe",
        //     "Content brief":"Standing out from the competiton"
        //  },
        //  {
        //     "Category":"hospitality",
        //     "Index":"6.1",
        //     "Medium":"link to download",
        //     "Topic":"Case study on differentiation",
        //     "Date":"1/05/2017",
        //     "Content":"PDF",
        //     "Objective":"Consideration",
        //     "Content brief":"Solutions to best beat the competiton"
        //  },
        //  {
        //     "Category":"hospitality",
        //     "Index":"6.2",
        //     "Medium":"Linkedin + Twitter",
        //     "Topic":"Key figures on differentiation",
        //     "Date":"1/05/2017",
        //     "Content":"social post",
        //     "Objective":"Awareness",
        //     "Content brief":"Struggels of differentiation"
        //  },
        //  {
        //     "Category":"hospitality",
        //     "Index":"6.3",
        //     "Medium":"Hubspot + Mail chimp",
        //     "Topic":"Email | Key struggeles of differentiation",
        //     "Date":"3/05/2017",
        //     "Content":"Email",
        //     "Objective":"Awareness",
        //     "Content brief":"Struggels of differentiation"
        //  },
        //  {
        //     "Category":"tourism",
        //     "Index":"7.0",
        //     "Medium":"Website",
        //     "Topic":"Targeting the modern travellers",
        //     "Date":"16/05/2017",
        //     "Content":"blog",
        //     "Objective":"Awareness",
        //     "Content brief":"Millennials"
        //  },
        //  {
        //     "Category":"travel",
        //     "Index":"7.1",
        //     "Medium":"Linkedin + Twitter",
        //     "Topic":"Milleniums guide",
        //     "Date":"25/05/2017",
        //     "Content":"social post",
        //     "Objective":"Awareness",
        //     "Content brief":"Modern traveller"
        //  },
        //  {
        //     "Category":"travel",
        //     "Index":"7.2",
        //     "Medium":"Hubspot + Mail chimp",
        //     "Topic":"Email | A millennial's Guide",
        //     "Date":"5/06/2017",
        //     "Content":"Email",
        //     "Objective":"Awareness",
        //     "Content brief":"Modern traveller"
        //  }
      ]
    }
  }

  // visaulization
  draw_visualization (size, vm) {

    var width = size[0],
        height = size[1];

    var svg = vm.wrap;
    var data = vm.data;
    var medium = {
      "blog":	"Website",
      "social post":	"Linkedin + Twitter",
      "Email":	"Hubspot + Mail chimp",
      "PDF":	"Link to download",
      "Link":	"Linkedin + Twitter"
    }

    var category = _.uniq(data.map(function(d){ return d.Content }))

    var line = svg.append("g").attr("class", "category_lines").selectAll("g")
          .data(category)
        .enter().append("g")
        .attr("transform", function(d,i){ return "translate(0," + ( (height / 2) + ( vm.spacing / ( category.length - 1 ) * i) - vm.spacing / 2 ) + ")"});

    line.append("text")
      .attr("x", 0 )
      .attr("y", -6)
      .text(function(d, i){ return category[i]});

    line.append("text")
      .attr("x", 0 )
      .attr("y", 10)
      .attr("font-size", "70%")
      .attr("opacity", ".7")
      .text(function(d, i){ return medium[category[i]]});

    line.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", width)
        .attr("y2", 0)
        .attr("stroke", "gray" )
        .attr("stroke-width", 1 )
        .attr("stroke-linecap", "round");

      // define the x scale (horizontal)
      var mindate = d3.min(data, function(d){ return moment(d.Date, "DD/MM/YYYY") }),
          maxdate = d3.max(data, function(d){ return moment(d.Date, "DD/MM/YYYY") });

      var x = d3.time.scale()
        .domain([mindate, maxdate])
        .range([width/10, width - width/4]);

        var link_dataset = []

        data.forEach(function(d){
          if (d.Index.split('.')[1] > 0){
            var temp = d.Index.split(".")
            temp[1] -= 1
            var from = temp.join(".")
            var to = d.Index
            link_dataset.push({
              "from": data[_.findIndex(data, function(i){ return i.Index == from})],
              "to": data[_.findIndex(data, function(i){ return i.Index == to})],
            })
          }
        })

        var links = svg.append("g").attr("class", "links")
          .selectAll("line")
            .data(link_dataset)
          .enter().append("line")
            .attr("x1", function(d){
              return x(moment(d.from.Date, "DD/MM/YYYY"))
            })
            .attr("y1", function(d){
              var i = _.indexOf(category, d.from.Content)
              return (height / 2) + ( vm.spacing / ( category.length - 1 ) * i) - vm.spacing / 2
            })
            .attr("x2", function(d){ return x(moment(d.to.Date, "DD/MM/YYYY"))})
            .attr("y2", function(d){
              var i = _.indexOf(category, d.to.Content)
              return (height / 2) + ( vm.spacing / ( category.length - 1 ) * i) - vm.spacing / 2
            })
            .attr("stroke", "gray" )
            .attr("stroke-width", 8 )
            .attr("stroke-linecap", "round");

      var nodes = svg.append("g").attr("class", "nodes")
          .selectAll("g")
            .data(data)
          .enter().append("g")
          // .attr("transform", "translate(10,10)")

      nodes.append("circle")
          .attr("cx", function(d) { return x(moment(d.Date, "DD/MM/YYYY")) })
          .attr("cy", function(d){
            var i = _.indexOf(category, d.Content)
            return (height / 2) + ( vm.spacing / ( category.length - 1 ) * i) - vm.spacing / 2
          })
          .attr("r", 20)
          .style("fill", "white")
          .attr("stroke", "gray" )
          .attr("stroke-width", 8 );



  }

}
