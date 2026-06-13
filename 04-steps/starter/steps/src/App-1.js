import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const counterStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
};

const dateGlob = new Date();

export default function App() {
  return <div>
    <Steps />
    <DateCounter />
    <DateCounter2 />
  </div>
}

function Steps() {
  const [step, setStep] = useState(1); // React Hooks can only be placed on the top of a Function
  // const [test, setTest] = useState({ name: "Tantowi" }) 
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if(step === 1) return;
    setStep((s) => (
      s - 1
    ));
  }

  function handleNext() {
    if(step === 3) return;
    setStep((s) => (
      s + 1
    ));
  }

  return (
    <>
      <div>
        <button className="close" onClick={() => setIsOpen((is) => !is)}>
          &times;
        </button>
      </div>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date(dateGlob)
  date.setDate(dateGlob.getDate() + count)

  function handlePrev() {
    setStep((s) => Math.max(1, s - 1));
  }

  function handleNext() {
    setStep((s) => s + 1);
  }

  function incCount() {
    setCount((c) => c + step);
  }

  function decCount() {
    setCount((c) => c - step);
  }
  
  let txt = "";
  if(date.getTime() === dateGlob.getTime()) {
    txt = `Today Is ${date.toDateString()}`;
  } else if(date.getTime() < dateGlob.getTime()) {
    txt = `${Math.abs(count)} Days Ago Is ${date.toDateString()}`;
  } else {
    txt = `${Math.abs(count)} Days From Now Is ${date.toDateString()}`;
  }

  return (
    <div style={{ ...counterStyle, flexDirection: "column" }} className="steps">
      <StepCounter
        step={step}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />

      <CountCounter count={count} decCount={decCount} incCount={incCount} />

      <span>{txt}</span>
    </div>
  );
}

function StepCounter({ step, handlePrev, handleNext }) {
  return (
    <div style={counterStyle}>
      <button onClick={handlePrev}>-</button>
      <span>Step: {step}</span>
      <button onClick={handleNext}>+</button>
    </div>
  );
}

function CountCounter({ count, decCount, incCount }) {
  return (
    <div style={counterStyle}>
      <button onClick={decCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={incCount}>+</button>
    </div>
  )
}

function DateCounter2() {
  const [step, setStep]   = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date(dateGlob);
  date.setDate(dateGlob.getDate()+ count)

  let txt = "";
  if (date.getTime() === dateGlob.getTime()) {
    txt = `Today Is ${date.toDateString()}`;
  } else if (date.getTime() < dateGlob.getTime()) {
    txt = `${Math.abs(count)} Days Ago Is ${date.toDateString()}`;
  } else {
    txt = `${Math.abs(count)} Days From Now Is ${date.toDateString()}`;
  }

  return (
    <div style={{ ...counterStyle, flexDirection: "column" }} className="steps">
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <input
            type="range"
            min={1}
            max={12}
            value={step}
            onChange={(e) => {
              setStep(Number(e.target.value));
            }}
          ></input>
          <span>{step}</span>
        </div>

        <div>
          <button onClick={(c) => {
            setCount((c) => Number(c) - step)
          }}>-</button>
          <input
            type="number"
            value={count}
            onChange={(e) => {
              let val = e.target.value;
              val = val ? Number(val) : "";

              setCount(val);
            }}
          />
          <button onClick={(c) => {
            setCount((c) => Number(c) + step)
          }}>+</button>
        </div>
      </form>
      <div>{txt}</div>
    </div>
  );
}