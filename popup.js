chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "DETECTION_RESULT") {
    const list = document.getElementById("result");
    list.innerHTML = "";

    if (message.data.length === 0) {
      list.innerHTML = "<li>No dark patterns detected ✅</li>";
    } else {
      message.data.forEach((pattern) => {
        const li = document.createElement("li");
        li.textContent = pattern;
        list.appendChild(li);
      });
    }
  }
});
