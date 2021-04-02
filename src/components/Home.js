import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
    return (
    <div>
        <div className="card card-body">
          <h2>DB Actions</h2>
          <hr/>
          <div className="buttons">
            <button type="button" className="btn btn-primary btn-lg">Run Scripts</button>
          </div>
        </div>
        <div className="card card-body">
          <h2>Explore</h2>
          <hr/>
          <div className="buttons">
          <Link to="/assignments"><button type="button" className="btn btn-primary btn-lg">Assignments</button></Link>
          <Link to="/assessments"><button type="button" className="btn btn-primary btn-lg">Assessments</button></Link>
          <Link to="/events"><button type="button" className="btn btn-primary btn-lg">Events</button></Link>
          </div>
        </div>
        </div>
    );
}

export default Home;