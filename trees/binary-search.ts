import {BinaryTree, INode} from './binary-tree';

export class BinarySearch {
  constructor() {
    const tree = new BinaryTree(4).tree;
    this.search(tree, 0);
    document.write('Searching...' + JSON.stringify(this.resultsCount));
  }
  resultsCount: number = 0;
  search(node: INode, item: number | string): void {
    if (node.value === item) {
      this.resultsCount++;
    }
    if (node.hasChildren) {
      node.children.forEach((node: INode) => {
        this.search(node, item);
      });
    }
  }
}
