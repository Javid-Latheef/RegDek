import React, { Component } from 'react'
import {Input, InputGroup } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Login.css';
import dash from '../../assets/dash.png'

class Login extends Component {

    componentDidMount() {
        document.title = 'Login';
      }

    render () {
        return (
            <div style={{height:'100vh', display:'flex'}}>
                <div style={{flex:'0.5',background:'white'}}>
                    <div style={{paddingTop:'24%'}}>
                        <div className="headerPanel" >
                            RegDek
                        </div> 
                        <InputGroup>
                        <Input placeholder="Project Name" />
                        </InputGroup>
                        <br />
                        <InputGroup>
                        <Input placeholder="Dev URL" />
                        </InputGroup>
                        <br />
                        <InputGroup>
                        <Input placeholder="Automation URL" />
                        </InputGroup>
                        <br />
                        <InputGroup>
                        <input className="acceptCheckbox" type="checkbox" id="accept" name="accept" value="accept" />
                        <label className="acceptLabel" for="accept"> Accept</label>
                        </InputGroup>
                        <br />
                        <div className="submitPanel" >
                        <Link to="/home">
                            <input className="loginButton" type="button" value="Submit" />
                        </Link>
                        </div>
                        
                    </div>
                </div>
                <div style={{flex:'0.5',background:'rgb(64, 220, 255)'}}>
                    <div style={{paddingTop:'34%'}}>
                        <div className="dashImage"><img src={dash} className="dashImgSrc" alt="Smiley face" height="250" width="450"/></div>
                        <div className="dashText">Get the details of automation test cases</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login