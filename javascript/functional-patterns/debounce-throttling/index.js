/**
 * Debounce
 * Asked in PayTM, MakeMyTrip, Analytic Edge
 */

function handleOnChange(e) {
  console.log("On Change Function is called!");
  const val = document.getElementById("debounceInput").value;
  console.log(val);
}

const modifiedHandleOnChange = debounce(handleOnChange, 2000);

function debounce(cb, delay = 1000) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}

/**
 * Throttling
 */

function handleThrottleInput() {
  console.log("Throttled Function is called");
  const value = document.getElementById("throttleInput").value;
  console.log(value);
}

const modifiedFunctionThrottle = throttle(handleThrottleInput, 3000);

function throttle(cb, delay = 800) {
  let throttleFlag = true;
  return function () {
    if (throttleFlag) {
      cb();
      throttleFlag = false;
      setTimeout(() => {
        throttleFlag = true;
      }, delay);
    }
  };
}
