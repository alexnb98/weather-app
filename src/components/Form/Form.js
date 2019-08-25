import React, {Component} from "react";
import styles from "./Form.module.css";
import Input from "./Input";

export default class Form extends Component {
  state = {
    city: "",
    country: ""
  };

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <div>
        <form className={styles.form}>
          <Input value={this.state.city} name='city' change={this.changeHandler} label='City' autoFocus></Input>
          <Input value={this.state.country} name='country' change={this.changeHandler} label='Country Code'></Input>
        </form>
      </div>
    );
  }
}
