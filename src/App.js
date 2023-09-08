import "./App.css";
import Header from "./Components/Header";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Booking from "./Components/Booking";
import Dashboard from "./Components/Dashboard";
import Step1 from "./Components/Step1";
import OtpGenration from "./Components/OtpGenration";
import OtpVerify from "./Components/OtpVerify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OtpGenration />,
  },
  {
    path: "/otp",
    element: <OtpVerify />,
  },
  {
    path: "/step1",
    element: <Step1 />,
  },
  {
    path: "/step2",
    element: <Step2 />,
  },
  {
    path: "/step3",
    element: <Step3 />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
