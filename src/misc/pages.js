import { href } from "./href";

// HOME
const home = { to: href.home, text: "HOME" };

// ALGORITHMS
const algoHome = { to: href.algo.home, text: "ALGORITHMS" };
const reverse = { to: href.algo.indexed.reverse, text: "REVERSE" };
const palindrome = { to: href.algo.indexed.palindrome, text: "PALINDROME" };

// DATA STRUCTURES
const dsHome = { to: href.ds.home, text: "DATA STRUCTURES" };
const stack = { to: href.ds.stack, text: "STACK" };
const queue = { to: href.ds.queue, text: "QUEUE" };
const sll = { to: href.ds.sll, text: "SINGLY LINKED LIST" };
const dll = { to: href.ds.dll, text: "DOUBLY LINKED LIST" };
const bst = { to: href.ds.bst, text: "BINARY SEARCH TREE" };
const heap = { to: href.ds.heap, text: "HEAP" };

export const pages = {
  // ALGORITHMS
  algoHome: { prev: home, next: reverse },
  reverse: { prev: algoHome, next: palindrome },
  palindrome: { prev: reverse },

  // DATA-STRUCTURES
  dsHome: { prev: home, next: stack },
  stack: { prev: dsHome, next: queue },
  queue: { prev: stack, next: sll },
  sll: { prev: queue, next: dll },
  dll: { prev: sll, next: bst },
  bst: { prev: dll, next: heap },
  heap: { prev: bst },
};