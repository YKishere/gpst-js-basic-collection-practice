'use strict';

module.exports = function countSameElements(collection) {
  let sameElements = Array.from(new Set(collection));
  let countSameElements = [];
  sameElements.forEach(x => { countSameElements.push({ key: x, count: collection.filter(y => x == y).length }) });
  return countSameElements;
} 
