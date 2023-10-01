import logo from "./assets/logocombined.svg";
import settings from "./assets/setting-2.svg";
import close from "./assets/close-circle.svg";
import monitor from "./assets/monitor.svg";
import copy from "./assets/copy.svg";
import monitoractive from "./assets/monitor-active.svg";
import copyinactive from "./assets/copy-inactive.svg";
import video from "./assets/video-camera.svg";
import microphone from "./assets/microphone.svg";
import { useState } from "react";
import { Switch } from "@chakra-ui/react";
import { StartRecording } from "./startrecording";
import { stopRecording } from "./stoprecording";

const Popup = () => {
  const [fullscreen, setFullScreen] = useState(true);

  const handleFullScreen = () => {
    setFullScreen(true);
  };

  const handleCurrentPreference = () => {
    setFullScreen(false);
  };

  // const testConnection = () => {
  //   console.log('working')
  // }
  return (
    <div
      id="popup"
      style={{ display: "flex", flexDirection: "column", rowGap: "24px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", rowGap: "16px" }}>
        <div id="top">
          <img style={{ width: "10rem" }} src={logo} alt="" />

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src={settings} alt="" />
            <img src={close} alt="" />
          </div>
        </div>

        <p style={{ fontSize: "14px", color: "#413C6D" }} id="work">
          This extension helps you record and share help videos with ease.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", rowGap: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleFullScreen}
          >
            <img src={fullscreen ? monitoractive : monitor} alt="" />
            <p style={{ color: fullscreen ? "#413C6D" : "#928FAB" }}>
              Full screen
            </p>
          </span>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleCurrentPreference}
          >
            <img src={!fullscreen ? copy : copyinactive} alt="" />
            <p style={{ color: !fullscreen ? "#413C6D" : "#928FAB" }}>
              Current Tab
            </p>
          </span>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "24px" }}
        >
          <div className="card">
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img src={video} alt="" />
              <p style={{ fontWeight: "500" }}>Camera</p>
            </span>

            <Switch />
            {/* <div className="toggle">
              <img src={button} alt="" />
            </div> */}
          </div>

          <div className="card">
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img src={microphone} alt="" />
              <p style={{ fontWeight: "500" }}>Audio</p>
            </span>

            <Switch />

            {/* <div className="toggle">
              <img id="toggle-item" src={button} alt="" />
            </div> */}
          </div>
        </div>

        <button onClick={StartRecording} id="record">Start Recording</button>
        <button onClick={stopRecording} id="record">Stop Recording</button>
      </div>
    </div>
  );
};

export default Popup;
