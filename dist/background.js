chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId },
        files: ["./content.js"],
      })
      .then(() => {
        console.log("we don inject am");
      })
      .catch((err) => console.log(err, "error"));
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.message === "recordedblob") {
    const binaryData = atob(message.blob.split(",")[1]);

    const buffer = new ArrayBuffer(binaryData.length);
    const view = new Uint8Array(buffer);
    for (let index = 0; index < binaryData.length; index++) {
      view[index] = binaryData.charCodeAt(index);
    }
  }
});
