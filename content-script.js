// // Override the native fetch API to intercept responses
// (function () {
//   const originalFetch = window.fetch;

//   window.fetch = async function (...args) {
//     const response = await originalFetch(...args);

//     // Clone the response to read it without affecting the original response
//     const clonedResponse = response.clone();
//     clonedResponse.text().then((bodyText) => {
//       const audio = new Audio("ping.mp3");
//       audio.play();
//       console.log("Response body:", bodyText); // You can access the response here

//       // You can send the response body to the background script if needed
//       chrome.runtime.sendMessage({
//         url: args[0],
//         body: bodyText,
//       });
//     });

//     return response; // Return the original response to the page
//   };
// })();

// document.body.style.backgroundColor = "black";
// document.body.style.color = "white";
