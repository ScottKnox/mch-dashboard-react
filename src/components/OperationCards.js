import React from 'react';
import '../css/OperationCards.css';

function OperationCards() {
    return (
    <div>
        <div class="card card-body">
          <h2>DB Actions</h2>
          <hr/>
          <div class="buttons">
            <button type="button" class="btn btn-primary btn-lg">Run Scripts</button>
          </div>
        </div>
        <div class="card card-body">
          <h2>Explore</h2>
          <hr/>
          <div class="buttons">
          <button type="button" class="btn btn-primary btn-lg">Assignments</button>
          <button type="button" class="btn btn-primary btn-lg">Assessments</button>
          <button type="button" class="btn btn-primary btn-lg">Patients</button>
          <button type="button" class="btn btn-primary btn-lg">Providers</button>
          </div>
        </div>
        </div>
    );
}

export default OperationCards;