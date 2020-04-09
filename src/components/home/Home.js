import React, { Component } from 'react';
import AmCharts from '../amCharts/AmCharts';
import './Home.css';
import Pie from '../pie/Pie';
import RegressionTable from '../regressionTable/RegressionTable';

class Home extends Component {

    componentDidMount() {
        document.title = 'Home';
      }
  
      render () {
          return (
              <div>
                <div className="row amChartContainer">
                    <div className="col-sm-7 amChartCard">
                        <div className="amChartLabel">Test Case Analytics</div>
                        <AmCharts />
                    </div>
                    <div className="col-sm-5">
                        <Pie />
                    </div>
                </div>
                <div>
                    <RegressionTable />
                </div>
          </div>

          )
      }
  }
  
  export default Home