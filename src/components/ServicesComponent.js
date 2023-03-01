import React from "react";
import { MdWork } from "react-icons/md";
export default function ServicesComponent() {
  return (
    <div className="services-container">
      <h1>Services</h1>
      <div className="services-row">
        {data.map((item) => (
          <div className="services-item">
            <item.icon className="icon" />
            <h3>{item.title}</h3>
            <p>
              sasjbfdnf aksnfdad jasbfbad fajkfef asdnfdinwrfds asdjfasdsibw
              asbjdf
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
const data = [
  {
    title: "Interior design",
    icon: MdWork,
  },
  {
    title: "Design and photography",
    icon: MdWork,
  },
  {
    title: "Furniture production",
    icon: MdWork,
  },
];
