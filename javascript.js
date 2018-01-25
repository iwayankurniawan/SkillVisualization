$(function() {

	var graph = new Graph($("#graph"));

});



var Graph = function (container){


  // Variables
  var body = d3.select('body');
  var margin = { top: 25, right: 300, bottom: 150, left: 200 }; //change position of the graph;
  var h = 600 - margin.top - margin.bottom; //height of axis;
  var w = 1500 - margin.left - margin.right; //width of axis
  var formatPercent = d3.format(','); //format the Y Axis number



    d3.csv('data.csv', function (data) {

    // Scales
    var colorScale = d3.scale.category20()
    var xScale = d3.scale.linear()
      .domain([
        d3.min([0,d3.min(data,function (d) { return d.dataAnalysis })]),
        //d3.max([0,d3.max(data,function (d) { return d.dataAnalysis })])
        d3.max([0,30])
        ])
      .range([0,w])
    var yScale = d3.scale.linear()
      .domain([
        d3.min([0,d3.min(data,function (d) { return d.teamWork })]),
        //d3.max([0,d3.max(data,function (d) { return d.teamWork })])
        d3.max([0,30])
        ])
      .range([h,0])
    // SVG
    var svg = body.append('svg')
        .attr('height',h + margin.top + margin.bottom)
        .attr('width',w + margin.left + margin.right)
      .append('g')
        .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
    // X-axis
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .tickFormat(formatPercent)
      .ticks(5)
      .orient('bottom')
    // Y-axis
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .tickFormat(formatPercent)
      .ticks(5)
      .orient('left')
    // Circles
    var circles = svg.selectAll('circle')
        .data(data)
        .enter()
      .append('circle')
        .attr('cx',function (d) { return xScale(d.dataAnalysis) })
        .attr('cy',function (d) { return yScale(d.teamWork) })
        .attr('r','10')
        .attr('stroke','black')
        .attr('stroke-width',1)
        .attr('fill',function (d,i) { return colorScale(i) })
        .on('mouseover', function () {
          d3.select(this)
            .transition()
            .duration(500)
            .attr('r',20)
            .attr('stroke-width',3)
        })
        .on('mouseout', function () {
          d3.select(this)
            .transition()
            .duration(500)
            .attr('r',10)
            .attr('stroke-width',1)
        })
        .append('title')
        .attr("id","toolTipText") // Tooltip
          .text( function (d) { return d.Alias +
                               '\nProgramming Skill: ' +formatPercent(d.programmingSkills) +
                               '\nDrawing Skill: ' +formatPercent(d.drawingSkill) +
                               '\nUX Evaluation: ' +formatPercent(d.userEvaluation) +
                               '\nData Analysis: ' +formatPercent(d.dataAnalysis) +
                               '\nTeam Work: ' + formatPercent(d.teamWork) })


    // X-axis
    svg.append('g')
        .attr('class','axis')
        .attr('transform', 'translate(0,' + h + ')')
        .call(xAxis)
      .append('text') // X-axis Label
        .attr('class','label')
        .attr('y',-10)
        .attr('x',w)
        .attr('dy','.71em')
        .attr("id","xLabel")
        .style('text-anchor','end')
        .text("Data Analysis")


    // Y-axis
    svg.append('g')
        .attr('class', 'axis')
        .call(yAxis)
      .append('text') // y-axis Label
        .attr('class','label')
        .attr('transform','rotate(-90)')
        .attr('x',0)
        .attr('y',5)
        .attr('dy','.71em')
        .style('text-anchor','end')
        .text('Team Work Skill')
    })

    //Update Data Programming Skill
    function updateDataProgrammingSkill() {

      d3.csv('data.csv', function (data) {

      var svg = d3.select("body").transition();

      // Scales
      var colorScale = d3.scale.category20()
      var xScale = d3.scale.linear()
        .domain([
          d3.min([0,30]),
          d3.max([0,30])
          ])
        .range([0,w])
      var yScale = d3.scale.linear()
        .domain([
          d3.min([0,30]),
          d3.max([0,30])
          ])
        .range([h,0])

      // Change X axis label
      d3.select("#xLabel").text("Programming Skill");

      // Circles
      svg.selectAll('circle').duration(1250)
          .attr('cx',function (d) { return xScale(d.programmingSkills) })
          .attr('cy',function (d) { return yScale(d.teamWork) })
          .attr('r','10')
          .attr('stroke','black')
          .attr('stroke-width',1)
          .attr('fill',function (d,i) { return colorScale(i) })
      });
    }

    //Update Data Programming Skill
    function updateDataDrawingSkill() {

      d3.csv('data.csv', function (data) {

      var svg = d3.select("body").transition();

      // Scales
      var colorScale = d3.scale.category20()
      var xScale = d3.scale.linear()
        .domain([
          d3.min([0,30]),
          d3.max([0,30])
          ])
        .range([0,w])
      var yScale = d3.scale.linear()
        .domain([
          d3.min([0,30]),
          d3.max([0,30])
          ])
        .range([h,0])

      // Change X axis label
      d3.select("#xLabel").text("Drawing Skill");

      // Circles
      svg.selectAll('circle').duration(1250)
          .attr('cx',function (d) { return xScale(d.drawingSkill) })
          .attr('cy',function (d) { return yScale(d.teamWork) })
          .attr('r','10')
          .attr('stroke','black')
          .attr('stroke-width',1)
          .attr('fill',function (d,i) { return colorScale(i) })
      });
    }

    //Update Data Programming Skill
    function updateDataUXSkill() {

      d3.csv('data.csv', function (data) {

      var svg = d3.select("body").transition();

      // Scales
      var colorScale = d3.scale.category20()
      var xScale = d3.scale.linear()
        .domain([
          d3.min([0,30]),
          d3.max([0,30])
          ])
        .range([0,w])
      var yScale = d3.scale.linear()
        .domain([
          d3.min([0,30]),
          d3.max([0,30])
          ])
        .range([h,0])

      // Change X axis label
      d3.select("#xLabel").text("User Evaluation Skill");

      // Circles
      svg.selectAll('circle').duration(1250)
          .attr('cx',function (d) { return xScale(d.userEvaluation) })
          .attr('cy',function (d) { return yScale(d.teamWork) })
          .attr('r','10')
          .attr('stroke','black')
          .attr('stroke-width',1)
          .attr('fill',function (d,i) { return colorScale(i) })
      });
    }

    //Update Data Programming Skill
    function updateDataDataAnalysisSkill() {

      d3.csv('data.csv', function (data) {

      var svg = d3.select("body").transition();

      // Scales
      var colorScale = d3.scale.category20()
      var xScale = d3.scale.linear()
        .domain([
          d3.min([0,30]),
          d3.max([0,30])
          ])
        .range([0,w])
      var yScale = d3.scale.linear()
        .domain([
          d3.min([0,30]),
          d3.max([0,30])
          ])
        .range([h,0])

      // Change X axis label
      d3.select("#xLabel").text("Data Analysis");

      // Circles
      svg.selectAll('circle').duration(1250)
          .attr('cx',function (d) { return xScale(d.dataAnalysis) })
          .attr('cy',function (d) { return yScale(d.teamWork) })
          .attr('r','10')
          .attr('stroke','black')
          .attr('stroke-width',1)
          .attr('fill',function (d,i) { return colorScale(i) })
      });
    }


    var btn= document.getElementById("programmingSkill");
    var listener= function(evt){
        updateDataProgrammingSkill();
    }
    btn.addEventListener("click", listener , false);

    var btn1= document.getElementById("drawingSkill");
    var listener1= function(evt){
        updateDataDrawingSkill();
    }
    btn1.addEventListener("click", listener1 , false);

    var btn2= document.getElementById("userEvaluationSkill");
    var listener2= function(evt){
        updateDataUXSkill();
    }
    btn2.addEventListener("click", listener2 , false);

    var btn3= document.getElementById("statisticalSkill");
    var listener3= function(evt){
        updateDataDataAnalysisSkill();
    }
    btn3.addEventListener("click", listener3 , false);

}
