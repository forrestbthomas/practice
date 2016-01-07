export interface INode {
  hasChildren: boolean;
  value: string | number;
  children?: Array<INode>;
  insert(node: INode): void;
}

export class BinaryTree {
  tree: Node
  constructor(depth: number) {
    this.tree = this.makeTree(depth), null, 2;
  }
  recursiveBuild(currentNode: INode, depthLeft: number) {
    const rando = Math.floor(Math.random() * 4);
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
      const newDepth = depthLeft - 1;
      currentNode.children.forEach((child: INode) => {
        this.recursiveBuild(child, newDepth);
      });
    }

  }
  makeTree(depth: number) {
    let rootNode = new Node(true, 1, []);
    this.recursiveBuild(rootNode, depth);
    return rootNode;
  }
}

export class Node implements INode{
  constructor(public hasChildren: boolean, public value: string | number, public children?: Array<INode>) {
    this.hasChildren = hasChildren;
    this.value = value;
    this.children = children;
  }
  insert(node: INode) {
    this.children.push(node);
  }
}