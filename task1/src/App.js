import React, { useState } from "react";
import "./App.css";
import { Resizable, ResizableBox } from "react-resizable";
import "./react-resizable.css";
import window2 from "./assets/window2.jpg";
import shareVideo from "./assets/share.mp4";


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
          <div className="window1"> 
          <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
          </div>
        </ResizableBox>
        <ResizableBox
          className="box"
          width={950}
          height={700}
          minConstraints={[150, 150]}
          maxConstraints={[950, 700]}
        >
          <img src={window2} className="image" alt="..."/>
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
         <video src= {shareVideo}
         type = "video/mp4"
         controls = {false}
         loop
         muted 
         autoPlay
         className='video'
         />
        </ResizableBox>
      </div>
    </div>
  );
}

export default App;
