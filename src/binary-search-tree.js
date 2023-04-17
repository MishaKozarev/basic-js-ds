const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(value) {
    this.tree = addValue(this.tree, value);

    function addValue(node, value) {
      if (!node) {
        return new Node(value);
      } else if (node.data === value) {
        return node;
      }
      value < node.data ? node.left = addValue(node.left, value) : node.right = addValue(node.right, value);
      return node;
    }
  }
  has(value) {
    return hasValue(this.tree, value);

    function hasValue(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      return value < node.data ? hasValue(node.left, value) : hasValue(node.right, value);
    }
  }


  find(data) {
    return findValue(this.tree, data);

    function findValue(node, value) {
      if(!node) {
        return null;
      }
      if(node.data === value) {
        return node;
     }
        return value < node.data ? findValue(node.left, value) : findValue(node.right, value);
    }
  }

  remove(value) {
    this.tree = removeNode(this.tree, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.tree) return;
    let node = this.tree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.tree) return;
    let node = this.tree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};