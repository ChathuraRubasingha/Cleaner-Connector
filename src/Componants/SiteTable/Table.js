import React from "react";

function SiteTable() {
  const data = [
    {
      client: "ABC Corporation",
      siteAddress: "123 Main St, City",
      area: "Downtown",
      cleanerNames: "John Doe, Jane Smith",
      cleaningSchedule: "Monday, Wednesday, Friday",
    },
    {
      client: "XYZ Inc.",
      siteAddress: "456 Elm St, Suburb",
      area: "Residential",
      cleanerNames: "Alice Johnson, Bob Wilson",
      cleaningSchedule: "Tuesday, Thursday, Saturday",
    },
    {
      client: "123 Services",
      siteAddress: "789 Oak St, Town",
      area: "Commercial",
      cleanerNames: "Eva Brown, Chris Davis",
      cleaningSchedule: "Daily",
    },
    {
      client: "Best Cleaners",
      siteAddress: "321 Pine St, Suburb",
      area: "Residential",
      cleanerNames: "Mark Anderson, Lisa Evans",
      cleaningSchedule: "Monday, Wednesday, Saturday",
    },
    {
      client: "Sunshine Realty",
      siteAddress: "555 Sunset Ave, Beach",
      area: "Vacation Rentals",
      cleanerNames: "Sam Robinson, Emily White",
      cleaningSchedule: "Friday, Sunday",
    },
    {
      client: "Green Gardens",
      siteAddress: "987 Park Rd, City",
      area: "Parks",
      cleanerNames: "Michael Green, Sarah Brown",
      cleaningSchedule: "Weekly",
    },
    {
      client: "Tech Hub",
      siteAddress: "456 Tech Lane, Tech Park",
      area: "Business",
      cleanerNames: "Steve Tech, Laura Innovator",
      cleaningSchedule: "Weekdays",
    },
    {
      client: "Family Clinic",
      siteAddress: "789 Health Ave, Medical District",
      area: "Healthcare",
      cleanerNames: "Dr. Clean, Nurse Hygiene",
      cleaningSchedule: "Daily",
    },
    {
      client: "Museum of Art",
      siteAddress: "123 Art Street, Cultural Center",
      area: "Culture",
      cleanerNames: "Art Curator, Museum Staff",
      cleaningSchedule: "Monday, Thursday",
    },
    {
      client: "Sports Arena",
      siteAddress: "555 Stadium Road, Sports Complex",
      area: "Sports & Entertainment",
      cleanerNames: "Sports Crew",
      cleaningSchedule: "Event Days",
    },
    // Add more data objects as needed
  ];
  return (
    <table className="table" style={{ margin: "10px 20px" }}>
      <thead className="thead-light">
        <tr>
          <th scope="col">Client</th>
          <th scope="col">Site Address</th>
          <th scope="col">Area</th>
          <th scope="col">Cleaner Names</th>
          <th scope="col">Cleaning Schedule</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.client}</td>
            <td>{item.siteAddress}</td>
            <td>{item.area}</td>
            <td>{item.cleanerNames}</td>
            <td>{item.cleaningSchedule}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SiteTable;
