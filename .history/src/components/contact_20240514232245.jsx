import { useState } from "react";
import React from "react";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  age: "",
  homeowner: "",
  marital_status: "",
  who_for: "",
  children: "",
};

export const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearState = () => setFormData({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/.netlify/functions/handleFormSubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully");
        clearState();
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Please fill out the form below and we will get back to you as soon as possible.</p>
              </div>
              <form name="sentMessage" validate={} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="form-control"
                        placeholder="First Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        className="form-control"
                        placeholder="Last Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        id="age"
                        name="age"
                        className="form-control"
                        required
                        onChange={handleChange}
                      >
                        <option value="">Select Age Range</option>
                        <option value="18-30">18-30</option>
                        <option value="31-49">31-49</option>
                        <option value="50-64">50-64</option>
                        <option value="65+">65+</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        id="homeowner"
                        name="homeowner"
                        className="form-control"
                        required
                        onChange={handleChange}
                      >
                        <option value="">Are you a homeowner?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        id="marital_status"
                        name="marital_status"
                        className="form-control"
                        required
                        onChange={handleChange}
                      >
                        <option value="">Marital Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="In a Relationship">In a Relationship</option>
                        <option value="Other">Other</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        id="who_for"
                        name="who_for"
                        className="form-control"
                        required
                        onChange={handleChange}
                      >
                        <option value="">Who is it for?</option>
                        <option value="Myself">Myself</option>
                        <option value="Myself and partner">Myself and partner</option>
                        <option value="Other">Other</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <select
                    id="children"
                    name="children"
                    className="form-control"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Number of Children</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 AIB Estate Planning Ltd. All rights reserved.<br />
            Registered in England and Wales. Company Number: 13732256.<br />
            Registered Office: 6 Neptune Court, Hallam Way, Blackpool, England, FY4 5LZ.<br />
            Website design by <a href="http://www.coupledlogic.com" rel="nofollow">CoupledLogic</a>
          </p>
        </div>
      </div>
    </div>
  );
};