// import React, { useState } from "react";
// import Child from "./Child";

// export default function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">
//         State Management antar Komponen
//       </h1>

//       {/* Child pertama */}
//       <Child count={count} onIncrement={increment} />

//       {/* Child kedua */}
//       <Child count={count} onIncrement={increment} />

//       <p className="mt-4 text-green-600">Count total: {count}</p>
//     </div>
//   );
// }

import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* hero-pattern ada class buatan buat nampiin background */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
