function debounce (cb, wait) {
  var timeoutID
  return function () {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(cb, wait)
  }
}

let iterator = 0;

function callback() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var debouncedCallback = debounce(callback, 1000);

debouncedCallback();
debouncedCallback();
