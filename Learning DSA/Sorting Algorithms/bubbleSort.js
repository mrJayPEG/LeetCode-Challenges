exports.function = (arr) => {
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1]) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
};
