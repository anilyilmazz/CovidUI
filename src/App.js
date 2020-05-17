import React from 'react';
import { connect } from "react-redux"
import './App.css';
import RandomCountry from './Components/RandomCountry/RandomCountry.js'
import CountryInput from './Components/CountryInput/CountryInput.js'
import { setRandom, setSelect } from "./redux/actions/appactions"

function App({ showRandom, showSelect, setRandom, setSelect }) {
  return (
    <div className="main">
      <section className="selectDiv">
        <button className="btn btn-primary" onClick={setRandom}>Search With Input</button> &nbsp;
        <button className="btn btn-success" onClick={setSelect}>Random Country</button>
      </section>
      {showRandom ? <RandomCountry />: null}
      {showSelect ? <CountryInput /> : null}         
    </div>
  );
}
const mapStateToProps = ({ appState : {showRandom, showSelect} }) => {
  return { showRandom:showRandom,showSelect:showSelect }
}
const mapDispatchToProps = {
  setRandom,
  setSelect
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
