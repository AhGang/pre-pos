'use strict';

function countSameElements(collection) {
  var result = [];
  let num = 0;
  for(let i = 0; i < collection.length; i++){
    if(i == 0){
      let obj = {key: collection[i], count: 1};
      result.push(obj);
    }else if(collection[i] == result[num].key ){
      result[num].count++;
    }else{
      let obj = {key: collection[i], count: 1};
      result.push(obj);
      num++;
    }
  }
  return result;
}
