import React, { Component } from 'react';
import { output } from '../../assets/output'
import DataTable from 'react-data-table-component';
import Select from 'react-select';
import { Button } from 'reactstrap';
import './RegressionTable.css';
import axios from 'axios';

const columns = [
    {
      name: 'Method',
      selector: 'methodName',
      sortable: true,
      wrap: true
    },
    {
      name: 'Class',
      selector: 'className',
      sortable: true,
      wrap: true
    },
    {
      name: 'Priority',
      selector: 'priority',
      sortable: true,
      wrap: true
    },
    {
      name: 'Groups',
      selector: row => row['groups'].join(','),
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

  const priorityOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' }
  ];
  
  const groupOptions = [
    { value: 'Login', label: 'Login' },
    { value: 'Home', label: 'Home' },
    { value: 'Invalid', label: 'Invalid' },
    { value: 'Title', label: 'Title' },
    { value: 'EmptyCredentials', label: 'EmptyCredentials' },
    { value: 'validCredentials', label: 'validCredentials' },
    { value: 'AddCustomer', label: 'AddCustomer' },
    { value: 'Navigations', label: 'Navigations' },
    { value: 'ShowCustomer', label: 'ShowCustomer' },
    { value: 'Logout', label: 'Logout' },
  ]

 //let output = []; 

class RegressionTable extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data : output,
            methodName: "",
            description: "",
            selectedPriorityOption: null,
            selectedGroupOption: null,
            persons: []
        }
    }

    componentDidMount() {
      // axios.get(`http://localhost:3001/api/getData`)
      //   .then(res => {
      //     output = res.data.data
      //     this.setState({ data : output});
      //   })
    }

    handlePriorityChange = selectedPriorityOption => {
      this.setState(
        { selectedPriorityOption },
        () => this.searchList()
      );
    };

    handleGroupChange = selectedGroupOption => {
      this.setState(
        { selectedGroupOption },
        () => this.searchList()
      );
    };

    reset(){
      this.setState({
        data : output,
        methodName: "",
        description: "",
        selectedPriorityOption: null,
        selectedGroupOption: null
      });
    }

    searchList(){
      let filteredList = output.filter((item) => item["methodName"].toLowerCase().indexOf(this.state.methodName.trim().toLowerCase()) > -1 && item["description"].toLowerCase().indexOf(this.state.description.trim().toLowerCase()) > -1);
      let priorityFilteredList = [], groupFilteredList = [];
      if( this.state.selectedPriorityOption ){
        for(let i=0 ; i< filteredList.length ;i++){
          for( let j=0 ; j < this.state.selectedPriorityOption.length; j++){
            if( filteredList[i]['priority'] === parseInt(this.state.selectedPriorityOption[j].value)){
              priorityFilteredList.push(filteredList[i])
            }
          }
        }
        if(this.state.selectedGroupOption){
          for(let i=0 ; i< priorityFilteredList.length ;i++){
            for( let j=0 ; j < priorityFilteredList[i]['groups'].length; j++){
              for(let k=0 ; k < this.state.selectedGroupOption.length; k++){
                if(priorityFilteredList[i]['groups'][j].trim() === this.state.selectedGroupOption[k].value.trim()){
                  groupFilteredList.push(priorityFilteredList[i])
                }
              }
              }
            }
            let uniqueGroupFilteredList = Array.from(new Set(groupFilteredList.map(JSON.stringify))).map(JSON.parse);
            this.setState({
              data : uniqueGroupFilteredList
            })
          }
        else{
          this.setState({
            data : priorityFilteredList
          })
        }   
      }
      else{
        if(this.state.selectedGroupOption){
          for(let i=0 ; i< filteredList.length ;i++){
            for( let j=0 ; j < filteredList[i]['groups'].length; j++){
              for(let k=0 ; k < this.state.selectedGroupOption.length; k++){
                if(filteredList[i]['groups'][j].trim() === this.state.selectedGroupOption[k].value.trim()){
                  groupFilteredList.push(filteredList[i])
                }
              }
              }
            }
            let uniqueGroupFilteredList = Array.from(new Set(groupFilteredList.map(JSON.stringify))).map(JSON.parse);
            this.setState({
              data : uniqueGroupFilteredList
            })

          }
          else{
            this.setState({
              data : filteredList
            })
          }

      }
      
    }

    handleChange(data){
      console.log('Selected Rows: ', data);
    }

  
	render() {	
        const { selectedPriorityOption , selectedGroupOption} = this.state;

		return (
            <div className="regressionTableCard">
                <div className="regressionTableTitle"> Automation Test Cases</div>
                <div className="row" style={{marginTop:'30px',marginBottom:'20px'}}>
                    <div className="col-sm-3" >
                        <div className="row"> 
                          <div className="col-sm-3" style={{paddingTop:'7px'}}>Priority</div>
                          <div className="col-sm-9"><Select value={selectedPriorityOption} onChange={this.handlePriorityChange} options={priorityOptions} isMulti/></div>
                        </div>
                    </div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-3" >
                      <div className="row"> 
                          <div className="col-sm-3" style={{paddingTop:'7px'}}>Group</div>
                          <div className="col-sm-9"><Select value={selectedGroupOption} onChange={this.handleGroupChange} options={groupOptions} isMulti isSearchable/></div>
                        </div>
                    </div>
            </div>
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
		);
	}
}

export default RegressionTable;