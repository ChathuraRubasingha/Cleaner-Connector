import React from "react";

function Table() {
  return (
    <table class="table" style={{ margin: "10px 20px" }}>
      <thead class="thead-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Certificate</th>
          <th scope="col">Clean Site</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark Anderson</td>
          <td>
            <div className="col">
              <div className="raw">Document 1</div>
              <div className="raw">Start date: 2022/02/04</div>
              <div className="raw">End date: 2023/02/04</div>
            </div>
          </td>
          <td>Trade building</td>
          <td>No 233, john street, Melborn</td>
        </tr>
        <tr>
          <td>Mark Anderson</td>
          <td>
            <div className="col">
              <div className="raw">Document 1</div>
              <div className="raw">Start date: 2022/02/04</div>
              <div className="raw">End date: 2023/02/04</div>
            </div>
          </td>
          <td>Trade building</td>
          <td>No 233, john street, Melborn</td>
        </tr>
        <tr>
          <td>Mark Anderson</td>
          <td>
            <div className="col">
              <div className="raw">Document 1</div>
              <div className="raw">Start date: 2022/02/04</div>
              <div className="raw">End date: 2023/02/04</div>
            </div>
          </td>
          <td>Trade building</td>
          <td>No 233, john street, Melborn</td>
        </tr>
        <tr>
          <td>Mark Anderson</td>
          <td>
            <div className="col">
              <div className="raw">Document 1</div>
              <div className="raw">Start date: 2022/02/04</div>
              <div className="raw">End date: 2023/02/04</div>
            </div>
          </td>
          <td>Trade building</td>
          <td>No 233, john street, Melborn</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
