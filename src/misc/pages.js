import { href } from "./href";

// HOME
const home = { to: href.home, text: "HOME" };

// DATA STRUCTURES
const dsHome = { to: href.ds.home, text: "DATA STRUCTURES" };
const stack = { to: href.ds.stack, text: "STACK" };
const queue = { to: href.ds.queue, text: "QUEUE" };
const sll = { to: href.ds.sll, text: "SINGLY LINKED LIST" };
const dll = { to: href.ds.dll, text: "DOUBLY LINKED LIST" };
const bst = { to: href.ds.bst, text: "BINARY SEARCH TREE" };
const heap = { to: href.ds.heap, text: "HEAP" };

// ALGORITHMS
const algoHome = { to: href.algo.home, text: "ALGORITHMS" };
const reverse = { to: href.algo.indexed.reverse, text: "REVERSE" };
const palindrome = { to: href.algo.indexed.palindrome, text: "PALINDROME" };
const sortedAddends = {
  to: href.algo.indexed.sortedAddends,
  text: "SORTED ADDENDS",
};
const subsequence = { to: href.algo.indexed.subsequence, text: "SUBSEQUENCE" };
const longestSubarray = {
  to: href.algo.indexed.longestSubarray,
  text: "LONGEST SUBARRAY",
};
const longestSubstring = {
  to: href.algo.indexed.longestSubstring,
  text: "LONGEST SUBSTRING",
};
const largestSum = { to: href.algo.indexed.largestSum, text: "LARGEST SUM" };

export const pages = {
  // DATA-STRUCTURES
  dsHome: { prev: home, next: stack },
  stack: { prev: dsHome, next: queue },
  queue: { prev: stack, next: sll },
  sll: { prev: queue, next: dll },
  dll: { prev: sll, next: bst },
  bst: { prev: dll, next: heap },
  heap: { prev: bst },

  // ALGORITHMS
  algoHome: { prev: home, next: reverse },
  reverse: { prev: algoHome, next: palindrome },
  palindrome: { prev: reverse, next: sortedAddends },
  sortedAddends: { prev: palindrome, next: subsequence },
  subsequence: { prev: sortedAddends, next: largestSum },
  longestSubarray: { prev: subsequence, next: longestSubstring },
  longestSubstring: { prev: longestSubarray, next: largestSum },
  largestSum: { prev: longestSubstring },
};
