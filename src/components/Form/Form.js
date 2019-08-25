import React, {Component} from "react";
import styles from "./Form.module.css";
import Input from "./Input";
import {MyContext} from "../../Context";

export default class Form extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <form className={styles.form}>
              <Input
                value={context.state.cityName}
                name='cityName'
                change={(e) => context.change(e)}
                label='City'
                autoFocus
              ></Input>
              <Input
                value={context.state.countryName}
                name='countryName'
                change={(e) => context.change(e)}
                label='Country Code'
              ></Input>
              <button className={styles.button} onClick={context.submit} type='submit'>
                Search
              </button>
            </form>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
