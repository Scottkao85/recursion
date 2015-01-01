// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;



// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var result;
  if(typeof obj === "number"){
    result = obj.toString();
  }else if(obj === null){
    result = "null";
  }else if(obj === true){//"boolean"
    result = "true" //" \" " + obj + " \" "; 
  }else if(obj === false){//"boolean"
    result = "false"; 
  }else if(typeof obj === "string"){
    result =  "\"" + obj + "\"" ;
  }else if(Array.isArray(obj) === true){
    if(obj.length === 0){
      result = "[]"//"\"" + "[]" + "\"";
    }else {
      for(var i = 0; i < obj.length; i++){
        if(i === 0){
          result = "[" + stringifyJSON(obj[i])
        }else{ 
          result = result + "," + stringifyJSON(obj[i])
        }
      } 
      result = result + "]"
    }
  }
  return result;
}