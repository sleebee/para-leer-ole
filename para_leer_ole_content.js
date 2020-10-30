chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.height) {
    const iframeOverlays = document.querySelectorAll(".modal-pase");
    const iframe = document.querySelector("iframe");
    const news = document.querySelector(".ole-site");

    iframe.parentNode.removeChild(iframe);
    iframeOverlays.forEach(function(overlay) {
      overlay.innerHTML = "";
      overlay.parentNode.removeChild(overlay);
    });
    news.style.height = request.height;
    news.style.overflow = "auto";
  }

  Promise.resolve("").then(result => sendResponse(result));
  return true;
});