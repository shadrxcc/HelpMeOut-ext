import recording from "./assets/recording.svg";
import pause from "./assets/pause.svg";
import stop from "./assets/stop.svg";
import mic from "./assets/mic.svg";
import camera from "./assets/camera.svg";
import trash from "./assets/delete.svg";

const Panel = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <label>
        Camera
        <input
          type="checkbox"
        />
      </label>

      <div
        id="panel"
        style={{ display: "flex", padding: "12px 20px", columnGap: "24px" }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            borderRight: "1px solid grey",
          }}
        >
          <p>00:03:45</p>
          <img src={recording} alt="" />
        </span>

        <div
          style={{ display: "flex", alignItems: "start", columnGap: "24px" }}
        >
          <span
            style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
          >
            <img src={pause} alt="" />
            <p>Pause</p>
          </span>

          <span
            style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
          >
            <img src={stop} alt="" />
            <p>Stop</p>
          </span>

          <span
            style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
          >
            <img src={camera} alt="" />
            <p>Pause</p>
          </span>

          <span
            style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
          >
            <img src={mic} alt="" />
            <p>Pause</p>
          </span>

          <span>
            <img src={trash} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Panel;
