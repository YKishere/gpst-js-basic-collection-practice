'use strict';
module.exports = function summarySameElements(collection) {
  let result = sort(collection);
  let sameElements = Array.from(new Set(result.sameType));
  let summarySameElements = [];
  sameElements.forEach(x => { summarySameElements.push({ name: x, summary: collection.filter(y => x == y).length }) });
  for (let i of result.differentType) {
    if (summarySameElements.find(x => x.name == i.name)) {
      summarySameElements.find(x => x.name == i.name).summary += i.summary;
    } else {
      summarySameElements.push(i);
    }
  }
  return summarySameElements;
}

function sort(collection) {
  let sameType = [];
  let differentType = [];
  collection.forEach(x => {
    if (/-/.test(x)) {
      differentType.push({ name: x.split("-")[0], summary: parseInt(x.split("-")[1]) });
    } else if (/:/.test(x)) {
      differentType.push({ name: x.split(":")[0], summary: parseInt(x.split(":")[1]) });
    } else if (/\[/.test(x)) {
      differentType.push({ name: x.split("[")[0], summary: parseInt((x.split("[")[1]).split("]")[0]) });
    } else {
      sameType.push(x);
    }
  })
  return { sameType: sameType, differentType: differentType }
}


