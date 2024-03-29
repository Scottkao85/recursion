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
    var temp = []
    result = "[";
    for(var i = 0; i < obj.length; i++){
      temp.push(stringifyJSON(obj[i])); // [1, 2, 3, 4]
      /*if(i === 0){
        result = result + stringifyJSON(obj[i])
      }else{ 
        result = result + " " + stringifyJSON(obj[i])
      } */
    } 
    result = result + temp.join(","); //"["[] 
    result = result + "]" 
    
  }else if(typeof obj === "object"){
    var count = 0; 
    result = "{";
    for(var key in obj){
      if(typeof obj[key] !== "function" && typeof obj[key] !== "undefined"){
        if(count === 0){
          result = result + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
        }else{
          result = result + "," + stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
        }
      count++;
      }
    }
    result = result + "}"; 
  }
  return result;
}