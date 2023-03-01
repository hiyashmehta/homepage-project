import React from "react";

export default function HeroComponent() {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <h1>We help you make modern interiors</h1>
        <h4>
          We will help you to make an elegant and luxurious interior designed by professional interior designer.
        </h4>
        <button className="primary-button">Get Started</button>
      </div>
      <div className="hero-img-container">
        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
    </div>
  );
}