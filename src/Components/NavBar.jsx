import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/App.css";
import SgpaCalc from "./SgpaCalc";

const DemoNavBar = () => {
  const [selected, setSelected] = useState("");

  const handleClick = (info) => {
    setSelected(info);
  };

  return (
    <div className="container mt-5 outerBox">
      {selected === "" ? (
        <div className="nav-container">
          <div className="row">
            <div className="col-12 col-md-6 p-2 navBox">
              <div
                className="nav-box btn btn-light text-primary"
                onClick={() => handleClick("SgpaCalc")}
              >
                <h2>SGPA Calculator</h2>
                <p>Calculate your SGPA based on your marks...</p>
              </div>
            </div>
            <div className="col-12 col-md-6 p-2 navBox">
              <div
                className="nav-box btn btn-light text-primary"
                onClick={() => handleClick("SgpaCalc")}
              >
                <h2>CGPA Calculator</h2>
                <p>Calculate your CGPA based on your recent SGPA's...</p>
              </div>
            </div>
            <div className="col-12 col-md-6 p-2 navBox">
              <div
                className="nav-box btn btn-light text-primary"
                onClick={() => handleClick("SgpaCalc")}
              >
                <h2>Attendance Calculator</h2>
                <p>
                  Calculate your attendance as per no of classes you've attended
                  till now
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 p-2 navBox">
              <div
                className="nav-box btn btn-light text-primary"
                onClick={() => handleClick("SgpaCalc")}
              >
                <h2>SGPA Predictor</h2>
                <p>Get Predictions of your SGPA based on your expected marks</p>
              </div>
            </div>
            <div className="col-12 col-md-8 p-2 navBox">
              <div
                className="nav-box btn btn-light text-primary"
                onClick={() => handleClick("SgpaCalc")}
              >
                <h2>CGPA Predictor</h2>
                <p>Get Predictions of your CGPA based on your expected marks</p>
              </div>
            </div>
            <div className="col-12 col-md-6 p-2 navBox">
              <div
                className="nav-box btn btn-light text-primary"
                onClick={() => handleClick("SgpaCalc")}
              >
                <h2>Attedance Predictor</h2>
                <p>
                  Get no of classes to attend to get your attendance to your
                  desired attendance
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="info-box">
          {selected === "SgpaCalc" && <SgpaCalc />}

          <button
            className="btn btn-secondary mt-3"
            onClick={() => setSelected("")}
          >
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default DemoNavBar;
