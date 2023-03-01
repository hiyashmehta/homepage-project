import React from "react";
 
export default function ContactUsComponent() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-us-row">
        <div className="contact-us-image">
          <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="contact-us-text-column">
          <h1>Enter your information</h1>
          <label>Full name</label>
          <input />
          <label>Email</label> <input />
          <label>Message</label> <input />
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}