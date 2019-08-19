import React, { Component } from 'react'
import './App.css';

export default class Dark extends Component {

    constructor(props){
        super(props);
        this.state = {
            temp:'0',
            summary:"",
            icon:"",
            humidity:"",
            precipIntensity:"",
        }
    }

    componentDidMount(){
        let lat;
            let long;
            if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(pos=>{
                lat = pos.coords.latitude;
                long = pos.coords.longitude;
                
                let proxy = `https://cors-anywhere.herokuapp.com/`;
                let api = `${proxy}https://api.darksky.net/forecast/b9ec8785be758ca20484c4940d52e161/${lat},${long}`;

                fetch(api)
                .then(res=>{
                return res.json();
                })
                .then(data=>{
                console.log(data);
                this.setState(
                    {
                        temp:((data.currently.temperature - 32 )* 5/9).toPrecision(2),
                        humidity:data.currently.humidity*100,
                        icon:data.currently.icon,
                        summary:data.currently.summary,
                        precipIntensity:data.currently.precipIntensity*1000+"%"
                    }
                )
                console.log(this.state.precipIntensity);
                })
            });
            }
    }

    render() {
        return (
           
            <section className="temp-data">
              <div className="temperature">
                  <div className="information">
                        <h1>
                            {this.state.temp}<sup>o</sup>C
                        </h1>
                  </div>
              </div>
              {this.props.children}
            </section>
           
        )
    }
}
