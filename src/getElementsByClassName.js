// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, node){
  var result = [];
 var node = node || document.body;

  var checkNode = function(node, result, className){
    
    checkClass(node, result, className)
    
    if(node.firstChild !== undefined && node.firstChild !== null){
      checkNode(node.firstChild, result, className);
    }
    
    if(node.nextSibling !== undefined && node.nextSibling !== null){
      checkNode(node.nextSibling, result, className);
    }
  };

  checkNode(node, result, className);
  return result;
};

// var userFunc = function (className, node) {




var checkClass = function(currentNode, result, className){
  if(currentNode.classList !== undefined){
    for(var j = 0; j < currentNode.classList.length; j++){
      if(currentNode.classList[j] === className){
        result.push(currentNode)
      }
    }
  }
}
 // console.log(getElementsByClassName('targetClassName'))

// document.body.id(or className) returns a string of the ID/class name "twittle class2"
// document.body.classList    ['twittle', 'class2']
// element.childNodes returns an ARRAY of element under the node element
// element.classList 
