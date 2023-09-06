"use client";
import { useState } from "react";
import RootLayout from "./layout";
import './form.css'

export default function Form() {
  const [formDetail, setFormDetail] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    Email: "",
  });

  const formSubmit = () => {
    fetch("http://127.0.0.1:4400/insert", {
      method: "POST",

      
      body: JSON.stringify({
        firstname: formDetail.firstname,
        lastname: formDetail.lastname,
        phone: formDetail.phone,
        Email: formDetail.Email,
      }),

      
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      
      .then((response) => response.json())

      
      .then((json) => console.log(json));
  };

  return (
    <>
      <div className="data">
        <div className="mb-3">
          <label className="form-label">FirstName</label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="firstname"
            onChange={(e) =>
              setFormDetail({ ...formDetail, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">LastName</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lastname"
            onChange={(e) =>
              setFormDetail({ ...formDetail, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            onChange={(e) =>
              setFormDetail({ ...formDetail, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="Email"
            aria-describedby="emailHelp"
            onChange={(e) =>
              setFormDetail({ ...formDetail, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={formSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
