import React from 'react'
import shareVideo from "../assets/share.mp4";
const window3 = () => {
  return (
    <video
            src={shareVideo}
            type="video/mp4"
            controls={false}
            loop
            muted
            autoPlay
            className="video"
          />
  )
}

export default window3