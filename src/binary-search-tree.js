const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
  this.rootNode = null;
  }

  add(data) {
   this.rootNode = addNode(this.rootNode, data);

   function addNode(node, data){
    if(!node){
      return new Node(data)
    }
  
    if(node.data == data){
      return node;
    }
  
    if(data > node.data){
      node.right = addNode(node.right, data)
    }
    if(data < node.data){
      node.left = addNode(node.left, data)
    } 
    return node;
   }

  }
  root(){ 
    return this.rootNode;
  }
  has(data) {   
    return checkNode(this.rootNode, data);

    function checkNode(node, data){
      if(!node){
        return false;
      }
    
      if(node.data == data){
        return true;
      }

      return node.data > data ?
      checkNode(node.left, data):
      checkNode(node.right, data)
    } 
  }
  find(data) {
  return findNode(this.rootNode, data);

  function findNode(node, data){
    if(!node){
      return null;
    }

    if(node.data == data){
      return node;
    }

    return node.data > data ?
    findNode(node.left, data):
    findNode(node.right, data)
  }
  }
  remove(data) {
   this.rootNode = removeNode(this.rootNode, data);

   function removeNode(node, data){
    if(!node){
      return false;
    }
    if(node.data > data){
      node.left = removeNode(node.left, data);
      return node;
    }else if(node.data < data){
      node.right = removeNode(node.right, data);
      return node;
    }else{
      if(!node.left && !node.right){
        return null;
      }
      if(!node.left){
        node = node.right;
        return node;
      }
      if(!node.right){
        node = node.left;
        return node;
      }
      if(node.right && node.left){
        let maxFromLeft = node.left;
        while(maxFromLeft.right){
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        return node;
      }
    }
   }
  }
  min() {
    let item = this.rootNode;
    while(item.left){
      item = item.left
    }
    return item.data;
  }
  max() {
    let item = this.rootNode;
    while(item.right){
      item = item.right
    }
    return item.data;
  }
}



module.exports = {
  BinarySearchTree
};