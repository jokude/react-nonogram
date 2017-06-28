import React from 'react';
import { Route }  from 'react-router-dom';
import CategoryList from './components/CategoryList.jsx';
import LevelList from './components/LevelList.jsx';
import Level from './components/Level.jsx';

const styles = {
  mainCotainer: {
    margin: 'auto',
    backgroundColor: '#b2ebf2'
  }
};

class App extends React.Component {
   render() {
      return (
        <div style={ styles.mainCotainer }>
          <Route exact path="/" component={ CategoryList }/>
          <Route path="/category/:categoryId" component={ LevelList }/>
          <Route path="/level/:levelId" component={ Level }/>
        </div>
      );
   }
}

export default App;