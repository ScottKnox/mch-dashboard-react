import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../css/App.css';
import Header from './Header';
import DataViewer from './DataViewer';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
      <div id="app">
            <Header />
            <div id="mainContent">
                <div id="container">
                <BrowserRouter>
                    <Route path="/" exact component={Home}/>
                    <Route path="/assignments" component={() => (<DataViewer dataType="Assignments" />)}/>
                    <Route path="/assessments" component={() => (<DataViewer dataType="Assessments" />)}/>
                    <Route path="/events" component={() => (<DataViewer dataType="Events" />)}/>
                </BrowserRouter>
                </div>
            </div>
            <Footer />
      </div>
    );
}

export default App;
