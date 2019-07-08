'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  let num = 0;
  for(let i = 0; i < collectionA.length; i++){
    if(i == 0){
      let obj = {key: collectionA[i], count: 1};
      result.push(obj);
    }else if(collectionA[i] == result[num].key ){
      result[num].count++;
    }else{
      if(collectionA[i].length != 1){
        var str = collectionA[i].split('-');
        let obj = {key: str[0], count: Number(str[1])};
        result.push(obj);
        num++;
      }else{
      let obj = {key: collectionA[i], count: 1};
      result.push(obj);
      num++;
      }
    }
  }
 
  for(let i = 0;i<result.length;i++){
    for(let j = 0;j<objectB.value.length;j++){
      if(result[i].key == objectB.value[j]){
        result[i].count -= Math.floor(result[i].count / 3);
      }
    }
  }
  return result;
}
