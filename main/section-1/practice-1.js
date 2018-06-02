'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(x => { for (let i of collectionB) { if (x == i) { return true } } });
}
