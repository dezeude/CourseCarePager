//add notification
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(sender);

  if (message === "new-student") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "images/course_icon.png", // Path to your extension's icon
      title: "Course.Care Event",
      message: "A new student has joined the queue",
      priority: 2,
    });
  }

  sendResponse("Notification made");
});
