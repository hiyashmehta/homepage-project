import React from "react";

export default function ProductsComponent() {
    return (
        <div className="products-container">
            <h1>Products</h1>
            <div className="products-row">
                {data.map((item) => (
                    <div className="products-item">
                        <img src={item.imgSrc} alt='' />
                        <h1>{item.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        title: "Single Chair",
        imgSrc:
         "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
        title: "Single Sofa",
    imgSrc:
     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80",
    },
    {
        title: "Sofa and other accessories",
        imgSrc:
         "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "3 seat Sofa",
        imgSrc:
         "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
];