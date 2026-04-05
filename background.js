chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "DETECT") {
    fetch("http://127.0.0.1:5000/api/detect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: message.text,
        url: message.url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        sendResponse(data);
      })
      .catch((err) => {
        console.error(err);
        sendResponse({ patterns: [] });
      });

    return true; // IMPORTANT (async response)
  }
});
