import { data } from "./module-file";

console.log(data);

const a = 1;
const b = 2;

function moreFunction(): void {

  console.log("hi");

}

function c(a: number, b: number): number {
  return a + b;
}

console.log(c(a, b));