function sumItems(array) {

  let count = 0;

  array.forEach(item => {
    if (Array.isArray(item)) {
      count += sumItems(item);
    } else {
      count += item;
    }
  });
  return count;
}



console.log('finalValue = ',sumItems([[1, 2, [[3], 4]], 5, []]));
console.log('finalValue = ',sumItems([1, 2, 3, [4, 5]]));
module.exports = sumItems;

