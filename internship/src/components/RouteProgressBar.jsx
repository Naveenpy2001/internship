import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Customize progress bar (YouTube-like)
NProgress.configure({ showSpinner: false });

const RouteProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    // Fake small delay to simulate route transition
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return null;
};

export default RouteProgressBar;
