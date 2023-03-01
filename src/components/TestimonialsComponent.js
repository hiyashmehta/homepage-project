import React from "react";
import { MdStar } from "react-icons/md";
 
export default function TestimonialsComponent() {
  return (
    <div className="review-container">
      <h1>Customer reviews</h1>
      <div className="review-row">
        {reviews.map((item) => (
          <div className="review-item">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            <h1>{item.title}</h1>
            <MdStar className="review-icon" />
            <MdStar className="review-icon" />
            <MdStar className="review-icon" />
            <MdStar className="review-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
 
const reviews = [
  {
    title: "Great Products",
    customerName: "",
    ratings: 5,
  },
  {
    title: "Loved the services",
    customerName: "",
    ratings: 4,
  },
  {
    title: "In Love with the products",
    customerName: "",
    ratings: 5,
  },
];