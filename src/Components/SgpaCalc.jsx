import React, { useState } from "react";

function SgpaCalc() {
  const [numInputs, setNumInputs] = useState();
  const [inputs, setInputs] = useState([]);
  const [inputValues, setInputValues] = useState([]);

  const handleNumInputsChange = (event) => {
    if (event.key === "Enter") {
      const value = Number(event.target.value);
      setNumInputs(value);
      subjectinputs(value);
    }
  };

  const subjectinputs = (count) => {
    const newInputs = [];
    for (let i = 0; i < count; i++) {
      newInputs.push(`Input ${i + 1}`);
    }
    setInputs(newInputs);
    setInputValues(new Array(count).fill(""));
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const onHandleSubmit = () => {
    var sum = 0;
    inputValues.forEach((item) => (sum += Number(item)));
    console.log(sum);
    // console.log("Input Values:", inputValues);
  };

  return (
    <div className="App">
      <h1 style={{ marginBottom: "2rem" }}>SGPA Calculator</h1>
      <form>
        <div className="mb-3 row">
          <label htmlFor="noOfSubjects" className="col-sm-2 col-form-label">
            No Of Subjects:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="noOfSubjects"
              placeholder="Enter no of subjects"
              onKeyDown={handleNumInputsChange}
            />
          </div>
        </div>
        {inputs.map((placeholder, index) => (
          <div key={index} className="mb-3 row">
            <label
              htmlFor={`subject${index + 1}`}
              className="col-sm-2 col-form-label"
            >
              {`Subject ${index + 1}`}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id={`subject${index + 1}`}
                placeholder="Please enter your obtained marks"
                value={inputValues[index] || ""}
                onChange={(event) => handleInputChange(event, index)}
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-success"
          onClick={onHandleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SgpaCalc;
