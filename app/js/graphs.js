 var width = window.innerWidth > 400 ? 400 : window.innerWidth,
   height = window.innerWidth > 400 ? 400 : window.innerWidth,
   barHeight = height / 2 - 40;

 var formatNumber = d3.format("s");

 var color = d3.scale.ordinal()
   .range(["rgba(18,176,229,0.45)", "rgba(18,176,229,0.5)", "rgba(18,176,229,0.55)", "rgba(18,176,229,0.6)", "rgba(18,176,229,0.65)", "rgba(18,176,229,0.7)"]);

 var svg = d3.select('body #circle-bar').append("svg")

   .attr("width", width)
   .attr("height", height)
   .attr("margin-left", 300)
   .append("g")
   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"

   );

 (function () {

 })()

 d3.csv("data.csv", function (error, data) {

   data.sort(function (a, b) {
     return b.value - a.value;
   });

   var extent = d3.extent(data, function (d) {
     return d.value;
   });
   var extent = [0, 100];
   var barScale = d3.scale.linear()
     .domain(extent)
     .range([0, barHeight]);

   var keys = data.map(function (d, i) {
     return d.name;
   });
   var numBars = keys.length;

   var x = d3.scale.linear()
     .domain(extent)
     .range([0, -barHeight]);

   var xAxis = d3.svg.axis()
     .scale(x).orient("left")
     .ticks(3)
     .tickFormat(formatNumber);

   // var infoRect=svg.append("g")
   //   .append("text")
   //   .text('yoyo')

   var circles = svg.selectAll("circle")
     .data(x.ticks(3))
     .enter().append("circle")
     .attr("r", function (d) {
       return barScale(d);
     })
     .style("fill", "rgba(18,176,229,0.1)")
     // .style("stroke", "black")
     .style("stroke-dasharray", "2,2")
     .style("stroke-width", ".5px");

   var arc = d3.svg.arc()
     .startAngle(function (d, i) {
       return (i * 2 * Math.PI) / numBars;
     })
     .endAngle(function (d, i) {
       return ((i + 1) * 2 * Math.PI) / numBars;
     })
     .innerRadius(0);

 
   var rot = 0;
   var segments = svg.selectAll("path")
     .data(data)
     .enter().append("path")
     .each(function (d) {
       d.outerRadius = 0;
     })
     .style("fill", function (d) {
       return color(d.name);
     })
     .attr("d", arc)
     .on('mouseover', function () {
       d3.select(this).style("cursor", "pointer")
     })
     .on('mouseover',function(){
       d3.select(this).style("fill", "rgba(18, 176, 229,1)")
     })
     .on('mouseleave',function(){
       if(!d3.select(this).classed('segselected')){
        d3.select(this).style("fill", "rgba(18, 176, 229,0.5)")
       }
       
     })
     .on('click', function (d, i) {
      
       d3.select(this.parentNode).selectAll('path').style("fill", "rgba(18, 176, 229,0.5)");
       d3.select(this).style("fill", "rgba(18, 176, 229,1)");
       d3.select(this).classed("segselected", true);
       TweenLite.to('#circle-bar', 0.3, {
         onComplete: rotateCircleBarGraph(d, i)
       });
       

       svg.append("div")
         .text('asd')


       var that = this;

     })
     

   segments.transition().ease("elastic").duration(1000).delay(function (d, i) {
       return (25 - i) * 100;
     })
     .attrTween("d", function (d, index) {
       var i = d3.interpolate(d.outerRadius, barScale(+d.value));
       return function (t) {
         d.outerRadius = i(t);
         return arc(d, index);
       };
     });

   function rotateCircleBarGraph(d, i) {

     TweenLite.to('#circle-bar', 2, {
       rotation: function () {
         return 90 - 32.727272727272 * i - 16.35
       },
       transformOrigin: "50% 50%",
       ease: Power4.easeOut,
       onComplete: function () {
         TweenLite.to(['#ds', '#dsline'], 1, {
           opacity: 1
         });
         $('#ds h3').text(d.name);
         $('#ds p').text(d.writeUp);
       }
     })
   }
   svg.append("circle")
     .attr("r", barHeight)
     .classed("outer", true)
     .style("fill", "none")
     .style("stroke", "red")
     .style("stroke-width", "0");

   var lines = svg.selectAll("line")
     .data(keys)
     .enter().append("line")
     .attr("y2", -barHeight - 20)
     .style("stroke", "#777")
     .style("stroke-width", ".5px")
     .attr("transform", function (d, i) {
       return "rotate(" + (i * 360 / numBars) + ")";
     });

   svg.append("g")
     .attr("class", "x axis")
     .call(xAxis);

   // Labels
   var labelRadius = barHeight * 1.06;

   var labels = svg.append("g")
     .classed("labels", true);

   labels.append("def")
     .append("path")
     .attr("id", "label-path")
     .attr("d", "m0 " + -labelRadius + " a" + labelRadius + " " + labelRadius + " 0 1,1 -0.01 0");

   labels.selectAll("text")
     .data(data)
     .enter().append("text")
     .style("text-anchor", "middle")
     .style("font-weight", "600")
     .style("font-size", "12px")
     .style("font-family", "Assistant")
     .attr("class", "names")
     .style("fill", function (d, i) {
       return "#444";
     })
     .append("textPath")
     .attr("xlink:href", "#label-path")
     .attr("startOffset", function (d, i) {
       return i * 100 / numBars + 50 / numBars + '%';
     })
     .text(function (d) {
       return d.name.toUpperCase();
     })
     

 });

 //spider chart



 var barHeight = height / 2 - 40;

 var colorSpider = d3.scale.ordinal()
   .range(["rgba(18,176,229,0.1)", "rgba(18,176,229,0.4)", "rgba(18,176,229,0.3)", "rgba(18,176,229,0.2)", "rgba(18,176,229,0.1)"]);

 var tickValues = [20, 40, 60, 80, 100];

 var svgSpider = d3.select('body #spider-chart').append("svg")
   .attr("width", width + 200)
   .attr("height", height)
   .append("g")
   .attr("transform", "translate(" + (width + 200) / 2 + "," + height / 2 + ")");

 d3.json("data.json", function (error, data) {

   var numBars = data.data.length;

   var radius = d3.scale.linear()
     .domain([0, 100])
     .range([0, barHeight]);

   var line = d3.svg.line.radial()
     .interpolate("linear-closed")
     .radius(function (d) {
       return radius(d.count);
     })
     .angle(function (d, i) {
       return (i * 2 * Math.PI / numBars);
     });

   var area = d3.svg.area.radial()
     .interpolate(line.interpolate())
     .innerRadius(radius(0))
     .outerRadius(line.radius())
     .angle(line.angle());

   tickValues.sort(function (a, b) {
     return b - a;
   });

   var tickPath = svgSpider.selectAll(".tickPath")
     .data(tickValues).enter()
     .append("path")
     .attr("class", "tickPath")
     .attr("d", function (d) {
       var tickArray = [];
       for (i = 0; i < numBars; i++) tickArray.push({
         count: d
       });
       return area(tickArray);
     })
     .style("fill", function (d) {
       return colorSpider(d);
     })
     .style("stroke", function (d, i) {
       return (i === 0) ? "white" : "rgba(0,0,0,0.2)";
     })
     .style("stroke-width", function (d, i) {
       return (i === 0) ? "0.5px" : ".5px";
     });

   var lines = svgSpider.selectAll("line")
     .data(data.data)
     .enter().append("g")
     .attr("class", "lines");

   lines.append("line")
     .attr("y2", -barHeight)
     .style("stroke", "#444")
     .style("stroke-width", ".5px")
     .attr("transform", function (d, i) {
       return "rotate(" + (i * 360 / numBars) + ")";
     });

   lines.append("text")
     .attr("class", "names")
     .attr("x", function (d, i) {
       return (barHeight + 15) * Math.sin((i * 2 * Math.PI / numBars));
     })
     .attr("y", function (d, i) {
       return -(barHeight + 15) * Math.cos((i * 2 * Math.PI / numBars));
     })
     .attr("text-anchor", function (d, i) {
       if (i === 0 || i === numBars / 2) {
         return "middle";
       } else if (i <= numBars / 2) {
         return "begin";
       } else {
         return "end";
       }
     })
     .style("font-weight", "600")
     .style("font-size", "12px")
     .style("font-family", "Assistant")
     .style("fill", "#444")
     .text(function (d) {
       return d.skill.toUpperCase();
     })
     .on('click', function (d) {

       d3.select(this.parentNode.parentNode).selectAll('text').style("fill", "#444")
       $('#spider-infobox h3').text(d.skill);
       $('#spider-infobox p').text(d.count);

       d3.select(this).style("fill", "rgba(18,176,229,1)")
     })
     .on('mouseover', function () {
       d3.select(this).style("cursor", "pointer")
     })




   layer = svgSpider.selectAll(".layer")
     .data([data]).enter()
     .append("path")
     .attr("class", "layer")
     .attr("d", function (d) {
       return area(d.data);
     })
     .attr("fill", "none")
     .attr("stroke", "#08607d")
     .attr("stroke-width", "2px")


 });