let queue = [];
let audio = new Audio("ping.mp3");

chrome.devtools.network.onRequestFinished.addListener((request) => {
  request.getContent(async (content) => {
    let json = await JSON.parse(content);
    let data = json[0];
    console.log(data);
    if (data.queue.length > queue.length) {
      queue = [...data.queue];
      audio.play();
      const div = document.createElement("div");
      div.style.background = "green";
      let q = data.queue;
      let ticket = q.pop();
      div.innerHTML = `${ticket.holder.firstName} has joined the queue!`;
      document.body.appendChild(div);
    }
    queue = [...data.queue];
  });
});
