import React from "react";

export default function Header() {
    return (
        <div className="header">
            <a className="nav-link">{data[0].title}</a>
            <div>
                {data.slice(1, 5).map((item) => (
                    <a className="nav-link">{item.title}</a>
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Products",
        url: "/",
    },
    {
        title: "Services",
        url: "/",
    },
    {
        title: "Help",
        url: "/",
    },
];
