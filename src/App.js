import "./App.css";
import Header from "./Components/Header";
import InputCard from "./Components/InputCard";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Otp from "./Components/Otp";
import HorizontalStepper from "./Components/Stepper";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Booking from "./Components/Booking";


const router = createBrowserRouter([
  {
    path: "/",
    element: <InputCard />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/stepper",
    element: <HorizontalStepper />,
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
