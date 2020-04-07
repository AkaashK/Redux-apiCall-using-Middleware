import React from 'react';
import './App.css';
import GetUserData from './components/GetUserData'
import { Provider } from 'react-redux'
import store from './Redux-store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <GetUserData />
        </header>
      </div>
    </Provider>
  );
}

export default App;
