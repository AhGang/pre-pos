'use strict';

function collectSameElements(collectionA, objectB) {
  let collectionB = objectB.value;
  let result = []
  for(let i = 0 ;i < collectionA.length; i++){
    for(let j = 0 ;j< collectionB.length; j++){
      if((collectionA[i].key == collectionB[j])){
        result.push(collectionB[j]);
           }
    }
  }
  return result;
}
