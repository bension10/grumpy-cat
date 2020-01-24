import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Component as CatsBreedListLayout } from '../src/components/CatsBreedListLayout'
import { Component as CatDetailsLayout } from './components/CatDetailsLayout';
import './App.scss'; 

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

export default (App);
