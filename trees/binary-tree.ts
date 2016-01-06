interface INode {
  hasChildren: boolean;
  value: string | number;
  children?: Array<INode>;
  insert(node: INode): void;
}

export class BinaryTree {
  constructor() {
    document.write('I am a binary tree <p>' + JSON.stringify(this.makeTree(3)) + '</p>');
  }
  makeTree(depth: number) {
    let rootNode = new Node(true, 1, []);
    let recursiveBuild = (currentNode: INode, depthLeft: number) => {
      let rando = Math.floor(Math.random() * 4);
      let i = 0;
      if (depthLeft === 0) {
        while (i < 2) {
          currentNode.insert(new Node(false, rando));
          i++;
        }
      } else {
        while (i < 2) {
          currentNode.insert(new Node(true, rando, []));
          i++;
        }
        let newDepth = depthLeft - 1;
        currentNode.children.forEach((child: INode) => {
          recursiveBuild(child, newDepth);
        });
      }
    };
    recursiveBuild(rootNode, depth);
    return rootNode;
  }
}

class Node implements INode{
  constructor(public hasChildren: boolean, public value: string | number, public children?: Array<INode>) {
    this.hasChildren = hasChildren;
    this.value = value;
    this.children = children;
  }
  insert(node: INode) {
    this.children.push(node);
  }
}