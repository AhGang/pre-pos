'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = []
  for(let i = 0 ;i <= collectionA.length; i++){
    for(let j = 0 ;j< collectionB[0].length; j++){
      if(collectionA[i] == collectionB[0][j]){
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}

