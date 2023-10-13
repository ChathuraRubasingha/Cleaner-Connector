import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPen, FaTrash } from "react-icons/fa";

function Table() {
  return (
    <table class="table" style={{ margin: "10px 20px" }}>
      <thead class="thead-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Certificate</th>
          <th scope="col">Clean Site</th>
          <th scope="col">Address</th>
          <th scope="col">Actions</th>
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
          <td>
            <div style={{ margin: "10px 0" }}>
              <FaPen style={{ cursor: "pointer" }} />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FaTrash style={{ cursor: "pointer" }} />
            </div>
          </td>
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
          <td>
            <div style={{ margin: "10px 0" }}>
              <FaPen style={{ cursor: "pointer" }} />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FaTrash style={{ cursor: "pointer" }} />
            </div>
          </td>
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
          <td>
            <div style={{ margin: "10px 0" }}>
              <FaPen style={{ cursor: "pointer" }} />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FaTrash style={{ cursor: "pointer" }} />
            </div>
          </td>
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
          <td>
            <div style={{ margin: "10px 0" }}>
              <FaPen style={{ cursor: "pointer" }} />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FaTrash style={{ cursor: "pointer" }} />
            </div>
          </td>
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
          <td>
            <div style={{ margin: "10px 0" }}>
              <FaPen style={{ cursor: "pointer" }} />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FaTrash style={{ cursor: "pointer" }} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
