'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let sameElements = Array.from(new Set(collectionA));
  let countSameElements = [];
  sameElements.forEach(x => { countSameElements.push({ key: x, count: collectionA.filter(y => x == y).length }) });
  countSameElements.forEach(element => {
    if (objectB.value.find(x => x == element.key)) {
      element.count -= (element.count - element.count % 3) / 3;
    }
  });
  return countSameElements;
}
