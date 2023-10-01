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

    recorder.stop();
  }
});
