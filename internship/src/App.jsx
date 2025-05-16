import { useState,useEffect } from "react";
import InternshipNavbar from "./components/Nav";
import ContactPage from "./pages/Contact";
import JavaPage from "./pages/courses/Java";
import JavaFullStackPage from "./pages/courses/JavaFullstack";
import PythonPage from "./pages/courses/Python";
import HeroSection from "./pages/HeroSection";
import MainPage from "./pages/MainPage";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from 'aos';
import FooterComponent from "./components/Footer";
import DataSciencePage from "./pages/courses/DataScience";
import MachineLearningPage from "./pages/courses/MachineLerning";
import AIPage from "./pages/courses/AI";
import BenefitsPage from "./pages/BenefitsPage";
import MERNStackPage from "./pages/courses/MERNStack";
import DevOpsPage from "./pages/courses/DevOps";
import WebinarPage from "./pages/Webinar";
import ScrollToTopButton from "./pages/courses/components/ScrollToTop";
import OurTeam from "./pages/OurTeam";
import Partners from "./pages/Partners";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import BecomePartner from "./pages/BecomePartner";




const ScrollAnimationWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); // re-initialize on route change
  }, [location]);

  return children;
};

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <ScrollAnimationWrapper>

      <InternshipNavbar isLogin={isLogin} />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/java" element={<JavaPage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/java/fullstack" element={<JavaFullStackPage />} />
        <Route path="/data-science" element={<DataSciencePage />} />
        <Route path="/machine-learning" element={<MachineLearningPage />} />
        <Route path="/artificial-intelligence" element={<AIPage />} />
        <Route path="/mern" element={<MERNStackPage />} />
        <Route path="/dev-ops" element={<DevOpsPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/webinar" element={<WebinarPage />} />
        <Route path="/contact" element={<ContactPage />} />

        
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy  />} />
        <Route path="/become-partner" element={<BecomePartner  />} />
      </Routes>
      <FooterComponent />
    </ScrollAnimationWrapper>
  );
}

export default App;
