import axios from "axios";
import React, { Component } from "react";

export default class AddItem extends Component {
    state = {
      accounts: [],
      show: false,
      Song_ID: "",
      Song_Title: "",
      Artist_Name: "",
      Album_Name: "",
      Song_Location:"",
      Description:""
      
        
    }

    handleChange =(event)=>{
        this.setState({
            [event.target.name ]: event.target.value
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);

        const url = "https://ems-react-app-default-rtdb.firebaseio.com/accounts.json"
        const data = {...this.state}
      
        axios.post(url , data ).then((resp)=>{
            console.log(resp);
            if (resp.status === 200) {
                alert("Song added Successfully")
                this.setState({
                  Song_ID: "",
                  Song_Title: "",
                   Artist_Name: "",
                   Album_Name: "",
                   Song_Location:"",
                  Description:""  
                    
                })

                this.props.history.push("/home")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

  render() {
    return (
      <div className="container card col-md-6">
        <form className="container card-body" style={{color:"brown"}} onSubmit={this.handleSubmit}>
        <div className="form-group " >
            <label htmlFor="musicid">Song Id</label>
            <input
              type="number"
              className="form-control"
              id="Song_ID"
              aria-describedby="emailHelp"
              name="Song_ID"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="SongTitlename"> Song_Title</label>
            <input
              type="text"
              className="form-control"
              id="SongTitle"
              aria-describedby="emailHelp"
              name="SongTitle"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Artist">Artist_Name</label>
            <input
              type="text"
              className="form-control"
              id="Artist_Name"
              aria-describedby="emailHelp"
              name="Artist_Name"
              value={this.state.qty}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scn">Album_Name</label>
            <input
              type="text"
              className="form-control"
              id="Album_Name"
              aria-describedby="emailHelp"
              name="Album_Name"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scn">Song_Location</label>
            <input
              type="text"
              className="form-control"
              id="Song_Location"
              aria-describedby="emailHelp"
              name="Song_Location"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scn">Description</label>
            <input
              type="text"
              className="form-control"
              id="Description"
              aria-describedby="emailHelp"
              name="Description"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>


          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}