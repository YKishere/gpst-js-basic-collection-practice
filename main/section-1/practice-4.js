'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let collectSameElements = [];
  collectionA.forEach(x => { for (let i of objectB.value) { if (x.key == i) { collectSameElements.push(x.key) } } });
  return collectSameElements;
}
