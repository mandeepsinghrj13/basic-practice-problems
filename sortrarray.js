function iSort(array) {
  for (var p = 1; p < array.length; p++) {
    if (array[p] < array[0]) {
      array.unshift(array.splice(p, 1)[0]);
    } else if (array[p] > array[p - 1]) {
      continue;
    } else {
      for (var q = 1; q < p; q++) {
        if (array[p] > array[q - 1] && array[p] < array[q]) {
          array.splice(q, 0, array.splice(p, 1)[0]);
        }
      }
    }
  }
  return array;
}
console.log(iSort([10, 1, 12, 2, 32, 33, 34, 11, 6]));
