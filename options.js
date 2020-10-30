const pixels = document.getElementById('pixels');
const button = document.getElementById('saveOptions');

button.addEventListener('click', function() {
  const height = '' + pixels.value + 'px';
  chrome.storage.sync.set({ height: height }, function() {
    console.log('Nueva altura: ', height);
  });
});
