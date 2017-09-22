;class Calendar extends Visualization{

  // update options
  update_options (opt = {}) {
    this.options = $.extend({
      // 'data':      "_calendar",
      "cellsize":   25,
      "from":       "2016-03-1",
      "to":         "2016-12-31",
    }, this.options)
  }

  // update default dataset
  update_data (dat = null) {
    if (this.options.data == null){
      this.options.data = {
        "_20101001": {
          "Date":"2010-10-01",
          "value":"10829.68",
        },
        "_20100930": {
          "date":"2010-09-30",
          "value":"10788.05",
        },
        "_20100929": {
          "date":"2010-09-29",
          "value":"10835.28",
        }
      }
    }
  }

  // visaulization
  draw_visualization (size, vm) {
    var width = vm.width,
        height = vm.height,
        cellSize = vm.cellsize; // cell size

    var no_months_in_a_row = Math.floor(width / (cellSize * 7 + 50));
    var shift_up = cellSize * 3;

    var day = d3.time.format("%w"), // day of the week
        day_of_month = d3.time.format("%e"), // day of the month
        day_of_year = d3.time.format("%j"),
        week = d3.time.format("%U"), // week number of the year
        month = d3.time.format("%m"), // month number
        year = d3.time.format("%Y"),
        percent = d3.format(".1%"),
        format = d3.time.format("%Y-%m-%d");

    var color = d3.scale.quantize()
        .domain([-.05, .05])
        .range(d3.range(11).map(function(d) { return "q" + d + "-11"; }));

    var svg = vm.wrap

    var mindate = d3.min(vm.data, function(d){ return moment(d.Date, "MM/DD/YY h:m a") }),
        maxdate = d3.max(vm.data, function(d){ return moment(d.Date, "MM/DD/YY h:m a") });

        vm.from = mindate.add(-1, 'days').format("YYYY-MM-DD")
        vm.to = maxdate.format("YYYY-MM-DD")

      svg.attr("class", "RdYlGn")
        .append("g")


    var amount = _.countBy(vm.data, function(d){ return moment(d.Date, "MM/DD/YY h:m a").format("YYYY-MM-DD")})
    var amount_arr = _.map(amount, function(value, key) { return amount[key] })
    var amount_min = d3.min(amount_arr)
    var amount_max = d3.max(amount_arr)

    var colorscale = d3.scale.quantize()
      .domain([amount_min,amount_max])
      .range(["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]);

    var norm = d3.scale.linear()
      .domain([amount_min,amount_max])
      .range([0,1])

// console.log(amount)
    // var values = new Array(for (var i in vm.data){ return vm.data[i].value})
    // console.log(values)
    // console.log(vm.data)
    // var norm_opacity = d3.scale.linear()
    //   .domain([0, normalize_this_max])
    //   .range([0, 1])
    //
    // var normalize_this_max = d3.max(normalize_this_max_tmp)
    // var normalize_this = d3.scale.linear()
    //   .domain([0, normalize_this_max])
    //   .range([0, 1])
    var square = svg.selectAll("g")
        .data(function(d) {
          return d3.time.days(new Date(vm.from), new Date(vm.to));
        })
      .enter().append("g")
      .attr("transform", function(d) {
        var month_padding = 1.2 * cellSize*7 * ((month(d)-1) % (no_months_in_a_row));
        var week_diff = week(d) - week(new Date(year(d), month(d)-1, 1) );
        var row_level = Math.ceil(month(d) / (no_months_in_a_row));
        return "translate(" + (day(d) * cellSize + month_padding) + "," + ((week_diff*cellSize) + row_level*cellSize*8 - cellSize/2 - shift_up) + ")"
      })

    var rect = square.append("rect")
        .attr("class", "day")
        .attr("width", cellSize)
        .attr("height", cellSize)
        .attr("x", 0)
        .attr("y", 0)
        .attr("date", function(d){ return year(d)+"-"+month(d)+"-"+day(d)})
        .style("background-color", "white")
        // .style("fill", "green")
        // .style("opacity", function(d){
        //   var temp = norm(amount[moment(d).format("YYYY-MM-DD")])
        //   return temp ? temp : 0
        // })
        .attr("fill", function(d){
          var temp = colorscale(amount[moment(d).format("YYYY-MM-DD")])
          return temp ? temp : 0
        })
        .datum(format);

      square.append("text")
        .style("text-anchor", "middle")
        .text(function(d){
          var _day = moment(d, "MM/DD/YY h:m a").format("D")
          return _day
        })

    var amount_weekdays = _.countBy(vm.data, function(d){ return moment(d.Date, "MM/DD/YY h:m a").format("dddd")})
    var count_hours = {}
    var date_list = _.map(vm.data, function(d){ return d.Date})
    _.each(date_list, function(d){
      var _temp = moment(d, "MM/DD/YY h:m a")
      var _day = _temp.format("dddd")
      var _hour = _temp.format("H")
      if (count_hours[_day]){
        count_hours[_day][_hour] += 1
      } else {
        count_hours[_day] = {
          "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0, "16": 0, "17": 0, "18": 0, "19": 0, "20": 0, "21": 0, "22": 0, "23": 0, "24": 0
        }
      }

    })
    // var amount_arr_weekdays = _.map(amount, function(value, key) { return amount[key] })

    var hotel_list = _.uniq(_.map(vm.data, function(d){
      return d["Service.Counter"].split(" - ")[1]
    }), _.identity)

    var hotel_count = {}
    _.each(vm.data, function(d){
      var temp = []
      if (hotel_count[d["Service.Counter"].split(" - ")[1]]) {
        hotel_count[d["Service.Counter"].split(" - ")[1]] += 1
      } else {
        hotel_count[d["Service.Counter"].split(" - ")[1]] = 1
      }
    })

    var strem = {}
    var strem_array = []
    _.each(vm.data, function(d){
      var _key = d["Deal Name"]
      var _value = 1
      var _date = moment(d["Date"], "MM/DD/YY h:m a").format("L")
      if (strem[_key+"_"+_date]) {
        strem[_key+"_"+_date] += 1
      } else {
        strem[_key+"_"+_date] = 1
      }
    })
    for (var k in strem) {
      var __key = k.split("_")[0]
      var __value = strem[k]
      var __date = k.split("_")[1]
      strem_array.push({
        "key": __key,
        "value": __value/100,
        "date": __date
      })
    }
    console.log(strem_array);

    var month_titles = svg.selectAll(".month-title")  // Jan, Feb, Mar and the whatnot
          .data(function(d) {
            return d3.time.months(new Date(vm.from), new Date(vm.to)); })
        .enter().append("text")
          .text(monthTitle)
          .attr("x", function(d, i) {
            var month_padding = 1.2 * cellSize*7* ((month(d)-1) % (no_months_in_a_row));
            return month_padding;
          })
          .attr("y", function(d, i) {
            var week_diff = week(d) - week(new Date(year(d), month(d)-1, 1) );
            var row_level = Math.ceil(month(d) / (no_months_in_a_row));
            return (week_diff*cellSize) + row_level*cellSize*8 - cellSize - shift_up;
          })
          .attr("class", "month-title")
          .attr("d", monthTitle);

    var year_titles = svg.selectAll(".year-title")  // Jan, Feb, Mar and the whatnot
          .data(function(d) {
            return d3.time.years(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append("text")
          .text(yearTitle)
          .attr("x", function(d, i) { return width/2 - 100; })
          .attr("y", function(d, i) { return cellSize*5.5 - shift_up; })
          .attr("class", "year-title")
          .attr("d", yearTitle);


    //  Tooltip Object
    var tooltip = d3.select("body")
      .append("div").attr("id", "tooltip")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .text("a simple tooltip");

    var data = d3.nest()
      .key(function(d) { return d.Date; })
      .rollup(function(d) { return (d[0].Close - d[0].Open) / d[0].Open; })
      .map(vm.data);

    rect.filter(function(d) { return d in data; })
        .attr("class", function(d) { return "day " + color(data[d]); })
      .select("title")
        .text(function(d) { return d + ": " + percent(data[d]); });

    //  Tooltip
    // rect.on("mouseover", mouseover);
    // rect.on("mouseout", mouseout);
    // function mouseover(d) {
    //   tooltip.style("visibility", "visible");
    //   var percent_data = (data[d] !== undefined) ? percent(data[d]) : percent(0);
    //   var purchase_text = d + ": " + percent_data;
    //
    //   tooltip.transition()
    //               .duration(200)
    //               .style("opacity", .9);
    //   tooltip.html(purchase_text)
    //               .style("left", (d3.event.pageX)+30 + "px")
    //               .style("top", (d3.event.pageY) + "px");
    // }
    // function mouseout (d) {
    //   tooltip.transition()
    //           .duration(500)
    //           .style("opacity", 0);
    //   var $tooltip = $("#tooltip");
    //   $tooltip.empty();
    // }


    function dayTitle (t0) {
      return t0.toString().split(" ")[2];
    }
    function monthTitle (t0) {
      return t0.toLocaleString("en-us", { month: "long" });
    }
    function yearTitle (t0) {
      return t0.toString().split(" ")[3];
    }
  }
}
