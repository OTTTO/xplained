const ds = "/data-structures";
const algo = "/algorithms";
const idx = "/indexed";

export const href = {
  home: "/",
  ds: {
    home: ds,
    stack: ds + "/stack",
    queue: ds + "/queue",
    sll: ds + "/singly-linked-list",
    dll: ds + "/doubly-linked-list",
    bst: ds + "/binary-search-tree",
    heap: ds + "/heap",
  },
  algo: {
    home: algo,
    indexed: {
      reverse: algo + idx + "/reverse",
      palindrome: algo + idx + "/palindrome",
      sortedAddends: algo + idx + "/sorted-addends",
      subsequence: algo + idx + "/subsequence",
      largestSum: algo + idx + "largestSum",
      longestSubstring: algo + idx + "/longestSubstring",
      longestSubarray: algo + idx + "/longestSubarray",
    },
  },
};
