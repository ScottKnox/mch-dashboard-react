import React from 'react';
import '../css/DataViewer.css';

function DataViewer(props) {

    return (
    <div>
    <h1>{props.dataType}</h1>
        <div className="card card-body">
        <div id="filter-and-sorting-panel">
        <div id="filter-panel">
          <a className="btn btn-primary filter-button" data-toggle="collapse" href="#filter-options" data-target="#filter-options" aria-expanded="false" aria-controls="filter-options">
          <h4>Filters ∨</h4>
          </a>
          </div>
          <span id="sort-panel"><label htmlFor="sort-select" className="sort-label">Sort By: </label>
          <select id="sort-select" className="custom-select">
          <option value="providerId">Provider ID</option>
          <option value="assessmentName">Assessment Name</option>
          </select></span>
          </div>
          <div id="filter-options" className="collapse">
          <hr/>
            <label htmlFor="patientId" className="form-label">Patient ID: </label> <input className="form-control form-control-sm filter-form" type="text" />
            <label htmlFor="assessmentName" className="form-label">Assessment Name: </label> <input className="form-control form-control-sm filter-form" type="text" />
            <label htmlFor="frequency" className="form-label">Frequency: </label>
            <select className="custom-select filter-form">
            <option value="select">-Select-</option>
            <option value="once">Once</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            </select><br/>
            <label htmlFor="assessmentName" className="form-label">Provider ID: </label> <input className="form-control form-control-sm filter-form" type="text" />
            <label htmlFor="dateCreated" className="form-label">Date Created: </label> <span>Between <input className="form-control form-control-sm filter-form" type="text" />and <input className="form-control form-control-sm filter-form" type="text" /></span><br/>
          <br/><button type="button" className="btn btn-primary btn-lg">Apply</button>
          </div>
        </div>
        <div className="card card-body">
          <h2>Results</h2>
          <hr/>
          <p>Total for Query: 3</p><br/>
          <table className="table table-dark table-striped">
          <thead>
              <tr>
                <th scope="col">Date Created</th>
                <th scope="col">Provider ID</th>
                <th scope="col">Patient ID</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Assessment Name</th>
                <th scope="col">Recurrence Frequency</th>
                <th scope="col">Completed?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04/01/2021</td>
                <td>64</td>
                <td>1666780001V942030</td>
                <td>Kermit</td>
                <td>GAD-7</td>
                <td>Once</td>
                <td>False</td>
              </tr>
              <tr>
                <td>04/01/2021</td>
                <td>64</td>
                <td>1666780001V942030</td>
                <td>Jacob</td>
                <td>PHQ-9</td>
                <td>Once</td>
                <td>False</td>
              </tr>
              <tr>
                <td>04/01/2021</td>
                <td>64</td>
                <td>1666780001V942030</td>
                <td>Todd</td>
                <td>PHQ-9</td>
                <td>Once</td>
                <td>False</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    );
}

export default DataViewer;