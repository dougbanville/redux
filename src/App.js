import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions";
import ErrorWithStack from "jest-util/build/ErrorWithStack";
import { bindActionCreators } from "../../Library/Caches/typescript/3.5/node_modules/redux";

function App(props) {
  function onUP(event) {
    props.onUpdateUser(event.target.value);
    //alert(`up date neme to ${name}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div>
          <input onChange={onUP} /> {props.user}
        </div>
      </header>
    </div>
  );
}
const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandomProp}`
  };
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onUpdateUser: updateUser
    },
    dispatch
  );
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);
  return {};
};

mergeProps();

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
