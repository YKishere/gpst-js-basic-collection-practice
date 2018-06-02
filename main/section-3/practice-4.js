'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result = sort(collectionA);
  let sameElements = Array.from(new Set(result.sameType));
  let countSameElements = [];
  sameElements.forEach(x => { countSameElements.push({ key: x, count: collectionA.filter(y => x == y).length }) });
  countSameElements.push(result.differentType[0])
  countSameElements.forEach(element => {
    if (objectB.value.find(x => x == element.key)) {
      element.count -= (element.count - element.count % 3) / 3;
    }
  });
  return countSameElements;
}

function sort(collection) {
  let sameType = [];
  let differentType = [];
  collection.forEach(x => {
    if (!/-/.test(x)) {
      sameType.push(x);
    } else {
      differentType.push({ key: x.split("-")[0], count: parseInt(x.split("-")[1]) });
    }
  })
  return { sameType: sameType, differentType: differentType }
}