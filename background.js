chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: '*.ole.com.ar'}
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.sync.get('height', function(height) {

    chrome.tabs.sendMessage(tab.id, height, function(result) {
      console.log('called content script');
    });

  });
});