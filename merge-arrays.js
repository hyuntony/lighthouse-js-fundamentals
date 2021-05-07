const merge = function(firstArray, secondArray) {
  for (let num of secondArray) {
    firstArray.push(num);
  }
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = i + 1; j < firstArray.length; j++) {
      if (firstArray[i] > firstArray[j]) {
        let temp = firstArray[j];
        firstArray[j] = firstArray[i];
        firstArray[i] = temp;
      }
    }
  }
  return firstArray;
}

merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);
merge([ 4 ], [ 2, 5, 8 ]);
merge([ 1, 2, 6 ], []);