import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom'

injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider><Router history = {browserHistory}><App /></Router></MuiThemeProvider>, document.getElementById('app'));