'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(x => { for (let i of objectB.value) { if (x == i) { return true } } });
}
