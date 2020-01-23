import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Component as CatsBreedListLayout } from '../src/components/CatsBreedListLayout'
import { Component as CatDetailsLayout } from './components/CatDetailsLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:breedImageId" exact component={CatDetailsLayout}/>
          <Route path="/" component={CatsBreedListLayout}/>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => (
  { ...state }
);
export default connect(mapStateToProps)(App);
