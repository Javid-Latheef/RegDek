import React, { Component } from 'react';
import { jacoco } from '../../assets/jacoco'
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';
import './ChangeBasedRegression.css'

const columns = [
    {
      name: 'TestCase Name',
      selector: 'TestCaseName',
      sortable: true,
      wrap: true
    },
    {
      name: 'Package Name',
      selector: 'PackageName',
      sortable: true,
      wrap: true
    },
    {
      name: 'Method',
      selector: 'Method',
      sortable: true,
      wrap: true
    },
    {
      name: 'ClassName',
      selector: 'ClassName',
      sortable: true, 
      wrap: true   
    }
  ];

  const customStyles = {
    cells: {
      style: {
        paddingTop: '10px',
        paddingBottom: '10px',
      },
    },
  };

class ChangeBasedRegression extends Component {

     constructor (props) {
        super(props)
        this.state = {
            data : jacoco
        }
     }

     componentDidMount() {
        document.title = 'Change Based Regression';
    }

     handleChange(data){
        console.log('Selected Rows: ', data);
    }
  
      render () {
          return (
            <div className="changeBasedRegressionTableCard">
            <div className="changeBasedRegressionTableTitle"> Change Based Regression</div>
            <DataTable
                selectableRows
                onSelectedRowsChange={(data) => this.handleChange(data)}
                columns={columns}
                data={this.state.data}
                defaultSortField="title"
                pagination={true}
                highlightOnHover={true}
                striped={true}
                pointerOnHover={true}
                dense={true}
                fixedHeader={true}
                allowOverflow={false}
                customStyles={customStyles}
            />
        <div style={{textAlign:'right'}}><Button color="primary">Run</Button></div>
        </div>
          )
      }
  }
  
  export default ChangeBasedRegression