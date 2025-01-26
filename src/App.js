import React from "react";
import Header from "../src/view/components/Header/Header.jsx";
import HeroSection from "../src/view/components/Hero/HeroSection.jsx";
import AboutUs from "../src/view/components/AboutUs/AboutUs.jsx";
import Features from "../src/view/components/Features/Features.jsx";
import Testimonials from "../src/view/components/Testimonial/Testimonials.jsx";
import ContactUs from "../src/view/components/Contect/ContactUs.jsx";
import Footer from "../src/view/components/Footer/Footer.jsx";
import "../src/App.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Features />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PrivateLayout from "./layouts/PrivateLayout";
// import PublicLayout from "./layouts/PublicLayout";
// import Home from "./pages/Home/Home";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Login from "./pages/Login/Login";

// const AppRouter = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route element={<PublicLayout />}>
//           <Route path="/login" element={<Login />} />
//         </Route>

//         {/* Private Routes */}
//         <Route element={<PrivateLayout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Home />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;
