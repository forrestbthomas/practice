// Problem:
// Given an array of integers, find the maximum and minimum of the array.


export class MinMax {
  min: number;
  max: number;
  constructor(integers: Array<number>) {
    this.findMinMax(integers);
    document.write('Min: ' + this.min + '\nMax: ' + this.max);
  }
  findMinMax(integers: Array<number>): void {
    let min: number = Infinity;
    let max: number = -Infinity;
    integers.forEach((int: number) => {
      min = int < min ? int : min;
      max = int > max ? int : max;
    });
    this.min = min;
    this.max = max;
  }
}