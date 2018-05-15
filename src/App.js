import React, { Component } from 'react';

import './App.css';
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";
import ResultsBox from "./components/ResultsBox";
import Articles from "./components/Articles";
import SavedArticles from './components/SavedArticles/SavedArticles';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SearchBox/>
        <ResultsBox boxName="Results">
        <Articles title="test"/>
        </ResultsBox>
        <ResultsBox boxName="Saved Articles">
        <SavedArticles title="test" url="test"/>
        </ResultsBox>
      </div>
    );
  }
}

export default App;
