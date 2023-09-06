"use client";
import { useState, useEffect } from "react";

export default function Table() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getPersons();
  }, []);
  useEffect(() => {
    getPersons();
  }, [persons]);
  async function getPersons() {
    await fetch("http://127.0.0.1:4400/person")
      .then((response: any) => response.json())
      .then((data: any) => {
        setPersons(data);
        console.log(data.length);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div style={{margin:"0 auto",width:'1000px',marginTop:'50px'}}>
      {persons.length > 0? (
        <table className="table caption-top table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {persons.map((item: any, index) => (
            <tbody key={index + 1}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.phone}</td>
                <td>{item.Email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <h4 style={{textAlign:"center"}}>no reacord founds</h4>
      )}
    </div>
  );
}
