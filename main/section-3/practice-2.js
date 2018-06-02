'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(element => {
    if (objectB.value.find(x => x == element.key)) {
      element.count -= (element.count - element.count % 3) / 3;
    }
  });
  return collectionA;
}