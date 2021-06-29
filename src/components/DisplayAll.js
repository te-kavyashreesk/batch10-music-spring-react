import axios from "axios";
import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class ShowItem extends Component {
  state = {
    accounts: [],
    show: false,
    Song_ID: "",
    Song_Title: "",
    Artist_Name: "",
    Album_Name: "",
    Song_Location:"",
    Description:""
    
  };

  componentDidMount() {
    axios
      .get("https://localhost:8080/e/getAll")
      .then((resp) => {
        const fetchedAccounts = [];

        for (const key in resp.data) {
          console.log(resp.data[key]);
          fetchedAccounts.push({
            id: key,
            ...resp.data[key],
          });
        }

        console.log(fetchedAccounts);
        this.setState((data) => {
          console.log(data);
          return {
            accounts: fetchedAccounts,
          };
        });

        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeAccount = (account) => {
    console.log(account);
    const url=`https://localhost:8080/e/delete/$this.state.id`
    axios
      .delete(url)
      .then((resp) => {
        console.log(resp.status);
        const updatedAccounts = this.state.accounts.filter((acc) => {
          if (acc.id === account.id) {
            return false;
          } else {
            return true;
          }
        });

        this.setState({
          accounts: updatedAccounts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  updateAccount = (account) => {
    console.log(account);
    this.setState({
      ...account,
      show: true,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  update = () => {
    console.log(this.state);
    const url = `https://localhost:8080/e/update`
    const { Song_ID, Song_Title, Artist_Name, Album_Name, Song_Location, Description}

    const acc = {Song_ID, Song_Title, Artist_Name, Album_Name, Song_Location, Description };

    axios
      .put(url, acc)
      .then((resp) => {
        console.log(resp);
        const updatedData = resp.data;

     const updatedRecords =  this.state.accounts.map((acc)=>{
            if ( acc.id === this.state.id ) {
                return {
                    id:this.state.id,
                    ...updatedData
                }
            }else{
                return acc;
            }
        })

        this.setState({
            show:false,
            accounts : updatedRecords
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>List Of Songs</h1>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Song_ID</th>
              <th scope="col">Song_Title</th>
              <th scope="col">Artist_Name</th>
              <th scope="col">Album_Name</th>
              <th scope="col">Song_Location</th>
              <th scope="col">Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.accounts.map((account, index) => {
              return (
                <tr key={account.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{account.Song_ID}</td>
                  <td>{account.Song_Title}</td>
                  <td>{account.Artist_Name}</td>
                  <td>{account.Album_Name}</td>
                  <td>{account.Song_Location}</td>
                  <td>{account.Description}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        this.updateAccount(account);
                      }}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.removeAccount(account);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form className="container card-body">
            <div className="form-group " >
            <label htmlFor="musicid">Song_ID Id</label>
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
            <label htmlFor="SongTitlename"> Song Title</label>
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

            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.handleClose();
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.update();
              }}
            >
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}