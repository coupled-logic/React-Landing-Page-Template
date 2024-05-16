import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            At AIB Estate Planning, we offer a range of expert services to help you protect your home, wealth, and loved ones. Our team is dedicated to providing personalized and professional advice to secure your financial future.
          </p>
        </div>
        <div className="services-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="service-item">
                  <div className="icon-container">
                    <i className={d.icon}></i>
                  </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
