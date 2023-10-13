import React from 'react'
import Layout from '../Layout/Layout'
import Filter from "../../Componants/Filter/Filter";
import Table from "../../Componants/Table/Table";

function MyAreasAndClients() {
  const data = [
    {
      client: "ABC Corporation",
      site:"abc Site",
      cleanerNames: "John Doe, Jane Smith",
      siteAddress: "123 Main St, City",
      area: "Downtown",
      cleaningSchedule: "Monday, Wednesday, Friday",
    },
    {
      client: "XYZ Inc.",
      site:"abc Site",
      cleanerNames: "Alice Johnson, Bob Wilson",
      siteAddress: "456 Elm St, Suburb",
      area: "Residential",
      cleaningSchedule: "Tuesday, Thursday, Saturday",
    },
    {
      client: "123 Services",
      site:"abc Site",
      cleanerNames: "Eva Brown, Chris Davis",
      siteAddress: "789 Oak St, Town",
      area: "Commercial",
      cleaningSchedule: "Daily",
    },
    {
      client: "Best Cleaners",
      site:"abc Site",
      cleanerNames: "Mark Anderson, Lisa Evans",
      siteAddress: "321 Pine St, Suburb",
      area: "Residential",
      cleaningSchedule: "Monday, Wednesday, Saturday",
    },
    {
      client: "Sunshine Realty",
      site:"abc Site",
      cleanerNames: "Sam Robinson, Emily White",
      siteAddress: "555 Sunset Ave, Beach",
      area: "Vacation Rentals",
      cleaningSchedule: "Friday, Sunday",
    },
    {
      client: "Green Gardens",
      site:"abc Site",
      cleanerNames: "Michael Green, Sarah Brown",
      siteAddress: "987 Park Rd, City",
      area: "Parks",
      cleaningSchedule: "Weekly",
    },
    {
      client: "Tech Hub",
      site:"abc Site",
      cleanerNames: "Steve Tech, Laura Innovator",
      siteAddress: "456 Tech Lane, Tech Park",
      area: "Business",
      cleaningSchedule: "Weekdays",
    },
    {
      client: "Family Clinic",
      site:"abc Site",
      cleanerNames: "Dr. Clean, Nurse Hygiene",
      siteAddress: "789 Health Ave, Medical District",
      area: "Healthcare",
      cleaningSchedule: "Daily",
    },
    {
      client: "Museum of Art",
      site:"abc Site",
      cleanerNames: "Art Curator, Museum Staff",
      siteAddress: "123 Art Street, Cultural Center",
      area: "Culture",
      cleaningSchedule: "Monday, Thursday",
    },
    {
      client: "Sports Arena",
      site:"abc Site",
      cleanerNames: "Sports Crew",
      siteAddress: "555 Stadium Road, Sports Complex",
      area: "Sports & Entertainment",
      cleaningSchedule: "Event Days",
    },
    // Add more data objects as needed
  ];
  return (
    <Layout>
      <div className="cleaner-topic">
        <p>My Areas </p>
        {/* <button
          className="btn btn-primary"
          style={{
            padding: "0 20px",
            color: "white",
            fontWeight: "500",
          }}
        >
          Add New
        </button> */}
      </div>
      <div>
      <div className="filter-wrapper p-3">
      <div className="row">
        <div className="col">
          <select className="form-select">
            <option selected>Select Area</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
        <div className="col">
          {" "}
          <select className="form-select">
            <option selected>Select Client</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
        {/* <div className="col">
          {" "}
          <select className="form-select">
            <option selected>Select Address</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div> */}
      </div>
    </div>
    <table className="table" style={{ margin: "10px 20px" }}>
      <thead className="thead-light">
        <tr>
        <th scope="col">Client</th>
          <th scope="col">Site</th>
          <th scope="col">Cleaner Names</th>
          <th scope="col">Area </th>
          {/* <th scope="col">Address</th> */}
          <th scope="col">Cleaning Schedule</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
          <td>{item.client}</td>
            <td>{item.site}</td>
            <td>{item.cleanerNames}</td>
            <td>{item.area}</td>
            {/* <td>{item.cleanerNames}</td> */}
            <td>{item.cleaningSchedule}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </Layout>
  )
}

export default MyAreasAndClients