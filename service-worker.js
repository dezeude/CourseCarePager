console.log("this is WOWOW");

chrome.webRequest.onResponseStarted.addListener(
  async (details) => {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "/images/course_icon.png", // Path to your extension's icon
      title: "HTTP Response Received",
      message: "A response has been received from course.care",
      priority: 2,
      silent: false,
    });
    return;
  },
  { urls: ["https://course.care/course/108/event/*"] },
  ["responseHeaders", "extraHeaders"]
);

chrome.scripting
  .registerContentScripts([
    {
      id: "session-script",
      js: ["content-script.js"],
      persistAcrossSessions: false,
      matches: ["*://course.care/course/108/event/*"],
      runAt: "document_end",
    },
  ])
  .then(() => console.log("content script injected/registered"))
  .catch((err) => console.warn("unexpected error", err));

chrome.devtools.panels.create(
  "My Panel",
  "MyPanelIcon.png",
  "devtools.html",
  function (panel) {
    console.log("panel created");
  }
);
