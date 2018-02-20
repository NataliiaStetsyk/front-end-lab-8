function debounce (cb, wait) {
  var timeoutID
  return function () {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(cb, wait)
  }
}

function callback(e) {
  console.log('height', window.innerHeight);
  console.log('width', window.innerWidth);
}

let debouncedCallback = debounce(callback, 1000);

debouncedCallback();
debouncedCallback();
