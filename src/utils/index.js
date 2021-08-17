export const calculatePercentsLeft = (value, from) => {
  return Math.floor((Math.ceil(value / 1000) / (from * 60)) * 100);
};

export const calculateScaleFactor = (percent) => {
  return 1 - (100 - percent) / 100;
};

export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +s4() +"-" +s4() +"-" +s4() +"-" +s4() +"-" +s4() +s4() +s4()
  );
}

export const padDigits = (number, digits) => {
  return (
    Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
  );
};
