'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(x => { for (let i of collectionB[0]) { if (x == i) { return true } } });
}
