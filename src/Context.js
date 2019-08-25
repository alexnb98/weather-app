import React, {Component} from "react";
import axios from "axios";

export const MyContext = React.createContext();

export class Context extends Component {
  state = {
    cityName: "",
    countryName: "",
    list: [],
    city: {}
  };

  request = (e) => {
    e.preventDefault();
    if (this.state.cityName === "") return alert("Please provide a city name");
    const country = this.state.countryName ? "," + this.state.countryName : "";
    const apikey = "09e1fd15c2a2693a0250143670209e1c";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=
    ${this.state.cityName}
    ${country}&appid=${apikey}`
      )
      .then((res) => {
        console.log("res", res);
        const fivedays = res.data.list.filter((item) => {
          return item.dt_txt.includes("12:00:00");
        });
        this.setState({list: fivedays, city: res.data.city});
      })
      .catch((err) => console.error(err));
  };

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          change: (e) => this.setState({[e.target.name]: e.target.value}),
          submit: (e) => this.request(e)
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
