import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) {
      return setStep(step + 1);
    } else {
      return setStep(3);
    }
  }

  function handlePrevios() {
    if (step > 1) {
      return setStep(step - 1);
    } else {
      return setStep(1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>X</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            {messages[step - 1]} {step}{" "}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevios}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
