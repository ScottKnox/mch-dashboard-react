import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/DataViewer.css';

function DataViewer(props) {

    const [data, setData] = useState([]);

    function getData() {
        axios.get('http://192.168.1.110/mhc-data-resources/assessments', {
            // Add params and headers here
        }).then((response) => {
            setData(response.data.assessments);
        });
    }

    // Get initial assessment data
    useEffect(() => {
        getData();
    }, []);

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
                <th scope="col">Start Date</th>
                <th scope="col">Provider ID</th>
                <th scope="col">Patient ID</th>
                <th scope="col">Patient Auth</th>
                <th scope="col">Assessment Name</th>
                <th scope="col">Recurrence Frequency</th>
                <th scope="col">Patient DFN</th>
              </tr>
            </thead>
            <tbody>
            {data.map((value, index) => {
                return (
                    <tr>
                        <td>{value.startDate}</td>
                        <td>{value.providerId}</td>
                        <td>{value.patientId}</td>
                        <td>{value.patientAssignAuth}</td>
                        <td>{value.assessmentName}</td>
                        <td>{value.recurrenceFrequency}</td>
                        <td>{value.patientDfn}</td>
                    </tr>
                )
            })}
            </tbody>
          </table>
        </div>
        </div>
    );
}

export default DataViewer;