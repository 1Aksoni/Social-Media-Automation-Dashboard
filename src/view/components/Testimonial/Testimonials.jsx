import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../../assets/images/img (1).webp";
import img2 from "../../../assets/images/img (10).webp";
import img3 from "../../../assets/images/img (32).webp";
import img4 from "../../../assets/images/about.png";
import "./Testimonial.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Software Engineer",
      feedback:
        "This platform has completely transformed the way we analyze data. The actionable insights are incredible!",
      image: img1,
    },
    {
      name: "Jane Smith",
      role: "Data Scientist",
      feedback:
        "I love how intuitive the interface is. It helps me focus on the data rather than the tools!",
      image: img2,
    },
    {
      name: "Mike Johnson",
      role: "Business Analyst",
      feedback:
        "A must-have tool for anyone looking to optimize their processes and boost productivity!",
      image: img3,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={img4} alt="About" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="card text-center p-3 shadow-sm border-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle mx-auto mb-3"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <h5>{testimonial.name}</h5>
                    <p className="text-muted">{testimonial.role}</p>
                    <p className="text-muted">{testimonial.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Indicators (dots) */}
            <div className="carousel-indicators ">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide-to={index}
                  className={`carousel-indicator bg-black ${
                    index === 0 ? "active" : ""
                  }`}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
