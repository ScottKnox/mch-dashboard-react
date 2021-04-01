import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../css/App.css';
import Header from './Header';
import DataViewer from './DataViewer';
import OperationCards from './OperationCards';
import Footer from './Footer';

function App() {
  return (
      <div id="app">
            <Header />
            <div id="mainContent">
                <div id="container">
                <BrowserRouter>
                    <Route path="/" exact component={DataViewer}/>
                    <Route path="/assignments" component={OperationCards}/>
                </BrowserRouter>
                </div>
            </div>
            <Footer />
      </div>
    );
}

export default App;
