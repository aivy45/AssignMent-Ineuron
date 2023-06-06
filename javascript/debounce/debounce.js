let counter = 0;
const getData = () => {
  console.log("fetching data..", counter++);
};

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      call();
    }, d);
  };
}

const BetterFunction = myDebounce(getData, 1000);
