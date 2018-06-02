'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(element => {
    if (objectB.value.find(x => x == element.key)) {
      element.count -= 1;
    }
  });
  return collectionA;
}
