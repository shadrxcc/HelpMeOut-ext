console.log("i don enter");

var recorder = null;
var chunks = [];
function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start(2000);

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  // // Create the main container
  // const panelContainer = document.createElement("div");
  // panelContainer.style.display = "flex";
  // panelContainer.style.alignItems = "center";

  // // Create the Camera checkbox
  // const cameraLabel = document.createElement("label");
  // cameraLabel.textContent = "Camera";
  // const cameraInput = document.createElement("input");
  // cameraInput.type = "checkbox";
  // cameraLabel.appendChild(cameraInput);
  // panelContainer.appendChild(cameraLabel);

  // // Create the panel div
  // const panelDiv = document.createElement("div");
  // panelDiv.id = "panel";
  // panelDiv.style.display = "flex";
  // panelDiv.style.padding = "12px 20px";
  // panelDiv.style.columnGap = "24px";

  // // Create the time span
  // const timeSpan = document.createElement("span");
  // timeSpan.style.display = "flex";
  // timeSpan.style.alignItems = "center";
  // timeSpan.style.padding = "0 16px";
  // timeSpan.style.borderRight = "1px solid grey";
  // const timeP = document.createElement("p");
  // timeP.textContent = "00:03:45";
  // const timeImg = document.createElement("img");
  // timeImg.src = "recording.svg";
  // timeImg.alt = "";
  // timeSpan.appendChild(timeP);
  // timeSpan.appendChild(timeImg);

  // // Create the control buttons div
  // const controlButtonsDiv = document.createElement("div");
  // controlButtonsDiv.style.display = "flex";
  // controlButtonsDiv.style.alignItems = "start";
  // controlButtonsDiv.style.columnGap = "24px";

  // // Create control buttons
  // const controlButtonNames = ["Pause", "Stop", "Camera", "Mic"];
  // const controlButtonIcons = ["pause.svg", "stop.svg", "camera.svg", "mic.svg"];

  // for (let i = 0; i < controlButtonNames.length; i++) {
  //   const controlButtonContainer = document.createElement("span");
  //   controlButtonContainer.style.display = "flex";
  //   controlButtonContainer.style.flexDirection = "column";
  //   controlButtonContainer.style.rowGap = "4px";

  //   const controlButtonImg = document.createElement("img");
  //   controlButtonImg.src = controlButtonIcons[i];
  //   controlButtonImg.alt = "";

  //   const controlButtonLabel = document.createElement("p");
  //   controlButtonLabel.textContent = controlButtonNames[i];

  //   controlButtonContainer.appendChild(controlButtonImg);
  //   controlButtonContainer.appendChild(controlButtonLabel);
  //   controlButtonsDiv.appendChild(controlButtonContainer);
  // }

  // // Create the trash icon
  // const trashIcon = document.createElement("span");
  // const trashImg = document.createElement("img");
  // trashImg.src = "delete.svg";
  // trashImg.alt = "";
  // trashIcon.appendChild(trashImg);

  // // Append elements to the panel div
  // panelDiv.appendChild(timeSpan);
  // panelDiv.appendChild(controlButtonsDiv);
  // panelDiv.appendChild(trashIcon);

  // // Append the panel div to the main container
  // panelContainer.appendChild(panelDiv);

  // // Append the main container to the body
  // document.body.appendChild(panelContainer);

  let controlsContainer = document.createElement("div");
  controlsContainer.style.display = "flex";
  controlsContainer.id = "panel"
  controlsContainer.style.padding = "12px 20px";
  controlsContainer.style.columnGap = "24px";
  controlsContainer.style.minWidth = "400px";
  controlsContainer.style.position = "fixed";
  controlsContainer.style.bottom = "5%";
  controlsContainer.style.left = "5%";

  let time = document.createElement("div");
  let timeP = document.createElement("p");
  let timeSpan = document.createElement("img");
  time.style.padding = "0 16px"
  time.style.borderRight = "1px solid grey"
  time.style.display = "flex";
  time.style.alignItems = "center";
  timeP.style.color = "#fff";
  timeP.textContent = "00:03:35";
  timeSpan.src = 'recording.svg'
  time.appendChild(timeP);
  time.appendChild(timeSpan);
  controlsContainer.appendChild(time);
  let controlItemsContainer = document.createElement("div");
  controlItemsContainer.style.display = "flex";
  controlItemsContainer.style.alignItems = "start";
  controlItemsContainer.style.columnGap = "24px"
  // controlItemsContainer.style.gap = "1rem";
  // controlItemsContainer.style.borderLeft = "1px solid #e8e8e8";
  // controlItemsContainer.style.paddingLeft = "1rem";
  document.body.appendChild(controlsContainer);
  const pauseItem = document.createElement("div");
  pauseItem.style.display = "flex";
  pauseItem.style.alignItems = "center";
  pauseItem.style.rowGap = "4px";
  pauseItem.style.flexDirection = "column";
  const pauseBtn = document.createElement("button");
  pauseBtn.style.borderRadius = "50%";
  pauseBtn.style.display = "grid";
  pauseBtn.style.placeContent = "center";
  pauseBtn.style.backgroundColor = "#fff";
  pauseBtn.style.border = "none";
  pauseBtn.style.height = "30px";
  pauseBtn.style.width = "30px";
  const pauseImg = document.createElement("img");
  pauseImg.style.height = "15px";
  pauseImg.style.objectFit = "contain";
  pauseImg.src =
    "pause.svg";
  pauseBtn.appendChild(pauseImg);
  const pauseLabel = document.createElement("small");
  pauseLabel.style.fontFamily = "Work Sans";
  pauseLabel.style.fontWeight = "500";
  pauseLabel.style.fontSize = "0.75rem";
  pauseLabel.style.color = "#fff";
  pauseLabel.textContent = "Pause";
  pauseItem.appendChild(pauseBtn);
  pauseItem.appendChild(pauseLabel);
  const stopItem = document.createElement("div");
  stopItem.style.display = "flex";
  stopItem.style.alignItems = "center";
  stopItem.style.rowGap = "4px";
  stopItem.style.flexDirection = "column";
  const stopBtn = document.createElement("button");
  stopBtn.style.borderRadius = "50%";
  stopBtn.style.display = "grid";
  stopBtn.style.placeContent = "center";
  stopBtn.style.backgroundColor = "#fff";
  stopBtn.style.border = "none";
  stopBtn.style.height = "30px";
  stopBtn.style.width = "30px";
  const stopImg = document.createElement("img");
  stopImg.style.height = "15px";
  stopImg.style.objectFit = "contain";
  stopImg.src =
    "stop.svg";
  stopBtn.appendChild(stopImg);
  const stopLabel = document.createElement("small");
  stopLabel.style.fontFamily = "Work Sans";
  stopLabel.style.fontWeight = "500";
  stopLabel.style.fontSize = "0.75rem";
  stopLabel.style.color = "#fff";
  stopLabel.textContent = "Stop";
  stopItem.appendChild(stopBtn);
  stopItem.appendChild(stopLabel);
  const cameraItem = document.createElement("div");
  cameraItem.style.display = "flex";
  cameraItem.style.alignItems = "center";
  cameraItem.style.rowGap = "4px";
  cameraItem.style.flexDirection = "column";
  const cameraBtn = document.createElement("button");
  cameraBtn.style.borderRadius = "50%";
  cameraBtn.style.display = "grid";
  cameraBtn.style.placeContent = "center";
  cameraBtn.style.backgroundColor = "#fff";
  cameraBtn.style.border = "none";
  cameraBtn.style.height = "30px";
  cameraBtn.style.width = "30px";
  const cameraImg = document.createElement("img");
  cameraImg.style.height = "15px";
  cameraImg.style.objectFit = "contain";
  cameraImg.src =
    "camera.svg";
  cameraBtn.appendChild(cameraImg);
  const cameraLabel = document.createElement("small");
  cameraLabel.style.fontFamily = "Work Sans";
  cameraLabel.style.fontWeight = "500";
  cameraLabel.style.fontSize = "0.75rem";
  cameraLabel.style.color = "#fff";
  cameraLabel.textContent = "Camera";
  cameraItem.appendChild(cameraBtn);
  cameraItem.appendChild(cameraLabel);
  controlItemsContainer.appendChild(pauseItem);
  controlItemsContainer.appendChild(stopItem);
  controlItemsContainer.appendChild(cameraItem);
  controlsContainer.appendChild(controlItemsContainer);
  stopBtn.addEventListener("click", () => {
    if (!recorder) return console.log("No recorder");
    recorder.stop();
    let a = document.createElement("a");
    a.href = "http://localhost:5173/";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    console.log(recordedBlob);
    chunks.push(event.data);
    console.log(chunks);

    const reader = new FileReader();

    reader.onload = function () {
      const base64 = reader.result;
      console.log("Base 64 encoded video:", base64);

      chrome.runtime.sendMessage({
        message: "recordedblob",
        blob: base64,
      });
    };

    reader.readAsDataURL(recordedBlob);
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 9999999999,
          height: 9999999999,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      });
  }

  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed: ${message.action}`);

    if (!recorder) return console.log("no recorder");
    sendArrayBuffer();
    recorder.stop();
  }
});
//https://helpmeout-e2c4.onrender.com/

function sendArrayBuffer() {
  const backendUrl = "https://helpmeout-e2c4.onrender.com/file/save";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
    },
    body: {},
  };
  fetch(backendUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
