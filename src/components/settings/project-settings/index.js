import React from "react";
import "../project-settings/project-settings.scss";

function ProjectSettings() {
  return (
    <div>
      <h1>Project Settings</h1>
      <h3>Project Details</h3>
      <hr />
      <table>
        <tbody>
          <tr>
            <td>
              <label>Project Name*</label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Dump Utility Path</label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Reports Folder Path*</label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Additional Settings</h3>
      <hr />
      <table>
        <tbody>
          <tr>
            <td style={{ width: "10rem" }}>
              <label>Use ALM</label>
            </td>
            <td
              style={{
                width: "20rem",
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              <div>
                <label>Yes</label>
                <input type="radio" name="alm" value="yes" />
              </div>
              <div>
                <label>No</label>
                <input type="radio" name="alm" value="no" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="button-blue-div">
        <button className="button-blue">Save Project</button>
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <label>Schedule Extension</label>
        <div
          style={{ width: "35rem", display: "flex", justifyContent: "center" }}
        >
          <button className="button-green">Start</button>
          <button className="button-yellow">Stop</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectSettings;
