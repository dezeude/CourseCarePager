// function logURL(requestDetails) {
//   console.log(`Loading: ${requestDetails.url}`);
// }

// chrome.webRequest.onBeforeRequest.addListener(logURL);

// Save default API suggestions
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.storage.local.set({
      apiSuggestions: ["tabs", "storage", "scripting"],
    });
  }
});

chrome.devtools.network.onRequestFinished.addListener((request) => {
  request.getContent((body) => {
    if (request.request && request.request.url) {
      console.log(request);
    }
  });
});
