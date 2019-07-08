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
      if(collection[i].length != 1){
        var str = collection[i].split('-');
        let obj = {key: str[0], count: Number(str[1])};
        result.push(obj);
        num++;
      }else{
      let obj = {key: collection[i], count: 1};
      result.push(obj);
      num++;
      }
    }
  }
  return result;
}
