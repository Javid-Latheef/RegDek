import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

class AmCharts extends Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
    
        chart.paddingRight = 10;
        chart.paddingLeft = 10;
        chart.paddingTop = 10;
        chart.paddingBottom = 10;

        chart.data = this.generateChartData();
        
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.baseInterval = {
          "timeUnit": "minute",
          "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.title.text = "Test Case Count";
        
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Test Cases: [bold]{valueY}[/]";
        series.fillOpacity = 0.3;
        
        
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineY.opacity = 0;
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series);
        
        
        dateAxis.start = 0.8;
        dateAxis.keepSelection = true;
    
        this.chart = chart;
      }
    
      componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }

      generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);
    
        // and generate 500 data items
        let visits = 500;
        for (var i = 0; i < 500; i++) {
            let newDate = new Date(firstDate);
            // each time we add one minute
            newDate.setMinutes(newDate.getMinutes() + i);
            // some random number
            visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
            // add data item to the array
            chartData.push({
                date: newDate,
                visits: visits
            });
        }
        return chartData;
    }
    
      render() {
        return (
          <div id="chartdiv" style={{ width: "100%", height: "400px" }}></div>
        );
      }
}

export default AmCharts;  