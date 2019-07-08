'use strict';

function countSameElements(collection) {
  var result = [];
  let num = 0;
  for(let i = 0; i < collection.length; i++){
    let keyTmp = '';
    let countTmp = 0; 
    if(collection[i].length != 1){
      if(collection[i][1] == '-'){
        var str = collection[i].split('-');
        keyTmp = str[0]
        countTmp = Number(str[1])
      }
      if(collection[i][1] == ':'){
        var str = collection[i].split(':');
        keyTmp = str[0]
        countTmp = Number(str[1])
      }
      if(collection[i][1] == '['){
        keyTmp = collection[i][0]
        countTmp = Number(collection[i].slice(2,collection[i].length-1));
      }
    }else{
      keyTmp = collection[i];
      countTmp = 1;
      
    }
    if(result.length >0){
      if(keyTmp == result[num].name ){
        result[num].summary += countTmp ;
      }else{
        let obj = {name: keyTmp, summary: countTmp};
      result.push(obj);
      num++;
      }
    }else{
      let obj = {name: keyTmp, summary: countTmp};
      result.push(obj);
    }
  }
  return result;
}
