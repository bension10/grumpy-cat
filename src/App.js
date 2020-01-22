import React from 'react';
import { connect } from 'react-redux';
import { Component as CatsBreedListLayout } from '../src/components/CatsBreedListLayout'

function App() {
  return (
    <div className="App">
      <div className="Home">
        <CatsBreedListLayout />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => (
  { ...state }
);
export default connect(mapStateToProps)(App);
