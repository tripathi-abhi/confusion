import React, { Component } from 'react';
import Main from './Components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './Redux/configureState';
import { Provider } from 'react-redux';

const store= ConfigureStore();
class App extends Component {

 render () {
  return (
    <Provider store={store}>
    <BrowserRouter>
       <div>
         <Main />
       </div>
    </BrowserRouter>
    </Provider>
  );
 }
}
export default App;