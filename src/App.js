import React from "react";
import "./App.css";
// import Heidelberg from "./data/example.json";
import Background from "./components/Background/Background";
import Day from "./components/Day/Day";
import Week from "./components/Week/Week";
import Form from "./components/Form/Form";
import {Context, MyContext} from "./Context";

function App() {
  return (
    <div className='App'>
      <Context>
        <Background>
          <div className='container'>
            <div className='box'>
              <Form></Form>
              <MyContext.Consumer>
                {(context) =>
                  context.state.list.length ? (
                    <React.Fragment>
                      <h1 className='center'>
                        {context.state.city.name}, {context.state.city.country}
                      </h1>
                      <Day temp={context.state.list[0].main.temp} desc='clear sky' icon={800}></Day>
                      <Week list={context.state.list}></Week>
                    </React.Fragment>
                  ) : (
                    <h1 className='center'>Please search for a city</h1>
                  )
                }
              </MyContext.Consumer>
            </div>
          </div>
        </Background>
      </Context>
    </div>
  );
}

export default App;
