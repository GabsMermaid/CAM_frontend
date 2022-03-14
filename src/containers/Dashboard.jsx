import React, {Component} from "react";
import axios from "axios"
import "./Dashboard.css";

class Dashboard extends Component {
  
  state = {
    selectedFile: null
  }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    axios.post('')
  }
  
  render() {
    return(
      <div className="Dashboard">
      <div className="Header">Account Dashboard</div>
        <br />
        <img alt="Person's image" /> 
        <span> 
          <b>Name</b>
        </span> 
        <br /> 
        <span>Comment</span> 
      </div> 
    );
  }
}

export default Dashboard;