import React, { useState } from "react";
import data from "./helper/data";
import "./scss/app.scss";
import Employees from "./components/Employees/Employees";

function App() {
  const [Page, setPage] = useState(0);
  const startIndeks = Page * 5;
  const pageIndex = data.slice(
    startIndeks,
    startIndeks + 5
  );

  const handleNext = () => {
    if (startIndeks + 5 < data.length) {
      setPage(Page + 1);
    }
  };

  const handlePrev = () => {
    if (Page > 0) {
      setPage(Page - 1);
    }
  };

  return (
    <main>
      <section className="container">
        <h3>Our Beloved Employees</h3>
        <h5>
          (Employees {startIndeks + 1} to {startIndeks + 5})
        </h5>
        <Employees data={pageIndex} />
        <div className="btns">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
