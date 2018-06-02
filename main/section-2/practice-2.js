'use strict';
module.exports = function countSameElements(collection) {
  let result = sort(collection);
  let sameElements = Array.from(new Set(result.sameType));
  let countSameElements = [];
  sameElements.forEach(x => { countSameElements.push({ key: x, count: collection.filter(y => x == y).length }) });
  countSameElements.push(result.differentType[0])
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