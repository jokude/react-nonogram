import React from 'react';
import { Route }  from 'react-router-dom';
import CategoryList from './components/CategoryList.jsx';
import LevelList from './components/LevelList.jsx';
import Level from './components/Level.jsx';

const styles = {
  mainContainer: {
    margin: 'auto',
    maxWidth: '800px',
    height: '600px'
  }
};

class App extends React.Component {
   render() {
      return (
        <div style={ styles.mainContainer }>
          <Route exact path="/" component={ CategoryList }/>
          <Route path="/category/:categoryId" component={ LevelList }/>
          <Route path="/level/:levelId" component={ Level }/>
        </div>
      );
   }
}

export default App;