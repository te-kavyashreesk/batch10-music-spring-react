import React, { Component } from 'react'

export default class Home extends Component {

    componentWillUnmount() {
        console.log("Unmounted");
    }
    
    goto =()=>{
            this.props.history.push("/showmusic")
    }
    
    render() {
        console.log(this.props);
        return (
            <div >
                <h1 style={{textAlign:'center',color:'brown',backgroundImage: 'url(https://i.picsum.photos/id/104/3840/2160.jpg?hmac=Rv0qxBiYb65Htow4mdeDlyT5kLM23Z2cDlN53YYldZU)'}} > lets beign ur shopping...  </h1>
                
            </div>
        )
    }
}