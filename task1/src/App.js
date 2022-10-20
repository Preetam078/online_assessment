import React from "react";
import "./App.css";
import {ResizableBox } from "react-resizable";
import "./react-resizable.css";
import Window1 from "./components/window1";
import Window2 from "./components/window2";
import Window3 from "./components/window3";

function App() {
  return (
    <div>
      <div className="layoutRoot">
        <ResizableBox
          className="box"
          width={400}
          height={700}
          minConstraints={[300, 300]}
          maxConstraints={[400, 700]}
        >
          <Window1/>
        </ResizableBox>
        <ResizableBox
          className="box"
          width={950}
          height={700}
          minConstraints={[150, 150]}
          maxConstraints={[950, 700]}
        >
          <Window2/>
        </ResizableBox>
      </div>
      <div className="layoutRoot">
        <ResizableBox
          className="box"
          width={1400}
          height={700}
          minConstraints={[150, 150]}
          maxConstraints={[1400, 700]}
        >
         <Window3/>
        </ResizableBox>
      </div>
    </div>
  );
}

export default App;
