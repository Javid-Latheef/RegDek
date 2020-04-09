import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { output } from '../../assets/output';
import { objectTypeAnnotation } from '@babel/types';

 
class Pie extends Component {

    constructor (props) {
        super(props)
        this.state = {
            options : null
        }
     }

    componentDidMount() {
       let data = [];
       for( let i=1; i <= 15; i++){
           let obj = {};
           obj.name = "P"+i;
           obj.y = output.filter((item) => item['priority'] === i).length;
           if(i == 1){
               obj.sliced = true;
               obj.selected = true;
           }
           data.push(obj)
       }

       const options =  {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 439
        },
        title: {
            text: 'Test Case - Priorities'
        },
        tooltip: {
            pointFormat: '<b>{point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            colorByPoint: true,
            data: data
        }]
    }
    this.setState({options})

    }

	render() {	
		return (
			<HighchartsReact highcharts={Highcharts} options={this.state.options} />
		);
	}
}

export default Pie;