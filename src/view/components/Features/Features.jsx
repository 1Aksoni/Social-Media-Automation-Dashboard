import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Optimization from "../../../assets/images/1.png";
import Analysis from "../../../assets/images/2.png";
import Concept from "../../../assets/images/3.png";
import Development from "../../../assets/images/4.png";
import "./Features.css";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Optimization",
      description:
        "Optimize your workflow with cutting-edge AI tools designed to enhance efficiency and productivity.",
      image: Optimization,
    },
    {
      id: 2,
      title: "Market Analysis",
      description:
        "Gain deeper insights into market trends with powerful analytics and real-time data processing.",
      image: Analysis,
    },
    {
      id: 3,
      title: "Concept & Idea",
      description:
        "Transform your concepts into actionable ideas with innovative AI-driven solutions.",
      image: Concept,
    },
    {
      id: 4,
      title: "Development",
      description:
        "Streamline your development process with advanced features that accelerate project delivery.",
      image: Development,
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="text-black">
          AI Turns Information Into Actionable Insights
        </h2>
      </div>
      <div className="row justify-content-center">
        {features.map((feature) => (
          <div className="col-lg-3 col-md-6 col-sm-12 p-3" key={feature.id}>
            <div className="card feature-card h-100">
              <img
                src={feature.image}
                alt={feature.title}
                className="mb-3"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <h5 className="">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="#" className="btn btn-sm mt-2">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
