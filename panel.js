chrome.devtools.network.onRequestFinished.addListener((request) => {
  const div = document.createElement("div");
  div.innerHTML = request.request.url;
  div.style.background = "green";
  document.body.appendChild(div);
  console.log(request);

  request.getContent((content) => {
    console.log(content);
  });
});
// chrome.devtools.network.getHAR((harLog) => {
//     console.log()
// })
