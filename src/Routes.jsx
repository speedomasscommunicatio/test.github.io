import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Jobapplicationform = React.lazy(() => import("pages/Jobapplicationform"));
const JobapplicationformOne = React.lazy(
  () => import("pages/JobapplicationformOne"),
);
const WordPressDeveloper = React.lazy(() => import("pages/WordPressDeveloper"));
const Joinus = React.lazy(() => import("pages/Joinus"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const WebDevelopment = React.lazy(() => import("pages/WebDevelopment"));
const AppDevelopment = React.lazy(() => import("pages/AppDevelopment"));
const OurServices = React.lazy(() => import("pages/OurServices"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const HomeOne = React.lazy(() => import("pages/HomeOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homeone" element={<HomeOne />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/appdevelopment" element={<AppDevelopment />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/joinus" element={<Joinus />} />
          <Route path="/wordpressdeveloper" element={<WordPressDeveloper />} />
          <Route
            path="/jobapplicationformone"
            element={<JobapplicationformOne />}
          />
          <Route path="/jobapplicationform" element={<Jobapplicationform />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
