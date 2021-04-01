import React, {useState} from 'react';
import '../css/DataViewer.css';

function DataViewer() {
  const [data, setData] = useState([]);

    return (
    <div>
    <h1>Assignments</h1>
        <div class="card card-body">
          <h4>Filters</h4>
          <hr/>
          <div class="filters">
            <label for="patientId" class="form-label">Patient ID: </label> <input class="form-control form-control-sm filter-form" type="text" />
            <label for="assessmentName" class="form-label">Assessment Name: </label> <input class="form-control form-control-sm filter-form" type="text" />
            <label for="recurrenceType" class="form-label">Recurrence Type: </label>
            <select class="form-select form-select-sm filter-form">
            <option selected>Select a recurrence</option>
            <option value="once">Once</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            </select>
            <br/><label for="dateCreated" class="form-label">Date Created: </label> <span>Between <input class="form-control form-control-sm filter-form" type="text" />and <input class="form-control form-control-sm filter-form" type="text" /></span><br/>
            <label for="assessmentName" class="form-label">Provider ID: </label> <input class="form-control form-control-sm filter-form" type="text" />
          </div>
        </div>
        <div class="card card-body">
          <h2>Results</h2>
          <hr/>
          <table class="table table-dark table-striped">
          <thead>
              <tr>
                <th scope="col">Provider ID</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Assessment Name</th>
                <th scope="col">Recurrence Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>Kermit</td>
                <td>GAD-7</td>
                <td>Once</td>
              </tr>
              <tr>
                <td>222</td>
                <td>Jacob</td>
                <td>PHQ-9</td>
                <td>Once</td>
              </tr>
              <tr>
                <td>222</td>
                <td>Jacob</td>
                <td>PHQ-9</td>
                <td>Once</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    );
}

export default DataViewer;